import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GitCommit, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const Icon = project.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image || `https://source.unsplash.com/random/1200x600/?${project.categories[0].toLowerCase()},tech`}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-white bg-blue-600/80 px-3 py-1 rounded-full text-sm font-medium">
                  {project.categories[1] || project.categories[0]}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.name}</h2>
              <p className="text-gray-200 text-lg">{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
            >
              <X size={20} className="text-gray-700" />
            </button>
          </div>
          
          <div className="overflow-y-auto p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">About the Project</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies Used</h3>
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
          
          <div className="border-t border-gray-200 p-6 flex justify-between">
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <GitCommit size={18} />
                <span>View Code</span>
              </a>
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
