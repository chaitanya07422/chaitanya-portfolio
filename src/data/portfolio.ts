export const portfolioData = {
  personal: {
    name: "Kadavakollu Chaitanya",
    title: "Software Developer | AI & ML Enthusiast | Problem Solver",
    email: "kadavakolluchaitanya@gmail.com",
    phone: "+91 8125859799",
    location: "Visakhapatnam, India",
    linkedin: "https://linkedin.com/in/kadavakollu-chaitanya",
    github: "https://github.com/kadavakollu-chaitanya",
    leetcode: "https://leetcode.com/kadavakollu-chaitanya"
  },

  education: [
    {
      institution: "Vignan's Institute of Information Technology",
      degree: "Electronics and Communication Engineering",
      cgpa: "8.5",
      location: "Visakhapatnam, India",
      duration: "2021 – 2025",
      current: true
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
    languages: ["Java (DSA)", "C", "Python"],
    tools: ["Git & GitHub", "IntelliJ IDEA", "Visual Studio Code"],
    webDevelopment: ["HTML", "CSS", "SQL", "React", "Tailwind CSS"],
    softwareDevelopment: ["Object-Oriented Programming (OOPs)", "Agile Methodologies"],
    softSkills: ["Excellent Communication", "People Management", "Better Presentation skills"]
  },

  experience: [
    {
      role: "C++ QML Developer",
      company: "Pocket Rocket Labs",
      duration: "June 2025 – Current",
      location: "Remote",
      current: true,
      description: "Working on Oriel, the system UI for Aura, an AI-powered handheld learning device for children.",
      responsibilities: [
        "Developed UI using Qt (QML + C++) and gRPC, optimized for embedded Linux systems",
        "Built various applications like Dashboard, Lulu (AI assistant), Browser, Games, Quiz, Podcasts, and Settings",
        "Key contributor to UI and backend implementation"
      ],
      technologies: ["Qt 6", "QML", "C++", "gRPC", "Protobuf", "Linux"]
    },
    {
      role: "AI-ML Intern",
      company: "Infosys",
      duration: "Nov 2024 – Jan 2025",
      location: "Remote",
      current: false,
      description: "Led a team of 12 interns in analyzing IMDb movie reviews using Python and ML techniques.",
      responsibilities: [
        "Analyzed IMDb movie reviews using Python and libraries like pandas, matplotlib, and nltk to derive insights",
        "Implemented NLP techniques for sentiment analysis and keyword frequency trends",
        "Collaborated with Team of 12 Interns as Team Lead, enhancing teamwork and communication skill"
      ],
      technologies: ["Python", "pandas", "matplotlib", "nltk", "NLP", "Sentiment Analysis"]
    }
  ],

  projects: [
    {
      title: "Oriel",
      subtitle: "System UI for AI-Powered Learning Device",
      category: "Current Project",
      description: "System UI for Aura, an AI-powered handheld learning device for children. Built with Qt 6 + QML, C++ backend, gRPC with Protobuf.",
      features: [
        "Dashboard with system monitoring",
        "AI assistant (Lulu) interface",
        "Kid-safe browser implementation", 
        "Interactive games and quizzes",
        "Podcast player with content management",
        "Device settings and parental controls"
      ],
      technologies: ["Qt 6", "QML", "C++", "gRPC", "Protobuf", "Linux"],
      status: "In Development",
      company: "Pocket Rocket Labs"
    },
    {
      title: "IMDb Review Analysis",
      subtitle: "AI & ML Sentiment Analysis",
      category: "Machine Learning",
      description: "Successfully completed an IMDb review sentiment analysis project to classify reviews as positive or negative, leveraging natural language processing (NLP) techniques.",
      features: [
        "Robust data preprocessing and feature engineering",
        "Tokenization, stop-word removal, and TF-IDF implementation",
        "Machine learning models: logistic regression and SVM",
        "Achieved 88% accuracy in sentiment classification"
      ],
      technologies: ["Python", "NLP", "scikit-learn", "pandas", "matplotlib"],
      status: "Completed",
      github: "#"
    },
    {
      title: "Landsat: Fly on your Fingertips",
      subtitle: "NASA Space Apps Challenge 2024 Finalist",
      category: "Web Application",
      description: "Built a web app that provides users with instant access to Landsat 8 and 9 satellite data, powered by NASA Earth Data, allowing easy data retrieval and visualization.",
      features: [
        "Real-time satellite data visualization",
        "Interactive map interface",
        "Data filtering and export capabilities",
        "NASA Space Apps Challenge 2024 Finalist - surpassing over 2,000 global entries"
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
      description: "Designed an AI-powered fall prediction system using IoT (ESP32 + MPU6050) and machine learning for real-time posture monitoring.",
      features: [
        "Real-time posture monitoring using IoT sensors",
        "Machine learning for fall risk prediction",
        "Personalized behavior analysis",
        "Enhanced elderly healthcare and safety"
      ],
      technologies: ["IoT", "ESP32", "MPU6050", "Machine Learning", "Python"],
      status: "Completed",
      github: "#"
    },
    {
      title: "Sentiment Analysis of Social Media Web App",
      subtitle: "ML & NLP Dashboard",
      category: "Machine Learning",
      description: "Designed and implemented a machine learning pipeline using DecisionTreeClassifier, achieving 92% accuracy in training and 72% accuracy in testing the model.",
      features: [
        "Machine learning pipeline with DecisionTreeClassifier",
        "Optimized NLP workflows with Spacy, NLTK, and TextBlob",
        "Interactive dashboard for sentiment visualization",
        "Enhanced user insights through precise text analysis"
      ],
      technologies: ["Python", "Machine Learning", "NLP", "Spacy", "NLTK", "TextBlob"],
      status: "Completed",
      github: "#"
    },
    {
      title: "Website on Aqua-Culture",
      subtitle: "Responsive Web Development",
      category: "Web Development",
      description: "Designed and developed a multi-page website showcasing aquatic animals suitable for farming, with feeding schedules and medicinal guidelines.",
      features: [
        "Multi-page responsive design",
        "Aquatic animal database with detailed information",
        "Feeding schedules and care guidelines",
        "User-friendly navigation and accessibility"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      github: "#"
    }
  ],

  achievements: [
    {
      title: "NASA Space Apps Challenge 2024 Finalist",
      description: "Landsat: Fly on Your Fingertips project reached the grand finals, distinguishing itself among 2,000+ entries for innovative satellite data accessibility.",
      date: "2024",
      category: "Competition",
      role: "Team Lead"
    },
    {
      title: "Team Lead - Infosys Internship",
      description: "Successfully led a team of 12 interns in AI-ML project, enhancing teamwork and communication skills.",
      date: "2024-2025",
      category: "Leadership"
    }
  ],

  certifications: [
    {
      name: "CMOS Digital VLSI Design",
      platform: "NPTEL",
      date: "JAN 2024",
      verificationLink: "#"
    },
    {
      name: "Introduction to Java and Object-Oriented Programming",
      platform: "Coursera",
      date: "OCT 2023",
      verificationLink: "#"
    },
    {
      name: "Introduction to Networking",
      platform: "CISCO Network Academy",
      date: "APR 2023",
      verificationLink: "#"
    },
    {
      name: "Artificial Intelligence Primer Certification",
      platform: "Infosys",
      date: "OCT 2024",
      verificationLink: "#"
    }
  ]
};