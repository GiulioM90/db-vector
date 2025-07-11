import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { Document } from "@langchain/core/documents";

export const loadFolder = async (path: string): Promise<Document[]> => {
    const loader = new DirectoryLoader(path, {
    '.pdf': (path: string) => new PDFLoader(path, {
      splitPages: false
    }),
    '.txt': (path: string) => new TextLoader(path)
  })
  const docs = await loader.load()
  return docs
}