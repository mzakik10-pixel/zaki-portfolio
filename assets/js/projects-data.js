// Portfolio Data extracted directly from Muhammad Zaki Kurniawan's Portfolio PDF
const portfolioData = {
  profile: {
    name: "Muhammad Zaki Kurniawan",
    shortName: "Zaki",
    headline: "Computer Science Student & Intelligent Systems Enthusiast",
    subtitle: "Developer & UX Designer",
    focus: "Intelligent Systems & Machine Learning",
    education: {
      university: "BINUS University",
      level: "Undergraduate Student",
      semester: "Fifth Semester",
      major: "Computer Science (Intelligent Systems Stream)"
    },
    organization: "HIMTI BINUS Commission One Study and Lecture Member",
    tagline: "I specialize at emerging machine learning models to create recommendation systems that understand everyone, including you.",
    phone: "+62 819 1988 1319",
    email: "muhammad.kurniawan018@binus.ac.id",
    linkedin: "https://linkedin.com/in/muhammad-zaki-kurniawan-b09b7a325",
    github: "https://github.com/mzakik10-pixel",
    pdfPath: "MuhammadZakiKurniawan_Portofolio_Academy.pdf",
    target: "Apple Developer Academy Indonesia Application"
  },
  skills: [
    { name: "Machine Learning & AI", category: "ai", items: ["Recommendation Systems", "Fine-Tuning (LoRA)", "Qwen LLMs", "Content-Based Filtering", "Demographic Filtering"] },
    { name: "Software & Web Development", category: "dev", items: ["Full-Stack Development", "Python", "JavaScript / TypeScript", "RESTful APIs", "FastAPI / Flask", "Interactive UIs"] },
    { name: "UI/UX & Product Design", category: "design", items: ["Figma Prototyping", "Information Architecture", "Visual Storytelling", "Design Systems", "User Research"] },
    { name: "Quality Assurance & Workflow", category: "qa", items: ["Usability Testing", "User Journey Mapping", "End-to-End Testing", "Project Leadership", "Agile Collaboration"] }
  ],
  projects: [
    {
      id: "gymbot",
      title: "GymBot",
      category: "ai",
      badge: "AI & Machine Learning",
      tagline: "AI Fitness Chatbot",
      role: "Web Developer",
      projectType: "Group Project",
      year: "2026",
      image: "assets/images/project-gymbot.png",
      pageRef: "Pages 11 & 12",
      github: "https://github.com/mzakik10-pixel/LoRA-Chatbot",
      summary: "GymBot is an AI-powered fitness chatbot built using a Qwen LoRA model. The chatbot is designed to provide users with personalized fitness guidance, such as workout recommendations based on their goals, available time, and training preferences.",
      highlights: [
        "Fine-tuned lightweight open-weight Qwen LLM using Low-Rank Adaptation (LoRA)",
        "Contextual prompt understanding for personalized workout schedules",
        "Interactive conversational UI with custom gym assistant responses"
      ],
      deepDive: {
        question1: "What Made the Model Useful to Its Users?",
        answer1: "GymBot provides an accessible way for users to ask fitness-related questions and receive responses tailored to their specific circumstances. Instead of relying solely on predefined answers, the chatbot uses a fine-tuned language model to understand user prompts and generate contextual responses.",
        question2: "What Did Training the Model Teach Me?",
        answer2: "This project gave me hands-on experience with the machine learning model training process. I learned how important factors such as dataset preparation, fine-tuning, and model configuration are in shaping the quality of an AI system. Building an AI requires understanding how to train and adapt the model correctly for a specific purpose."
      },
      tags: ["Qwen LLM", "LoRA Fine-Tuning", "NLP", "Python", "Web Development"]
    },
    {
      id: "hybrid-movie",
      title: "Hybrid Movie Recommender System 🎬",
      category: "ai",
      badge: "AI Recommendation",
      tagline: "Personalized Film Discovery Engine",
      role: "Web Developer",
      projectType: "Group Project",
      year: "2026",
      image: "assets/images/project-hybrid-movie.png",
      pageRef: "Pages 7 & 8",
      github: "https://github.com/mzakik10-pixel/Hybrid-Integration-Demographic-Filtering",
      summary: "A movie recommendation system that combines Content-Based Filtering and Demographic Filtering to generate personalized movie recommendations. Users provide basic demographic information such as age, gender, and occupation, along with a favorite movie, which the system uses to produce a ranked list of recommended films.",
      highlights: [
        "Dual-engine hybrid architecture: Content features + Demographic profiles",
        "Calculates weighted predicted ratings with confidence scores",
        "Clean interactive parameter selection UI with real-time ranked list generation"
      ],
      deepDive: {
        question1: "How Did the System Personalize?",
        answer1: "By combining content-based preferences with demographic characteristics, the system can consider both what a user likes and the type of user they are. This creates a more personalized recommendation process and demonstrates how different sources of user information can work together to improve recommendations.",
        question2: "What Did I Learn About These Systems?",
        answer2: "This project helped me understand how different recommendation techniques can complement each other. I learned how content-based and demographic approaches can be combined to create a hybrid system, while also gaining experience in translating user data and preferences into meaningful recommendations."
      },
      tags: ["Recommendation Engine", "Content-Based Filtering", "Demographic Filtering", "Python", "Data Science"]
    },
    {
      id: "crowdaid",
      title: "CrowdAID",
      category: "ai",
      badge: "AI Healthcare System",
      tagline: "Smart Hospital Recommendation System",
      role: "Project Leader",
      projectType: "Group Project",
      year: "2025",
      image: "assets/images/project-crowdaid.png",
      pageRef: "Pages 5 & 6",
      github: "https://github.com/mzakik10-pixel/Hospital-Allocation-Recommendation",
      summary: "CrowdAID is a web-based smart hospital recommendation prototype designed to help users find suitable hospitals based on their needs and current hospital conditions. The platform provides real-time information such as hospital capacity, available rooms, queues, and patient density to help users make more informed decisions about where to seek medical care.",
      highlights: [
        "Led team as Project Leader across UX architecture and recommendation logic",
        "Multi-parameter optimization: distance, bed capacity, emergency queue length, and specialty services",
        "Real-time geographic visualization and filter controls for critical medical allocation"
      ],
      deepDive: {
        question1: "How Did This Project Help Users Make Better Decisions?",
        answer1: "The project aims to reduce the uncertainty users face when choosing a hospital, especially when hospital conditions can change throughout the day. By bringing information such as patient queues, room availability, and hospital density into one interface, CrowdAID helps users compare options and identify hospitals that better match their needs.",
        question2: "What Did I Discover Through the Design Process?",
        answer2: "Through this project, I learned how to design interfaces for real-time and information-heavy systems. I explored how to organize multiple data points without overwhelming users, while keeping the experience intuitive and easy to understand."
      },
      tags: ["AI Recommendation", "Healthcare Tech", "Real-Time Systems", "Project Leadership", "Web App"]
    },
    {
      id: "shipdeckk",
      title: "ShipDecKK",
      category: "design",
      badge: "UI/UX & Web Design",
      tagline: "Ship Marketplace Web Design",
      role: "Project Leader",
      projectType: "Self-Initiated",
      year: "2025",
      image: "assets/images/project-shipdeckk.png",
      pageRef: "Pages 3 & 4",
      figma: "https://bit.ly/ShipDecKK-Figma",
      summary: "ShipDeckK is a UI/UX design project exploring how a ship marketplace could be presented through a modern and engaging web experience. I designed the interface to help users discover and explore different vessels while balancing visual storytelling with clear and intuitive navigation.",
      highlights: [
        "Self-initiated project conceptualized and led from research to high-fidelity Figma prototype",
        "Structured catalog for commercial cargo, luxury yachts, and specialized maritime vessels",
        "Harmonized complex technical vessel specifications with modern editorial visual storytelling"
      ],
      deepDive: {
        question1: "What am I aiming?",
        answer1: "I focused on creating a clear and visually engaging experience for a niche marketplace where users may need to explore a large amount of information before making a decision. The design combines strong visual elements with structured navigation to make the platform feel both professional and approachable.",
        question2: "What I Learned",
        answer2: "Through this project, I explored how design can transform a specialized and information-heavy subject into an experience that feels approachable and easy to navigate. It challenged me to think beyond aesthetics and consider how layout, hierarchy, and visual communication influence the way users interact with a product."
      },
      tags: ["Figma UI/UX", "Marketplace Design", "Information Hierarchy", "Visual Storytelling", "Prototyping"]
    },
    {
      id: "lostfindings",
      title: "LostFindings",
      category: "mobile",
      badge: "Mobile App & QA",
      tagline: "Community Item Recovery App",
      role: "Quality Assurance",
      projectType: "Group Project",
      year: "2026",
      image: "assets/images/project-lostfindings.png",
      pageRef: "Pages 9 & 10",
      github: "https://github.com/jadabyanza24/LostFindings",
      summary: "LostFindings is a community-based mobile application designed to help people reconnect with their lost belongings. The app allows users to report lost or found items, browse reported belongings, and communicate directly with other users to coordinate the recovery process.",
      highlights: [
        "Guided Quality Assurance testing across user journey stages: report -> match -> chat -> claim",
        "Native mobile iOS-style ergonomics with modern search, category chips, and item status badges",
        "In-app peer-to-peer verification and coordination chat architecture"
      ],
      deepDive: {
        question1: "How LostFindings Make Lost Items Easier to Recover?",
        answer1: "LostFindings creates a centralized space where members of a community can share information about lost and found belongings. By connecting people who find items with those searching for them, the platform aims to make the recovery process more organized, transparent, and accessible.",
        question2: "How it Shaped My Approach to User-Centered Design?",
        answer2: "This project taught me the importance of designing around a real-world user problem and the interactions needed to solve it. I learned to think about the entire recovery journey, from reporting an item, discovering a potential match, communicating with its finder, to finally claiming it."
      },
      tags: ["iOS UI Design", "Quality Assurance", "User-Centered Journey", "Community Platform", "Mobile App"]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
