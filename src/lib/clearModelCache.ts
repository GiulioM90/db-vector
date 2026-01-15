import { env } from "@huggingface/transformers";
import * as fs from "fs";
import * as path from "path";

/**
 * Clears the HuggingFace transformers cache
 * Useful when models are corrupted or need to be re-downloaded
 * @example
 * ```typescript
 * await clearModelCache();
 * ```
 */
export const clearModelCache = async (): Promise<void> => {
  try {
    const cachePath = path.join(
      process.cwd(),
      'node_modules',
      '@huggingface',
      'transformers',
      '.cache'
    );
    
    if (fs.existsSync(cachePath)) {
      fs.rmSync(cachePath, { recursive: true, force: true });
      console.log('Model cache cleared successfully');
    }
  } catch (error) {
    console.error('Failed to clear model cache:', error);
  }
};
