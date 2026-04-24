export const personalInfo = {
    name: 'Chaitanya Sai Juturi',
    firstName: 'Chaitanya',
    role: 'Full Stack Developer & Cloud Architect',
    tagline: 'I architect systems that scale, ship code that lasts.',
    email: 'jchaitu98@gmail.com',
    phone: '816-614-4800',
    linkedin: 'https://linkedin.com/in/chaitanya-juturi/',
    github: 'https://github.com/',
    location: 'Kansas City, MO',
    yearsExperience: '4+',
    projectsBuilt: '50+',
    countriesWorked: '3',
}

export const typewriterTexts = [
    'Full Stack Developer',
    'Cloud Architect',
    'Microservices Engineer',
    'DevOps Enthusiast',
    'Problem Solver',
]

export const aboutBio =
    "I'm a Full Stack Developer with 4+ years of hands-on experience architecting and shipping scalable systems at Nokia and Duracell. From IoT platforms powering telecom operators across Europe to cloud-native APIs handling millions of transactions, I build systems that work at scale. Passionate about clean code, DevOps excellence, and solving complex engineering challenges."

export const skills = [
    {
        category: 'Languages',
        color: '#06b6d4',
        icon: '⚡',
        items: ['Java', 'TypeScript', 'JavaScript (ES6+)', 'Python'],
    },
    {
        category: 'Frontend',
        color: '#a855f7',
        icon: '🎨',
        items: ['React.js', 'Redux', 'Next.js', 'HTML5', 'CSS3', 'Tailwind'],
    },
    {
        category: 'Backend',
        color: '#06b6d4',
        icon: '🔧',
        items: ['Node.js', 'Express.js', 'Spring Boot', 'GraphQL', 'REST APIs', 'WebSocket'],
    },
    {
        category: 'Cloud & DevOps',
        color: '#f59e0b',
        icon: '☁️',
        items: ['AWS Lambda', 'EC2', 'S3', 'RDS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    },
    {
        category: 'Databases',
        color: '#22c55e',
        icon: '🗄️',
        items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Redis'],
    },
    {
        category: 'Testing & Monitoring',
        color: '#f59e0b',
        icon: '🔍',
        items: ['Jest', 'Cypress', 'Selenium', 'ELK Stack', 'AppDynamics', 'CloudWatch'],
    },
]

export const experiences = [
    {
        role: 'Software Engineer',
        company: 'Duracell',
        companyShort: 'DURACELL',
        period: 'Aug 2024 — Present',
        duration: 'Present',
        location: 'Massachusetts, USA',
        type: 'Full-Time',
        color: '#06b6d4',
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
        role: 'Software Engineer',
        company: 'Nokia Solutions & Networks',
        companyShort: 'NOKIA',
        period: 'Aug 2021 — May 2023',
        duration: '~2 years',
        location: 'Bengaluru, India',
        type: 'Full-Time',
        color: '#a855f7',
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
        role: 'Associate Software Engineer',
        company: 'Nokia Solutions & Networks',
        companyShort: 'NOKIA',
        period: 'Aug 2020 — Jun 2021',
        duration: '~1 year',
        location: 'Bengaluru, India',
        type: 'Full-Time',
        color: '#f59e0b',
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

export const education = [
    {
        degree: 'Master of Science in Computer Science',
        school: 'University of Missouri–Kansas City',
        shortName: 'UMKC',
        period: 'December 2024',
        location: 'Kansas City, Missouri',
        gpa: '3.9 / 4.0',
        highlight: 'Graduate Research Assistant',
    },
    {
        degree: 'M.Tech, Integrated Software Engineering',
        school: 'Vellore Institute of Technology',
        shortName: 'VIT',
        period: 'June 2021',
        location: 'Vellore, India',
        gpa: '8.4 / 10',
    },
]

export const projects = [
    {
        id: 'midnightwish',
        title: 'Midnight Wish',
        subtitle: 'Birthday & Anniversary Reminder Platform',
        description:
            'A timezone-aware application that automates email reminders for upcoming birthdays and anniversaries. Built with a React Native mobile app and Next.js backend utilizing Vercel Cron jobs.',
        metric: '100% Reliable',
        metricLabel: 'Automated Alerts',
        color: '#ec4899',
        tags: ['React Native', 'Next.js', 'Vercel', 'Cron'],
        liveUrl: 'https://midnightwish.chayjuturi.com/',
        githubUrl: 'https://github.com/Chay039/Midnightwish',
        featured: true,
    },
    {
        id: 'cloudscale',
        title: 'CloudScale API Gateway',
        subtitle: 'Enterprise Microservices',
        description:
            'Enterprise-grade microservices API gateway built with Node.js and AWS Lambda. Handles request routing, authentication, rate limiting, and service discovery at scale.',
        metric: '99.99% uptime',
        metricLabel: 'Availability',
        color: '#06b6d4',
        tags: ['Node.js', 'AWS Lambda', 'Docker', 'REST', 'Microservices'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
    },

    {
        id: 'ecommerce',
        title: 'E-Commerce Platform',
        subtitle: 'Spring Boot + K8s',
        description:
            'Fully scalable platform with Spring Boot backend, Kubernetes orchestration, and PostgreSQL. Features product management, order processing, and payment integration.',
        metric: '40% faster',
        metricLabel: 'Order Processing',
        color: '#f59e0b',
        tags: ['Java', 'Spring Boot', 'Kubernetes', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
    },
    {
        id: 'cicd-pipeline',
        title: 'DevOps CI/CD Pipeline',
        subtitle: 'Zero-Downtime Deployment',
        description:
            'Automated deployment pipeline with Jenkins, Terraform, and Docker. Enables zero-downtime deployments across multiple environments with comprehensive monitoring.',
        metric: '30% faster',
        metricLabel: 'Release Cycles',
        color: '#22c55e',
        tags: ['Jenkins', 'Terraform', 'Docker', 'AWS'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
    },
]
