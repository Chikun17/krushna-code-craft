export const profile = {
  name: "Krushna Chandra Nayak",
  role: "Backend-Focused Developer",
  tagline:
    "Building reliable APIs, scalable backend systems, and practical full-stack applications.",
  identity: "Backend-Focused Developer | Full-Stack Developer | Software Developer",
  bio: "I'm a backend-focused developer who enjoys building reliable, scalable, and practical software solutions. I work with modern backend technologies, databases, APIs, and system development, while continuously expanding my skills in deployment and DevOps. I'm passionate about learning through real-world projects, solving challenging problems, and turning ideas into clean, functional products.",
  status: "Currently building • learning • solving",
  email: "krushnachandran33@gmail.com",
  phone: "9348111386",
  github: "https://github.com/Chikun17",
  linkedin: "https://linkedin.com/in/Krushna-ch",
  education: {
    degree: "B.Tech — Computer Science & Information Technology (CSIT)",
    institute: "Institute of Technical Education and Research (ITER), SOA",
    duration: "2023 – 2027",
  },
};

export const skillGroups = [
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Development", "Server-side development"],
  },
  { title: "Full Stack", items: ["MERN Stack", "React.js", "MongoDB", "Node.js", "Express.js"] },
  { title: "Programming", items: ["Java", "C++", "JavaScript"] },
  { title: "Databases", items: ["MongoDB", "SQL"] },
  {
    title: "Security",
    items: [
      "Authentication",
      "Authorization",
      "JWT",
      "Access Tokens",
      "Refresh Tokens",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Computer Science",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving"],
  },
  { title: "Tools & Development", items: ["Git", "GitHub"] },
  {
    title: "Deployment & DevOps",
    items: [
      "Application Deployment",
      "Cloud Technologies",
      "CI/CD Fundamentals",
      "Containerization",
      "Server Management",
    ],
  },
];

export const services = [
  {
    icon: "Server",
    title: "Backend Development",
    description: "Building secure, scalable, and reliable server-side applications.",
  },
  {
    icon: "Network",
    title: "REST API Development",
    description: "Designing and developing clean, structured APIs for web and mobile applications.",
  },
  {
    icon: "LayoutTemplate",
    title: "Full-Stack Web Development",
    description: "Developing complete web applications using the MERN stack.",
  },
  {
    icon: "Database",
    title: "Database Development",
    description: "Designing and integrating SQL and NoSQL databases with efficient data handling.",
  },
  {
    icon: "ShieldCheck",
    title: "Authentication & Authorization",
    description:
      "Implementing secure authentication, authorization, token-based access control, and role-based permissions.",
  },
  {
    icon: "CloudCog",
    title: "Deployment & DevOps",
    description:
      "Deploying applications and working with CI/CD, cloud platforms, containerization, and server-management fundamentals.",
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "mern",
    index: "01",
    title: "Full-Stack MERN Web Application",
    description:
      "Developed a full-stack web application using MongoDB, Express.js, React.js, and Node.js.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "JWT"],
    features: [
      "REST API development",
      "User authentication",
      "Authorization",
      "Database integration",
      "Responsive frontend functionality",
      "Server-side functionality",
    ],
    github: profile.github,
  },
  {
    id: "api",
    index: "02",
    title: "Backend & REST API Projects",
    description:
      "Backend-focused work covering API design, secure authentication flows, and a solid understanding of backend architecture.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    features: [
      "Scalable REST API architecture",
      "Database operations",
      "Authentication",
      "Access tokens & refresh tokens",
      "Secure server-side functionality",
      "API design",
    ],
    github: profile.github,
  },
  {
    id: "dsa",
    index: "03",
    title: "Data Structures & Algorithms",
    description:
      "Problem-solving work in C++ focused on data structures, algorithms, optimization, and computational thinking.",
    tech: ["C++", "Arrays", "Strings", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"],
    features: [
      "Data structures",
      "Algorithms",
      "Optimization",
      "Computational thinking",
      "Searching & sorting",
    ],
    github: profile.github,
  },
  {
    id: "devops",
    index: "04",
    title: "Deployment & DevOps Projects",
    description:
      "An evolving technical journey through practical experimentation with deployment and DevOps workflows.",
    tech: ["Git", "GitHub", "CI/CD", "Cloud", "Containers"],
    features: [
      "Application deployment",
      "Server configuration",
      "Version control",
      "CI/CD fundamentals",
      "Cloud technologies",
    ],
    github: profile.github,
  },
];

export const timeline = [
  {
    role: "Backend Developer — Independent Projects",
    period: "2026 – Present",
    description:
      "Building backend-focused projects to strengthen practical development skills, with experience in designing REST APIs, working with databases, implementing authentication, and developing reliable server-side systems. Continuously exploring deployment, cloud technologies, and DevOps practices through hands-on projects.",
  },
  {
    role: "B.Tech — Computer Science & Information Technology",
    period: "2023 – 2027",
    description:
      "Studying at the Institute of Technical Education and Research (ITER), SOA, while building practical skills through projects, backend development, and data structures & algorithms.",
  },
];

export const dsaTopics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Searching",
  "Sorting",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
