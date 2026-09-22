export interface Honor {
  title: string;
  scope: 'International' | 'National' | 'State/Regional' | 'School';
  grade: string;
  description?: string;
  score?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  category: 'Computational Chemistry' | 'Environmental ML' | 'EdTech & Systems' | 'Civic Tech';
  timeline: string;
  subtitle: string;
  problem: string;
  solution: string;
  computationalAngle: string;
  techStack: string[];
  metrics: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  highlights: string[];
  featured: boolean;
  advisor?: string;
  images?: {
    url: string;
    title: string;
    caption: string;
  }[];
}

export interface Activity {
  id: string;
  title: string;
  role: string;
  category: 'Research' | 'Leadership' | 'Teaching' | 'Training & Fellowship' | 'Public Speaking';
  timeline: string;
  organization: string;
  description: string;
  keyAchievements: string[];
  skills: string[];
}

export interface ProfileData {
  personal: {
    fullName: string;
    preferredName: string;
    intendedMajor: string;
    concentration: string;
    motto: string;
    bio: string;
    location: string;
    email: string;
    github: string;
    futurePlan: string;
    website?: string;
  };
  education: {
    institution: string;
    type: string;
    location: string;
    dates: string;
    status: string;
    graduationDate: string;
    rank: string;
    rankTotal: number;
    rankContext: string;
    gpa: string;
    gpaScale: string;
    gpaType: string;
    honors: Honor[];
  };
  stats: {
    label: string;
    value: string;
    helper: string;
  }[];
  projects: Project[];
  activities: Activity[];
}

