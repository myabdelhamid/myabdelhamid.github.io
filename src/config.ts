export const siteConfig = {
  name: "Marwan Abdelhamid",
  title: "Customer Success | Technical Support & APIs",
  description: "Portfolio website of Marwan Abdelhamid",
  accentColor: "#1d4ed8",
  social: {
    email: "myabdelhamidwork@gmail.com",
    linkedin: "https://linkedin.com/in/marwan-abdelhamid",
    upwork: "https://www.upwork.com/freelancers/~01e6e8365517aca8bb",
    github: "https://github.com/myabdelhamid",
  },
  aboutMe:
    "Recent MSc graduate in Computer Science & Engineering from Berlin (Oct 2026) with customer-facing experience and a technical background. Led a field team and handled objections face to face in a quota-driven, high-rejection environment. Built and supported software used by 5,000+ registered users, including live-call support for the client, and designed an LLM chatbot with guardrails against wrong answers. Tests APIs with Postman and Swagger UI, uses Claude every day, and is comfortable presenting technology to technical and non-technical audiences.",
  skills: [
    "Technical Presentations",
    "Objection Handling",
    "Demos",
    "Workshops",
    "Coaching",
    "API Testing",
    "Postman",
    "Swagger UI",
    "LLMs / Chatbots",
    "RAG",
    "LangChain",
    "Claude",
    "Python",
    "JavaScript",
    "SQL",
    "Strapi CMS",
    "AWS",
    "Docker",
    "FastAPI",
    "Google Workspace",
    "Excel",
  ],
  languages: ["English (C1)", "Arabic (Native)", "German (B2)"],
  projects: [
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
      company: "Talk2move",
      title: "Team Leader, Field Sales & Fundraising",
      dateRange: "Feb 2026 – Aug 2026 · Berlin",
      bullets: [
        "Represented the organisation in high-volume, face-to-face conversations and handled objections calmly in a high-rejection environment",
        "Promoted to Team Leader after 4 months for consistent target achievement and peer coaching",
        "Led and coached a field team through daily briefings and in-field feedback, owning daily and weekly targets",
      ],
    },
    {
      company: "Kenza GmbH",
      title: "AI Solutions Architect (Freelance consultant)",
      dateRange: "Feb 2026 – Apr 2026 · Berlin",
      bullets: [
        "Designed a RAG chatbot for the client: document ingestion, semantic search over a vector database and an LLM answer layer",
        "Defined hallucination guardrails and checks for answer accuracy, so the chatbot answers from the client's own content",
      ],
    },
    {
      company: "School of Architecture in Egypt",
      title: "Full Stack & DevOps Developer",
      dateRange: "Oct 2023 – Oct 2025 · Remote",
      bullets: [
        "Built and deployed a booking platform on AWS for 5,000+ registered users, cutting manual admin work by about 85%",
        "Moved the CMS to headless Strapi and supported the owner on live calls to manage content himself, with ongoing support throughout the project",
        "Set up Google Workspace for the school to build client trust and a consistent brand, and so the team could collaborate on shared documents",
      ],
    },
    {
      company: "Derayah Financial",
      title: "Software & AI Engineering Intern",
      dateRange: "Jul 2024 – Aug 2024 · Cairo, Egypt",
      bullets: [
        "Worked on a real-time trading platform (.NET, MySQL, React); built an Oracle APEX dashboard for pricing data",
      ],
    },
  ],
  education: [
    {
      school: "German International University Berlin",
      degree: "MSc Media Engineering & Technology (Computer Science & Engineering)",
      dateRange: "Oct 2025 – Oct 2026",
      achievements: [
        "All degree requirements completed",
        "Master's thesis — StormVLM: Checking AI Answers in Extreme Weather. Designed a metric that checks an AI model's claims, showing a camera-only model falsely claims visibility in 62.2% of long-range fog cases",
      ],
    },
    {
      school: "German University in Cairo",
      degree: "BSc Media Engineering & Technology (Computer Science & Engineering)",
      dateRange: "Sep 2020 – Jun 2025",
      achievements: ["GPA 1.88 (German scale)"],
    },
  ],
  certifications: [
    { name: "GenAI Job Simulation", issuer: "Boston Consulting Group (BCG)" },
    { name: "Fundamentals of AI Agents Using LangChain", issuer: "IBM" },
    { name: "Generative AI: Foundation Models and Platforms", issuer: "IBM" },
  ],
};
