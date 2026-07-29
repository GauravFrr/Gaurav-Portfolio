export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "GenAI / LLM",
    skills: ["LangChain", "ChromaDB", "RAG", "Gemini API", "Embeddings", "Hybrid Retrieval"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "NestJS", "Node.js"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React"],
  },
  {
    category: "Infra / DB",
    skills: ["PostgreSQL", "pgvector", "Redis", "Supabase", "Firebase", "Docker/VPS"],
  },
];
