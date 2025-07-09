export * from './clients';
export * from './chunking';
export * from './types';

// Main vectorizer functions
export function createClient(config: any) {
  // TODO: Implement client creation
}

export function upsertDocuments(client: any, documents: any[]) {
  // TODO: Implement upsert
}

export function searchVectors(client: any, query: any) {
  // TODO: Implement search
}