import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectsCard';

const ProjectGrid = ({ projects, onProjectSelect }) => {
  // If no projects found
  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <p className="text-gray-500 text-lg">No projects found in this category.</p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={index}
          onClick={() => onProjectSelect(project)} 
        />
      ))}
    </div>
  );
};

export default ProjectGrid;