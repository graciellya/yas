export type ResumeRole = {
  organization: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
};

export const resumeProfile = {
  name: "Gracielly Abreu",
  alsoKnownAs: "Elly",
  location: "Los Angeles, CA",
  email: "grracielly@gmail.com",
  linkedIn: "https://www.linkedin.com/in/gracielly-abreu",
  photo: "/gracielly.png",
};

export const resumeEducation = {
  school: "Stanford University",
  degree: "B.S. Computer Science",
  concentration: "Human-Computer Interaction",
  period: "Expected June 2026",
  coursework: [
    "Programming Methodology",
    "Programming Abstractions",
    "Data Structures",
    "Product Management",
    "Design Thinking",
  ],
  activities: [
    "Stanford Society of Latinx Engineers",
    "Society of Black Scientists & Engineers",
    "Chappell Lougee Grant Recipient",
    "IDA Fellow",
  ],
};

export const resumeSkills = {
  programming: [
    "Python",
    "C++",
    "C",
    "JavaScript",
    "React Native",
    "HTML",
    "CSS",
  ],
  software: [
    "React",
    "Node.js",
    "Figma",
    "Pro Tools",
    "GitHub",
    "Visual Studio",
    "JupyterLab",
  ],
  design: [
    "Product thinking",
    "User-centered design",
    "Interaction design",
    "Wireframing",
    "Prototyping",
    "Design systems",
    "Accessibility",
    "Usability testing",
    "User research",
  ],
  other: [
    "Cross-functional communication",
    "Stakeholder alignment",
    "Program management",
  ],
  languages: ["Spanish (proficient)"],
};

export const resumeExperience: ResumeRole[] = [
  {
    organization: "Clair",
    title: "UI/UX Designer",
    location: "Stanford, CA",
    period: "Jan 2026 – Present",
    bullets: [
      "Designed core dashboard UI for a wearable health product, translating biometric data streams into clear visualizations.",
      "Created user flows and high-fidelity prototypes in Figma to support product experimentation and feature validation.",
      "Collaborated with product managers and engineers to translate requirements into implemented UI components.",
    ],
  },
  {
    organization: "Stanford University",
    title: "Resident Assistant — Community Manager",
    location: "Stanford, CA",
    period: "Sep 2025 – Present",
    bullets: [
      "Planned, launched, and managed 10+ community events end-to-end — scoping, budgeting, execution, and post-event feedback.",
      "Collaborated with administration, student services, and faculty to align programming with community needs.",
      "Managed budgets, timelines, and evaluation to iteratively improve participation and experience.",
    ],
  },
  {
    organization: "Empower",
    title: "Full Stack Web Developer Intern",
    location: "Remote",
    period: "Jun 2025 – Present",
    bullets: [
      "Built and shipped full-stack product features using React and Node.js/Express.",
      "Developed responsive iOS-facing interfaces emphasizing scalability, performance, and usability.",
      "Collaborated with designers and engineers in an agile workflow.",
    ],
  },
  {
    organization: "Stanford University",
    title: "IDA Fellow",
    location: "Stanford, CA",
    period: "Aug 2024 – Jun 2025",
    bullets: [
      "Awarded competitive fellowship to develop an original EP and interdisciplinary arts programming.",
      "Designed and led events focused on community building through performance and discussion.",
      "Collaborated across departments to co-create spaces for performance, dialogue, and student work.",
    ],
  },
  {
    organization: "Stanford University",
    title: "Reading & Writing the DJ — Course Assistant",
    location: "Stanford, CA",
    period: "Aug 2024 – Sep 2024",
    bullets: [
      "Co-designed and facilitated Mix Club, a DJ curriculum for 15 Sophomore College students exploring identity through sound.",
      "Supported course instruction with technical DJ training, lecture planning, and feedback on student mixes.",
      "Managed course funds and helped organize performance showcases and community events.",
    ],
  },
  {
    organization: "Stanford University",
    title: "Black LAiR — Course Helper",
    location: "Stanford, CA",
    period: "Jan 2024 – Jun 2025",
    bullets: [
      "Provided weekly technical support to 200+ students in introductory computer science courses.",
      "Fostered an inclusive, collaborative learning environment with peer-to-peer problem solving.",
    ],
  },
  {
    organization: "Stanford University",
    title: "Sound Engineer",
    location: "Stanford, CA",
    period: "Jun 2024 – Aug 2024",
    bullets: [
      "Produced original beats, mixed vocals, and composed songs for the Cheli album.",
    ],
  },
  {
    organization: "Stanford University",
    title: "Art & Art History Dept. — Front Desk Assistant",
    location: "Stanford, CA",
    period: "Aug 2023 – May 2024",
    bullets: [
      "Managed incoming phone and email communications and provided administrative support to staff and visitors.",
      "Assisted with event planning, setup, and logistics for department programming.",
    ],
  },
  {
    organization: "TuneTies",
    title: "UI/UX Designer",
    location: "Stanford, CA",
    period: "Sep 2023 – Dec 2023",
    bullets: [
      "Designed and prototyped core user flows in Figma for a personalized live-events app.",
      "Translated product goals into intuitive interfaces through iterative prototyping and user feedback.",
    ],
  },
  {
    organization: "Stanford Intelligent Systems Laboratory (SISL)",
    title: "Research Assistant",
    location: "Stanford, CA",
    period: "Jun 2023 – Aug 2023",
    bullets: [
      "Researched crowdsourced observation selection using POMDPs and reinforcement learning.",
      "Gained experience in Julia and ML/RL through development of a Partially Observable Markov Decision Process model.",
      "Presented findings on adaptive observation strategies to faculty.",
    ],
  },
];

export const resumeProjects = [
  {
    title: "EE 11SC: Dream It, Build It!",
    context: "Stanford Sophomore College · Sep 2023",
    bullets: [
      "Introductory electrical engineering intensive: rapidly prototyped, customized functionality, managed cloud data, and built a sound-reactive LED display speaker system.",
    ],
  },
];

export const resumeLeadership = [
  {
    title: "Apple Pathways Alliance Fellow",
    bullets: [
      "Completed 20+ virtual workshops to develop technical and professional skills.",
      "1:1 conversations with Apple employees on career goals and industry practice.",
    ],
  },
  {
    title: "Management Leadership for Tomorrow — Career Prep Fellow",
    period: "Jan 2024 – Present",
    bullets: [
      "Selective 18-month professional development program for high-achieving diverse talent.",
      "Business case studies and leadership conferences hosted by Deloitte, LinkedIn, and Target.",
    ],
  },
  {
    title: "Stanford LINXS Program",
    period: "Jun 2023 – Aug 2023",
    bullets: [
      "Residential program for hands-on research experience, industry visits, and graduate school preparation.",
    ],
  },
];
