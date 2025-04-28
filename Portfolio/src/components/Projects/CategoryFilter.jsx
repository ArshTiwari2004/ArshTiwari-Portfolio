import React from 'react';
import { motion } from 'framer-motion';
import { projectCategories } from './ProjectsData';

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;
        const Icon = category.icon;
        
        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-300 ease-out
              ${isSelected 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow'}
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon size={16} />
            <span>{category.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;