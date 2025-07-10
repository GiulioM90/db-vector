# DB-VECTOR

Unified client for cloud vector databases with chunking and update functionality.

## Features

- 🔌 Clients for Different Vector Search (Pinecone || MongoDB for now)
- ✂️ Advanced chunking functionality (wip)
- 🔄 Automatic vector database updates (wip)
- 📦 Simple and unified API (wip)
- 🚀 TypeScript support

## Installation

```bash
npm install db-vector
```

## Basic Usage

```typescript
import { createClient, upsertDocuments } from 'db-vector';

// Create Client

const client = createClient({
  provider: 'pinecone',
  apiKey: 'API_KEY',
  config: {
    // provider-specific configuration
  }
});

const client = createClient({
  provider: 'mongodb',
  connectionString: 'CONNECTION_STRING',
  config: {
    // provider-specific configuration
  }
});
// await upsertDocuments(client, documents);
```


## Project Structure

```
db-vector/
├── src/
│   ├── clients/          # Clients for various providers
│   ├── chunking/         # Chunking functionality
│   ├── types/           # TypeScript definitions
│   └── index.ts         # Main entry point
├── dist/                # Build output
├── tests/               # Test suite
└── docs/                # Documentation
```

## License

MIT

## Contributing

Contributions are welcome! Open an issue or pull request.