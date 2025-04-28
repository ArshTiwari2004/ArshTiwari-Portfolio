import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = ({ projects, onProjectSelect }) => {
  const containerRef = useRef(null);

  if (!projects.length) return null;

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="bg-blue-100 text-blue-600 p-1 rounded">
            <ArrowRight size={20} />
          </span>
          Featured Projects
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"
      >
        {projects.map((project, index) => {
          const isMainFeature = index === 0;
          
          return (
            <motion.div
              key={project.id}
              className={`
                relative overflow-hidden rounded-xl shadow-lg cursor-pointer
                ${isMainFeature ? 'md:col-span-2 md:row-span-2' : ''}
                transform transition-transform duration-300 hover:scale-[1.03]
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => onProjectSelect(project)}
            >
              <div className={`relative ${isMainFeature ? 'aspect-[16/9]' : 'aspect-square'}`}>
                <img
                  src={project.image || `https://source.unsplash.com/random/800x600/?${project.categories[0].toLowerCase()},tech`}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-800 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 bg-blue-600/90 rounded-full text-sm font-medium">
                      {project.categories[1] || project.categories[0]}
                    </span>
                    <h3 className={`font-bold ${isMainFeature ? 'text-2xl' : 'text-xl'}`}>
                      {project.name}
                    </h3>
                    <p className="text-gray-200 line-clamp-2">{project.tagline}</p>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, isMainFeature ? 5 : 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > (isMainFeature ? 5 : 3) && (
                      <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                        +{project.techStack.length - (isMainFeature ? 5 : 3)} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;
