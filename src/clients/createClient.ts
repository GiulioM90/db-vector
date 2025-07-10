import { Pinecone } from "@pinecone-database/pinecone";
import { MongoClient, ServerApiVersion } from "mongodb";

interface ClientConfig {
  provider: 'pinecone' | 'mongodb';
  apiKey?: string; // For Pinecone
  connectionString?: string; // For MongoDB
  config?: any;
}

export function createClient({ provider, apiKey, connectionString, config }: ClientConfig) {
  switch (provider) {
    case 'pinecone':
      if (!apiKey) throw new Error('apiKey is required for Pinecone');
      return new Pinecone({ apiKey, ...config });
    case 'mongodb':
      if (!connectionString) throw new Error('connectionString is required for MongoDB');
      return new MongoClient(connectionString, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
        ...config
      });
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
}