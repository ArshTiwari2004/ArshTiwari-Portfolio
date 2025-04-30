import { GitCommit, ExternalLink, Code, Globe, Shield, Brain, MessageSquare, Box } from 'lucide-react';

export const projectCategories = [
  { id: 'All', label: 'All Projects', icon: Box },
  { id: 'Web', label: 'Web Development', icon: Globe },
  { id: 'Mobile', label: 'Mobile Apps', icon: MessageSquare },
  { id: 'AI/ML', label: 'AI & Machine Learning', icon: Brain },
  { id: 'Blockchain', label: 'Blockchain', icon: Shield },
  { id: 'Backend', label: 'Backend', icon: Code },
];

export const projects = [


    {
        id: 7,
        name: "Signal-X",
        tagline: "AI-powered smart traffic management system",
        description: "Signal-X is an hackathon-winning project that leverages AI and advanced computer vision to optimize real-time traffic flow. Using YOLO-based vehicle detection, Arduino-controlled signals, and MapMyIndia’s geospatial analytics, it dynamically adjusts traffic lights to reduce congestion, prioritize emergency vehicles, and improve road safety. Scalable and adaptable to cities of all sizes, SignalX offers a future-ready solution for smarter, safer urban commuting.",
        image: "/signalx.png",
        techStack: ["YOLOv8", "OpenCV", "Arduino", "MapMyIndia API", "Python", "Flask" , "React" ,"React Native" , "MongoDB"],
        github: "https://github.com/ArshTiwari2004/Signal-X",
        deployed: "https://signal-x-zkh5.vercel.app/",
        categories: ['All', 'AI/ML', 'Web', 'Mobile'],
        featured: true,
        icon: Brain
      },
  {
    id: 2,
    name: "Travello",
    tagline: "Let's Discover the World Together",
    description: "Our platform is designed to revolutionize the travel experience by guiding you to hidden attractions and cultural experiences through interactive challenges. We integrate gamification with AI-powered personalization to create dynamic itineraries that adapt to your interests and real-time conditions, making every journey a memorable adventure.",
    image: "/travello.png",   
    techStack: ["React", "Express", "Python", "mapbox", "mongoDB"],
    github: "https://github.com/ArshTiwari2004/Synapse",
    deployed: "https://synapse-2ezy.vercel.app/",
    categories: ['All', 'Web', 'Backend'],
    icon: Globe
  },
  {
    id: 2,
    name: "IncentiX",
    tagline: "Decentralized platform designed to reward open source contributions",
    description: "Transforming Open-Source with immediate crypto rewards for every contribution. Empowering developers, fueling innovation, and building a collaborative ecosystem where every effort is recognized instantly.",
    image: "/incentix.png",
    techStack: ["React", "Node.js", "Solidity", "mongoDB", "auth0"],
    github: "https://github.com/ArshTiwari2004/IncentiX",
    deployed: "https://incenti-x.vercel.app/",
    categories: ['All', 'Web', 'Blockchain'],
    icon: Shield
  },
  {
    id: 7,
    name: "Sahyog",
    tagline: "AI-powered centralized disaster response and inventory management system",
    description: "Sahyog is an AI-integrated disaster management platform built with React and Express, leveraging Google Cloud, Vertex AI, and Gemini APIs to predict disasters, analyze satellite/drone imagery for damage assessment, and coordinate real-time relief. It features RFID-based inventory tracking, resource optimization via OR-Tools, blockchain-backed transparency using Hyperledger Fabric, and multilingual alerts through Twilio and Firebase, ensuring effective communication and faster disaster response.",
    image: "/sahyog.png",
    techStack: ["React", "Express.js", "Google Cloud", "Vertex AI", "Gemini API", "Twilio", "Hyperledger Fabric", "Apache Kafka", "TensorFlow", "Python", "GCS"],
    github: "https://github.com/ArshTiwari2004/Sahyog", // Replace with your repo link
    deployed: "https://sahyog-project.vercel.app/", // Replace with your deployed link if available
    categories: ['All', 'AI/ML', 'Web', 'Blockchain'],
    featured: true,
    icon: Brain
  
  
},
{
    id: 8,
    name: "Recap",
    tagline: "AI-powered note organization that adapts to your learning style.",
    description: "Recap is a smart learning platform that revolutionizes how students manage study materials. Built with React and Firebase, it uses AI via Groq, Cohere, and AssemblyAI to automatically organize notes, convert handwritten or audio input into searchable text, and generate flashcards and quizzes. With features like collaborative groups, smart PYQ analysis, and AI insights on weak areas, Recap personalizes your learning journey for maximum efficiency and engagement.",
    image: "/recap.png",
    techStack: ["React.js", "Tailwind CSS", "shadcn UI", "Node.js", "Firebase", "Groq", "AssemblyAI", "Cohere", "Tesseract.js", "Docker", "Kubernetes"],
    github: "https://github.com/ArshTiwari2004/Recap",
    deployed: "https://recap-5ajg.vercel.app/", // replace with actual deployed link if different
    categories: ['All', 'AI/ML', 'Web'],
    icon: Code
  }, 
  {
    id: 3,
    name: "Lumina",
    tagline: "Transforming Data into a Comprehensive, Insightful Annual Report",
    description: "Welcome to Lumina, where we transform your institute's achievements into a powerful, data-driven annual report. Simplify, analyze, and visualize the academic journey like never before.",
    image: "/lumina.png",
    techStack: ["Tensorflow", "Python", "Firebase", "Ollama AI", "AWS"],
    github: "https://github.com/ArshTiwari2004/SIH",
    deployed: "https://lumina-beta.vercel.app/",
    categories: ['All', 'AI/ML', 'Web'],
    icon: Brain
  },
  {
    id: 4,
    name: "Guardian Vault",
    tagline: "Store, organize, and access files anytime, anywhere with secure storage",
    description: "Guardian Vault redefines digital document storage and management with advanced features and robust security measures, it offers seamless organization, collaboration, and accessibility for individuals and businesses alike.",
    image: "/guardian.png",
    techStack: ["Jupyter Notebook", "Purebasic", "ReactJS", "Firebase", "AWS"], 
    github: "https://github.com/ArshTiwari2004/Guardianvault",
    deployed: "https://guardian-vault-codestrikers.web.app/",
    categories: ['All', 'Web', 'Backend'],
    icon: Code
  },
  {
    id: 5,
    name: "Rapid Relief",
    tagline: "Get FREE assistance during emergencies and calamities",
    description: "RapidRelief is a community-driven platform aimed at providing free assistance during emergencies and calamities. Users can opt to become volunteers. Whenever someone's in an emergency or in need of help, they can open the app and call for immediate help. One of our volunteers will arrive as fast as possible, with important equipment provided by us like a proper first aid kit, tools and other aids as per the requirement. The volunteer will want to do it as fast as possible to get the maximum points. Volunteers can later redeem their points earned by helping others in exchange for currency! This keeps them motivated to help others while also helping improve the society.",
    image: "/rapidd.png",
    techStack: ["React Native", "Google's Firebase", "React", "Expo-Router", "APK"],
    github: "https://github.com/ArshTiwari2004/RapidRelief",
    deployed: "https://github.com/ArshTiwari2004/hackfrosh/releases/download/v0.0.1/rapid-relief.apk",
    categories: ['All', 'Mobile'],
    icon: MessageSquare
  },
  {
    id: 6,
    name: "Message Maze",
    tagline: "Dive into the world of anonymous conversations and have fun!",
    description: "This backend application is built using NEXT JS and allows users to send anonymous messages to eachother. It also prompts random messages which are generated through AI using the vercel AI SDK and Open AI which allows users to select and send those messages to other users being anonymous.",
    image: "/messsagemaz.png",
    techStack: ["Next JS", "ZOD", "shadcn", "vercel-ai SDK", "typescript" , "Open AI api", "mongoDB Atlas" , "bcrypt"],
    github: "https://github.com/ArshTiwari2004/MessageMaze",
    deployed: "https://github.com/ArshTiwari2004/MessageMaze",
    categories: ['All', 'Backend', 'AI/ML'],
    icon: Brain
  },
];

export const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.3,
    },
  },
};