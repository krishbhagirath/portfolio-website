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
  externalLinks?: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "cradlewatch",
    title: "CradleWatch",
    description: "AI-powered baby monitor that detects emotion and alerts parents of distress while they're away.",
    thumbnail: "/cradlewatch.png", // Replace with CradleWatch thumbnail
    images: [
      "/cradlewatch exploded.png",
      "/cradlewatch poster.png"
    ],
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
      {
        label: "See More (Presentation)",
        url: "/cradlewatch.pdf"
      }
    ]
  },
  {
    id: "pawgress",
    title: "PawGress",
    description: "AI habit tracker using Cohere API to analyze behavior patterns and generate personalized improvement plans.",
    thumbnail: "/pawgress1.jpg", // Replace with PawGress thumbnail
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
    tags: [
      "React Native", "JavaScript", "TypeScript", "Cohere API",
      "AsyncStorage", "Node.js", "Java"
    ],
    overview: "PawGress is a mobile app that gamifies habit tracking through Cohere's AI. Users can enter habits, receive personalized advice, and watch a cute dog avatar evolve as they make progress—turning self-improvement into an interactive and rewarding experience.",
    details: [
      "• Designed during DeltaHacks XI, PawGress was inspired by the struggle students face in maintaining healthy habits amidst the freedoms of university life. Unlike traditional to-do lists, PawGress uses natural language processing to analyze daily entries, provide feedback, and suggest improved behavior strategies.",
      "• The app was built in React Native for cross-platform compatibility. It integrates the Cohere API for personalized habit coaching and uses AsyncStorage to manage local user state. A dynamic dog avatar represents habit progression, reinforcing positive behaviors through gamification.",
      "• Initial backend integration used Java and Node.js to connect future database functionality via Supabase. Users can eventually interact with suggested activities and celebrate achievements with a broader community."
    ]
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
    ]
  },
  {
    id: "intellipark",
    title: "IntelliPark",
    description: "Smart parking system that detects open spots and guides drivers automatically.",
    thumbnail: "/parkinggarage.png", // Replace with IntelliPark thumbnail
    images: ["/parkinggarage.png"],
    tags: [
      "Arduino", "C", "Robotics", "Circuitry", "LCD Displays",
      "IR Sensors", "Embedded Systems"
    ],
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
    externalLinks: [
      {
        label: "View DECA Business Report",
        url: "/decareport.pdf"
      }
    ]
  },
  {
    id: "airport",
    title: "Autonomous Airport System",
    description: "CAD-designed system with Python automation for luggage handling and passenger data management.",
    thumbnail: "/luggageCAD.png", // Replace with Airport System thumbnail
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
    ]
  },
  {
    id: "clipcall",
    title: "ClipCall",
    description: "Cane attachment designed for an Usher syndrome client to enable hands-free phone use.",
    thumbnail: "/clipcall-main.png", // Replace with ClipCall thumbnail
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
    ]
  }
];
