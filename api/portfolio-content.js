export const portfolioContent = `
# About Me
I am a student going into my 3rd year of Computer Engineering at McMaster University. I am deeply interested in Embedded Systems, Artificial Intelligence / Machine Learning, and Software Engineering. I am currently exploring Edge AI, Robotics, and Firmware (i.e., STM32). I love building things that merge hardware and software to solve real-world problems. Hobbies: playing soccer, biking, music, basketball, and gaming.

# Experience
- **Software Developer @ MobilitiQ (ongoing co-op, Summer 2026):** Developing a ride-sharing platform and optimizing machine learning models with PyTorch. Currently building a React Native mobile app for early-stage prototyping.
- **Software Engineering Intern @ Novologic (Summer 2025):**
    • Refactored 15+ core Laravel controllers, implementing the repository pattern for scalable architecture.
    Toronto, ON
    • Designed HTML/CSS email templates for CRM campaigns that generated 10+ qualified leads via A/B testing.
    • Optimized SQL and Laravel Eloquent queries on MySQL to improve schema organization and query efficiency.
    • Built an LLM-based chatbot with React to enhance app navigation and reduce reliance on manual support.
    • Increased feature test coverage from ∼65% to ∼95% through systematic edge-case testing across agile sprints.
- **Software Developer @ McMaster MedT (Sept 2024 - Present):** Helped build CradleWatch (an infant monitoring system) and contributed to VALID (a clinical NLP model).
- **Machine Learning Developer @ McMaster Aerial & Drone Robotics (Oct 2025 - Present):** 
    • Designing real-time circle detection algorithms with Python & YOLO to perform mission-specific vision tasks.
    • Developing software-in-the-loop (SITL) drone simulations on Linux VM with DroneKit to validate autonomy logic.
    • Optimizing model inference for deployment on Jetson Nano, allowing for fast, stable onboard perception.
- **ML Project Member @ McMaster AI Society:** Working on DeepFakeDetector, fine-tuning Vision Transformers.
- **Leadership (high school):** Former Programming Lead for FIRST Robotics Team 772, former DECA President, Student Parliament executive, etc.

# Projects
- **.gitCheck:** 
    • Built a sequential validation agent with LangChain and Python to eliminate manual hackathon submission review.
    • Designed a web-scraping pipeline linking Devpost submissions to their GitHub repos for automated evaluation.
    • Integrated the GitHub API to analyze commit patterns and repository structure to enforce authenticity checks.
    • Deployed a Next.js frontend and FastAPI backend generating automated validation scores for organizer decisions.
- **VALID:** 
    • Built a CT-scan decision model to predict imaging necessity at ED triage by developing a ClinicalBERT-based
    ensemble (MLP, Random Forest, XGBoost), achieving 91% precision and 88% recall.
    • Preprocessed 127K+ MIMIC-IV EHR records via Pandas/NumPy for data cleaning and feature selection/encoding.
    • Awarded the Responsible AI Award at CUCAI among 70+ teams for strong clinical safety and medical impact.
    • I primarily worked on data preprocessing and feature engineering, including handling missing data, encoding categorical variables, and selecting relevant features for model training.
- **CradleWatch:** 
    • Integrated real-time facial tracking and emotion detection with MediaPipe and a Vision Transformer model.
    • Deployed on Raspberry Pi via Picamera2 and OpenCV, enabling servo-based camera control and video feed.
    • Implemented SMS notifications using Twilio API to alert caregivers of prolonged distress, delivering a fully
functional prototype for proactive infant care.
- **Hiready:** 
    • Engineered a feedback-driven interview platform using Next.js and React for voice-driven mock interviews.
    • Integrated Google Speech-to-Text and ElevenLabs voice agent for live transcription and conversational audio.
    • Developed backend signal-processing logic with the C++ Presage SDK for webcam-derived physiological stress.
    • Designed REST/JSON-based service communication to route speech content and physiological stress signals into the
    Gemini API for personalized interview feedback and stress-management guidance.
- **CourtML:** A production-ready NBA match predictor using Gradient Boosting trained on 17,000+ games.
    • Developed an ML pipeline using HistGradientBoostingClassifier on 8 years of NBA data to predict game outcomes.
    • Improved model performance by 20% through iterative experimentation with 5 regression and tree-based models.
    • Reduced 200+ features to 50 predictors using 10-game rolling windows and gradient-boosting feature importance.
    • Deployed and automated an ETL-driven prediction pipeline using GitHub Actions CI/CD and NBA API data.
    • Built a React.js website displaying prediction confidence, model evaluation, and decision statistics with Chart.js.


- **DeepFakeDetector:** Hybrid deepfake detection using CNNs, Vision Transformers, and FFT.
    • Developed a 4-branch hybrid deepfake detection model combining CNN, ViT, FFT, and gradient-based features for
    cross-generator generalization, achieving up to 96.7% accuracy on AI-GenBench and OpenFake benchmarks.
    • Enhanced ViT performance by 14% via fine-tuning DeiT models with MLP heads and differential learning rates.
    • Implemented a Next.js and FastAPI web app, utilizing Grad-CAM for visual heatmaps of deepfake predictions.
- **PawGress:** A gamified AI habit tracker mobile app built with React Native and the Cohere API.
- **IntelliPark:** A smart parking prototype built with Arduino and ultrasonic sensors. Developed working prototype into a full startup business plan for the ESB competition at DECA.
- **Hardware/School Projects:** Designed programmable logic systems on FPGAs, built an autonomous luggage handling mechanism with Python and CAD.

# Skills
- **Languages:** Python, C/C++, TypeScript/JavaScript, PHP, Java
- **AI/ML:** PyTorch, TensorFlow, Scikit-learn, LangChain, Hugging Face, OpenCV
- **Web & Backend:** React, Next.js, Node.js, Express, FastAPI, Laravel
- **Hardware & Tools:** Arduino, Raspberry Pi, Git, Docker, Linux

# Contact Info
Please reach out to me through my LinkedIn (https://www.linkedin.com/in/krish-bhagirath) or GitHub (https://github.com/krishbhagirath), which you can find linked on the website! Happy to work on projects, chat about tech, or just connect.
`;
