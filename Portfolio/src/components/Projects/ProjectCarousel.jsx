import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GitCommit, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCarousel = ({ projects, onProjectSelect }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        className="pb-12"
        onBeforeInit={(swiper) => {
          if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden h-[380px] border border-gray-100 hover:border-blue-200 transition-all duration-300"
            >
              <div
                className="cursor-pointer h-full flex flex-col"
                onClick={() => onProjectSelect(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || `https://source.unsplash.com/random/800x600/?${project.categories[0].toLowerCase()},tech`}
                    alt={project.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                      <p className="text-gray-200 text-sm line-clamp-1">{project.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{project.description}</p>
                  
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

                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GitCommit size={16} />
                      </a>
                      <a
                        href={project.deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <button
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 -ml-4 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft size={20} className="text-gray-600" />
      </div>
      
      <div
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 -mr-4 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight size={20} className="text-gray-600" />
      </div>
    </div>
  );
};

export default ProjectCarousel;