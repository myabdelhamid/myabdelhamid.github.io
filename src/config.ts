export const siteConfig = {
  name: "Marwan Abdelhamid",
  title: "AI Engineer & Consultant",
  description: "Portfolio website of Marwan Abdelhamid",
  accentColor: "#1d4ed8",
  // Lighter accent used in dark mode so it stays readable on dark backgrounds
  accentColorDark: "#60a5fa",
  social: {
    email: "myabdelhamidwork@gmail.com",
    linkedin: "https://linkedin.com/in/marwan-abdelhamid",
    upwork: "https://www.upwork.com/freelancers/~01e6e8365517aca8bb",
    github: "https://github.com/myabdelhamid",
  },
  aboutMe:
    "AI engineer based in Berlin with an MSc in AI/Software Engineering (thesis graded \"Excellent\") who builds working systems end to end: a radar-augmented vision-language model for autonomous driving in extreme weather, and Amtsbrief, a live AI app that turns German official letters into checked deadlines and plain-English explanations. I combine hands-on LLM and VLM engineering (RAG, prompt engineering, quantization, evaluation) with consulting skills from client work: technical discovery, demos and proofs of concept. I explain trade-offs clearly to non-technical people and build the proof to back them up.",
  skills: [
    "Vision-Language Models",
    "LLM/VLM Evaluation",
    "RAG",
    "ChromaDB",
    "Prompt Engineering",
    "Fine-tuning",
    "Quantization (MLX)",
    "Sensor Fusion",
    "Google Gemini API",
    "Hugging Face",
    "LangChain",
    "Python",
    "FastAPI",
    "Django",
    "MERN Stack",
    "REST APIs",
    "Strapi CMS",
    "Google Cloud Platform",
    "GitLab",
    "DevSecOps",
    "pytest",
    "Postman",
    "Swagger UI",
    "Git",
    "Technical Discovery",
    "Demos & PoCs",
  ],
  languages: ["English (C1)", "Arabic (Native)", "German (B2)"],
  projects: [
    {
      name: "StormVLM - Radar-Augmented VLM for Extreme Weather",
      description:
        "MSc thesis (graded \"Excellent\"): a framework that adds radar to camera input so a vision-language model can reason about driving scenes in extreme weather. Reaching 89.6% object coverage in extreme foggy street with zero missed hazards across 50 unique scenes.",
      skills: ["Python", "Vision-Language Models", "Sensor Fusion", "LLM-as-Judge"],
    },
    {
      name: "Amtsbrief - AI Decoder for German Official Letters",
      description:
        "Live solo build: a photo or PDF of a letter goes in; a plain-English explanation, amounts owed and deadlines come out. Deadlines are calculated in code, every answer links to its source line, and manipulation attempts are flagged. On my test set: 140/140 fields extracted correctly, 6/6 attacks blocked, 0 false alarms on 27 normal letters.",
      skills: ["FastAPI", "Google Gemini", "Google Cloud", "pytest"],
    },
    {
      name: "Agentic HybridRAG Knowledge Engine",
      description:
        "Production-grade Retrieval-Augmented Generation system combining vector search, knowledge graphs, and intelligent agentic reasoning with local LLMs",
      link: "/projects/agentic-hybridrag",
      skills: ["Python", "FastAPI", "React", "Neo4j", "ChromaDB", "Docker", "LangChain"],
    },
    {
      name: "DocRepo - Document Classification System",
      description:
        "Enterprise Document Management System with AI-powered classification",
      link: "/projects/docrepo",
      skills: ["Python", "Javascript", "FastAPI", "React", "PostgreSQL", "Docker", "Scikit-learn", "OCR"],
    },
    {
      name: "Maro's Coffee AI Chatbot",
      description:
        "AI-powered conversational chatbot simulating a friendly coffee shop cashier with dynamic menu management",
      link: "/projects/maros-coffee-chatbot",
      skills: ["Django", "Python", "MongoDB", "Google Gemini AI", "JavaScript", "SQLite"],
    },
  ],
  experience: [
    {
      company: "Kenza GmbH",
      title: "AI Solutions Architect (Freelance)",
      dateRange: "Feb 2026 – Apr 2026 · Remote",
      bullets: [
        "Designed the technical blueprint for a RAG chatbot using Gemini and ChromaDB",
      ],
    },
    {
      company: "School of Architecture in Egypt",
      title: "Full Stack & DevOps Developer",
      dateRange: "Oct 2023 – Oct 2025 · Remote",
      bullets: [
        "Built a MERN-stack booking system",
        "Set up Google Workspace for the school",
        "Worked trunk-based with pair and mob programming; refactored existing codebases",
        "Gave the school's owner ongoing live-call support on Strapi",
      ],
    },
    {
      company: "Derayah Financial",
      title: "Software & AI Engineering Intern",
      dateRange: "Jul 2024 – Aug 2024 · Cairo, Egypt",
      bullets: [
        "Built a trading platform with time-series forecasting",
        "Fine-tuned an LLM",
      ],
    },
  ],
  education: [
    {
      school: "German International University Berlin",
      degree: "MSc AI / Software Engineering",
      dateRange: "Completed Oct 2026",
      achievements: [
        "All requirements completed; official certificate to follow",
        "Thesis: StormVLM, supervised by Prof. Shahzad, graded \"Excellent\"",
      ],
    },
    {
      school: "German University in Cairo",
      degree: "BSc Media Engineering & Technology (Computer Science & Engineering)",
      dateRange: "2025",
      achievements: ["Grade 1.88 (German scale)"],
    },
  ],
  certifications: [
    { name: "GenAI Job Simulation", issuer: "Boston Consulting Group (BCG)" },
    { name: "Fundamentals of AI Agents Using LangChain", issuer: "IBM" },
    { name: "Generative AI: Foundation Models and Platforms", issuer: "IBM" },
  ],
};
