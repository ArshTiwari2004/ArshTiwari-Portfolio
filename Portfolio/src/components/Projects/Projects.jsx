import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ProjectsParticleBackground from './Projectsparticlebackground';

const Projects = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: "IncentiX",
      tagline: "Decentralized platform designed to reward open source contributions",
      description: "Transforming Open-Source with immediate crypto rewards for every contribution. Empowering developers, fueling innovation, and building a collaborative ecosystem where every effort is recognized instantly.",
      image: "/incentix.png",
      techStack: ["React", "Node.js", "Solidity", "mongoDB", "auth0"],
      github: "https://github.com/ArshTiwari2004/IncentiX",
      deployed: "https://incenti-x.vercel.app/",
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
    },
    {
        id: 4,
        name: " Guardian Vault",
        tagline: "Store, organize, and access files anytime, anywhere with secure storage",
        description: "Guardian Vault redefines digital document storage and management with advanced features and robust security measures, it offers seamless organization, collaboration, and accessibility for individuals and businesses alike.",
        image: "/guardian.png",
        techStack: ["Jupyter Notebook", "Purebasic", "ReactJS", "Firebase", "AWS"], 
        github: "https://github.com/ArshTiwari2004/Guardianvault",
        deployed: "https://guardian-vault-codestrikers.web.app/",
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
    },
    {
        id: 6,
        name: "Message Maze",
        tagline: "Dive into the world of anonymous conversations and have fun!",
        description: "This backend application is built using NEXT JS and allows users to send anonymous messages to eachother. It also prompts random messages which are generated through AI using the vercel AI SDK and Open AI which allows users to select and send those messages to other users being anonymous.",
        image: "/covid19.png",
        techStack: ["Next JS", "ZOD", "shadcn", "vercel-ai SDK", "typescript" , "Open AI api", "mongoDB Atlas" , "bcrypt"],
        github: "https://github.com/ArshTiwari2004/MessageMaze",
        deployed: "https://github.com/ArshTiwari2004/MessageMaze",
    }
  ];

  const projectVariants = {
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

  return (
    <div className="relative min-h-screen">
        <ProjectsParticleBackground />
    <div className=" min-h-screen bg-white py-20">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4 mt-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600">
            Explore my latest works and contributions
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true, // Animates only the first time it comes into view
              threshold: 0.2,    // Triggers when 20% of the card is visible
            });

            return (
              <motion.div
                key={project.id}
                ref={ref}
                variants={projectVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 border border-blue-600" // 3d look
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full   " // 3d look
        
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                          {project.name}
                        </span>
                      </h3>
                      <p className="text-xl font-semibold text-gray-700 mb-4">
                        {project.tagline}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                      >
                        <GitCommit size={20} />
                        <span>View Code</span>
                      </a>
                      <a
                        href={project.deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
    </div>
  );
};

export default Projects;