// ============================================================
// CENTRALIZED CONFIGURATION FILE
// Update your personal details, links, and project info here.
// ============================================================

export const personalInfo = {
  name: "Rizwan Pasha",
  title: "Software Engineer | Backend Developer | AI Enthusiast",
  tagline:
    "Building scalable systems, intelligent applications, and software that solves real-world problems.",
  email: "rizwanpasha1386@gmail.com",
  phone: "8618281144", // Optional
  location: "Bengaluru, India",
  resumeUrl: "/resume.pdf", // Place your resume in the /public folder
};

export const socialLinks = {
  github: "https://github.com/rizwanpasha1386-ai",
  linkedin: "https://www.linkedin.com/in/rizwan-pasha-8a3508368/", // TODO: Replace with your LinkedIn
  twitter: "", // Optional
  leetcode: "", // Optional
};

export const education = {
  institution: "M.S. Ramaiah Institute of Technology (MSRIT)",
  location: "Bengaluru, India",
  degree: "B.E. in Information Science and Engineering",
  semester: "4th Semester",
  cgpa: "9.53",
  expected: "2029", // Adjust graduation year
};

export const aboutMe = {
  paragraphs: [
    "I am an Information Science and Engineering student at M.S. Ramaiah Institute of Technology, Bengaluru, with a strong interest in building scalable backend systems, intelligent applications, and production-ready software.",
    "I enjoy understanding how systems work internally — from operating system internals and database engines to distributed architectures and network protocols. This curiosity drives me to build projects that go beyond surface-level implementations.",
    "My engineering approach focuses on clean architecture, maintainable code, and solving real problems. I am continuously deepening my knowledge of Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering principles.",
    "I am actively seeking Software Engineering, Backend Development, and AI Engineering internships where I can contribute to building real-world systems and grow as an engineer.",
  ],
};

export const skills = {
  "Programming Languages": {
    icon: "Code2",
    items: [
      { name: "C++", level: "proficient" },
      { name: "Python", level: "proficient" },
      { name: "JavaScript", level: "proficient" },
      { name: "SQL", level: "proficient" },
      { name: "R", level: "familiar" },
    ],
  },
  Frontend: {
    icon: "Layout",
    items: [
      { name: "HTML", level: "proficient" },
      { name: "CSS", level: "proficient" },
      { name: "React.js", level: "proficient" },
    ],
  },
  Backend: {
    icon: "Server",
    items: [
      { name: "Node.js", level: "proficient" },
      { name: "Express.js", level: "proficient" },
      { name: "Django", level: "familiar" },
      { name: "Spring Boot", level: "learning" },
      { name: "REST API Development", level: "proficient" },
      { name: "JWT Authentication", level: "proficient" },
      { name: "Role-Based Access Control", level: "proficient" },
    ],
  },
  "Databases & Caching": {
    icon: "Database",
    items: [
      { name: "MongoDB", level: "proficient" },
      { name: "MySQL", level: "proficient" },
      { name: "Redis", level: "proficient" },
    ],
  },
  "Real-Time Technologies": {
    icon: "Radio",
    items: [
      { name: "Socket.IO", level: "proficient" },
      { name: "Real-Time Communication", level: "proficient" },
    ],
  },
  "AI & Machine Learning": {
    icon: "Brain",
    items: [
      { name: "Machine Learning Fundamentals", level: "familiar" },
      { name: "LLM Integration", level: "proficient" },
      { name: "Data Processing", level: "proficient" },
      { name: "AI-Powered Applications", level: "proficient" },
      { name: "RAG Fundamentals", level: "learning" },
    ],
  },
  "DevOps & Infrastructure": {
    icon: "Container",
    items: [
      { name: "Git & GitHub", level: "proficient" },
      { name: "Docker", level: "familiar" },
      { name: "Linux", level: "proficient" },
      { name: "Nginx", level: "familiar" },
      { name: "GitHub Actions", level: "familiar" },
      { name: "CI/CD", level: "familiar" },
      { name: "AWS EC2", level: "familiar" },
      { name: "Kubernetes", level: "learning" },
    ],
  },
  "CS Fundamentals": {
    icon: "GraduationCap",
    items: [
      { name: "Data Structures & Algorithms", level: "proficient" },
      { name: "Operating Systems", level: "proficient" },
      { name: "DBMS", level: "proficient" },
      { name: "Computer Networks", level: "proficient" },
      { name: "Object-Oriented Programming", level: "proficient" },
      { name: "Problem Solving", level: "proficient" },
    ],
  },
};

// Level descriptions for the legend
export const skillLevels = {
  proficient: {
    label: "Used in Projects",
    color: "bg-blue-500",
    textColor: "text-blue-400",
  },
  familiar: {
    label: "Familiar",
    color: "bg-emerald-500",
    textColor: "text-emerald-400",
  },
  learning: {
    label: "Currently Learning",
    color: "bg-amber-500",
    textColor: "text-amber-400",
  },
};

