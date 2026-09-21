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
    bio: "Passionate computational researcher and software builder bridging fundamental chemical phenomena with algorithmic optimization. Dedicated to applying kinetic modeling, thermodynamics, and machine learning to energy conversion, ecological intelligence, and educational equity.",
    location: "Addis Ababa, Ethiopia",
    email: "ezekiyastsegaye123@gmail.com",
    github: "https://github.com/ezekiyastsegaye123-cmyk",
    futurePlan: "Scientific Researcher, Bachelors",
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
        description: "Achieved an exceptional 558 out of 600 on the rigorous Ethiopian National Secondary School Leaving Examination.",
      },
      {
        title: "Academic High Honor Roll (3.93 Cumulative GPA)",
        score: "3.93 / 4.0",
        scope: "School",
        grade: "Grades 9, 10, 11, 12",
        description: "Consistent placement on the Dean's Academic High Honor Roll across all four years of secondary education.",
      },
      {
        title: "Finalist, International Astronomy and Astrophysics Competition",
        score: "Global Finalist",
        scope: "International",
        grade: "Grade 11",
        description: "Recognized internationally in problem-solving spanning celestial mechanics, astrophysical spectroscopy, and mathematical analysis.",
      },
      {
        title: "3rd Place, State Chemistry Competition",
        score: "Bronze / 3rd Place",
        scope: "State/Regional",
        grade: "Grade 11",
        description: "Ranked 3rd among top chemistry students across the region in rigorous theoretical stoichiometry and laboratory problem sets.",
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
      role: "Lead Author & Researcher",
      category: "Computational Chemistry",
      timeline: "2024 – Present",
      subtitle: "Autothermal biorefinery architecture achieving 73.6% thermal efficiency through kinetic modeling, char catalysis, and syngas recirculation.",
      problem: "Conventional open-loop waste-to-energy pyrolysis systems suffer from significant external thermal energy requirements (0.5–1.5 MJ/kg endothermic primary decomposition), unstable oxygenated bio-oil fractions, and inefficient downstream tar contamination.",
      solution: "Formulated an integrated theoretical framework establishing an autothermal closed-loop circular biorefinery. Synthesizes lumped kinetic mechanisms (applying Semyonov's chain-reaction principles) to model the macromolecular decomposition of lignocellulosic biomass (hemicellulose, crystalline cellulose, and three-dimensional lignin). Demonstrates that recirculating solid heat carriers (5,940 kg ash/carrier per 1,000 kg feed) fulfills endothermic enthalpy requirements to achieve 73.6% thermal efficiency.",
      computationalAngle: "Derived thermodynamic mass and heat balances, modeled vapor residence time dynamics (<2–5s fast pyrolysis window), and developed fuzzy logic self-tuning PID control algorithms reducing overshoot by 48% across non-linear feedback loops.",
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
        "Modeled macromolecular cleavage kinetics: Hemicellulose diffusion (200–350°C), Cellulose transglycosylation (300–400°C), and Lignin aryl-ether β-O-4 scission (250–900°C).",
        "In Situ Catalysis: Integrated char-bound alkali and alkaline earth metals (AAEMs) for hot vapor cracking at 700–900°C into clean H2, CO, and CH4.",
        "Syngas Recirculation: Reintegrated reactive H2 and CO atmospheres to drive in situ hydrodeoxygenation (HDO), upgrading bio-oil into stable aromatic fuels.",
      ],
      featured: true,
    },
    {
      id: "fradscr-maji-alert",
      title: "FRADSCR: Space Weather & Drought Prediction ('Maji Alert')",
      role: "Creator & Machine Learning Trainee",
      category: "Environmental ML",
      timeline: "2024",
      subtitle: "Machine learning classification engine combining space weather indices and terrestrial vegetation metrics.",
      problem: "Sub-Saharan agricultural communities suffer devastating crop failures due to delayed drought warnings, which traditionally rely solely on delayed ground-level meteorological reports.",
      solution: "Engineered a predictive ML classification system combining extraterrestrial solar flare / geomagnetic space weather datasets with terrestrial Normalized Difference Vegetation Index (NDVI) and precipitation indices to detect drought onset weeks ahead of standard warning systems.",
      computationalAngle: "Trained multi-class classification and time-lag regression models in Python with Scikit-learn, Pandas, and NumPy in a hardened Fedora Linux scientific environment.",
      techStack: ["Python", "Scikit-Learn", "Fedora Linux", "Pandas", "NumPy", "Matplotlib", "Space Weather Data"],
      metrics: [
        "EGATE Capstone Graduation Project",
        "Lagged solar-flare correlation with terrestrial vegetation indices",
        "High-accuracy drought classification pipeline",
      ],
      highlights: [
        "Selected as the rigorous Capstone Project required to graduate from the selective EGATE program.",
        "Performed end-to-end data cleaning, missing-value imputation, and feature engineering across heterogeneous astronomical and meteorological datasets.",
        "Delivered actionable predictions intended to safeguard water security ('Maji Alert').",
      ],
      featured: true,
    },
    {
      id: "trivia-blitz",
      title: "Trivia Blitz: High-Capacity Classroom Quiz Platform",
      role: "Lead Systems Architect",
      category: "EdTech & Systems",
      timeline: "2024",
      subtitle: "Ultra-low-latency multiplayer interactive learning platform engineered for 100+ concurrent students.",
      problem: "Commercial classroom response tools require expensive subscriptions, experience latency bottlenecks over crowded school Wi-Fi, and fail to provide granular distribution analytics on local smartboards.",
      solution: "Engineered an open, high-concurrency real-time multiplayer platform capable of serving over 100 concurrent students from a single lightweight server with sub-5ms state synchronization.",
      computationalAngle: "Built a native RFC 6455 WebSocket hub in the pure Python standard library with zero third-party framework overhead, coupled with multi-threaded HTTP dispatch and WebRTC fallback layers.",
      techStack: ["Python Standard Library", "RFC 6455 WebSockets", "Multi-Threaded HTTP", "JavaScript", "WebRTC / PeerJS"],
      metrics: [
        "100+ concurrent student stress-tested capacity",
        "Sub-5ms binary frame synchronization",
        "Instant smartboard projection histogram mode",
      ],
      highlights: [
        "Architected custom room subscription management with zero memory leaks across sustained multi-round quiz sessions.",
        "Implemented real-time classroom orchestration: teacher pause/resume timers, instant student submission counters, and animated response histograms.",
        "Eliminated external software licenses, allowing classrooms with limited connectivity to run engaging STEM quizzes locally.",
      ],
      featured: true,
    },
    {
      id: "scholarship-bot",
      title: "Scholarship Matcher & Opportunity Aggregator",
      role: "Founder & Lead Developer",
      category: "Civic Tech",
      timeline: "2024 – Present",
      subtitle: "Automated aggregation and criteria-matching engine connecting prospective African scholars with global funding.",
      problem: "Thousands of high-potential students across developing nations miss scholarship deadlines due to fragmented application portals, paywalled advisory services, and irregular internet access.",
      solution: "Constructed an automated background aggregation crawler and conversational matching bot that indexes verified university scholarships and delivers tailored eligibility alerts directly through lightweight mobile channels.",
      computationalAngle: "Built with Python, SQLite, modular web scraper pipelines, fuzzy criteria-matching algorithms, and an automated background scheduler for proactive deadline notifications.",
      techStack: ["Python", "SQLite", "Telegram API", "BeautifulSoup", "Asyncio Scheduler", "Regex Matching"],
      metrics: [
        "Hundreds of scholarship listings continuously indexed",
        "Personalized criteria matching by field of study & nationality",
        "Zero-cost mobile delivery directly to student handsets",
      ],
      highlights: [
        "Built automated health-checks, scheduled scrapers, and structured SQLite relational storage.",
        "Democratized higher education discovery for fellow students in Ethiopia and across East Africa.",
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
      description: "Direct student leadership of the institution's scientific community, organizing lab demonstrations, academic mentorship, and science fairs.",
      keyAchievements: [
        "Supervised hands-on laboratory sessions focusing on chemical reactions, titration protocols, and stoichiometry safety.",
        "Organized regional and school-wide chemistry quiz competitions, increasing active club membership significantly.",
        "Delivered a school-wide TEDx address representing the Chemistry Club on the epistemological transition from ancient alchemy to modern molecular chemistry.",
      ],
      skills: ["Scientific Leadership", "Lab Protocols", "Event Orchestration", "Public Communication"],
    },
    {
      id: "ichc-ambassador",
      title: "IChC Local Ambassador & Lead Instructor",
      role: "Ambassador & Lead Instructor",
      category: "Teaching",
      timeline: "2023 – Present",
      organization: "International Chemistry Championship (IChC)",
      description: "Appointed regional representative for the International Chemistry Championship to foster academic excellence in chemical sciences among secondary school students.",
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
      description: "Provided intensive weekly tutoring sessions in Advanced Chemistry and Differential/Integral Calculus to peers and underclassmen.",
      keyAchievements: [
        "Guided students through complex stoichiometric calculations, reaction kinetics, and calculus optimization problems.",
        "Developed customized problem sheets and visual intuition techniques that helped over 80% of tutored students elevate their letter grades.",
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
      description: "Highly competitive, multi-stage machine learning fellowship for top-performing STEM students.",
      keyAchievements: [
        "Earned admission as 1 of only 80 trainees nationwide via a selective mathematical and programming entrance examination.",
        "Promoted into the elite Advanced AI/ML track comprising only ~10 top trainees.",
        "Engineered the FRADSCR Maji Alert drought-prediction machine learning model as the graduation Capstone Project.",
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
      description: "Pan-African competitive engineering training program focused on real-world artificial intelligence and industrial applications.",
      keyAchievements: [
        "Selected for Cohort 2.0 to deepen advanced machine learning modeling, parameter optimization, and ensemble algorithms.",
        "Directly applied learned algorithmic principles to parameter modeling for the independent Pyrolysis waste-to-energy research initiative.",
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
      description: "Gap-year competitive software engineering program emphasizing systems logic, data structures, and production test engineering.",
      keyAchievements: [
        "Solved complex algorithmic and logic challenges in C++, mastering memory awareness and time-complexity optimization.",
        "Built automated backend API test suites utilizing Node.js, Express, and Mocha.",
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
      description: "Selected to deliver a keynote lecture to the entire student body and faculty representing the Chemistry Club.",
      keyAchievements: [
        "Delivered the keynote lecture: 'Ancient Chemistry: From the Philosophical Crucible of Alchemy to Modern Atomic Synthesis'.",
        "Illuminated how empirical observation replaced mystical dogma, encouraging young scholars to interrogate physical phenomena rigorously.",
      ],
      skills: ["Keynote Speaking", "History of Science", "Scientific Epistemology", "Student Engagement"],
    },
  ],
};
