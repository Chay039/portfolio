export interface Experience {
  role: string
  company: string
  period: string
  location: string
  description: string[]
  highlights: string[]
  tags: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface EducationEntry {
  degree: string
  school: string
  period: string
  location: string
  icon: string
}

export const personalInfo = {
  name: 'Chaitanya Sai Juturi',
  title: 'Full Stack Developer & Cloud Architect',
  tagline: 'I architect systems that scale, ship code that lasts.',
  email: 'jchaitu98@gmail.com',
  phone: '816-614-4800',
  linkedin: 'linkedin.com/in/chaitanya-juturi/',
  yearsExperience: '4+',
}

export const typewriterTexts = [
  'Full Stack Developer',
  'Cloud Architect',
  'Microservices Engineer',
  'Problem Solver',
]

export const aboutStats = [
  { label: '50+ Projects', value: '50+' },
  { label: '4+ Years', value: '4+' },
  { label: 'Countries', value: '3' },
  { label: 'CS Graduate', value: 'UMKC' },
]

export const aboutBio =
  "I'm a Full Stack Developer with 4+ years of hands-on experience architecting and shipping scalable systems at Nokia and Duracell. From IoT platforms powering telecom operators across Europe to cloud-native APIs handling millions of transactions, I've built systems that work at scale. I'm passionate about clean code, DevOps excellence, and solving complex engineering problems. When I'm not pushing commits, I'm probably debugging coffee."

export const aboutPersonality =
  "When I'm not pushing commits, I'm probably debugging coffee."

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'WebSocket',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'SQL Server'],
  },
  {
    category: 'Cloud',
    items: ['AWS Lambda', 'S3', 'RDS', 'EC2', 'API Gateway', 'Azure DevOps'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CloudFormation', 'Git'],
  },
  {
    category: 'Testing',
    items: ['Jest', 'Mocha', 'Chai', 'Selenium', 'Cypress', 'Postman', 'SoapUI'],
  },
  {
    category: 'Monitoring',
    items: ['ELK Stack', 'AppDynamics', 'CloudWatch'],
  },
  {
    category: 'Methodologies',
    items: ['Agile', 'Scrum', 'TDD', 'SDLC'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'SOFTWARE ENGINEER',
    company: 'Duracell',
    period: 'August 2024 – Present',
    location: 'Massachusetts, USA',
    description: [
      'Building scalable APIs and cloud infrastructure',
      'Optimizing performance and reliability',
      'Leading architectural initiatives',
    ],
    highlights: [
      'Cut API failure rates by 20% via Node.js/Express optimization',
      'Achieved zero-downtime deployments with Docker & Kubernetes on AWS EC2 Auto Scaling',
      'Boosted UI delivery speed by 30% with modular React components',
      'Reduced app downtime 15% using AppDynamics performance tuning',
      'Strengthened security with OAuth 2.0 & JWT (GDPR compliant)',
      'Centralized logging via ELK Stack for real-time traceability',
    ],
    tags: ['Node.js', 'Spring Boot', 'React', 'AWS', 'Docker', 'K8s', 'ELK'],
  },
  {
    role: 'SOFTWARE ENGINEER',
    company: 'Nokia Solutions & Networks',
    period: 'August 2021 – May 2023',
    location: 'Bengaluru, India',
    description: [
      'Built microservices for telecom infrastructure',
      'Supported 50+ operators across Europe',
      'Led automation and QA initiatives',
    ],
    highlights: [
      'Boosted transaction throughput 40% via AWS Lambda microservices',
      'Supported 50+ telecom operators across Europe (HDM platform)',
      'Improved system performance 20% with JS automation functions',
      'Accelerated release cycles by 30% via SoapUI automation',
      'Led Nokia × Vodafone Italy collaboration — 30% network mgmt boost',
      'Cut post-release defects 40% through advanced QA leadership',
    ],
    tags: ['Node.js', 'AWS Lambda', 'JavaScript', 'SoapUI', 'Linux'],
  },
  {
    role: 'ASSOCIATE SOFTWARE ENGINEER',
    company: 'Nokia Solutions & Networks',
    period: 'August 2020 – June 2021',
    location: 'Bengaluru, India',
    description: [
      'Mastered IoT and telecom platforms',
      'Built dashboards and automation tools',
      'Drove team productivity improvements',
    ],
    highlights: [
      'Mastered IoT platforms: IMPACT, HDM, IMPACT IoT',
      'Built custom IoT dashboard — 20% better data viz accuracy',
      'Reduced testing cycle time 30% through test automation',
      'Boosted team productivity 25% via platform expertise',
      'Cut dev onboarding time 40% with thorough documentation',
      'Achieved 98% on-time delivery across all product releases',
    ],
    tags: ['Angular', 'Java', 'HTML', 'CSS', 'IoT', 'SoapUI'],
  },
]

export const education: EducationEntry[] = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Missouri–Kansas City',
    period: 'December 2024',
    location: 'Kansas City, Missouri',
    icon: '🎓',
  },
  {
    degree: 'M.Tech, Integrated Software Engineering',
    school: 'Vellore Institute of Technology',
    period: 'June 2021',
    location: 'Vellore, India',
    icon: '🎓',
  },
]

export const projects: Project[] = [
  {
    id: 'cloudscale',
    title: 'CloudScale API Gateway',
    description:
      'Enterprise-grade microservices API gateway built with Node.js and AWS Lambda. Handles request routing, authentication, rate limiting, and service discovery.',
    tags: ['Node.js', 'AWS', 'Docker', 'REST', 'Microservices'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'iot-dashboard',
    title: 'Real-Time IoT Dashboard',
    description:
      'Live sensor data visualization platform using WebSocket for real-time updates. Built with React, MongoDB, and Chart.js for multi-device monitoring.',
    tags: ['React', 'WebSocket', 'MongoDB', 'Chart.js', 'Real-time'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Microservices Platform',
    description:
      'Scalable platform with Spring Boot backend, Kubernetes orchestration, and PostgreSQL. Features product management, order processing, and payment integration.',
    tags: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL', 'Microservices'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'cicd-pipeline',
    title: 'DevOps CI/CD Pipeline',
    description:
      'Automated deployment pipeline with Jenkins, Terraform, and Docker. Enables zero-downtime deployments across multiple environments with comprehensive monitoring.',
    tags: ['Jenkins', 'Terraform', 'Docker', 'AWS', 'DevOps'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export const socialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    url: '#',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com/in/chaitanya-juturi/',
  },
  {
    name: 'Email',
    icon: 'mail',
    url: 'mailto:jchaitu98@gmail.com',
  },
]
