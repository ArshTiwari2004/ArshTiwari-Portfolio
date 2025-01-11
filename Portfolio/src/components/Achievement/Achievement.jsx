import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Youtube, BookOpen, Globe, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import ParticleBackground from '../ParticleBackground';

const ManipalhackathonAchievement = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "achievement1.jpeg",
    "achievement2.jpeg",
    
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative min-h-screen  py-20">
      <ParticleBackground />
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-gray-800 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          Achievements
        </h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-8">
            {/* Title Section with Typewriter */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  <Typewriter
                    words={['M# Hackathon 2024 Victory', 'Third Place Achievement', 'Team Synapse Success']}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
            </div>

            {/* Achievement Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Award className="text-blue-600" size={28} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">3rd Place Winner</h3>
                    <p className="text-gray-600">Out of 450+ teams from 243 colleges</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl space-y-4">
                  <h4 className="font-semibold text-gray-800">🏆 Achievement Highlights</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      36-hour intense offline round at MIT Manipal
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Won INR 20,000 cash prize
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      Ranked in Top 10 during bug bounty round
                    </li>
                  </ul>
                </div>

                {/* Team Section */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-blue-600" size={24} />
                    <h4 className="font-semibold text-gray-800">Team Synapse</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Arsh Tiwari', 'Priyanshi Bothra', 'Nibedan Pati'].map((member) => (
                      <span key={member} className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 text-sm border border-gray-200">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-800 mb-4">🚀 Project: Travello</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A gamified tourism platform revolutionizing travel experiences through interactive 
                    challenges, hidden attraction discovery, and eco-friendly travel options.
                  </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, text: "View Code", href: "#", color: "bg-gray-800" },
                    { icon: <Youtube className="w-5 h-5" />, text: "Watch Vlog", href: "#", color: "bg-red-600" },
                    { icon: <BookOpen className="w-5 h-5" />, text: "Read Article", href: "#", color: "bg-green-600" },
                    { icon: <Globe className="w-5 h-5" />, text: "Live Demo", href: "#", color: "bg-blue-600" }
                  ].map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      className={`${link.color} text-white rounded-xl p-4 flex items-center gap-3 hover:opacity-90 transition-opacity`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.text}</span>
                    </a>
                  ))}
                </div>

                {/* View Certificates Link */}
                <a 
                  href="#certificates" 
                  className="inline-block w-full text-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  View All Certificates
                </a>
              </div>
            </div>

            {/* Updated Image Carousel Section */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10 rounded-xl"></div>
                
                <motion.div
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </motion.div>
                
                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button 
                    onClick={prevImage}
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all transform hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all transform hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Dot Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/40 px-3 py-1 rounded-full text-white text-xs z-20">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ManipalhackathonAchievement;