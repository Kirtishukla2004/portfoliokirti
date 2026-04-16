export const PERSONAL = {
  name: 'Kirti Shukla',
  title: 'Software Developer',
  location: 'Delhi, India',
  email: 'shuklakirti2004@gmail.com',
  phone: '+91 9667889788',
  linkedin: 'https://www.linkedin.com/in/kirtishukla2004/',
  github: 'https://github.com/Kirtishukla2004',
  bio: 'Backend & AI Integration developer crafting intelligent pipelines and scalable systems — from Azure to GPT-4, always shipping.',
  aboutLong: [
    "I'm a Software Developer at Navasso Technologies, Delhi, where I work on AI-powered document processing pipelines and enterprise web systems. My day-to-day involves designing backend APIs, tuning LLM prompts, and shipping features across microservices architectures.",
    "From ingesting multi-language vendor POs through GPT-4 to building real-time sentiment classification systems with Groq — I thrive where backend engineering meets intelligent systems.",
    "Currently pursuing MCA at IGNOU while building side projects that push the boundary of what's possible with AI + .NET.",
  ],
  currentWork: 'PO Distribution System — AI pipeline extracting structured data from multi-language vendor documents using GPT-4 and Azure services.',
}

export const HERO_PHRASES = [
  'Backend Developer',
  'AI Integration Engineer',
  'Full Stack Builder',
  '.NET & Azure Specialist',
]

