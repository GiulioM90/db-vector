import { pipeline, FeatureExtractionPipeline } from "@huggingface/transformers";

/**
 * Creates a feature extraction pipeline for generating embeddings from text
 * @param modelName - The HuggingFace model name to use for feature extraction
 * @returns Promise that resolves to a FeatureExtractionPipeline instance
 * @example
 * ```typescript
 * const extractor = await createExtractor('mixedbread-ai/mxbai-embed-large-v1');
 * const embeddings = await extractor(['Hello world'], { pooling: 'cls' });
 * ```
 */

export const createExtractor = async (modelName: string): Promise<FeatureExtractionPipeline> => {
  return await pipeline('feature-extraction', modelName);
}
