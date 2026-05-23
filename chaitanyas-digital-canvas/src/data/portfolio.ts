export const portfolioData = {
  personal: {
    name: "Kadavakollu Chaitanya",
    title: "Software Developer | PocketRocket Labs",
    email: "kadavakolluchaitanya@gmail.com",
    phone: "+91 8125859799",
    location: "Visakhapatnam, India",
    linkedin: "https://linkedin.com/in/kadavakollu-chaitanya",
    github: "https://github.com/kadavakollu-chaitanya",
    leetcode: "https://leetcode.com/kadavakollu-chaitanya",
    bio: "Software Developer based in Visakhapatnam, India, with a B.Tech in Electronics and Communication Engineering from Vignan's Institute of Information Technology (CGPA 8.5). Currently employed full-time at PocketRocket Labs, developing end-to-end learning applications for Oriel (Kea)—an educational platform deployed on handheld devices for children aged 5–14. Work spans embedded frontend development (Qt/QML, C++), backend systems (NestJS, MongoDB, Redis), AI engineering (Vertex AI, Qdrant), and cloud infrastructure on Google Cloud. Previously served as Team Lead for a 12-member intern cohort at Infosys on an AI/ML sentiment analysis initiative. NASA Space Apps Challenge 2024 Finalist.",
    shortBio: "Full-Time Software Developer at PocketRocket Labs, engineering Oriel (Kea)—an AI-powered educational platform for children aged 5–14. Specializes in Qt/QML, NestJS, Vertex AI, and Google Cloud infrastructure."
  },

  education: [
    {
      institution: "Vignan's Institute of Information Technology",
      degree: "Electronics and Communication Engineering",
      cgpa: "8.5",
      location: "Visakhapatnam, India",
      duration: "2021 – 2025",
      current: false
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate",
      cgpa: "9.3",
      location: "Gudavalli, India",
      duration: "2019 – 2021",
      current: false
    },
    {
      institution: "Narayana Techno School",
      degree: "10th Class",
      cgpa: "98%",
      location: "Avanigadda, India",
      duration: "2019",
      current: false
    }
  ],

  skills: {
    languages: ["C++", "TypeScript", "Java (DSA)", "C", "Python", "JavaScript"],
    frontend: ["Qt 6", "QML", "React", "HTML", "CSS", "Tailwind CSS"],
    backend: ["NestJS", "Node.js", "MongoDB", "Redis", "gRPC", "SQL", "Fastify"],
    ai: ["Vertex AI (Gemini Flash)", "Qdrant", "NLP", "Vector Search", "LLM Optimization"],
    devops: ["Docker", "PM2", "Google Cloud", "PostHog", "Linux", "CI/CD"],
    tools: ["Git & GitHub", "IntelliJ IDEA", "Visual Studio Code", "Qt Creator"],
    softSkills: ["Communication", "Team Leadership", "Technical Presentation"]
  },

  experience: [
    {
      role: "Software Developer",
      company: "PocketRocket Labs",
      employmentType: "Full-Time",
      duration: "June 2025 – Present",
      location: "Remote",
      current: true,
      description: "Develop learning applications for Oriel (Kea), an educational platform on handheld devices serving children aged 5–14. Responsibilities span product engineering, backend infrastructure, AI optimization, and DevOps.",
      responsibilityGroups: [
        {
          title: "Product & Frontend",
          items: [
            "Engineered the child-facing application in Qt/QML and C++, delivering an AI tutor, podcasts, journals, quizzes, and a secure browser",
            "Designed and implemented a parent dashboard with real-time progress tracking synchronized to child device activity",
            "Partnered with designers and educators to align the AI tutor with NCERT curriculum standards, with content adapted by age group and performance metrics"
          ]
        },
        {
          title: "Backend & Infrastructure",
          items: [
            "Architected backend services using NestJS, Node.js, MongoDB, Redis, and gRPC APIs for real-time communication, content delivery, and progress tracking",
            "Provisioned cloud infrastructure on Google Cloud and Vertex AI to support large-scale adaptive AI content generation",
            "Managed deployment pipelines with Docker and PM2; implemented product analytics via PostHog"
          ]
        },
        {
          title: "AI Performance Engineering",
          items: [
            "Reduced conversational AI response latency by 42% (9s to 5s) through parallel execution and intelligent context management",
            "Decreased LLM token consumption by 63% via rolling-window history and incremental summarization",
            "Architected a Qdrant vector database handling 100K+ memory vectors with HNSW indexing—sub-5ms search latency and 70% RAM reduction through int8 quantization",
            "Designed multi-tenant sharded collections to ensure data isolation and horizontal scalability"
          ]
        }
      ],
      responsibilities: [],
      technologies: ["Vertex AI (Gemini Flash)", "Qdrant", "Qt/QML", "C++", "TypeScript", "NestJS", "MongoDB", "Redis", "Docker", "Google Cloud", "gRPC", "PostHog", "PM2"]
    },
    {
      role: "AI-ML Intern",
      company: "Infosys",
      duration: "Nov 2024 – Jan 2025",
      location: "Remote",
      current: false,
      description: "Led a 12-member intern team in developing an IMDb movie review analysis system using Python and machine learning techniques.",
      responsibilities: [
        "Conducted sentiment analysis and keyword frequency analysis on IMDb movie reviews using Python, pandas, matplotlib, and NLTK",
        "Applied NLP techniques including tokenization, feature extraction, and trend analysis to derive actionable insights",
        "Directed a cross-functional team of 12 interns, coordinating deliverables and ensuring project milestones were met on schedule"
      ],
      technologies: ["Python", "pandas", "matplotlib", "nltk", "NLP", "Sentiment Analysis"]
    }
  ],

  projects: [
    {
      title: "Oriel (Kea)",
      subtitle: "AI-Powered Educational Platform",
      category: "Current Project",
      description: "Full-stack educational platform deployed on handheld devices for children aged 5–14, encompassing Qt/QML client applications, NestJS backend services, Vertex AI tutoring, and Google Cloud infrastructure.",
      features: [
        "Child-facing application featuring AI tutor, podcasts, journals, quizzes, and a secure browser",
        "Parent dashboard with real-time progress tracking synchronized to device activity",
        "AI tutor aligned with NCERT curriculum standards, with adaptive content by age group and performance",
        "Backend architecture built on NestJS, MongoDB, Redis, and gRPC for real-time communication",
        "42% reduction in AI response latency and 63% decrease in LLM token consumption through performance optimization",
        "Qdrant vector database supporting 100K+ memory vectors with sub-5ms search latency"
      ],
      technologies: ["Vertex AI (Gemini Flash)", "Qdrant", "Qt/QML", "C++", "TypeScript", "NestJS", "MongoDB", "Redis", "Docker", "Google Cloud", "gRPC", "PostHog", "PM2"],
      status: "In Development",
      company: "PocketRocket Labs"
    },
    {
      title: "IMDb Review Analysis",
      subtitle: "AI & ML Sentiment Analysis",
      category: "Machine Learning",
      description: "Developed a sentiment classification system for IMDb movie reviews using natural language processing, achieving 88% classification accuracy.",
      features: [
        "Implemented data preprocessing pipelines and feature engineering workflows",
        "Applied tokenization, stop-word removal, and TF-IDF vectorization",
        "Evaluated logistic regression and SVM models for binary sentiment classification",
        "Achieved 88% accuracy on held-out review data"
      ],
      technologies: ["Python", "NLP", "scikit-learn", "pandas", "matplotlib"],
      status: "Completed",
      github: "#"
    },
    {
      title: "Landsat: Fly on your Fingertips",
      subtitle: "NASA Space Apps Challenge 2024 Finalist",
      category: "Web Application",
      description: "Developed a web application providing on-demand access to Landsat 8 and 9 satellite imagery via NASA Earth Data APIs, with interactive visualization and data export capabilities.",
      features: [
        "Real-time satellite imagery visualization and rendering",
        "Interactive geospatial map interface with layer controls",
        "Data filtering, query, and export functionality",
        "Selected as NASA Space Apps Challenge 2024 Finalist among 2,000+ global submissions"
      ],
      technologies: ["JavaScript", "HTML", "CSS", "NASA APIs"],
      status: "Completed",
      achievement: "NASA Space Apps 2024 Finalist",
      github: "#"
    },
    {
      title: "Smart Diagnostic System for Sciatica",
      subtitle: "AI & IoT Health Solution",
      category: "IoT & AI",
      description: "Designed an IoT-enabled posture monitoring system using ESP32 and MPU6050 sensors, integrated with machine learning models for real-time fall risk prediction.",
      features: [
        "Continuous posture monitoring via embedded IoT sensor arrays",
        "Machine learning models for fall risk assessment and prediction",
        "Behavioral pattern analysis with personalized risk profiling",
        "Applied to elderly healthcare monitoring and safety applications"
      ],
      technologies: ["IoT", "ESP32", "MPU6050", "Machine Learning", "Python"],
      status: "Completed",
      github: "#"
    },
    {
      title: "Sentiment Analysis of Social Media Web App",
      subtitle: "ML & NLP Dashboard",
      category: "Machine Learning",
      description: "Built an end-to-end machine learning pipeline for social media sentiment analysis, achieving 92% training accuracy and 72% test accuracy using a DecisionTreeClassifier.",
      features: [
        "End-to-end ML pipeline with DecisionTreeClassifier and evaluation framework",
        "NLP preprocessing workflows using spaCy, NLTK, and TextBlob",
        "Interactive dashboard for real-time sentiment visualization",
        "Structured text analysis pipeline for actionable user insight extraction"
      ],
      technologies: ["Python", "Machine Learning", "NLP", "Spacy", "NLTK", "TextBlob"],
      status: "Completed",
      github: "#"
    },
    {
      title: "Aquaculture Information Portal",
      subtitle: "Responsive Web Application",
      category: "Web Development",
      description: "Developed a multi-page responsive web application cataloging aquaculture species, including feeding schedules, care guidelines, and medicinal recommendations.",
      features: [
        "Multi-page responsive layout optimized for desktop and mobile",
        "Structured database of aquaculture species with detailed specifications",
        "Documented feeding schedules and health management guidelines",
        "Accessible navigation architecture with semantic HTML structure"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      github: "#"
    }
  ],

  achievements: [
    {
      title: "AI Latency Reduction — 42%",
      description: "Reduced conversational AI response latency from 9 seconds to 5 seconds at PocketRocket Labs through parallel execution and intelligent context management strategies.",
      date: "2025",
      category: "Engineering",
      role: "Software Developer"
    },
    {
      title: "LLM Token Optimization — 63% Reduction",
      description: "Reduced LLM token consumption by 63% through rolling-window history management and incremental summarization, significantly lowering AI inference costs.",
      date: "2025",
      category: "Engineering",
      role: "Software Developer"
    },
    {
      title: "NASA Space Apps Challenge 2024 Finalist",
      description: "Led the Landsat: Fly on Your Fingertips project to the NASA Space Apps Challenge 2024 grand finals, recognized among 2,000+ global submissions for satellite data accessibility innovation.",
      date: "2024",
      category: "Competition",
      role: "Team Lead"
    },
    {
      title: "Team Lead - Infosys Internship",
      description: "Led a 12-member intern team through an AI/ML project at Infosys, coordinating deliverables and driving team performance across the engagement.",
      date: "2024-2025",
      category: "Leadership"
    }
  ],

  certifications: [
    {
      name: "CMOS Digital VLSI Design",
      platform: "NPTEL",
      date: "JAN 2024",
      verificationLink: "https://www.linkedin.com/posts/chaitanya-kadavakollu-354084278_cmos-digital-vlsi-activity-7195371126049366016-aDLw/?utm_source=combined_share_message&utm_medium=member_desktop"
    },
    {
      name: "Introduction to Java and Object-Oriented Programming",
      platform: "Coursera",
      date: "OCT 2023",
      verificationLink: "https://www.coursera.org/account/accomplishments/verify/P6CES79LZ9C4"
    },
    {
      name: "Introduction to Networking",
      platform: "CISCO Network Academy",
      date: "APR 2023",
      verificationLink: "https://www.credly.com/badges/888f22f1-4cce-4ec2-976b-44735c7a1815/linked_in_profile"
    },
    {
      name: "Artificial Intelligence Primer Certification",
      platform: "Infosys",
      date: "OCT 2024",
      verificationLink: "https://infyspringboard.onwingspan.com/web/en/login?ref=%2Fapp%2Fprofile%2Fcompetency%2Fcertification%23iss%3Dhttps:%2F%2Finfyspringboard.onwingspan.com%2Fauth%2Frealms%2Finfyspringboard"
    }
  ]
};
