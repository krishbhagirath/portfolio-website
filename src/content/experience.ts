export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  logo: string;
  responsibilities: string[];
}

export const workExperience: ExperienceItem[] = [
  {
    title: "Engineering Intern",
    organization: "Novologic",
    period: "May 2025 - August 2025",
    logo: "/novologic.png", // Replace with Novologic logo
    responsibilities: [
      "Engineered full-stack features with Laravel, PHP, MySQL, JS, HTML/CSS, applying scalable architecture and the repository pattern",
      "Diagnosed and resolved high-priority bugs, improving UX and app stability by closing functional tickets",
      "Built and optimized responsive email templates (HTML/CSS/JS) and integrated email APIs for automated outreach",
      "Performed QA audits and edge-case testing to drive product refinement and ensure release-readiness",
      "Prototyped an AI-driven help chatbot using React.js and Laravel to streamline user navigation",
      "Enhanced and organized investor-facing decks and documents for clarity, consistency, and impact"
    ]
  },
  {
    title: "Software Developer",
    organization: "McMaster MedT",
    period: "Sept 2024 - Present",
    logo: "/medt.png", // Replace with McMaster MedT logo
    responsibilities: [
      "Software team member at McMaster's Medical Engineering Design Team (MedT), creating cutting-edge biomedical tech",
      "Helped build CradleWatch, a real-time infant monitoring system designed to alert caregivers of distress, supporting proactive parenting",
      "Engineered an embedded prototype by integrating servo motors, sensors, and a lightweight UI, enhancing system responsiveness",
      "Collaborated closely with fellow software, electrical, and mechanical sub-teams to deliver a fully functional cross-disciplinary prototype"
    ]
  },
  {
    title: "Computer Vision Subteam",
    organization: "McMaster Robosub",
    period: "Feb 2025 - Sep 2025",
    logo: "/robosub.png", // Replace with Robosub logo
    responsibilities: [
      "Computer Vision subteam member on McMaster RoboSub, building AI-driven systems for autonomous underwater vehicles (AUVs)",
      "Completed extensive dataset research and hardware/software benchmarking to align vision models with AUV mission needs",
      "Developed core skills in ROS2, Gazebo, PyTorch, and TensorFlow for real-time simulation and model deployment",
      "Currently expanding C++/Python ROS2 development skills ahead of hands-on AUV integration"
    ]
  },
  {
    title: "High School Tutor",
    organization: "Self-Employed",
    period: "Sept 2021 - Present",
    logo: "/book.png", // Replace with book/education icon
    responsibilities: [
      "Provided academic tutoring services to local high school students in the community",
      "Specialized in STEM subjects, with a focus on STEM (mathematics, physics, computer science, etc.)",
      "Helped students strengthen core concepts, improve grades, and build confidence in problem-solving"
    ]
  },
  {
    title: "Programming Lead",
    organization: "FIRST Robotics - Sabre Bytes Team 772",
    period: "Feb 2021 - Sept 2023",
    logo: "/first.png", // Replace with FIRST Robotics logo
    responsibilities: [
      "Spearheaded a programming team of 10 developers, overseeing task delegation, sprint planning, and milestone execution.",
      "Delivered technical mentorship by teaching core programming principles and object-oriented design.",
      "Conducted hands-on training in C++ and Java, equipping members with skills for competition-ready development.",
      "Fostered a collaborative, growth-focused environment to drive innovation and optimize robot performance."
    ]
  }
];

export const volunteerExperience: ExperienceItem[] = [
  {
    title: "First Year Representative",
    organization: "McMaster Indian Association",
    period: "Sept 2024 - Aug 2025",
    logo: "/MIA-modified.png", // Replace with MIA logo
    responsibilities: [
      "Organizing cultural events and activities to promote Indian culture on campus",
      "Collaborating with other student organizations to enhance community engagement"
    ]
  },
  {
    title: "Teaching Assistant",
    organization: "UCMAS Teaching Assistant",
    period: "Sept 2022 - Sept 2024",
    logo: "/ucmas.png", // Replace with UCMAS logo
    responsibilities: [
      "Promoted to teaching assistant, after successful completion of the program, demonstrating advanced proficiency in robotics and programming through the UCMAS curriculum.",
      "Mentored diverse groups of students, adapting teaching strategies to accommodate varying skill levels and learning styles.",
      "Delivered engaging lessons on Arduino fundamentals, circuitry, and C programming, fostering both technical skills and curiosity.",
      "Cultivated a supportive learning environment, helping students troubleshoot real-world robotics challenges and achieve measurable progress."
    ]
  },
  {
    title: "President",
    organization: "DECA President",
    period: "Sept 2022 - June 2024",
    logo: "/deca.png", // Replace with DECA logo
    responsibilities: [
      "Led the development of a province-winning business plan in the 2022–2023 DECA competition, showcasing strategic thinking and market analysis.",
      "Oversaw and motivated a 30-member chapter, driving task delegation, accountability, and performance improvement.",
      "Collaborated with executive members to implement growth strategies, streamline operations, and enhance overall club engagement.",
      "Mentored junior members by coordinating knowledge-sharing sessions with senior executives, significantly improving team preparedness and competition outcomes."
    ]
  },
];

export const education: ExperienceItem[] = [
  {
    title: "Bachelor of Engineering (B.Eng) in Computer Engineering",
    organization: "McMaster University",
    period: "Sept 2024 - Present",
    logo: "/mcmaster.png", // Replace with McMaster logo
    responsibilities: [
      "Bachelor of Engineering (B.Eng) in Computer Engineering",
      "First year Dean's Honour List recipient"
    ]
  },
  {
    title: "Ontario Secondary School Diploma (OSSD)",
    organization: "Sandwich Secondary School",
    period: "Sep 2020 - Jun 2024",
    logo: "/sandwich.png", // Replace with school logo
    responsibilities: [
      "Maintained a 98+% average throughout all four years",
      "Received over $20000 in scholarships towards my post-secondary education",
      "Executive and presidential roles on various student organizations:",
      "  - FIRST Robotics (Team 772) Programming Lead",
      "  - DECA President",
      "  - Student Parliament Executive",
      "  - Peer Helpers Tutor",
      "  - Relay for Life Committee Executive",
      "  - Varsity Soccer Captain"
    ]
  }
];
