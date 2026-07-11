export const portfolioData = {
  personal: {
    name: "Kadavakollu Chaitanya",
    title: "Software Engineer",
    company: "Pocket Rocket Labs",
    email: "kadavakolluchaitanya@gmail.com",
    phone: "+91 81258 59799",
    location: "Visakhapatnam, India",
    linkedin: "https://linkedin.com/in/chaitanya-kadavakollu",
    github: "https://github.com/chaitanya07422",
    leetcode: "https://leetcode.com/u/kadavakollu123/",
    website: "https://chaitanya-portfolio-2es6.vercel.app/",
    bio: "Software Engineer building production backend microservices, AI/LLM pipelines, and distributed cloud infrastructure. At Pocket Rocket Labs, I architect NestJS/gRPC services and RAG systems (Qdrant, Vertex AI/Gemini) powering Oriel, an AI-driven educational platform for children — focused on production reliability, low-latency inference, and cost-efficient LLM deployment. NASA Space Apps Challenge 2024 Global Finalist (Top 0.1%, Team Lead) and named inventor on a filed Indian patent for an AI-driven diagnostic system.",
    shortBio:
      "Building production backend microservices, AI/LLM pipelines, and RAG systems at Pocket Rocket Labs — NestJS, gRPC, Qdrant, Vertex AI/Gemini.",
    roles: [
      "Software Engineer",
      "Backend & AI Systems Engineer",
      "Cloud Infrastructure Engineer",
      "Distributed Systems Engineer",
    ],
  },

  highlights: [
    { value: "1.5+", label: "Years Experience" },
    { value: "99.9%", label: "Production Uptime" },
    { value: "63%", label: "LLM Cost Reduction" },
    { value: "Top 0.1%", label: "NASA Global Finalist" },
  ],

  education: [
    {
      institution: "Vignan's Institute of Information Technology",
      degree: "Bachelor of Engineering — Electronics & Communication Engineering",
      cgpa: "8.5 / 10",
      location: "Visakhapatnam, India",
      duration: "Aug 2021 – May 2025",
      current: false,
      coursework: [
        "Data Structures & Algorithms",
        "Computer Networks",
        "Embedded Systems",
        "Operating Systems",
        "Database Management Systems",
      ],
    },
  ],

  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
    cloudInfrastructure: [
      "OCI",
      "GCP",
      "Docker",
      "Docker Compose",
      "Portainer",
      "Nginx Proxy Manager",
      "PM2",
      "Systemd",
      "GitHub Actions CI/CD",
      "Linux (Ubuntu)",
      "Bash",
    ],
    ociAdministration: [
      "VM Provisioning (A1.Flex, Free Tier)",
      "Compute Instance Management",
      "Networking (VCN, Security Lists)",
      "IAM",
      "Reverse Proxy & SSL",
      "Load Balancing",
    ],
    backend: [
      "NestJS",
      "Fastify",
      "gRPC",
      "REST APIs",
      "Microservices Architecture",
      "BullMQ",
    ],
    databases: [
      "MongoDB",
      "PostgreSQL",
      "Redis (Pub/Sub, caching, rate-limiting)",
      "Qdrant (vector search)",
    ],
    aiLlm: [
      "RAG",
      "Vertex AI (Gemini Flash)",
      "Semantic Search",
      "Prompt Engineering",
      "Microsoft Presidio",
      "Google Model Armor",
    ],
    practices: [
      "System Design",
      "Agile (Scrum, Sprint Planning)",
      "Distributed Systems Design",
    ],
  },

  experience: [
    {
      role: "Software Engineer",
      company: "Pocket Rocket Labs",
      employmentType: "Full-Time",
      duration: "Sep 2025 – Present",
      location: "Visakhapatnam, India",
      current: true,
      description:
        "Engineer backend microservices, AI/LLM pipelines, and production cloud infrastructure for Oriel — a distributed educational platform serving children aged 5–14 on GCP.",
      responsibilityGroups: [
        {
          title: "Cloud & Infrastructure",
          items: [
            "Managed GCP Ubuntu production instances using PM2, systemd, and GitHub Actions, maintaining 99.9% infrastructure uptime",
            "Deployed Microsoft Presidio and Qdrant on bare-metal GCP Ubuntu VMs for PII redaction and vector search workloads",
            "Managed deployment pipelines with Docker, PM2, and systemd service orchestration",
          ],
        },
        {
          title: "Backend Architecture",
          items: [
            "Architected distributed backend services using NestJS microservices and gRPC for real-time communication and content delivery",
            "Resolved 504 Gateway Timeouts and API throttling by re-engineering BullMQ background job pipelines",
            "Improved p95 API latency by 40% (250ms → 150ms) through MongoDB restructuring and Redis caching",
            "Designed multi-tenant sharded Qdrant collections ensuring data isolation and horizontal scalability",
          ],
        },
        {
          title: "AI Performance Engineering",
          items: [
            "Reduced conversational AI response latency from 9s to 5s using Vertex AI, increasing session retention by 15%",
            "Lowered LLM token costs by 63% through a rolling-window summarization layer",
            "Reduced Qdrant vector DB memory usage by 70% and cloud costs by 24% via 8-bit scalar quantization",
          ],
        },
      ],
      responsibilities: [],
      technologies: [
        "NestJS",
        "gRPC",
        "BullMQ",
        "MongoDB",
        "Redis",
        "Qdrant",
        "Vertex AI (Gemini Flash)",
        "Microsoft Presidio",
        "Docker",
        "GCP",
        "GitHub Actions",
        "PM2",
        "Systemd",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Pocket Rocket Labs",
      duration: "Jun 2024 – Aug 2024",
      location: "Visakhapatnam, India",
      current: false,
      description:
        "Contributed to early Oriel product development — containerizing microservices, optimizing database performance, and building client-facing interfaces.",
      responsibilities: [
        "Containerized 5 internal microservices using Docker and implemented JWT authentication",
        "Reduced database query times by 35% through MongoDB schema redesign and Redis session management",
        "Built the child-facing device interface in Qt/QML and C++, and a parent analytics dashboard in Next.js",
      ],
      technologies: [
        "Docker",
        "NestJS",
        "MongoDB",
        "Redis",
        "Qt/QML",
        "C++",
        "Next.js",
      ],
    },
    {
      role: "Engineering Intern",
      company: "Bharat Electronics Limited (BEL)",
      duration: "Dec 2024 – Mar 2025",
      location: "Visakhapatnam, India",
      current: false,
      description:
        "Shadowed engineers in BEL's Electro Optics Division, gaining exposure to defence-grade firmware, signal processing, and real-time sensor systems.",
      responsibilities: [
        "Shadowed firmware and signal processing work for the T90 Tank Gunner Thermal Imager platform",
        "Observed design and testing for the Bharat Optronic Surveillance System, including real-time sensor data pipelines",
        "Gained exposure to hardware–software integration in mission-critical defence electronics",
      ],
      technologies: [
        "Embedded Systems",
        "Firmware Development",
        "Electro-Optics",
        "Defence Electronics",
      ],
    },
    {
      role: "AI-ML Intern",
      company: "Infosys",
      employmentType: "Part-Time",
      duration: "Nov 2024 – Jan 2025",
      location: "Remote",
      current: false,
      description:
        "Led a 12-member intern cohort building an NLP sentiment analysis system for large-scale text classification.",
      responsibilities: [
        "Developed an NLP sentiment analysis pipeline over 50,000+ text samples using TF-IDF, logistic regression, and SVM — achieving 88% classification accuracy",
        "Led a 12-person intern team through 4 Agile sprints, increasing project delivery velocity by 20%",
        "Applied tokenization, feature extraction, and model evaluation workflows for production-grade ML pipelines",
      ],
      technologies: ["Python", "NLP", "TF-IDF", "scikit-learn", "pandas", "Agile"],
    },
  ],

  projects: [
    {
      title: "JobPilot AI",
      subtitle: "AI-Powered Job Application Automation",
      category: "SaaS Platform",
      featured: true,
      description:
        "Full-stack SaaS platform for intelligent job application automation — resume-to-job vector matching, Playwright browser auto-fill, Telegram-gated approvals, and Stripe billing on a self-hosted dual-VM OCI architecture.",
      architectureGroups: [
        {
          title: "Dual-VM OCI Infrastructure",
          items: [
            "VM-1 (app stack): NestJS API, PostgreSQL, Redis, BullMQ, Nginx reverse proxy with SSL",
            "VM-2 (AI workloads): Gemini Flash inference, Qdrant embedding store, Python extraction workers",
            "Self-hosted GitHub Actions CI/CD — build, test, and deploy via Docker Compose with zero compute vendor lock-in",
          ],
        },
        {
          title: "AI & Matching Pipeline",
          items: [
            "Resume PDF extraction via Gemini with structured profile schema validation",
            "Qdrant vector search for semantic resume-to-job matching with configurable score thresholds",
            "LLM-powered job fit scoring and cover letter generation with token-optimized prompts",
          ],
        },
        {
          title: "Automation & Billing",
          items: [
            "Playwright worker for form auto-fill with human-in-the-loop Telegram approval gates",
            "Stripe integration with Free, Pro, and Enterprise subscription tiers",
            "BullMQ job queues for async apply workflows with retry and dead-letter handling",
          ],
        },
      ],
      outcomes: [
        "End-to-end pipeline from resume upload to automated application with operator oversight",
        "Sub-200ms vector search latency on self-hosted Qdrant instance",
        "Production deployment on OCI Free Tier with 100% uptime since launch",
      ],
      features: [
        "Dual-VM OCI architecture separating application stack and AI inference workloads",
        "Resume vector matching with Qdrant and LLM-powered job scoring via Gemini Flash",
        "Stripe payment integration with Free, Pro, and Enterprise subscription tiers",
        "Self-hosted GitHub Actions CI/CD pipeline with Docker-based deployments",
        "Playwright automation worker for form auto-fill with human-in-the-loop Telegram approvals",
      ],
      technologies: [
        "NestJS",
        "PostgreSQL",
        "Redis",
        "Qdrant",
        "Playwright",
        "Python",
        "OCI",
        "Nginx",
        "Docker",
        "Stripe",
      ],
      status: "In Development",
      duration: "2026 – Present",
      github: "https://github.com/chaitanya07422/jobpilot-ai",
    },
    {
      title: "OCI Self-Hosted Platform",
      subtitle: "Cloud Infrastructure & DevOps",
      category: "Cloud Infrastructure",
      description:
        "Provisioned and operated a production-grade self-hosted platform on Oracle Cloud Free Tier, serving as infrastructure for personal and professional projects.",
      features: [
        "Administrating a self-hosted server on OCI Free Tier with 100% uptime",
        "Provisioned OCI compute instances with VCN networking, security lists, and IAM policies",
        "Configured Nginx Proxy Manager for SSL termination and domain mapping across services",
        "Deployed Portainer for Docker container management and monitoring",
        "Optimized a 1 GB RAM instance with an 8 GB swap file for production stability under load",
      ],
      technologies: [
        "OCI",
        "Ubuntu",
        "Docker",
        "Portainer",
        "Nginx Proxy Manager",
        "Bash",
      ],
      status: "Active",
      duration: "2026 – Present",
    },
    {
      title: "Oriel",
      subtitle: "Distributed Educational Platform",
      category: "Production Platform",
      description:
        "End-to-end owner of backend microservices and AI chatbot pipeline for a GCP-deployed educational platform serving children aged 5–14, with per-child long-term memory for personalized tutoring.",
      features: [
        "NestJS microservices with gRPC, MongoDB, and Redis for real-time content delivery",
        "Long-term per-child dialogue memory store using Qdrant vector search for contextual AI responses",
        "Auto-adjusting vocabulary system based on the child's age and reading level",
        "Vertex AI (Gemini Flash) integration with 63% token cost reduction through optimized context management",
        "Child-facing Qt/QML application and parent dashboard with real-time progress synchronization",
        "99.9% production uptime on GCP Ubuntu instances with Docker and PM2 orchestration",
      ],
      technologies: [
        "NestJS",
        "gRPC",
        "MongoDB",
        "Redis",
        "Qdrant",
        "Vertex AI",
        "Qt/QML",
        "C++",
        "GCP",
        "Docker",
      ],
      status: "In Development",
      company: "Pocket Rocket Labs",
      duration: "Jun 2024 – Present",
    },
    {
      title: "Early Sciatica Detection",
      subtitle: "AI & IoT Healthcare Diagnostics",
      category: "IoT & AI",
      description:
        "Wearable IoT system using ESP32 and MPU-6050 sensors with machine learning for early sciatica detection — recognized with a published Indian patent application.",
      features: [
        "Continuous posture and gait monitoring via ESP32 with MPU-6050 IMU sensor arrays",
        "Random Forest classifier trained for gait abnormality and early sciatica risk detection",
        "Historical tracking with motion data streamed to cloud for dataset generation",
        "Published as Indian Patent Application No. 202541034485 A (Lead Inventor)",
      ],
      technologies: [
        "ESP32",
        "MPU-6050",
        "Python",
        "Random Forest",
        "IoT",
        "Machine Learning",
      ],
      status: "Completed",
      achievement: "Indian Patent — Lead Inventor",
      duration: "2024 – 2025",
    },
    {
      title: "NASA Landsat: Fly on Your Fingertips",
      subtitle: "Satellite Imagery Visualization Platform",
      category: "Competition",
      description:
        "Real-time Landsat 8/9 satellite imagery visualization platform built for the NASA Space Apps Challenge 2024, providing on-demand geospatial data access via NASA Earth Data APIs.",
      features: [
        "Real-time Landsat 8 and 9 satellite imagery rendering and visualization",
        "Interactive geospatial map interface with layer controls and data export",
        "NASA Space Apps Challenge 2024 Global Finalist — Top 0.1% among 2,000+ teams worldwide",
        "Led cross-functional team as Team Lead through design, development, and presentation phases",
      ],
      technologies: [
        "Python",
        "NASA Earth Data API",
        "JavaScript",
        "Geospatial Visualization",
      ],
      status: "Completed",
      achievement: "NASA Space Apps 2024 Global Finalist",
      duration: "Oct 2024",
    },
  ],

  patent: {
    number: "Indian Patent Application No. 202541034485 A",
    title:
      "AI-Driven Smart Diagnostic System for Early Sciatica Detection Using Non-Invasive Sensors",
    filed: "Apr 2025",
    published: "May 2025",
    inventors:
      "Kadavakollu Chaitanya (Lead Inventor), Dr. A. Sampath Dakshina Murthy, and 5 others",
    journal: "The Patent Office Journal No. 19/2025",
  },

  achievements: [
    {
      title: "NASA Space Apps Challenge 2024",
      subtitle: "Global Finalist — Top 0.1%",
      description:
        "Led the Landsat: Fly on Your Fingertips team to the NASA Space Apps Challenge 2024 grand finals. Ranked in the top 0.1% among 2,000+ global submissions for building a real-time Landsat 8/9 satellite imagery visualization platform with NASA Earth Data APIs.",
      date: "Oct 2024",
      category: "Competition",
      role: "Team Lead",
      featured: true,
      stats: ["Top 0.1%", "2,000+ teams", "Global Finalist"],
    },
    {
      title: "Published Indian Patent",
      subtitle: "Application No. 202541034485 A",
      description:
        "Named lead inventor on a published Indian patent for an AI-driven non-invasive sciatica diagnostic system. Designed ESP32/MPU-6050 wearable IoT hardware with Random Forest gait classifiers for early abnormality detection.",
      date: "Apr – May 2025",
      category: "Patent",
      role: "Lead Inventor",
      featured: true,
      stats: ["Lead Inventor", "Published 2025", "IoT + ML"],
    },
    {
      title: "AI Latency Reduction — 42%",
      description:
        "Reduced conversational AI response latency from 9 seconds to 5 seconds and improved session retention by 15% through parallel execution and intelligent context management.",
      date: "2025",
      category: "Engineering",
      role: "Software Engineer",
    },
    {
      title: "LLM Cost Optimization — 63% Token Reduction",
      description:
        "Decreased LLM token consumption by 63%, reduced vector DB memory by 70%, and lowered cloud costs by 24% through rolling-window summarization and int8 quantization.",
      date: "2025",
      category: "Engineering",
      role: "Software Engineer",
    },
    {
      title: "LeetCode — 188+ Problems Solved",
      description:
        "Solved 188+ algorithmic problems in Java with 50-Day Badges earned for both 2024 and 2025. Focus areas include Dynamic Programming, Graphs, and Binary Search.",
      date: "2024 – 2025",
      category: "Competitive Programming",
    },
    {
      title: "Team Lead — Infosys AI/ML Internship",
      description:
        "Directed a 12-member intern team through 4 Agile sprints on an NLP sentiment analysis project, increasing delivery velocity by 20%.",
      date: "2024 – 2025",
      category: "Leadership",
      role: "Team Lead",
    },
  ],

  certifications: {
    primary: [
      {
        name: "Google Cloud Skills Boost",
        platform: "Google Cloud",
        date: "2025",
        description:
          "GKE orchestration, Docker, Cloud Run, Rolling/Canary/Blue-Green deployments",
      },
      {
        name: "Artificial Intelligence Primer",
        platform: "Infosys Springboard",
        date: "Oct 2024",
        verificationLink:
          "https://infyspringboard.onwingspan.com/web/en/login?ref=%2Fapp%2Fprofile%2Fcompetency%2Fcertification%23iss%3Dhttps:%2F%2Finfyspringboard.onwingspan.com%2Fauth%2Frealms%2Finfyspringboard",
      },
    ],
    secondary: [
      {
        name: "CMOS Digital VLSI Design",
        platform: "NPTEL",
        date: "Jan 2024",
        verificationLink:
          "https://www.linkedin.com/posts/chaitanya-kadavakollu-354084278_cmos-digital-vlsi-activity-7195371126049366016-aDLw/",
      },
      {
        name: "Introduction to Networking",
        platform: "CISCO Network Academy",
        date: "Apr 2023",
        verificationLink:
          "https://www.credly.com/badges/888f22f1-4cce-4ec2-976b-44735c7a1815/linked_in_profile",
      },
      {
        name: "Introduction to Java and OOP",
        platform: "Coursera",
        date: "Oct 2023",
        verificationLink:
          "https://www.coursera.org/account/accomplishments/verify/P6CES79LZ9C4",
      },
    ],
  },
};
