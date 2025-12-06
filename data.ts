import { Profile, Experience, Project, BlogPost, SocialLink, Education } from './types';

export const PROFILE: Profile = {
  name: "Bilal Muhammad",
  title: "Data Scientist",
  tagline: "7+ years of experience delivering end-to-end data solutions in predictive modeling, CRM analytics, and growth strategies.",
  about: "I am a Data Scientist with diverse experience across e-commerce, business corporate, B2C growth, mobility, and public sector domains. I have a proven track record in predictive modeling (Churn, LTV), marketing analytics (iROAS), forecasting, and anomaly detection. I specialize in building scalable data pipelines and deploying ML models that drive business value.",
  avatarUrl: "https://github.com/mbilalnust.png", // Using your GitHub avatar
  location: "Seoul, South Korea",
  email: "mbilalnust@gmail.com",
  skills: [
    "Python", "SQL", "R", "PySpark", 
    "AWS (Redshift, Athena, Lambda, EMR)", 
    "Machine Learning (XGBoost, LightGBM)", 
    "Tableau", "Power BI", "Airflow", "Docker", 
    "LLM/RAG", "Prompt Engineering"
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/mbilalnust", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/m-bilal", icon: "linkedin" },
  { platform: "Portfolio", url: "https://gamma.app/docs/Welcome-Im-Bilal-and-this-is-portfolio-of-my-relevant-projects--cuiqf83bb8h8eoh", icon: "external" },
  { platform: "Email", url: "mailto:mbilalnust@gmail.com", icon: "mail" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Data Analyst (Scientist)",
    company: "Datarize",
    location: "Seoul, South Korea",
    period: "May 2024 - Present",
    description: [
      "Developed predictive modeling services for Customer LTV and Churn using BetaGeo and Gamma-Gamma survival analysis.",
      "Optimized product recommendation models, reducing client complaints by 60%.",
      "Defined and implemented iROAS (incremental ROAS) metrics to measure campaign effectiveness (+20% campaign usage).",
      "Built a Text-to-SQL LLM service and RAG chatbot to automate client data requests."
    ]
  },
  {
    id: "2",
    role: "Data Scientist, Analytics",
    company: "Protopie, Studio XID",
    location: "Seoul, South Korea",
    period: "Aug 2022 - Apr 2024",
    description: [
      "Developed ML lead scoring service (PQL, MQL, SQL) for PLG strategy, increasing MQLs by 60% and SQLs by 313% YoY.",
      "Built NLP-based sentiment analysis pipelines for product reviews.",
      "Created Churn prediction models reducing churn by 10% for self-serve customers via win-back strategies.",
      "Designed comprehensive KPI dashboards (MRR, LTV, Retention) to support investor readiness."
    ]
  },
  {
    id: "3",
    role: "Data Scientist, Analytics",
    company: "DPWorld",
    location: "Seoul, South Korea",
    period: "Jul 2021 - Jul 2022",
    description: [
      "Implemented ETA prediction models for trucks, reducing resource consumption and wait times by 18%.",
      "Developed real-time anomaly detection services for IoT devices (speed, engine temp) using rate-of-change algorithms.",
      "Managed operational dashboards for OEE and equipment productivity across 3 ports."
    ]
  },
  {
    id: "4",
    role: "Data Scientist, Analytics",
    company: "Dataviz",
    location: "Daejeon, South Korea",
    period: "Sep 2020 - Jul 2021",
    description: [
      "Created real-time dashboards for flood-prone areas using DBSCAN clustering on precipitation data.",
      "Analyzed dangerous driving behaviors and smart bus card data to optimize BRT routes.",
      "Developed a patented optimization algorithm for traffic signal synchronization."
    ]
  },
  {
    id: "5",
    role: "Data Scientist, Analytics",
    company: "TOPS Lab, KAIST",
    location: "Daejeon, South Korea",
    period: "Sep 2018 - Sep 2020",
    description: [
      "Evaluated Deep Learning (CNN) vs. Traditional Forecasting (ARIMA) for traffic congestion, reducing congestion by 20% with the best model.",
      "Conducted safety analysis on pedestrian accidents relative to speed bump placement."
    ]
  },
  {
    id: "6",
    role: "Data Analyst (Project Management)",
    company: "National Highway Authority (NHA)",
    location: "Islamabad, Pakistan",
    period: "Aug 2016 - Aug 2017",
    description: [
      "Managed 5 highway projects, automating operational and financial dashboards using Power BI.",
      "Reduced manual reporting efforts from the field by 60%."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    school: "Korea Advanced Institute of Science and Technology (KAIST)",
    degree: "MS Transportation Engineering (Thesis: Applied Machine Learning)",
    period: "Sep 2018 - Aug 2020",
    description: "KGSP Scholarship Recipient (Approx. $62K USD)"
  },
  {
    id: "2",
    school: "National University of Sciences and Technology (NUST)",
    degree: "BS Civil Engineering",
    period: "Aug 2012 - Jun 2016"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Screenshot Assistant",
    description: "Offline tool that captures screen areas to provide text recognition, translation, summarization, and Q&A support using local AI models.",
    technologies: ["Python", "OCR", "Local LLM", "UI Automation"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/mbilalnust/local_translation_app"
  },
  {
    id: "2",
    title: "Local RAG Application",
    description: "A Retrieval-Augmented Generation app using Ollama that allows users to chat with their PDF documents locally without data privacy concerns.",
    technologies: ["Ollama", "RAG", "LangChain", "Python"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/mbilalnust/my-local-rag"
  },
  {
    id: "3",
    title: "Automated Lottery Bot",
    description: "A web scraping bot designed to automate the purchase of lottery tickets, handling navigation and transaction steps autonomously.",
    technologies: ["Python", "Selenium", "Web Scraping"],
    imageUrl: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/mbilalnust/Buy-Lottery-Ticket-Bot"
  },
  {
    id: "4",
    title: "TTS Video Generator",
    description: "Automated pipeline converting text to video using Edge-TTS and MoviePy. Generates scripts, voiceovers, and subtitles automatically.",
    technologies: ["Python", "Edge-TTS", "MoviePy", "Multimedia"],
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/mbilalnust/multimodal_tts_VideoAutomation"
  },
  {
    id: "5",
    title: "AWS ETL Pipeline",
    description: "Medallion architecture (Bronze-Silver-Gold) pipeline collecting weather data via OpenWeather API, transformed with DuckDB and loaded to Postgres.",
    technologies: ["AWS", "Airflow", "DuckDB", "PostgreSQL", "GitHub Actions"],
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/mbilalnust/ETL-poor-main-pipeline"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Identifying Flood Impacted Areas",
    excerpt: "Clustering flood-impacted areas for strategic information provision using DBSCAN on precipitation data. Research submitted to Sejong city government.",
    date: "Research Paper",
    readTime: "Publication",
    imageUrl: "https://images.unsplash.com/photo-1569000972-80bd3206704f?auto=format&fit=crop&q=80&w=800",
    url: "https://www.researchgate.net/publication/357578064_jeonlyagjeog_jeongbojegong-eul_wihan_chimsuyeonghyang-guyeog_keulleoseuteoling_Identifying_and_Clustering_the_Flood_Impacted_Areas_for_Strategic_Information_Provision_bag_eun_mibillal_muhamedeu_yo_yag"
  },
  {
    id: "2",
    title: "Analysis of Dangerous Driving Behavior",
    excerpt: "Analyzing dangerous driving behavior by bus type using Digital Tachograph data in Sejong City to improve road safety.",
    date: "Research Paper",
    readTime: "Publication",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
    url: "https://www.researchgate.net/publication/348387184_Analysis_of_Dangerous_Driving_Behavior_by_Bus_Type_Using_Digital_Tacho_Graph_in_Sejong_City"
  }
];

// Replaced with a placeholder. Please update with your specific Google Form URL.
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfD_J1t_Example_Form_Id/viewform?embedded=true";