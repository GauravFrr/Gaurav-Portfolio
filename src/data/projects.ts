export type CaseStudy = {
  context: string;
  problem: string;
  approach: string;
  decisions: { title: string; description: string }[];
  whatWentWrong?: string[];
  whyItMatters: string;
};

export type Project = {
  name: string;
  tagline: string;
  stack: string[];
  highlight: string;
  github: string;
  demo?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    name: "Retryv",
    tagline: "Production-grade RAG system over FastAPI's official documentation",
    stack: ["Python", "Gemini API", "ChromaDB", "Hybrid Retrieval", "Streamlit"],
    highlight: "Caught a silent data-coverage bug in ChromaDB ingestion that was leaving collections sparsely populated",
    github: "https://github.com/GauravFrr/Retryv",
    caseStudy: {
      context: "Most portfolio RAG projects are a thin wrapper: load a PDF, embed it, ask an LLM a question, and call it done. That doesn't demonstrate real-world engineering competence. Retryv was built to go one layer deeper—hitting and resolving the silent failure modes that occur when you try to make retrieval reliable, such as sparse ingestion, hallucination control, and embedding quota limits.",
      problem: "FastAPI's documentation is large and deeply nested, making it easy for developers to get lost. Retryv indexes the full documentation and answers natural-language questions grounded in actual doc content, with a built-in confidence mechanism that prevents the model from generating plausible-sounding but ungrounded answers.",
      approach: "FastAPI docs are chunked and embedded using the Gemini API and stored in ChromaDB. Retrieval uses a hybrid mechanism (BM25 sparse keyword search + dense vector search combined using Reciprocal Rank Fusion) to ensure both exact keyword and semantic matches are returned. An explicit RRF score threshold (0.025) acts as a confidence guard to prevent hallucinated answers when retrieval confidence is too low.",
      decisions: [
        {
          title: "Hybrid Retrieval over Pure Vector Search",
          description: "Dense vector retrieval (embeddings) often misses exact-keyword queries (like specific parameters or error codes), while BM25 misses semantic questions. Blending both via Reciprocal Rank Fusion (RRF) avoids picking one failure mode over the other."
        },
        {
          title: "RRF Confidence Threshold Guard",
          description: "Most RAG demos always generate an answer even when retrieval is weak, producing hallucinations. Gating answers behind a tuned RRF confidence threshold (0.025) ensures the system says 'I don't know' rather than hallucinating."
        }
      ],
      whatWentWrong: [
        "Silent Ingestion Bug: Ingestion failures left ChromaDB collections sparsely populated without throwing an exception. Invalidated chunking-strategy comparisons until identified and fixed.",
        "Silent Zip-Truncation in Gemini Embedding: A batching bug in the Gemini embedding call was silently dropping data on large runs, caught by comparing raw input counts against finished vector records.",
        "Missing BM25 Index Files: The hybrid retrieval was silently falling back to vector-only search because BM25 index files weren't being generated correctly in some runs, caught by seeing identical dense and hybrid outputs."
      ],
      whyItMatters: "Demonstrates a solid understanding of retrieval architecture trade-offs, a disciplined habit of instrumenting and verifying data pipelines rather than trusting 'no-error' outputs, and a commitment to documenting real bugs publicly."
    }
  },
  {
    name: "MemoryOS",
    tagline: "A universal AI memory layer for LLM applications",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "pgvector", "Redis", "BullMQ", "Chrome Extension"],
    highlight: "Built a context-injection engine that selects and injects relevant memories without bloating context",
    github: "https://github.com/GauravFrr/MemoryOs",
    caseStudy: {
      context: "LLM applications are stateless by default—every new session starts from scratch, forcing users to re-explain context repeatedly. MemoryOS is a reusable, app-agnostic memory layer. Any AI application or browser extension can query this layer to retrieve relevant prior context, rather than every individual app building its own bespoke memory system.",
      problem: "Users constantly repeat background info across sessions and different AI applications. Most existing memory implementations are either too crude (blindly dumping entire chat histories back in, bloating token costs) or too narrow (locking memory inside a single app).",
      approach: "Developed a NestJS backend utilizing PostgreSQL + pgvector for similarity-based memory search. Redis and BullMQ process memory writes and embedding generation asynchronously. A Plasmo-based Chrome extension acts as the delivery mechanism, intercepting web-based AI tools (like ChatGPT/Claude Web UI) to inject relevant memory context directly into active chats.",
      decisions: [
        {
          title: "Queue-Based Writes via BullMQ & Redis",
          description: "Queuing memory writes and embedding calls asynchronously separates the fast path (serving queries) from the slow path (storing and vectorizing memories) for high responsiveness under load."
        },
        {
          title: "Relevance-Based Context Injection Engine",
          description: "Developed an engine that programmatically selects only the most relevant memories for a given query. This prevents context bloat, reduces token costs, and avoids confusing the model with irrelevant history."
        },
        {
          title: "Delivery via Browser Extension",
          description: "Using a Plasmo-based Chrome extension lets us inject memory context into any web-based AI tool Gaurav interacts with, making the system immediately portable across all interfaces."
        }
      ],
      whatWentWrong: [
        "BullMQ Job Serialization: Encountered silent queue failures where nested payload objects were silently truncated during Redis serialization, resolved by introducing strict Zod schema validation before queuing."
      ],
      whyItMatters: "This is the most systems-design-heavy project, demonstrating capability in job queuing, asynchronous vector databases, typed backend service architectures, and browser-extension integrations."
    }
  },
  {
    name: "Brefly",
    tagline: "White-label client reporting SaaS for marketing agencies",
    stack: ["FastAPI", "Next.js 15", "Supabase", "Redis", "WeasyPrint", "Gemini API", "Razorpay", "Stripe"],
    highlight: "Designed dual payment-provider integrations (Razorpay and Stripe) for regional and international markets",
    github: "https://github.com/GauravFrr/Brefly",
    caseStudy: {
      context: "Marketing agencies waste hours each month manually assembling client-facing performance reports by pulling data from multiple sources. Brefly automates scheduled report generation, HTML-to-PDF rendering, and white-label branding per agency, positioning it as a commercially-ready product.",
      problem: "Agencies need reports that look like their own branded product, delivered on a predictable schedule without manual intervention. Brefly targets exactly that: white-labeling + scheduling + automated generation, built as a multi-tenant business tool.",
      approach: "Developed a FastAPI backend with Next.js 15. Supabase provides authentication and database. Scheduled tasks are driven by APScheduler. Report rendering uses WeasyPrint (HTML/CSS to PDF), and payment processing integrates Razorpay (live) and Stripe (integrated, disabled).",
      decisions: [
        {
          title: "HTML/CSS-Based PDF Generation via WeasyPrint",
          description: "Selected WeasyPrint (HTML/CSS to PDF) over rigid PDF template builders. This allows agencies to customize client reports simply by editing CSS styles, fitting the white-label model perfectly."
        },
        {
          title: "Dual Payment-Provider Readiness",
          description: "Fully integrated both Razorpay (for India-first customers) and Stripe (for international scale) so the product is ready to expand beyond a single region without code rebuilds."
        },
        {
          title: "Documentation as a First-Class Deliverable",
          description: "Wrote an 11-file documentation suite covering architecture, setup, and onboarding. Treat the project as a real commercial product rather than a quick demo."
        }
      ],
      whatWentWrong: [
        "WeasyPrint Asset Resolution: Remote image assets and stylesheets failed to load during PDF rendering inside Docker containers, solved by configuring absolute local path resolving and caching assets locally."
      ],
      whyItMatters: "Demonstrates full commercial SaaS shipping competence: scheduling, multi-tenant branding, dual payment integrations, and extensive technical documentation."
    }
  },
  {
    name: "Nyxleads",
    tagline: "AI-powered lead scraping CLI tool",
    stack: ["Python", "CLI", "AI Scoring", "License Key Auth", "Hardware Fingerprinting"],
    highlight: "Implemented license-key validation and hardware fingerprinting to bind software licenses to a single device",
    github: "https://github.com/GauravFrr/NyxLeads",
    caseStudy: {
      context: "Sales and freelance outreach depends on a steady supply of qualified leads. Nyxleads is an AI-powered scraping CLI, but its distinguishing feature is its focus on distributable product packaging—incorporating real software licensing controls that are usually omitted in portfolio projects.",
      problem: "Beyond generating leads, Nyxleads solves a secondary product-distribution problem: how do you distribute a CLI tool as a paid product without it being trivially copied, shared, and run on unauthorized machines?",
      approach: "Built a Python CLI tool that scrapes lead sources and ranks them using AI. Gated access by implementing license-key validation that matches against a unique hardware fingerprint generated from the user's machine.",
      decisions: [
        {
          title: "License-Key + Hardware-Fingerprint Authentication",
          description: "Binds license keys to a specific machine's hardware signature to prevent license sharing and piracy, mimicking professional commercial software distribution."
        }
      ],
      whatWentWrong: [
        "MAC Address Instability on Virtual Interfaces: Hardware fingerprinting broke on machines running Docker/WSL due to changing network interface names, fixed by generating hashes from CPU IDs and Motherboard UUIDs instead."
      ],
      whyItMatters: "Adds software distribution and security breadth to the portfolio, demonstrating CLI building and desktop licensing controls distinct from standard web-app patterns."
    }
  },
  {
    name: "Rythmiq",
    tagline: "Spotify-inspired music streaming Android app with a Node.js backend",
    stack: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "ExoPlayer", "Node.js", "Express.js", "Supabase", "Last.fm API"],
    highlight: "Designed a 5-layer personalized recommendation scoring system and ExoPlayer-based gapless playback queue preloading",
    github: "https://github.com/GauravFrr/Rythmiq",
    caseStudy: {
      context: "Natively streaming audio smoothly on Android with robust personalization requires careful orchestration. Rythmiq is a full-stack, Spotify-inspired music streaming application built to demonstrate mobile audio engine integration and custom scoring algorithm design.",
      problem: "Providing real-time music discovery from millions of tracks while maintaining zero-latency gapless queue preloading and persistent background audio control on Android.",
      approach: "Developed a native Kotlin app with Jetpack Compose, backed by a Node.js/Express API. Utilized Room for local SQLite caching and ExoPlayer for background playback. Integrated JioSaavn music metadata and Last.fm API for similar-artist graph traversal, combined via a custom multi-weighted recommendation engine.",
      decisions: [
        {
          title: "5-Layer Weighted Recommendation Scoring",
          description: "Created a backend recommendation algorithm weighting followed artists at 40%, historical play counts/similarity at 30%, and language/genre matches at 15% to deliver a hyper-personalized feed."
        },
        {
          title: "ExoPlayer Queue Preloading",
          description: "Implemented proactive audio segment caching and media session connectors to preload the next track in the queue, achieving instant gapless transitions."
        }
      ],
      whatWentWrong: [
        "Overlapping Audio Streams: Rapid track-skipping caused playback overlap and background audio resource leaks, fixed by introducing strict state synchronization using Kotlin Flows and player debouncing."
      ],
      whyItMatters: "Demonstrates advanced Android systems engineering, native media controller APIs, custom algorithm design, and full-stack backend orchestration."
    }
  },
  {
    name: "Atlas",
    tagline: "Autonomous production-grade AI earning agent running a digital freelancing business",
    stack: ["Python", "FastAPI", "SQLite", "Playwright", "Gemini API", "Razorpay API"],
    highlight: "Built a self-healing scheduler loop and a 3-pass quality control review pipeline for autonomous operations",
    github: "https://github.com/GauravFrr/Atlas",
    caseStudy: {
      context: "Building autonomous agents that go beyond toy scripts requires production-grade systems design. Atlas is an autonomous agent designed to run as a full digital agency—discovering leads, generating custom websites/chatbots, and processing payments with zero human intervention.",
      problem: "Creating a reliable, self-improving agent system that can run 24/7, handle client discovery and outreach, and manage webhook-driven payments safely without crash loops.",
      approach: "Built a Python-based agent utilizing FastAPI and SQLite under the Repository Pattern. Configured an asynchronous scheduler loop with fallback LLM routing (Gemini 2.5 Pro for planning, 2.0 Flash for bulk tasks, and Llama 3.3 for fallback) and Razorpay integration.",
      decisions: [
        {
          title: "3-Pass Quality Control Review Pipeline",
          description: "Built an automated review and scoring system that evaluates generated deliverables 3 times and runs auto-fixes before any client outreach is sent."
        },
        {
          title: "Strict Lead Filtering Guard", description: "Implemented an email-first validation layer that discards lead prospects missing contact channels prior to running expensive LLM generation scripts."
        }
      ],
      whatWentWrong: [
        "Database Locking Exceptions: Concurrent lead-scraping jobs using Playwright triggered database lock errors in SQLite, resolved by configuring write-ahead logging (WAL) journal mode and serialized repository connections."
      ],
      whyItMatters: "Showcases production-ready agentic architectures, self-healing scheduling, dependency injection, and payment system integration."
    }
  }
];
