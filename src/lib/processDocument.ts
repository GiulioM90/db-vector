import { pipeline, FeatureExtractionPipeline } from "@huggingface/transformers";
import { PineconeRecord, RecordMetadata } from "@pinecone-database/pinecone";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";

export interface ProcessorConfig {
  batchSize?: number;
  modelName?: string;
  onProgress?: (filename: string, totalChunks: number, chunksUpserted: number, isComplete: boolean) => void;
}

export interface ProcessorState {
  totalDocumentChunks: number;
  totalDocumentChunksUpserted: number;
}

const defaultConfig: Required<ProcessorConfig> = {
  batchSize: 10,
  modelName: 'mixedbread-ai/mxbai-embed-large-v1',
  onProgress: () => {}
};

export async function processDocument(
  client: any,
  indexname: string,
  namespace: string,
  doc: Document<Record<string, any>>,
  config: ProcessorConfig = {}
): Promise<ProcessorState> {
  const finalConfig = { ...defaultConfig, ...config };
  
  const extractor = await pipeline('feature-extraction', finalConfig.modelName);
  const splitter = new RecursiveCharacterTextSplitter();
  const documentChunks = await splitter.splitText(doc.pageContent);
  
  const state: ProcessorState = {
    totalDocumentChunks: documentChunks.length,
    totalDocumentChunksUpserted: 0
  };
  
  const filename = getFilename(doc.metadata.source);
  let chunkBatchIndex = 0;
  
  while (documentChunks.length > 0) {
    chunkBatchIndex++;
    const chunkBatch = documentChunks.splice(0, finalConfig.batchSize);
    await processOneBatch(client, indexname, namespace, extractor, chunkBatch, chunkBatchIndex, filename, state, finalConfig.onProgress);
  }
  
  finalConfig.onProgress(filename, state.totalDocumentChunks, state.totalDocumentChunksUpserted, true);
  return state;
}

function getFilename(filename: string): string {
  const docname = filename.substring(filename.lastIndexOf("/") + 1);
  return docname.substring(0, docname.lastIndexOf(".")) || docname;
}

async function processOneBatch(
  client: any,
  indexname: string,
  namespace: string,
  extractor: FeatureExtractionPipeline,
  chunkBatch: string[],
  chunkBatchIndex: number,
  filename: string,
  state: ProcessorState,
  onProgress: (filename: string, totalChunks: number, chunksUpserted: number, isComplete: boolean) => void
) {
  const output = await extractor(chunkBatch.map(str => str.replace(/\n/g, ' ')), {
    pooling: 'cls'
  });
  
  const embeddingsBatch = output.tolist();
  const vectorBatch: PineconeRecord<RecordMetadata>[] = [];
  
  for (let i = 0; i < chunkBatch.length; i++) {
    const chunk = chunkBatch[i];
    const embedding = embeddingsBatch[i];
    
    vectorBatch.push({
      id: `${filename}-${chunkBatchIndex}-${i}`,
      values: embedding,
      metadata: { chunk }
    });
  }
  
  const index = client.Index(indexname).namespace(namespace);
  await index.upsert(vectorBatch);
  
  state.totalDocumentChunksUpserted += vectorBatch.length;
  onProgress(filename, state.totalDocumentChunks, state.totalDocumentChunksUpserted, false);
}