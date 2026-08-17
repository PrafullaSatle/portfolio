import chartPlaceholder from "../assets/projects/_shared/Improvements suggested.jpeg";
import dashboardPlaceholder from "../assets/projects/_shared/Users as per age.jpeg";
import botPlaceholder from "../assets/projects/_shared/placementassist.jpeg";
import moviePlaceholder from "../assets/projects/_shared/moviesrelease.png";
import ratecollPlaceholder from "../assets/projects/_shared/ratingvscollection.png";
import avgratePlaceholder from "../assets/projects/_shared/avgmovierating.png";
import uiPlaceholder from "../assets/projects/_shared/image.png";
export type ProjectCategory =
  | "AI / ML"
  | "Data Analytics"
  | "Web Development"
  | "Other";

export type VisualAssetType = "image" | "video";

export interface VisualAsset {
  type: VisualAssetType;
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectDataSection {
  source: string;
  description: string;
  characteristics?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  thumbnail: string;
  thumbnailAlt: string;
  context: string;
  problem: string;
  data?: ProjectDataSection;
  approach: string[];
  visualEvidence: VisualAsset[];
  findings: string[];
  conclusion: string;
  repositoryUrl: string;
  demoUrl?: string;
}

export const projectCategories: ProjectCategory[] = [
  "AI / ML",
  "Data Analytics",
  "Web Development",
  "Other",
];

export const projects: Project[] = [
  {
    id: "placeholder-data-analytics",
    title: "Web Platform User Engagement Analysis",
    category: "Data Analytics",
    description: "An exploratory data analysis of 151 survey responses to understand how users access, interact with, and evaluate web platforms, using Python-based data cleaning, visualization, and behavioral analysis.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    thumbnail: dashboardPlaceholder,
    thumbnailAlt: "Placeholder thumbnail for data analytics project",
    context: "Analyzed survey data collected from web-platform users to understand their demographics, internet usage patterns, platform preferences, interaction behavior, and expectations for improving online experiences.",
    problem:
      "User engagement data can contain patterns that are difficult to identify from raw survey responses alone. The objective was to clean and transform the survey data and use visual analysis to identify meaningful patterns in how different groups interact with web platforms and what improvements users expect.",
    approach: [
      "Data Cleaning: Removed unnecessary survey fields, renamed lengthy questionnaire columns into analysis-friendly names, checked missing values, and handled missing responses in the open-ended fields.",
      "Data Transformation: Converted categorical interaction responses into numerical representations and standardized age-group categories to make the data easier to analyze and visualize.",
      "Exploratory Analysis: Analyzed demographic distribution, internet usage, devices, occupations, web-platform preferences, and different forms of website interaction using Python visualizations.",
      "User Preference Analysis: Examined user feedback on website improvements and additional features to identify common expectations from Malaysian web-platform users.",
    ],
    visualEvidence: [
      {
        type: "image",
        src: dashboardPlaceholder,
        alt: "Placeholder dashboard screenshot",
        caption: "Age Distribution of Survey Respondents: The 25–34 age group had the highest representation with 31 respondents, followed by the 45–54 and 55–64 groups.",
      },
      {
        type: "image",
        src: chartPlaceholder,
        alt: "Placeholder chart visualization",
        caption: "Website Improvements Suggested by Respondents: Faster loading times and mobile optimization were among the most frequently specified improvement areas, highlighting performance and usability as key concerns.",
      },
    ],
    findings: [
      "User Demographics: The largest respondent group was 25–34 years (31 respondents), followed by 45–54 (27) and 55–64 (26). Female respondents represented 55.6% of the sample.",
      "Device Usage: Laptops were the most common primary device (40.4%), followed by tablets (28.5%), desktops (17.9%), and smartphones (13.2%).",
      "Internet Usage: The most common usage patterns were several times a month (37 respondents) and once a month (35), while 14 respondents reported daily internet use.",
      "Platform Preferences: Blogs, news portals, social media, educational sites, and government services showed notable engagement, with the analysis also comparing platform preferences across genders.",
      "Interaction Behavior: Social-media integration showed the highest number of respondents at interaction level 4 (42 respondents), followed by level 2 (39) and level 3 (34).",
      "What Users Want Improved: User suggestions highlighted areas including mobile optimization, faster loading, better search functionality, data protection, and cleaner design, providing practical directions for improving web-platform experiences.",
      "Requested Features: Additional feature requests included public-service enhancements, AI/data-driven personalization, sustainability features, unified payment gateways, and community-engagement tools.",
    ],
    conclusion: "The analysis transformed raw survey responses into a structured view of user demographics, digital behavior, platform preferences, interaction patterns, and improvement expectations. The findings demonstrate how exploratory data analysis can turn survey data into actionable insights for understanding user needs and improving web-platform experiences.",
    repositoryUrl: "[GITHUB_URL]",
  },
  {
    id: "placeholder-ai-ml",
    title: "Career Guide — Placement Prediction Bot",
    category: "AI / ML",
    description: "A Telegram-based placement assistant that uses student academic, skill, and experience data to estimate placement probability and provide readiness feedback.",
    technologies: ["Python","Pandas","NumPy","Scikit-learn","Joblib","Telegram Bot API"],
    thumbnail: botPlaceholder,
    thumbnailAlt: "Placeholder thumbnail for AI/ML project",
    context: "Career Guide is a Telegram-based placement assistant designed to give students an accessible way to evaluate their placement readiness. Instead of requiring users to manually interpret multiple academic and skill-related factors, the bot collects relevant information through a simple conversational interface and uses a machine learning model to generate a placement probability.",
    problem:
      "Placement outcomes can depend on multiple factors such as academic performance, internships, projects, certifications, aptitude scores, and skill development. Students may find it difficult to understand how these factors collectively relate to their placement prospects. The project explores how machine learning can be used to turn these inputs into a simple, personalized placement-readiness assessment.",
    approach: [
      "Data Preparation — Prepared and analyzed placement-related student data containing academic, experience, skill, and extracurricular attributes.",
      "Model Development — Trained a machine learning classification model to estimate placement outcomes from the available features.",
      "Model Integration — Saved the trained model and integrated it into a Python-based Telegram bot using joblib.",
      "Conversational Input — Built a sequential interaction flow that collects the student's academic and profile information through Telegram.",
      "Prediction & Feedback — Processes the submitted information and returns an estimated probability of getting placed along with a basic readiness message.",
    ],
    visualEvidence: [
      {
        type: "image",
        src: botPlaceholder,
        alt: "Placeholder model evaluation chart",
        caption: "End-to-end Telegram interaction: The bot collects student profile information through a guided conversation and returns an estimated placement probability based on the trained machine learning model.",
      },
    ],
    findings: [
      "Placement Prediction: The model combines academic, skill, and experience-related factors to generate an individual placement probability.",
      "Multiple Factors Matter: Placement outcomes depend on a combination of academic performance, practical experience, projects, and skills rather than a single metric.",
      "End-to-End ML Application: Integrated the trained model into a Telegram bot, allowing users to provide their profile and receive an instant prediction.",
      "Personalized Assessment: Each prediction is generated from the individual user's inputs, turning the trained model into a practical placement-readiness tool.",
    ],
    conclusion: "[Short conclusion about what the model achieved or learned.]",
    repositoryUrl: "[GITHUB_URL]",
  },
  {
    id: "placeholder-data-analytics",
    title: "IMDb India Top 250 — Exploratory Data Analysis",
    category: "Data Analytics",
    description: "An exploratory analysis of IMDb's India Top 250 movies dataset to examine rating patterns, audience engagement, film industries, genres, box-office performance, release trends, and streaming platforms.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    thumbnail: moviePlaceholder,
    thumbnailAlt: "Placeholder thumbnail for data analytics project",
    context: "Analyzed 250 movies from IMDb's India Top 250 dataset to understand patterns across ratings, audience reviews, box-office collections, film industries, genres, release years, and streaming platforms.",
    problem:
      "Raw movie data contains multiple numerical and categorical attributes that are difficult to compare directly. The objective was to clean the dataset and use exploratory analysis to identify meaningful patterns and relationships across the movie industry.",
    approach: [
      "Data Cleaning — Inspected the dataset, converted box-office values into numeric format, and verified missing and duplicate records.",
      "Exploratory Analysis — Examined rating distributions, release trends, film-industry representation, and genre-level rating patterns.",
      "Relationship Analysis — Compared user reviews and ratings against box-office performance to explore relationships between audience response and commercial performance.",
      "Visualization — Created comparative charts using Matplotlib and Seaborn to communicate patterns across the dataset.",
    ],
    visualEvidence: [
      {
        type: "image",
        src: ratecollPlaceholder,
        alt: "Placeholder dashboard screenshot",
        caption: "Rating vs. Box Office Collection: Examined whether higher audience ratings were associated with stronger box-office performance, revealing substantial variation and several high-performing outliers.Age Distribution of Survey Respondents: The 25–34 age group had the highest representation with 31 respondents, followed by the 45–54 and 55–64 groups.",
      },
      {
        type: "image",
        src: avgratePlaceholder,
        alt: "Placeholder chart visualization",
        caption: "Average Rating Across Film Industries: Compared average movie ratings across major film industries to identify differences in audience-rated performance.",
      },
    ],
    findings: [
      "Industry Distribution: Bollywood (Hindi) represented the largest share of movies in the dataset, followed by Kollywood (Tamil) and Mollywood (Malayalam).",
      "Rating Patterns: Movie ratings were concentrated around the 8.0–8.4 range, with relatively few movies reaching ratings above 8.8.",
      "Commercial Performance: Box-office collections showed substantial variation across movies, with several high-collection outliers visible when compared against ratings and user reviews.",
      "Streaming Landscape: Amazon Prime Video accounted for the largest identified streaming-platform share in the analyzed dataset at 41.6%, followed by Disney+ Hotstar at 17.6% and Netflix at 10.0%.",
    ],
    conclusion: "The analysis transformed raw movie records into a structured view of audience ratings, engagement, commercial performance, industry representation, and streaming availability, demonstrating how exploratory data analysis can uncover patterns across diverse datasets.",
    repositoryUrl: "[GITHUB_URL]",
  },
  {
    id: "placeholder-web-dev",
    title: "CivicPulse — Municipal Operations Dashboard",
    category: "Web Development",
    description: "A responsive municipal operations dashboard for monitoring service requests, incidents, anomalies, and operational activity through a clear, decision-focused interface.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    thumbnail: uiPlaceholder,
    thumbnailAlt: "Placeholder thumbnail for web development project",
    context: "A responsive, municipal operations dashboard designed to help city teams monitor service requests, operational issues, anomalies, and response activity from a single interface.",
    problem: "Municipal officers need to monitor multiple service requests, incidents, and operational issues simultaneously. The challenge was to organize this information into a clear interface where priorities, SLAs, anomalies, and operational status could be understood quickly and acted upon from a single dashboard.",
    approach: [
      "Designed the dashboard around four core operational views: Action Queue, Operations Pulse, Anomalies, and Recent Activity.",
      "Built reusable React components and structured mock data to represent municipal requests, incidents, KPIs, alerts, and activity records.",
      "Implemented interactive workflows for approving/holding requests and reviewing anomalies, with actions reflected in the activity feed.",
      "Added English/Marathi localization, responsive layouts, and simulated live metric updates to make the dashboard feel like an active operational system.",
    ],
    visualEvidence: [
      {
        type: "image",
        src: uiPlaceholder,
        alt: "Placeholder UI screenshot",
        caption: "CivicPulse dashboard interface with four core views: Action Queue, Operations Pulse, Anomalies, and Recent Activity.",
      },
    ],
    findings: [
      "Built a modular dashboard from reusable React components rather than a single static interface",
      "Implemented interactive state-driven workflows for operational actions.",
      "Created a clear information hierarchy for handling multiple types of operational information.",
      "Added bilingual support and responsive layouts to improve usability across different users and screen sizes.",
    ],
    conclusion: "CivicPulse demonstrates my ability to translate a complex operational requirement into a structured, interactive frontend application using React, with emphasis on component design, state management, usability, and responsive UI.",
    repositoryUrl: "[GITHUB_URL]",
    demoUrl: "[LIVE_DEMO_URL]",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
