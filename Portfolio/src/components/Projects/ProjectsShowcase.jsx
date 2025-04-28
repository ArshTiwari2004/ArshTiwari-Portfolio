import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import ProjectGrid from './ProjectGrid';
import ProjectCarousel from './ProjectCarousel';
import FeaturedProjects from './FeaturedProjects';
import ProjectModal from './ProjectsModal';
import { projects, projectCategories } from './ProjectsData';
import ProjectsParticleBackground from './Projectsparticlebackground';

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Filter projects based on selected category
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.categories.includes(selectedCategory))
      );
    }

    // Set featured projects (either marked as featured or the first 3)
    const featured = projects.filter(project => project.featured) || projects.slice(0, 3);
    setFeaturedProjects(featured);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'carousel' : 'grid');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ProjectsParticleBackground />
      
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my creative works across various domains and technologies
          </motion.p>
        </div>

        <FeaturedProjects 
          projects={featuredProjects} 
          onProjectSelect={handleProjectSelect} 
        />

        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          <CategoryFilter 
            categories={projectCategories} 
            selectedCategory={selectedCategory} 
            onCategoryChange={handleCategoryChange} 
          />
          
          <div className="mt-4 sm:mt-0">
            <button 
              onClick={toggleViewMode}
              className="px-4 py-2 rounded-md bg-white shadow-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 text-sm"
            >
              {viewMode === 'grid' ? (
                <>
                  <span className="i-lucide-sliders h-4 w-4"></span>
                  Switch to Carousel
                </>
              ) : (
                <>
                  <span className="i-lucide-grid h-4 w-4"></span>
                  Switch to Grid
                </>
              )}
            </button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {viewMode === 'grid' ? (
                <ProjectGrid 
                  projects={filteredProjects} 
                  onProjectSelect={handleProjectSelect} 
                />
              ) : (
                <ProjectCarousel 
                  projects={filteredProjects} 
                  onProjectSelect={handleProjectSelect}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsShowcase;