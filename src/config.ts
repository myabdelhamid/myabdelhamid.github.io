export const siteConfig = {
  name: "Marwan Abdelhamid",
  title: "AI/ML Engineer",
  description: "Portfolio website of Marwan Abdelhamid",
  accentColor: "#1d4ed8",
  social: {
    email: "myabdelhamidwork@gmail.com",
    linkedin: "https://linkedin.com/in/marwan-abdelhamid",
    upwork: "https://www.upwork.com/freelancers/~01e6e8365517aca8bb",
    github: "https://github.com/myabdelhamid",
  },
  aboutMe:
    "AI/ML Engineer with hands-on experience in classical machine learning and LLM-powered systems, including document classification, HybridRAG architectures, and AI-driven web applications. Currently developing STORMBench with a professor from the Technical University of Munich (TUM), a synthetic benchmark for testing LVLMs under extreme driving conditions with radar augmentation.",
  skills: ["TensorFlow", "Pytorch", "Transformers", "OpenCV", "Pandas", "Langchain", "RAG", "Knowledge Graphs", "Python", "Java", "C#", "SQL", "Redis", "Docker", "Kubernetes", "AWS", "Git", "React"],
  projects: [
    {
      name: "Agentic HybridRAG Knowledge Base",
      description:
        "Intelligent hybrid RAG engine, agentic LLM routing, vector search, knowledge graph integration, two-phase extraction, anti-hallucination grounding, fully local, Docker-ready, production-grade AI system.",
      link: "/projects/agentic-hybridrag",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "DocEx - Document Classification System",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "/projects/docex",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
