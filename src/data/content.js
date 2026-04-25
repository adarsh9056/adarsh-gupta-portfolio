export const SITE = {
  name: 'Adarsh Gupta',
  title: 'Software Engineer | Full Stack Developer',
  tagline: 'Building scalable web applications and solving real-world problems',
  email: 'adarshgupta9056@gmail.com',
  phone: '+91-9621720103',
  github: 'https://github.com/adarsh9056',
  linkedin: 'https://www.linkedin.com/in/adarsh-gta',
  githubUsername: 'adarsh9056',
  resumePath: '/Adarsh_gupta_resume_offcampus.pdf',
  resumeDownloadName: 'Adarsh_gupta_resume_offcampus.pdf',
}

/** Sticky nav — smooth-scroll to section ids */
export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const ABOUT = {
  paragraphs: [
    "I'm a B.Tech student at Graphic Era Deemed University (2022–2026), passionate about turning ideas into reliable software.",
    'I focus on data structures, modern web development, and problem solving — with 200+ LeetCode problems solved — plus hands-on experience in full-stack development and cloud fundamentals.',
  ],
}

export const SKILLS = [
  {
    category: 'Languages',
    items: ['Java', 'C++', 'SQL'],
    accent: 'sky',
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    accent: 'violet',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', '.NET'],
    accent: 'emerald',
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL'],
    accent: 'cyan',
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
    accent: 'amber',
  },
  {
    category: 'Core',
    items: ['DSA', 'OS', 'DBMS', 'CN', 'OOP'],
    accent: 'fuchsia',
  },
]

export const EXPERIENCE = [
  {
    role: 'Salesforce Developer Intern',
    company: 'SmartBridge (Virtual)',
    period: 'May 2025 – Jul 2025',
    bullets: [
      'Built Lightning Web Components (LWC) for UI automation, reducing manual workflow steps by ~40%.',
      'Integrated Salesforce APIs for real-time data sync across 3 business modules.',
      'Applied MVC architecture and reusable component design to build scalable enterprise features.',
      'Collaborated with a 4-member team to deliver 2 production-ready CRM modules on schedule.',
    ],
    certificate:
      'https://drive.google.com/file/d/1m0qVQWCd2hXYnvp2g-qicQYpLE7Vuka2/view',
  },
  {
    role: 'Web Developer Intern',
    company: 'Ordnance Factory Board, Ministry of Defence',
    period: 'Jul 2024 – Aug 2024',
    bullets: [
      'Developed a web-based archival system using HTML, CSS, JavaScript, and PHP, digitizing 500+ employee records.',
      'Automated PDF generation, reducing manual document processing time by approximately 60%.',
      'Deployed system on a secure private server with role-based access control for data integrity.',
      'Improved record retrieval speed, enabling staff to access files in under 10 seconds vs. manual search.',
    ],
    certificate:
      'https://drive.google.com/file/d/15SdgASIP6XHu2aynfEbPNBucUmkZlA3O/view',
  },
]

export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'web', label: 'Web' },
  { id: 'ml', label: 'ML / AI' },
  { id: 'systems', label: 'Systems' },
  { id: 'iot', label: 'IoT' },
  { id: 'tools', label: 'Tools' },
]

