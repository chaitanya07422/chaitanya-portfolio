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
      "pgvector",
      "Redis (Pub/Sub, caching, rate-limiting)",
      "Qdrant (vector search)",
    ],
    aiLlm: [
      "RAG",
      "Hybrid Search (BM25 + Vector + RRF)",
      "Vertex AI (Gemini Flash)",
      "Semantic Search",
      "Prompt Engineering",
      "CrewAI",
      "Langfuse",
      "Microsoft Presidio",
      "Google Model Armor",
    ],
    practices: [
      "System Design",
      "Transactional Outbox",
      "Agile (Scrum, Sprint Planning)",
      "Distributed Systems Design",
    ],
  },

  experience: [
    {
      role: "Software Engineer",
      company: "Pocket Rocket Labs",
      employmentType: "Full-Time",
      duration: "Mar 2025 – Present",
      location: "Visakhapatnam, India",
      current: true,
      description:
        "Engineer backend microservices, AI/LLM pipelines, and production cloud infrastructure for Oriel — a distributed educational platform serving children aged 5–14 on GCP.",
      responsibilityGroups: [
        {
          title: "Cloud & Infrastructure",
          items: [
            "Managed GCP Ubuntu production instances using Docker, PM2, systemd, Nginx, and GitHub Actions CI/CD, maintaining 99.9% infrastructure uptime",
            "Deployed Microsoft Presidio as Python systemd services and integrated Presidio with Google Model Armor on the child-facing safety path",
            "Operated Qdrant on bare-metal GCP Ubuntu VMs for vector search workloads alongside containerized microservice deploys",
          ],
        },
        {
          title: "Backend Architecture",
          items: [
            "Architected a distributed Oriel backend: 4 NestJS microservices (core API, AI chatbot, tutor, analytics) plus a Python CrewAI worker for parent insights — gRPC for the child device, REST for the parent portal",
            "Hardened async jobs against retries, cron re-runs, and duplicate webhooks with a transactional outbox, dedupe keys, stable BullMQ job IDs, and a PostHog insert-id ledger",
            "Resolved recurring 504s and Vertex AI throttling with staggered job delays and worker concurrency limits",
            "Improved p95 API latency by 40% (250ms → 150ms) through MongoDB restructuring, pre-aggregated analytics, and targeted Redis caching",
            "Designed multi-tenant sharded Qdrant collections ensuring data isolation and horizontal scalability",
            "Built the child-facing device interface in Qt/QML and C++, and a parent analytics dashboard in Next.js",
          ],
        },
        {
          title: "AI Performance Engineering",
          items: [
            "Cut AI chat response latency from ~9s to ~5s by optimizing context assembly and integrating Vertex AI (Gemini Flash)",
            "Lowered LLM token usage by ~63% with rolling-window summarization and contextual memory retrieval",
            "Reduced Qdrant memory ~70% (~24% lower cloud cost) via 8-bit scalar quantization",
            "Built an LLM observability layer with Langfuse for end-to-end tracing of prompts, responses, and execution flows",
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
        "CrewAI",
        "Langfuse",
        "Microsoft Presidio",
        "Google Model Armor",
        "Qt/QML",
        "C++",
        "Next.js",
        "Docker",
        "GCP",
        "GitHub Actions",
        "PM2",
        "Systemd",
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
      title: "StanceHub",
      subtitle: "Self-Hostable Organizational Meeting Memory",
      category: "AI Platform",
      featured: true,
      description:
        "Self-hostable meeting intelligence platform — ingest transcripts into an org-scoped vault, answer natural-language questions with citations grounded in source excerpts, and extract summaries plus action items. Built for teams that want durable meeting memory without surrendering data to a vendor cloud.",
      architectureGroups: [
        {
          title: "Ingest → Vault → Cited Ask",
          items: [
            "Upload-first ingest for .txt / .vtt / .srt transcripts into an org-scoped Postgres vault",
            "Chunk → embed → hybrid retrieve (BM25 + pgvector) fused with Reciprocal Rank Fusion",
            "Cited Q&A over an OpenAI-compatible chat model — answers must ground in retrieved spans; empty retrieval returns a clear miss",
            "Auto summary + structured action-item extraction into a simple task list with status updates",
          ],
        },
        {
          title: "Reliability & Multi-Tenancy",
          items: [
            "Transactional job outbox so embed/summarize intents survive Redis blips; BullMQ workers drain on boot + interval",
            "Generation tokens so stale workers cannot overwrite newer embed/summarize results after retries or crashes",
            "Org-scoped RBAC (Admin / Member) via Better Auth; fail-closed application authz on every vault query",
            "Optional PostgreSQL Row-Level Security as defense-in-depth alongside app-level organizationId filters",
            "Audit trail for privileged actions; per-user / per-org ask rate limits with fail-closed behavior when Redis is down",
          ],
        },
        {
          title: "Monorepo & Self-Host",
          items: [
            "TypeScript pnpm monorepo: Next.js 15 App Router (UI + HTTP), BullMQ worker, pure @stancehub/ai package (no DB/Redis coupling)",
            "Postgres 16 + pgvector as system of record; Redis only as job broker — Docker Compose boots the CE stack",
            "Customer-controlled LLM + embedding endpoints via OpenAI-compatible base URLs (local or cloud)",
          ],
        },
      ],
      outcomes: [
        "Cited answers grounded in meeting transcript spans — not free-form LLM guesses",
        "Durable async pipelines (outbox + generation tokens) that survive retries without corrupting newer results",
        "Real self-host path: Docker Compose CE with auth, RBAC, audit, and operator-owned LLM endpoints",
      ],
      features: [
        "Org vault with transcript ingest, hybrid search, and cited ask",
        "Embed + summarize workers with transactional outbox and generation tokens",
        "Admin/Member RBAC with optional Postgres RLS",
        "Meeting summaries, action items, and task status updates",
        "Docker Compose self-host with OpenAI-compatible LLM config",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "pgvector",
        "Redis",
        "BullMQ",
        "Drizzle ORM",
        "Better Auth",
        "Docker Compose",
        "pnpm",
        "Turborepo",
      ],
      status: "In Development",
      duration: "2026 – Present",
    },
    {
      title: "Local AI Video Studio",
      subtitle: "Self-Hosted AI Content OS for Educational YouTube Videos",
      category: "AI Platform",
      description:
        "Self-hosted AI content operating system that turns a single topic into a production-ready educational YouTube Short — orchestrating GPT script generation, Stable Diffusion XL images, Kokoro TTS narration, Whisper subtitles, Remotion composition, and FFmpeg MP4 rendering on a resumable pipeline.",
      features: [
        "Multi-stage AI video pipeline from topic to rendered MP4 (Shorts + Deep Dive)",
        "Local SDXL image generation, Kokoro TTS narration, and Whisper subtitles",
        "Remotion scene composition with FFmpeg export",
        "Prompt templates with per-project overrides and configurable voice settings",
        "GitHub Actions + GHCR image publishing for self-hosted deploy",
      ],
      technologies: [
        "FastAPI",
        "React",
        "Redis",
        "RQ",
        "Stable Diffusion XL",
        "Kokoro TTS",
        "Whisper",
        "Remotion",
        "FFmpeg",
        "Docker",
        "GitHub Actions",
        "GHCR",
      ],
      status: "In Development",
      duration: "2026 – Present",
      github: "https://github.com/chaitanya07422/local-ai-video-studio",
    },
    {
      title: "JobPilot AI",
      subtitle: "AI-Powered Job Application Automation",
      category: "SaaS Platform",
      description:
        "Full-stack job application automation system — resume intelligence and Qdrant vector matching via Gemini, NestJS API orchestration, and a Playwright apply worker with Telegram-assisted approvals. API hosted on OCI; browser worker runs on a separate home machine.",
      features: [
        "NestJS modular monolith with MongoDB, Redis/BullMQ, and Qdrant",
        "Resume extract → embed → cosine job matching with Gemini",
        "Playwright apply worker (Greenhouse-focused) with Telegram OTP support",
        "React user app + admin UI; billing/insights UI still mocked pending payments",
        "GitHub Actions CI/CD with Docker-based API deploy to OCI",
      ],
      technologies: [
        "NestJS",
        "React",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Qdrant",
        "Gemini",
        "Playwright",
        "OCI",
        "Docker",
        "Nginx",
      ],
      status: "In Development",
      duration: "2026 – Present",
      github: "https://github.com/chaitanya07422/jobpilot-backend",
    },
    {
      title: "OCI Self-Hosted Platform",
      subtitle: "Cloud Infrastructure & DevOps",
      category: "Cloud Infrastructure",
      description:
        "Provisioned and operated a production-grade self-hosted platform on Oracle Cloud Free Tier, serving as infrastructure for personal and professional projects.",
      features: [
        "Operate a self-hosted server on OCI Free Tier for personal project workloads",
        "Provisioned OCI compute instances with VCN networking, security lists, and IAM policies",
        "Configured Nginx Proxy Manager for SSL termination and domain mapping across services",
        "Deployed Portainer for Docker container management and monitoring",
        "Optimized a 1 GB RAM instance with an 8 GB swap file for stability under load",
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
      duration: "Mar 2025 – Present",
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
