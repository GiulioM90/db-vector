import { pipeline, FeatureExtractionPipeline, env } from "@huggingface/transformers";

/**
 * Creates a feature extraction pipeline for generating embeddings from text
 * @param modelName - The HuggingFace model name to use for feature extraction
 * @param forceReload - Force re-download of the model (default: false)
 * @returns Promise that resolves to a FeatureExtractionPipeline instance
 * @example
 * ```typescript
 * const extractor = await createExtractor('mixedbread-ai/mxbai-embed-large-v1');
 * const embeddings = await extractor(['Hello world'], { pooling: 'cls' });
 * ```
 */

export const createExtractor = async (
  modelName: string,
  forceReload: boolean = false
): Promise<FeatureExtractionPipeline> => {
  // Disable local models to always download fresh from HuggingFace
  env.allowLocalModels = false;
  env.allowRemoteModels = true;
  env.useBrowserCache = false;
  
  return await pipeline('feature-extraction', modelName, {
    revision: 'main'
  });
}