export const HERO_STATS = [
  { value: '1+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '4',  label: 'Certifications' },
]

export const ABOUT_CARDS = [
  { icon: '⚙️', title: 'Backend Engineering', desc: 'REST APIs, microservices, C# / ASP.NET Core with clean architecture.' },
  { icon: '🤖', title: 'AI Integration', desc: 'GPT-4, Groq LLM, prompt engineering, RAG pipelines.' },
  { icon: '☁️', title: 'Azure Cloud', desc: 'Blob Storage, Queue, Functions, Logic Apps.' },
  { icon: '🎓', title: 'Always Learning', desc: 'MCA at IGNOU · CS50 AI · Google Cloud Architect 2025.', span: true },
]

export const SKILL_CATEGORIES = [
  {
    name: 'Backend', icon: '⚙️',
    skills: [
      { name: 'C# / ASP.NET Core', level: 90 },
      { name: 'ASP.NET MVC',       level: 85 },
      { name: 'REST API Design',   level: 88 },
      { name: 'Python / FastAPI',  level: 72 },
    ],
  },
  {
    name: 'Frontend', icon: '🎨',
    skills: [
      { name: 'Vue.js',              level: 78 },
      { name: 'React.js',            level: 75 },
      { name: 'Tailwind CSS',        level: 85 },
      { name: 'JavaScript / jQuery', level: 80 },
    ],
  },
  {
    name: 'Database & Cloud', icon: '☁️',
    skills: [
      { name: 'SQL Server / SSMS',  level: 88 },
      { name: 'Azure Blob & Queue', level: 82 },
      { name: 'Stored Procedures',  level: 85 },
      { name: 'Azure Functions',    level: 72 },
    ],
  },
  {
    name: 'AI / ML', icon: '🤖',
    skills: [
      { name: 'GPT-4 / Prompt Eng.',   level: 82 },
      { name: 'Groq LLM',              level: 78 },
      { name: 'Scikit-learn / Pandas', level: 70 },
      { name: 'RAG Pipelines',         level: 68 },
    ],
  },
]

export const TECH_CHIPS = [
  'C#', 'ASP.NET Core', 'Vue.js', 'React.js', 'SQL Server', 'Azure',
  'GPT-4', 'Groq', 'JWT', 'Knockout.js', 'Python', 'Git',
  'Microservices', 'Tailwind', 'SOLID', 'OpenCV',
]

export const PROJECTS = [
  {
    icon: '💼',
    title: 'Job Tracker Web App',
    desc: 'Full-stack job application tracker with JWT auth, email verification, token-expiry password reset, and Groq LLM integration generating role-specific interview questions.',
    stack: ['ASP.NET Core', 'SQL Server', 'Groq LLM', 'JWT'],
    github: 'https://github.com/Kirtishukla2004',
    live: 'https://jobtracker-indol.vercel.app/subscribe',
    color: '#13ae84',
  },
  {
    icon: '💬',
    title: 'Review Sentiment System',
    desc: 'Real-time review platform using Groq LLM for sentiment classification. Features moderated deletion flow, per-user rate limiting, and cursor-based pagination.',
    stack: ['Vue.js', 'Python FastAPI', 'Groq LLM'],
    github: 'https://github.com/Kirtishukla2004',
    live: 'https://reviewvibe.vercel.app/',
    color: '#36c99c',
  },
  {
    icon: '🏦',
    title: 'Banking Management System',
    desc: 'Desktop banking app with SQL-backed accounts, regression model predicting monthly spend, and facial recognition login via OpenCV Haar Cascade classifiers.',
    stack: ['Python', 'OpenCV', 'Scikit-learn', 'Tkinter'],
    github: 'https://github.com/Kirtishukla2004',
    live: null,
    color: '#088c6b',
  },
  {
    icon: '📄',
    title: 'PO Distribution System',
    desc: 'AI pipeline ingesting multi-language vendor purchase orders via email/PDF/image, extracting structured JSON via GPT-4, and pushing to booking platform.',
    stack: ['C#', 'ASP.NET Core', 'GPT-4', 'Azure', 'SQL Server'],
    github: 'https://github.com/Kirtishukla2004',
    live: null,
    color: '#7feacf',
  },
  {
    icon: '🛢️',
    title: 'Pipeline & Well Management',
    desc: 'Enterprise web app managing pipeline/well infrastructure — dynamic UI with Knockout.js, reporting APIs, stored procedures, and multi-module rendering.',
    stack: ['ASP.NET MVC', 'Knockout.js', 'jQuery', 'SQL Server'],
    github: 'https://github.com/Kirtishukla2004',
    live: null,
    color: '#13ae84',
  },
  {
    icon: '🌐',
    title: 'Client Websites (3)',
    desc: 'Built 3 responsive client websites from Figma designs during internship. Reusable animated components, mobile-first, delivered on time.',
    stack: ['React.js', 'Tailwind CSS', 'Figma'],
    github: 'https://github.com/Kirtishukla2004',
    live: null,
    color: '#36c99c',
  },
]

export const TIMELINE = [
  {
    title: 'Software Developer',
    org: 'Navasso Technologies, Delhi',
    period: 'Aug 2024 – Present',
    current: true,
    desc: 'Building AI-powered document ingestion pipelines and enterprise pipeline management systems across C#, ASP.NET Core, Azure, and GPT-4 in a microservices architecture.',
    tech: ['C#', 'ASP.NET Core', 'Azure', 'GPT-4', 'SQL Server'],
  },
  {
    title: 'Frontend Developer Intern',
    org: 'Technorate Animations, Delhi',
    period: 'Sep 2023 – Dec 2023',
    current: false,
    desc: 'Built 3 responsive client websites in React.js and Tailwind CSS from Figma designs. Delivered all projects on time with minimal revisions.',
    tech: ['React.js', 'Tailwind CSS'],
  },
  {
    title: 'Python & ML Intern',
    org: 'Tech Access, Delhi',
    period: 'Jun 2023 – Aug 2023',
    current: false,
    desc: 'Built a Tkinter banking app with SQL persistence and a scikit-learn regression model predicting monthly expenditure segmented by demographics.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'SQL'],
  },
  {
    title: 'MCA — Master of Computer Applications',
    org: 'IGNOU',
    period: 'Dec 2025 – Present',
    current: true,
    desc: 'Pursuing MCA while working full-time. Focus on advanced software engineering, distributed systems, and AI.',
    tech: [],
  },
  {
    title: 'BCA — Bachelor of Computer Applications',
    org: 'Guru Gobind Singh Indraprastha University',
    period: 'Jun 2021 – Jun 2024',
    current: false,
    desc: 'GPA: 8.5/10. Strong foundation in programming, databases, and software engineering.',
    tech: [],
  },
]

export const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/Kirtishukla2004' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kirtishukla2004/' },
  { label: 'Email',    href: 'mailto:shuklakirti2004@gmail.com' },
]