export const projects = [
  {
    id: "saas-platform",
    title: "Multi-Tenant SaaS Project Management System",
    shortDescription:
      "A multi-tenant project management platform supporting isolated workspaces, role-based permissions, real-time communication, and Redis-cached APIs.",
    description:
      "A comprehensive multi-tenant project management platform designed to support multiple organizations with isolated workspaces, robust user management, granular role-based permissions, full task tracking, and real-time communication — built with production-grade architecture patterns.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "JWT",
      "REST APIs",
    ],
    features: [
      "Multi-tenant architecture with complete data isolation between organizations",
      "Organization-based workspace management with invite and join flows",
      "Role-based access control with Owner, Admin, and Member permission tiers",
      "Full project and task management with assignments and status tracking",
      "Real-time project chat using Socket.IO for instant team communication",
      "Owner-only announcement system for organization-wide updates",
      "Redis caching layer for project-related APIs to optimize performance",
      "JWT-based authentication with protected routes and middleware-driven access control",
    ],
    challenges: [
      "Designing a data model that ensures complete tenant isolation while maintaining query efficiency",
      "Implementing granular role-based permissions across nested resources (Org → Project → Task)",
      "Building a real-time messaging system scoped to individual project channels",
      "Integrating Redis caching without stale-data issues on write-through updates",
    ],
    github: "https://github.com/rizwanpasha1386-ai/SAAS-Multitenant-platform",
    liveDemo: "", // TODO: Add deployed URL when available
    featured: true,
    category: "Backend Engineering",
  },
  {
    id: "job-marketplace",
    title: "AI-Powered Job Marketplace",
    shortDescription:
      "An intelligent job discovery platform that leverages AI to help candidates find relevant opportunities through smart matching and backend APIs.",
    description:
      "An intelligent job discovery platform designed to help candidates discover relevant opportunities through AI-powered functionality, robust backend APIs, and a clean user experience focused on simplifying the job search process.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI/LLM Integration",
    ],
    features: [
      "AI-powered job discovery and matching concepts",
      "Backend API development with structured endpoints",
      "Database integration for job listings and user profiles",
      "User-oriented application design with intuitive interface",
    ],
    challenges: [
      "Integrating LLM-based matching into a performant API workflow",
      "Designing a scalable data model for diverse job listing structures",
    ],
    github: "", // TODO: Add GitHub link
    liveDemo: "", // TODO: Add deployed URL when available
    featured: true,
    category: "AI / Full-Stack",
  },
  {
    id: "ai-intelligence-pipeline",
    title: "AI Intelligence Pipeline",
    shortDescription:
      "An intelligent research processing pipeline that transforms unstructured academic data into structured, validated information using LLMs.",
    description:
      "An intelligent research processing pipeline that collects academic research information from sources like arXiv, then transforms unstructured data into structured, validated information using LLMs — with built-in deduplication, entity resolution, and data normalization.",
    technologies: [
      "Python",
      "arXiv API",
      "LLM APIs",
      "Pydantic",
      "Data Normalization",
      "Entity Resolution",
    ],
    features: [
      "Research paper crawling and data ingestion from arXiv",
      "LLM-based information extraction from unstructured text",
      "Structured output validation using Pydantic models",
      "Data normalization and standardization pipeline",
      "Duplicate detection and intelligent deduplication",
      "Entity resolution across multiple data sources",
    ],
    challenges: [
      "Handling inconsistent and noisy data from academic sources",
      "Ensuring LLM extraction reliability with Pydantic validation",
      "Building an efficient deduplication pipeline for large datasets",
    ],
    github: "", // TODO: Add GitHub link
    liveDemo: "",
    featured: true,
    category: "AI Engineering",
  },
];

export const achievements = [
  {
    title: "Google India Hackathon",
    description: "Secured a position in the Top 90 teams nationwide.",
    icon: "Trophy",
    highlight: true,
  },
  {
    title: "Code Crafter",
    description:
      "Volunteered and contributed to organizing coding events and activities.",
    icon: "Code2",
    highlight: false,
  },
  {
    title: "NSS – Blood Donation Drive",
    description:
      "Volunteered for blood donation drives as part of the National Service Scheme.",
    icon: "Heart",
    highlight: false,
  },
  {
    title: "CodeGolf Event Organizer",
    description:
      "Organized and managed the CodeGolf competitive coding event.",
    icon: "Award",
    highlight: false,
  },
];

export const currentlyLearning = [
  {
    name: "Advanced DSA",
    description: "Deepening problem-solving skills with complex data structures and algorithms",
    icon: "GitBranch",
  },
  {
    name: "System Design",
    description: "Learning to design scalable, distributed architectures",
    icon: "Network",
  },
  {
    name: "Distributed Systems",
    description: "Understanding consensus protocols, replication, and fault tolerance",
    icon: "Globe",
  },
  {
    name: "Docker & CI/CD",
    description: "Containerization and automated deployment pipelines",
    icon: "Container",
  },
  {
    name: "Cloud Infrastructure",
    description: "AWS services, cloud-native patterns, and infrastructure as code",
    icon: "Cloud",
  },
  {
    name: "Spring Boot",
    description: "Building enterprise-grade Java backend services",
    icon: "Leaf",
  },
  {
    name: "AI Engineering",
    description: "RAG pipelines, LLM orchestration, and intelligent systems",
    icon: "Brain",
  },
];

// EmailJS configuration for the contact form
// Sign up at https://www.emailjs.com/ and fill in these values
export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID", // TODO: Replace with your EmailJS service ID
  templateId: "YOUR_TEMPLATE_ID", // TODO: Replace with your EmailJS template ID
  publicKey: "YOUR_PUBLIC_KEY", // TODO: Replace with your EmailJS public key
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];
