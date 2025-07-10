export * from './clients';
export * from './chunking';
export * from './types';

// Re-export createClient from clients module
export { createClient } from './clients';

export function upsertDocuments(client: any, documents: any[]) {
  // TODO: Implement upsert
}

export function searchVectors(client: any, query: any) {
  // TODO: Implement search
}