export const PROJECTS = [
  {
    id: 'service-sphere-ai-crm',
    title: 'ServiceSphere AI CRM',
    description:
      'Production-minded CRM with GraphQL, Prisma, PostgreSQL, role-based access, worker-driven automations, and AI-assisted follow-ups.',
    tech: ['React', 'Node.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
    category: 'fullstack',
    github: 'https://github.com/adarsh9056/ServiceSphere-AI-CRM',
  },
  {
    id: 'agentforce-ticket-router',
    title: 'Agentforce AI Support Ticket Router',
    description:
      'Full-stack AI support routing platform with role-aware auth, telemetry analytics, and automated CI/CD deployment pipeline.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'OpenAI'],
    category: 'fullstack',
    github: 'https://github.com/adarsh9056/Agentforce-AI-Support-Ticket-Router',
    live: 'https://agentforce-ai-support-ticket-router.vercel.app',
    liveLabel: 'Live Demo',
  },
  {
    id: 'tractor-predictive-maintenance',
    title: 'AI-Based Tractor Predictive Maintenance',
    description:
      'End-to-end predictive maintenance system that classifies machine health bands, predicts failure type, and serves diagnosis APIs with an operations UI.',
    tech: ['Python', 'FastAPI', 'scikit-learn', 'XGBoost', 'RAG'],
    category: 'ml',
    github: 'https://github.com/adarsh9056/AI_based_tractor-predictive-maintenance',
    live: 'https://ai-based-tractor-predictive-mainten.vercel.app/',
    liveLabel: 'Live Demo',
  },
  {
    id: 'guardrail-gateway',
    title: 'Guardrail Gateway',
    description:
      'Spring Boot microservice implementing Redis-backed concurrency guardrails and rate controls for bot/human interactions.',
    tech: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Docker'],
    category: 'systems',
    github: 'https://github.com/adarsh9056/guardrail-gateway',
  },
  {
    id: 'secure-rbac-task-manager',
    title: 'Secure RBAC Task Manager',
    description:
      'JWT-secured full-stack task manager with strict role-based authorization, validation, Swagger docs, and Dockerized local setup.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'fullstack',
    github: 'https://github.com/adarsh9056/secure-rbac-task-manager',
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    description:
      'Full-stack task manager with secure authentication, CRUD operations, and RESTful API design for reliable productivity workflows.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST', 'Auth'],
    category: 'fullstack',
    github: 'https://github.com/adarsh9056/taskmanager',
    live: 'https://taskmanager-tau-brown.vercel.app',
    liveLabel: 'Live Demo',
  },
  {
    id: 'interactive-recipe-finder',
    title: 'Interactive Recipe Finder',
    description:
      'Ingredient-based recipe search with match scoring, responsive UI, and modal recipe details — static frontend using HTML, CSS, JavaScript, and JSON data.',
    tech: ['HTML', 'CSS', 'JavaScript', 'JSON'],
    category: 'web',
    github: 'https://github.com/adarsh9056/Interactive-Recipe-Finder',
    live: 'https://adarsh9056.github.io/Interactive-Recipe-Finder/',
    liveLabel: 'Live (GitHub Pages)',
  },
  {
    id: 'student-attendance-system',
    title: 'Student Attendance System',
    description:
      'PHP + MySQL web app for managing students, attendance, and sessions with login flow and styled UI (XAMPP/LAMP friendly).',
    tech: ['PHP', 'MySQL', 'CSS'],
    category: 'fullstack',
    github: 'https://github.com/adarsh9056/Student_attendence_system',
    live: null,
    livePlaceholder: true,
  },
  {
    id: 'plant-disease-detection',
    title: 'Plant Disease Detection (ML)',
    description:
      'TensorFlow/Keras CNN for plant image classification on a Kaggle-style dataset — preprocessing, augmentation, training, and ~98.4% test accuracy on the project split.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    category: 'ml',
    github: 'https://github.com/adarsh9056/Plant-disease-detection-using-machine-learning',
    live: null,
    livePlaceholder: true,
  },
  {
    id: 'spam-filtering',
    title: 'Spam Filtering',
    description:
      'Probabilistic spam classifier using word frequencies from Ham/Spam datasets — configurable priors and interpretable output (~94% accuracy).',
    tech: ['Python', 'NumPy', 'Jupyter'],
    category: 'ml',
    github: 'https://github.com/adarsh9056/Spam-filtering',
    live: null,
    livePlaceholder: true,
  },
  {
    id: 'backup-file-system',
    title: 'Backup File System (BackItUp)',
    description:
      'Multithreaded C backup/restore utility with recursive directory traversal, per-file threads, and comparison of modification times to avoid overwriting newer backups.',
    tech: ['C', 'POSIX', 'Threads', 'Makefile'],
    category: 'systems',
    github: 'https://github.com/adarsh9056/BackupFileSystem',
    live: null,
    livePlaceholder: true,
  },
  {
    id: 'ezeagro',
    title: 'EzeAgro',
    description:
      'IoT-enabled smart farming solution — monitoring and automation to support crops; project work cited reduced locust impact by up to 50%.',
    tech: ['IoT', 'Cloud', 'Sensors', 'Data Pipeline'],
    category: 'iot',
    github: 'https://github.com/adarsh9056',
    live: null,
    livePlaceholder: true,
  },
  {
    id: 'dead-code-removal',
    title: 'Dead Code Removal Tool',
    description:
      'Static analysis pipeline combining a Lex & Yacc-based parser with a Node.js UI to identify and visualize removable dead code.',
    tech: ['Lex', 'Yacc', 'Node.js', 'Parsing'],
    category: 'tools',
    github: 'https://github.com/adarsh9056',
    githubLabel: 'GitHub Profile',
    live: null,
    livePlaceholder: true,
  },
]

export const ACHIEVEMENTS = [
  {
    title: 'Top 3 — 24 Hour Hackathon',
    detail: '2023',
    description: 'Recognized among top teams for rapid prototyping and technical execution.',
  },
]

export const CERTIFICATIONS = [
  {
    title: 'Google Cloud Fundamentals',
    issuer: 'Google Cloud',
    link: 'https://drive.google.com/file/d/1SyxmBvVy4Uct2JnuqJpgqYKnKnpd7hV3/view',
    linkPlaceholder: false,
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    link: 'https://drive.google.com/file/d/1Fonun-Ch33zCXDP-rTrJzyFjZjWoS4Qy/view',
    linkPlaceholder: false,
  },
]