export const profileData: ProfileData = {
  personal: {
    fullName: "Ezekiyas Tsegaye",
    preferredName: "Hezekiah",
    intendedMajor: "Chemistry with Computer Science",
    concentration: "Computational Chemistry, Reaction Modeling & Scientific Machine Learning",
    motto: "From Atoms to Algorithms: Engineering Computational Solutions for Physical Realities",
    bio: "Computational chemistry researcher and programmer working at the intersection of molecular kinetics and scientific computing. Focused on applying reaction engineering, thermodynamics, and machine learning to closed-loop energy systems and environmental modeling.",
    location: "Addis Ababa, Ethiopia",
    email: "hezekiah3279@gmail.com",
    github: "https://github.com/ezekiyastsegaye123-cmyk",
    futurePlan: "Scientific Researcher, Bachelors",
    website: "https://ezekiyastsegaye.tech",
  },
  education: {
    institution: "St. John Baptist De La Salle Catholic School",
    type: "Independent Secondary School",
    location: "Ethiopia",
    dates: "09/2013 – 07/2025",
    status: "Gap Year Scholar (Graduating 07/2025)",
    graduationDate: "July 2025",
    rank: "5",
    rankTotal: 250,
    rankContext: "Top 2.0% of class (5 / 250, Unweighted)",
    gpa: "3.93",
    gpaScale: "4.0",
    gpaType: "Unweighted",
    honors: [
      {
        title: "National Examination Outstanding Achiever",
        score: "558 / 600",
        scope: "National",
        grade: "Grade 12",
        description: "Scored 558/600 on the Ethiopian National Secondary School Leaving Examination, placing among the top percentile nationwide.",
      },
      {
        title: "Academic High Honor Roll (3.93 Cumulative GPA)",
        score: "3.93 / 4.0",
        scope: "School",
        grade: "Grades 9, 10, 11, 12",
        description: "Maintained High Honor Roll standing across all four years of secondary school with an unweighted 3.93 GPA.",
      },
      {
        title: "Finalist, International Astronomy and Astrophysics Competition",
        score: "Global Finalist",
        scope: "International",
        grade: "Grade 11",
        description: "Global finalist solving competition problem sets across celestial mechanics and astrophysical spectroscopy.",
      },
      {
        title: "3rd Place, State Chemistry Competition",
        score: "Bronze / 3rd Place",
        scope: "State/Regional",
        grade: "Grade 11",
        description: "Placed 3rd in the regional chemistry competition, completing timed rounds in stoichiometry, thermodynamics, and laboratory analysis.",
      },
    ],
  },
  stats: [
    {
      label: "Class Standing",
      value: "Top 2.0%",
      helper: "Rank 5 / 250 (3.93 GPA Unweighted)",
    },
    {
      label: "National Exam",
      value: "558 / 600",
      helper: "National Outstanding Achiever",
    },
    {
      label: "Research & Systems",
      value: "4 Major Builds",
      helper: "Pyrolysis, ML Drought, Real-Time WebSockets",
    },
    {
      label: "Admissions Focus",
      value: "Chemistry + CS",
      helper: "Computational Physical Science",
    },
  ],
  projects: [
    {
      id: "pyrolysis-research",
      title: "Integrated Theoretical Framework for Byproduct Reintegration in Closed-Loop Pyrolysis Systems",
      role: "Lead Author & Solo Researcher (Advised by Chemical Society of Ethiopia)",
      advisor: "Chemical Society of Ethiopia (CSE)",
      category: "Computational Chemistry",
      timeline: "2024 – Present",
      subtitle: "Closed-loop biorefinery model reaching 73.6% thermal efficiency through lumped kinetics, in situ char catalysis, and syngas recirculation.",
      problem: "Conventional biomass pyrolysis is endothermic (requiring 0.5–1.5 MJ/kg of external heat) and yields heavy tar fractions and acidic, oxygen-rich bio-oil that degrades during storage.",
      solution: "Modeled a self-sustaining pyrolysis system that recirculates solid char heat carriers (5,940 kg carrier per 1,000 kg feed) and product gases back into the reactor. Using lumped kinetic mechanisms based on Semyonov chain-reaction principles, the model accounts for hemicellulose, cellulose, and lignin decomposition pathways while meeting reactor enthalpy demands internally at 73.6% thermal efficiency.",
      computationalAngle: "Formulated dynamic heat and mass balances for a fast-pyrolysis vapor residence window (<2–5s) and implemented a fuzzy logic PID control loop in Python, reducing temperature overshoot by 48% under fluctuating feed rates.",
      techStack: ["Chemical Thermodynamics", "Lumped Kinetic Modeling", "Hydrodeoxygenation (HDO)", "Fuzzy Logic PID Control", "Python", "Scikit-Learn"],
      metrics: [
        "73.6% System-Level Thermal Efficiency",
        "Autothermal Energy Autonomy via 10–15% Byproduct Reintegration",
        "48% Reduction in Dynamic Overshoot via Fuzzy Self-Tuning PID",
      ],
      links: {
        paper: "/pyrolysis-framework.pdf",
      },
      highlights: [
        "Theoretical framework advised by the Chemical Society of Ethiopia (CSE).",
        "Modeled macromolecular cleavage kinetics: Hemicellulose diffusion (200–350°C), Cellulose transglycosylation (300–400°C), and Lignin aryl-ether β-O-4 scission (250–900°C).",
        "In Situ Catalysis: Char-bound alkali and alkaline earth metals (AAEMs) crack heavy tars at 700–900°C into synthesis gas (H2, CO, CH4).",
        "Syngas Recirculation: Reused product H2 and CO to drive in situ hydrodeoxygenation (HDO), reducing bio-oil oxygen content without external hydrogen.",
      ],
      featured: true,
    },
    {
      id: "fradscr-maji-alert",
      title: "FRADSCR: Space Weather & Drought Prediction ('Maji Alert')",
      role: "Creator & Machine Learning Trainee",
      category: "Environmental ML",
      timeline: "2024",
      subtitle: "Machine learning pipeline combining solar activity indices and satellite vegetation data for early drought detection.",
      problem: "Standard drought monitoring in the Horn of Africa relies on ground rain gauges and delayed monthly reports, leaving farmers and local water managers with little lead time.",
      solution: "Built a classification pipeline linking solar flare and geomagnetic indices with satellite NDVI vegetation data and rainfall records, identifying drought patterns weeks earlier than ground reports alone.",
      computationalAngle: "Trained Random Forest and XGBoost classifiers in Python (Scikit-learn) with lagged solar cycle features, evaluating performance with spatial holdout validation on historical Ethiopian climate datasets.",
      techStack: ["Python", "Scikit-Learn", "Fedora Linux", "Pandas", "NumPy", "Matplotlib", "Space Weather Data"],
      metrics: [
        "EGATE Capstone Graduation Project",
        "Lagged solar-flare correlation with terrestrial vegetation indices",
        "High-accuracy drought classification pipeline",
      ],
      highlights: [
        "Completed as the graduation capstone project for the EGATE AI/ML fellowship.",
        "Engineered lagged cross-correlation features between 11-year solar cycles and Ethiopian highland dendrochronology (tree-ring growth) records.",
        "Validated with spatial holdout on the Debre Berhan Selassie 106-year climate dataset to prevent temporal data leakage.",
      ],
      links: {
        github: "https://github.com/ezekiyastsegaye123-cmyk/Fradscr",
      },
      images: [
        {
          url: "/images/fradscr/data_pipeline_overview.png",
          title: "End-to-End Pipeline & Paleoclimatic RWI Correlation",
          caption: "SPEI Ground Truth (1901–2014), class distribution, and Schwabe solar cycle teleconnection to Ethiopian highland tree-ring growth memory.",
        },
        {
          url: "/images/fradscr/forward_forecast_2025_2035.png",
          title: "11-Year Operational Decadal Forecast (2025–2035)",
          caption: "100 Monte Carlo draws/year tracking Solar Cycle 25→26 minimum and operational borehole dispatch thresholds.",
        },
        {
          url: "/images/fradscr/holdout_confusion_matrix.png",
          title: "Zero-Leakage Spatial Holdout Confusion Matrix",
          caption: "Evaluated on Debrebirkan Selassie (eth001) independent 106-year test horizon.",
        },
        {
          url: "/images/fradscr/feature_importance_dual.png",
          title: "Dual-Model Feature Importance",
          caption: "Random Forest Gini importance vs. XGBoost gain metrics across heliophysics and dendrochronology inputs.",
        },
      ],
      featured: true,
    },
    {
      id: "trivia-blitz",
      title: "Trivia Blitz: High-Capacity Classroom Quiz Platform",
      role: "Lead Systems Architect",
      category: "EdTech & Systems",
      timeline: "2024",
      subtitle: "Low-latency multiplayer classroom quiz system built for high-concurrency school networks.",
      problem: "Commercial classroom response tools require per-seat subscriptions, struggle over crowded school Wi-Fi, and offer limited offline display options on local projectors.",
      solution: "Built an open-source real-time quiz server supporting 100+ concurrent participants from a single classroom machine with sub-5ms local state sync.",
      computationalAngle: "Implemented the RFC 6455 WebSocket protocol directly using Python's standard library (socket and threading), avoiding heavy framework overhead to run smoothly on modest school hardware.",
      techStack: ["Python Standard Library", "RFC 6455 WebSockets", "Multi-Threaded HTTP", "JavaScript", "WebRTC / PeerJS"],
      metrics: [
        "100+ concurrent student stress-tested capacity",
        "Sub-5ms binary frame synchronization",
        "Instant smartboard projection histogram mode",
      ],
      highlights: [
        "Managed socket state and room channels manually to prevent memory leaks during multi-round games.",
        "Added teacher controls for timed questions, real-time response counters, and live projector histogram views.",
        "Runs entirely offline on a local school router without requiring external internet bandwidth.",
      ],
      featured: true,
    },
    {
      id: "scholarship-bot",
      title: "Scholarship Matcher & Opportunity Aggregator",
      role: "Founder & Lead Developer",
      category: "Civic Tech",
      timeline: "2024 – Present",
      subtitle: "Automated scraper and matching bot helping East African students find and track international university scholarships.",
      problem: "Scholarship opportunities for African students are scattered across hundreds of university websites and third-party portals, making deadlines easy to miss without reliable daily web access.",
      solution: "Created a Python crawler and Telegram bot that aggregates verified scholarship postings, filters them by eligibility criteria, and sends alerts directly to students over mobile data.",
      computationalAngle: "Structured an SQLite catalog with fuzzy text matching and cron-based scraping pipelines in Python (BeautifulSoup, Asyncio) to parse and verify application requirements automatically.",
      techStack: ["Python", "SQLite", "Telegram API", "BeautifulSoup", "Asyncio Scheduler", "Regex Matching"],
      metrics: [
        "Hundreds of scholarship listings continuously indexed",
        "Personalized criteria matching by field of study & nationality",
        "Zero-cost mobile delivery directly to student handsets",
      ],
      highlights: [
        "Maintains an indexed catalog of undergraduate and graduate opportunities updated weekly.",
        "Filters scholarships by target major, country of origin, and financial aid tier.",
        "Delivers zero-paywall alerts directly via Telegram for students with low-bandwidth connections.",
      ],
      featured: true,
    },
  ],
  activities: [
    {
      id: "chem-club",
      title: "Chemistry Club",
      role: "President (formerly Vice President)",
      category: "Leadership",
      timeline: "2022 – 2025",
      organization: "St. John Baptist De La Salle Catholic School",
      description: "Led the school's chemistry student community, organizing weekly lab demonstrations, peer tutoring, and science exhibitions.",
      keyAchievements: [
        "Supervised hands-on laboratory sessions focusing on chemical reactions, titration protocols, and stoichiometry safety.",
        "Organized regional and school-wide chemistry quiz competitions, increasing active club membership significantly.",
        "Delivered a school-wide lecture representing the Chemistry Club on the historical transition from alchemy to modern molecular chemistry.",
      ],
      skills: ["Scientific Leadership", "Lab Protocols", "Event Organization", "Public Communication"],
    },
    {
      id: "ichc-ambassador",
      title: "IChC Local Ambassador & Lead Instructor",
      role: "Ambassador & Lead Instructor",
      category: "Teaching",
      timeline: "2023 – Present",
      organization: "International Chemistry Championship (IChC)",
      description: "Regional representative for the International Chemistry Championship, preparing secondary school students for competitive chemistry examinations.",
      keyAchievements: [
        "Conducted specialized training sessions for competitive chemistry candidates on physical chemistry, thermodynamics, and organic mechanisms.",
        "Mentored promising students preparing for national and international science Olympiads.",
        "Coordinated outreach to broaden STEM competition participation among underrepresented students.",
      ],
      skills: ["Physical Chemistry", "Olympiad Coaching", "Curriculum Design", "Mentorship"],
    },
    {
      id: "academic-tutor",
      title: "Academic Peer Tutor (Chemistry & Calculus)",
      role: "Head Peer Tutor",
      category: "Teaching",
      timeline: "2023 – 2025",
      organization: "De La Salle Academic Support Program",
      description: "Conducted weekly tutoring sessions in Advanced Chemistry and Differential/Integral Calculus for peers and underclassmen.",
      keyAchievements: [
        "Guided students through stoichiometric calculations, reaction kinetics, and calculus optimization problems.",
        "Developed customized problem sets and visual intuition techniques that helped over 80% of tutored students elevate their course grades.",
      ],
      skills: ["Pedagogy", "Differential Calculus", "Reaction Kinetics", "Individual Mentorship"],
    },
    {
      id: "egate-ml",
      title: "EGATE Advanced AI/ML Fellowship",
      role: "Advanced AI/ML Trainee",
      category: "Training & Fellowship",
      timeline: "2024",
      organization: "EGATE Institute",
      description: "Selective machine learning fellowship covering mathematical foundations, supervised algorithms, and practical modeling.",
      keyAchievements: [
        "Admitted as 1 of 80 trainees nationwide based on a mathematics and programming entrance examination.",
        "Selected for the Advanced AI/ML track (~10 trainees) for specialized capstone research.",
        "Engineered the FRADSCR drought-prediction model as the graduation capstone project.",
      ],
      skills: ["Supervised ML", "Scikit-learn", "Feature Engineering", "Data Pipelines"],
    },
    {
      id: "dsa-fellowship",
      title: "Digital Skillup Africa (DSA 2.0)",
      role: "ML Engineer Trainee",
      category: "Training & Fellowship",
      timeline: "2024",
      organization: "Digital Skillup Africa",
      description: "Engineering fellowship focused on applied machine learning, parameter optimization, and ensemble models.",
      keyAchievements: [
        "Completed Cohort 2.0 coursework in supervised modeling, gradient boosting, and cross-validation.",
        "Applied regression and optimization methods from the coursework to kinetic parameter estimation in my pyrolysis research.",
      ],
      skills: ["Ensemble Models", "Hyperparameter Tuning", "Applied ML", "Research Modeling"],
    },
    {
      id: "devcareer",
      title: "DevCareer Learning for Impact",
      role: "Software Engineering Fellow",
      category: "Training & Fellowship",
      timeline: "2024 – 2025",
      organization: "DevCareer Africa",
      description: "Gap-year software engineering program emphasizing systems logic, data structures, and production test engineering.",
      keyAchievements: [
        "Solved algorithmic and logic challenges in C++, focusing on memory management and time-complexity optimization.",
        "Built automated backend API test suites using Node.js, Express, and Mocha.",
      ],
      skills: ["C++ Algorithms", "Backend Engineering", "Automated Testing", "Test-Driven Development"],
    },
    {
      id: "tedx-speaker",
      title: "TEDx Youth Conference Speaker",
      role: "Invited Student Speaker",
      category: "Public Speaking",
      timeline: "2024",
      organization: "St. John Baptist De La Salle TEDx Program",
      description: "Invited by faculty and the student council to deliver a lecture representing the Chemistry Club at the school's TEDx event.",
      keyAchievements: [
        "Delivered a lecture titled 'Ancient Chemistry: From Alchemy to Modern Atomic Synthesis'.",
        "Discussed how empirical observation replaced mystical theories, encouraging students to test physical hypotheses systematically.",
      ],
      skills: ["Keynote Speaking", "History of Science", "Scientific Epistemology", "Student Engagement"],
    },
  ],
};
