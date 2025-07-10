import { Pinecone } from "@pinecone-database/pinecone";
import { MongoClient } from "mongodb";

interface ClientConfig {
  provider: 'pinecone' | 'mongodb';
  apiKey: string;
  config?: any;
}

export function createClient({ provider, apiKey, config }: ClientConfig) {
  switch (provider) {
    case 'pinecone':
      return new Pinecone({ apiKey, ...config });
    case 'mongodb':
      return new MongoClient({apiKey, ...config});
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}