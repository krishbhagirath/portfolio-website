export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  videos?: string[];
  tags: string[];
  overview: string;
  details: string[];
  category: "personal" | "school";
  externalLinks?: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  // ======================
  // SCHOOL
  // ======================

  {
    id: "terminal-snake",
    title: "Terminal Snake Game",
    description: "User-controlled terminal Snake game built with OOP and core memory management concepts in C/C++.",
    thumbnail: "/snaketitle.png",
    images: ["/snake.png", "/uml.png"],
    tags: ["C", "C++", "OOP", "Memory Management"],
    overview: "A terminal-based Snake game focused on clean object-oriented structure and low-level programming fundamentals.",
    details: [
      "• Implemented core game loop, input handling, collision rules, and score tracking.",
      "• Used OOP to organize entities (snake, board, food) for maintainability and clarity.",
      "• Applied memory management concepts while building and debugging runtime behavior."
    ],
    externalLinks: [{ label: "GitHub", url: "https://github.com/krishbhagirath/oop-snake-game" }],
    category: "school"
  },

  {
    id: "programmable-logic-design",
    title: "Programmable Logic Design",
    description: "Design, simulation, and FPGA deployment of digital logic systems using gates, flip-flops, counters, and Verilog.",
    thumbnail: "/programmable-logic.png",
    images: ["/board.png", "/schematic.png", "/verilog.png", "/scope.png"],
    tags: ["Digital Logic", "Verilog", "Quartus", "FPGA", "DE10", "Flip-Flops", "Counters", "Oscilloscope"],
    overview: "Digital logic labs spanning breadboard circuits through Verilog simulation and FPGA implementation.",
    details: [
      "• Built and tested combinational logic with gates and breadboard-based circuits.",
      "• Designed sequential systems including flip-flops and counters.",
      "• Simulated designs in Quartus (Verilog + schematics) and deployed to DE10 FPGA hardware.",

      "\nLab Reports:",
      "• Lab 1: Implemented fundamental combinational logic by building all basic gates using only NANDs and measuring gate delay.",
      "• Lab 2: Designed advanced combinational circuits, including K-map minimization, multiplexers, and 4-bit adders/subtractors using 2’s complement.",
      "• Lab 3: Introduced Verilog HDL for modeling and simulation, implementing a decoder and a 7-segment display driver.",
      "• Lab 4: Explored synchronous sequential logic with shift registers and counters, and measured EEPROM access time.",
    ],
    externalLinks: [{ label: "Read Full Lab Reports", url: "https://drive.google.com/drive/folders/1f5j9WMxIzEll9RHo5fb3HrEXittdcKEK?usp=drive_link" }],
    category: "school"
  },
  {
    id: "airport",
    title: "Autonomous Airport System",
    description: "CAD-designed system with Python automation for luggage handling and passenger data management.",
    thumbnail: "/luggageCAD.png",
    images: [
      "/luggageCAD.png",
      "/airport1.png",
      "/airport2.png",
      "/airport3.png",
      "/airport4.png",
      "/airport5.png"
    ],
    videos: ["/mechanism-video.mp4"],
    tags: [
      "Python", "Autodesk Inventor", "CAD", "3D Printing", "Laser Cutting",
      "Prusa Slicer", "Rotary Actuators", "Mechanism Design",
      "Mechanical Assembly", "Q-arm Robotics", "Team Collaboration",
      "Problem Solving", "System Integration"
    ],
    overview: "As part of McMaster's first year project-based engineering course, this 9-week design project challenged our team to automate airport luggage handling using both robotics and custom-built mechanisms. The result was a semi-autonomous system that sorted and transported luggage based on barcode input, combining Python logic, CAD design, and hardware integration into one cohesive solution.",
    details: [
      "• Custom Python Programs: Built scripts to control the Q-arm for barcode interpretation and data sorting (Slide 5). Created a parallel script to automate the full luggage-handling flow.",
      "• CAD Design & 3D Printing: Modeled and assembled the luggage transport mechanism in Autodesk Inventor, then laser-cut or printed each part for testing.",
      "• Embedded System Integration: Merged the Q-arm logic with our mechanism using rotary actuators and ramps to autonomously move luggage from point A to B.",
      "• Mechanical Feasibility: Considered torque, retraction forces, and alignment tolerances during design — iterating on physical builds based on test outcomes.",
      "• Iterative Prototyping: Overcame failures such as ramp misalignment and retraction issues by redesigning part geometries and adjusting materials to improve real-world function.",
      "• Beyond meeting the project's engineering goals, this challenge strengthened our ability to combine software with hardware under real-world design constraints. It showcased how thoughtful prototyping, iterative problem-solving, and multidisciplinary teamwork can transform a basic concept into a functional, testable airport automation system."
    ],
    externalLinks: [
      {
        label: "Read Full Project Breakdown",
        url: "https://bhagirak.wixsite.com/portfolio1p13/portfolio"
      }
    ],
    category: "school"
  },
  {
    id: "clipcall",
    title: "ClipCall",
    description: "Cane attachment designed for an Usher syndrome client to enable hands-free phone use.",
    thumbnail: "/clipcall-main.png",
    images: [
      "/clipcall.png",
      "/clipcall-prototypes.png",
      "/clipcall-exploded.png",
      "/clipcall-enhancement.png"
    ],
    videos: ["/clipcall-demonstration.MOV"],
    tags: [
      "Autodesk Inventor", "CAD Modelling", "Mechanical Design",
      "3D Printing", "Design Thinking", "Adaptability",
      "Client-Oriented Engineering"
    ],
    overview: "As part of McMaster's IMPACT initiative, the Power in Community project focused on designing an assistive device for Kimberly, a client with Usher Syndrome. Our mission was to create a simple yet effective solution to improve her daily mobility by addressing the challenge of holding both her cane and phone during walks.",
    details: [
      "• Designed a cane-mounted phone holder that allows hands-free GPS navigation and communication.",
      "• Created multiple CAD iterations in Autodesk Inventor, progressively simplifying the design for comfort, usability, and 3D printability.",
      "• Employed design matrices and morph charts to evaluate alternatives and guide decisions.",
      "• Chose Velcro straps and MagSafe mount for adjustable fit and ease of use with limited dexterity.",
      "• Iteratively tested and revised the prototype based on Kimberly's needs, feedback from TA evaluations, and mechanical constraints",
      "• Pivoted from an initially overambitious smart-cane concept with sensors and AI to a more feasible mechanical design within the 6-week timeline.",
      "• As project coordinator, contributed to documentation, coordinated meetings, and drove creative decisions like simplifying the clamp and adding adjustability mechanisms.",
      "This project highlighted the true essence of engineering—not just building solutions, but tailoring them to real client needs with empathy, creativity, and purpose."
    ],
    externalLinks: [
      {
        label: "Read Full Project Breakdown",
        url: "https://bhagirak.wixsite.com/portfolio1p13/copy-of-project-1"
      }
    ],
    category: "school"
  },

  // ======================
  // PERSONAL / CLUB
  // ======================

  {
    id: "cradlewatch",
    title: "CradleWatch",
    description: "AI-powered baby monitor that detects emotion and alerts parents of distress while they're away.",
    thumbnail: "/cradlewatch.png",
    images: ["/cradlewatch exploded.png", "/cradlewatch poster.png"],
    videos: ["/cradlewatch.mov"],
    tags: [
      "Raspberry Pi", "Python", "Flask", "OpenCV", "JavaScript", "HTML", "CSS",
      "MediaPipe", "Twilio API", "PyTorch", "PCA9685"
    ],
    overview: "CradleWatch is an AI-powered infant monitoring system that detects emotional distress and responds in real time. Designed to address early signs of SIDS and improve caregiver awareness, it combines deep learning, facial tracking, and embedded hardware into a fully functional, responsive prototype.",
    details: [
      "Built by a cross-functional team at McMaster's Medical Engineering Design Team, CradleWatch blends computer vision with real-world hardware:",
      "\nSoftware System:",
      "  • Used MediaPipe Face Mesh to extract 3D facial landmarks, enabling analysis of emotion indicators such as eye aspect ratio and mouth shape.",
      "  • Integrated a fine-tuned Vision Transformer (ViT) model via Hugging Face to classify emotional states like fear, sadness, and distress.",
      "  • Built a lightweight web interface with Flask to serve live video streams, with OpenCV handling frame manipulation.",
      "\nHardware Integration:",
      "  • Ran the system on a Raspberry Pi to perform on-device, edge-based processing.",
      "  • Used the I²C protocol to interface with environmental sensors.",
      "  • Controlled a dual-axis pan-tilt camera mechanism using the PCA9685 PWM driver.",
      "  • Sent automated alerts through Twilio SMS API when emotional distress was detected.",
      "\nTeam Collaboration:",
      "  • Coordinated with electrical and mechanical sub-teams to integrate servo controls, camera modules, and custom 3D-printed components.",
      "  • Helped manage real-time data flow and debug cross-disciplinary integration between embedded systems and computer vision.",
      "CradleWatch represents a significant step towards proactive infant care, combining advanced AI with practical hardware solutions to enhance caregiver awareness and response."
    ],
    externalLinks: [
      { label: "See More (Presentation)", url: "/cradlewatch.pdf" },
      { label: "GitHub", url: "https://github.com/krishbhagirath/baby-monitoring-MED-T" }
    ],
    category: "personal"
  },

  {
    id: "deepfakedetector",
    title: "DeepFakeDetector",
    description: "Hybrid deepfake detection using CNNs, Vision Transformers, and frequency-domain (FFT) fusion model.",
    thumbnail: "/macaisociety.png",
    images: ["/macaisociety.png", "/flowchart.png"],
    tags: [
      "Python", "PyTorch", "Convolutional Neural Networks (CNNs)", "Vision Transformer", "FFT", "NumPy", "Pandas",
      "MatPlotLib", "Next.js", "FastAPI"
    ],
    overview: "Overview: Working in a 6-member interdisciplinary team at the McMaster Artificial Intelligence Society to develop an interpretable system for detecting deepfake and AI-generated images.",
    details: [
      "Designing a hybrid deepfake detection model, using:",
      "  • CNNs for localized spatial artifacts and texture inconsistencies.",
      "  • Vision Transformers for global semantic and contextual features.",
      "  • FFT-based analysis for frequency-domain generative artifacts.",
      "\nPersonal contributions are focused on improving model performance and robustness.",
      "  • Contributing to model architecture design, creating lear visual architecture diagrams illustrating multi-stream feature extraction and learned feature fusion.",
      "  • Fine-tuning Vision Transformer models on large-scale datasets (OpenFake, WildFake, Dragon datasets).",
      "  • Experimenting with patch sizes, learning rates, and attention settings.",
      "  • Implementing task-specific CNN classification heads to aggregate learned features into a single prediction output.",
      "\nGoal: Building interpretability into the prediction pipeline.",
      "  • Generating Grad-CAM heatmaps to highlight influential image regions.",
      "  • Visualizing attention maps to explain model confidence scores.",
      "\nNext Steps: Developing a full-stack web application for real-time inference.",
      "  • Next.js frontend for image upload and results visualization.",
      "  • FastAPI backend for model inference and API endpoints."
    ],
    externalLinks: [{ label: "GitHub", url: "https://github.com/McMasterAI-Society/DeepFakeDetector" }],
    category: "personal"
  },

  {
    id: "gitcheck",
    title: ".gitCheck",
    description: "Automated judging engine that cross-references project claims with GitHub data to validate authenticity.",
    thumbnail: "/gitchecklogo.png",
    images: [
      "/gitchecklogo.png",
      "https://www.youtube.com/watch?v=PPvSAhMUhZY",
      "/gitcheckprojects.png",
      "/gitcheckSAB.png",
      "/gitcheckAnalysis.png",
      "/gitcheckTU.png",
      "/gitcheckFlag.png"
    ],
    tags: ["LangChain", "LangGraph", "Gemini Pro", "FastAPI", "Next.js 15", "PyGithub", "BeautifulSoup4"],
    overview: ".gitCheck is an AI-driven integrity verification engine designed to automate hackathon judging. It employs a multi-agent orchestration layer to cross-reference Devpost submissions with real-time GitHub activity, ensuring projects are original and built within the competition window.",
    details: [
      "• Multi-Agent Orchestration: Architected a system using LangChain and LangGraph to coordinate specialized AI agents for deep semantic analysis of code and documentation.",
      "• Server-Side Analysis: Integrated GitHub REST API for real-time repository auditing of commits, languages, and file trees without cloning overhead.",
      "• Dual-Verification System: Cross-references Devpost feature claims with GitHub commit timelines to ensure chronological accuracy and implementation validity.",
      "• Feature Investigator: Built a Google Gemini Pro agent to perform AI-driven code-to-documentation analysis, identifying 'Weighted Claims' vs secondary utilities.",
      "• Scalable Backend: Engineered a high-volume judging pipeline using Next.js 15 and Python/FastAPI, featuring a secure multi-tenant dashboard with Auth0 and Prisma."
    ],
    externalLinks: [
      { label: "GitHub", url: "https://github.com/krishbhagirath/GitCheck" },
      { label: "Devpost", url: "https://devpost.com/software/gitcheck" },
      { label: "Live Site", url: "https://gdg-gitcheck.vercel.app" }
    ],
    category: "personal"
  },

  {
    id: "hiready",
    title: "Hiready",
    description: "An interview preparation agent that simulates a real interview and gives you live feedback on REAL interview questions.",
    thumbnail: "/hireadyhome.png",
    images: [
      "/hireadyhome.png",
      "/hireadypreinterview.png",
      "/hireadynemo.png",
      "/hireadyreport1.png",
      "/hireadyreport2.png"
    ],
    tags: ["C++", "Next.js", "React", "Google Gemini", "ElevenLabs API", "Presage SDK", "OpenCV"],
    overview: "Hiready is a comprehensive AI mock interviewer designed to simulate real-world interview scenarios, ranging from behavioral inquiries to deep technical questions. It uses the Presage C++ SDK to detect physiological stress levels and emotional cues via webcam, while simultaneously transcribing spoken conversation. This data is processed by Google's Gemini to generate a detailed, actionable feedback report on both delivery composure and answer content.",
    details: [
      "• Built a real-time AI interviewer using C++ and Next.js.",
      "• Integrated Google Gemini for intelligent conversation and feedback.",
      "• Used Presage SDK to analyze physiological stress signals during the interview.",
      "• Implemented ElevenLabs API for lifelike voice interaction.",
      "• Designed a comprehensive feedback system to help users improve their interview skills."
    ],
    externalLinks: [
      { label: "GitHub", url: "https://github.com/krishbhagirath/smart-interviewer" },
      { label: "YouTube Demo", url: "https://www.youtube.com/watch?v=3doCmEJBar0" },
      { label: "Devpost", url: "https://devpost.com/software/nemo-0y1m7h" }
    ],
    category: "personal"
  },

  {
    id: "nbamatchpredictor",
    title: "CourtML",
    description: "Production-ready machine learning system predicting NBA game outcomes with high precision via a custom gradient boosting pipeline.",
    thumbnail: "/courtml.png",
    images: ["/courtml.png"],
    tags: ["Python", "React.js", "Sci-Kit Learn", "GitHub Actions", "HistGradientBoostingClassifier", "NBA API", "Chart.js", "Vercel"],
    overview: "CourtML is a production-grade NBA match predictor that leverages a HistGradientBoostingClassifier (V5) trained on over 17,000 game records spanning 8+ seasons to deliver sub-second win probabilities.",
    details: [
      "• Automated Inference Pipeline: Robust system triggered daily at 6 AM ET to generate fresh win probabilities and matchup data.",
      "• Matchup Merge Architecture: Custom data join aligning 10-game rolling averages for home and away teams, evaluating historical form vs. head-to-head dynamics.",
      "• Visual Explainability: Integrated react-chartjs-2 to contrast team metrics side-by-side, highlighting specific statistical edges (e.g., Four Factors).",
      "• Custom Tooltip Engine: Logic-driven interface calculating exact advantage percentages for leading teams in any category.",
      "• Premium UI/UX: High-performance dashboard utilizing CSS Modules for scoped styling and an AnimatedBackground.js system for dynamic, non-deterministic visuals."
    ],
    externalLinks: [
      { label: "GitHub", url: "https://github.com/krishbhagirath/nba-match-predictor" },
      { label: "Live Site", url: "https://courtml.vercel.app/" }
    ],
    category: "personal"
  },

  {
    id: "pawgress",
    title: "PawGress",
    description: "AI habit tracker using Cohere API to analyze behavior patterns and generate personalized improvement plans.",
    thumbnail: "/pawgress1.jpg",
    images: [
      "/pawgress1.jpg",
      "/pawgressUI.png",
      "/pawgress2.jpg",
      "/pawgress3.jpg",
      "/pawgress4.jpg",
      "/pawgress5.jpg",
      "/pawgress6.jpg",
      "/pawgress7.jpg",
      "/pawgress8.jpg",
      "/pawgress9.jpg",
      "/pawgress10.jpg",
      "/pawgress11.jpg",
      "/pawgress12.jpg"
    ],
    tags: ["React Native", "JavaScript", "TypeScript", "Cohere API", "AsyncStorage", "Node.js", "Java"],
    overview: "PawGress is a mobile app that gamifies habit tracking through Cohere's AI. Users can enter habits, receive personalized advice, and watch a cute dog avatar evolve as they make progress—turning self-improvement into an interactive and rewarding experience.",
    details: [
      "• Designed during DeltaHacks XI, PawGress was inspired by the struggle students face in maintaining healthy habits amidst the freedoms of university life. Unlike traditional to-do lists, PawGress uses natural language processing to analyze daily entries, provide feedback, and suggest improved behavior strategies.",
      "• The app was built in React Native for cross-platform compatibility. It integrates the Cohere API for personalized habit coaching and uses AsyncStorage to manage local user state. A dynamic dog avatar represents habit progression, reinforcing positive behaviors through gamification.",
      "• Initial backend integration used Java and Node.js to connect future database functionality via Supabase. Users can eventually interact with suggested activities and celebrate achievements with a broader community."
    ],
    externalLinks: [
      { label: "GitHub", url: "https://github.com/krishbhagirath" },
      { label: "Devpost", url: "https://devpost.com/software/pawgress-t78w9h" }
    ],
    category: "personal"
  },

  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Responsive React + TypeScript portfolio showcasing my projects and experience.",
    thumbnail: "/portfolio-home.png",
    images: ["/portfolio-home.png"],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI"],
    overview: "A fast, accessible portfolio built with React and Tailwind CSS to highlight my technical work and design sense.",
    details: [
      "• Built with React 18, TypeScript, and Vite",
      "• Custom UI using Radix primitives and Tailwind",
      "• Responsive layouts with smooth animations",
      "• Deployed via Vercel with GitHub version control",
      "• Next: Add RAG AI chatbot and performance tuning to improve user experience"
    ],
    externalLinks: [{ label: "GitHub", url: "https://github.com/krishbhagirath/portfolio-website" }],
    category: "personal"
  },

  {
    id: "intellipark",
    title: "IntelliPark",
    description: "Smart parking system that detects open spots and guides drivers automatically.",
    thumbnail: "/parkinggarage.png",
    images: ["/parkinggarage.png"],
    tags: ["Arduino", "C", "Robotics", "Circuitry", "LCD Displays", "IR Sensors", "Embedded Systems"],
    overview: "IntelliPark is a smart parking prototype designed to streamline vehicle parking through automated feedback and real-time availability detection. Built using Arduino and ultrasonic sensors, it provides a scalable foundation for intelligent parking systems in both public and private spaces.",
    details: [
      "• Developed as part of the UCMAS Robotics Innovation Competition, IntelliPark was awarded first place for its practical application and technical execution.",
      "• Used Arduino Uno paired with ultrasonic sensors to detect vehicle presence and relay real-time availability with an LCD (Liquid Crystal Display).",
      "• Controlled servo motors to simulate gate movement, mimicking an entry/exit barrier system responsive to parking spot status.",
      "• The system was powered through modular wiring and basic PCB design to keep the architecture simple and replicable.",
      "\nInnovation to Enterprise:",
      "While initially a technical proof-of-concept, IntelliPark quickly evolved into a complete business solution. Inspired by its performance and potential, I extended the prototype into a full-scale startup idea for a DECA Entrepreneurship competition.",
      "  • Transformed the core project into a marketable business concept, integrating branding, customer segmentation, and financial projections into a full business plan.",
      "  • Proposed a long-term scalable solution for institutions and municipalities using machine learning for traffic prediction, mobile integration, and cloud-based dashboards.",
      "  • The project underscored how hands-on technical innovation can serve as a springboard for entrepreneurship and social impact."
    ],
    externalLinks: [{ label: "View DECA Business Report", url: "/decareport.pdf" }],
    category: "personal"
  }
];
