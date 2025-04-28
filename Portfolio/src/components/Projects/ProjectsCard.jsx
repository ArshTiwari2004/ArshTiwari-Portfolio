import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, GitCommit } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        delay: index * 0.1,
        bounce: 0.3,
      },
    },
  };

  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3 }, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-300"
    >
      <div 
        onClick={onClick}
        className="cursor-pointer"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image || `https://source.unsplash.com/random/800x600/?${project.categories[0].toLowerCase()},tech`}
            alt={project.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute top-0 right-0 p-2 bg-white bg-opacity-90 m-2 rounded-full">
            {Icon && <Icon size={16} className="text-blue-600" />}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
              <p className="text-gray-200 text-sm line-clamp-1">{project.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-medium">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GitCommit size={18} />
            </a>
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <button
            onClick={onClick}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
