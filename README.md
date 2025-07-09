# DB-VECTOR

Unified client for cloud vector databases with chunking and update functionality.

## Features

- 🔌 Clients for Different Vector Search (Pinecone for now)
- ✂️ Advanced chunking functionality
- 🔄 Automatic vector database updates
- 📦 Simple and unified API
- 🚀 TypeScript support

## Installation

```bash
npm install vectorizer
```

## Basic Usage

```typescript
import { createClient, upsertDocuments } from 'db-vector';

// Create client
const client = createClient({
  provider: 'pinecone', // or 'mongodb'
  config: {
    // provider-specific configuration
  }
});

// Usage example (to be implemented)
// await upsertDocuments(client, documents);
```

## Development

### Setup

```bash
# Clone repository
git clone https://github.com/giuliomollo/db-vector.git
cd vectorizer

# Install dependencies
npm install

# Build project
npm run build
```

### Available Commands

```bash
# Development with watch mode
npm run dev

# Production build
npm run build

# Run tests
npm run test

# Linting
npm run lint

# Clean build
npm run clean
```

## Publishing

### First publication

```bash
# 1. Make sure you're logged in to npm
npm login

# 2. Verify configuration
npm config list

# 3. Build project
npm run build

# 4. Publish (prepublishOnly will automatically run build)
npm publish
```

### Updates

```bash
# Update version (patch/minor/major)
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Publish new version
npm publish
```

### Beta Publishing

```bash
# For beta/alpha versions
npm version prerelease --preid=beta
npm publish --tag beta
```

## Project Structure

```
vectorizer/
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