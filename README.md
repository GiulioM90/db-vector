# Vectorizer

Client unificato per database vettoriali cloud con funzionalità di chunking e aggiornamento.

## Caratteristiche

- 🔌 Client per Pinecone e MongoDB Vector Search
- ✂️ Funzionalità di chunking avanzate
- 🔄 Aggiornamento automatico dei database vettoriali
- 📦 API semplice e unificata
- 🚀 Supporto TypeScript

## Installazione

```bash
npm install vectorizer
```

## Uso Base

```typescript
import { VectorizerClient } from 'vectorizer';

// Configurazione client
const client = new VectorizerClient({
  provider: 'pinecone', // o 'mongodb'
  config: {
    // configurazione specifica del provider
  }
});

// Esempio di utilizzo (da implementare)
// await client.upsert(documents);
```

## Sviluppo

### Setup

```bash
# Clona il repository
git clone https://github.com/giuliomollo/vectorizer.git
cd vectorizer

# Installa dipendenze
npm install

# Build del progetto
npm run build
```

### Comandi Disponibili

```bash
# Sviluppo con watch mode
npm run dev

# Build di produzione
npm run build

# Esegui test
npm run test

# Linting
npm run lint

# Pulizia build
npm run clean
```

## Pubblicazione

### Prima pubblicazione

```bash
# 1. Assicurati di essere loggato su npm
npm login

# 2. Verifica la configurazione
npm config list

# 3. Build del progetto
npm run build

# 4. Pubblica (prepublishOnly eseguirà automaticamente il build)
npm publish
```

### Aggiornamenti

```bash
# Aggiorna la versione (patch/minor/major)
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Pubblica la nuova versione
npm publish
```

### Pubblicazione Beta

```bash
# Per versioni beta/alpha
npm version prerelease --preid=beta
npm publish --tag beta
```

## Struttura del Progetto

```
vectorizer/
├── src/
│   ├── clients/          # Client per i vari provider
│   ├── chunking/         # Funzionalità di chunking
│   ├── types/           # Definizioni TypeScript
│   └── index.ts         # Entry point principale
├── dist/                # Build output
├── tests/               # Test suite
└── docs/                # Documentazione
```

## Licenza

MIT

## Contributi

I contributi sono benvenuti! Apri una issue o una pull request.