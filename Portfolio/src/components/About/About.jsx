import React from 'react';
import { Mail } from 'lucide-react';
import ParticleBackground from '../ParticleBackground';

const About = () => {
  return (
  
    <div className="min-h-screen bg-white">
        <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
            <span className="text-gray-800">About</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Me
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image Section */}
          <div className="relative group">
            <div className="relative w-72 h-72 mx-auto lg:w-96 lg:h-96">
              {/* Backdrop blur effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              {/* Image container with 3D effect */}
              <div className="relative h-full w-full rounded-xl transform 
                perspective-1000 group-hover:rotate-y-12 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-xl"></div>
                <img
                  src="/arshtiwari.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-xl shadow-lg 
                  transform transition-transform duration-300 group-hover:scale-105
                  border-4 border-white/50"
                />
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-800">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Arsh Tiwari
              </span>
            </h3>
            <h4 className="text-2xl font-semibold text-gray-700">
              Full Stack Developer
            </h4>
            
            <p className="text-gray-600 leading-relaxed">
             
I’m a passionate Full-Stack Developer based in India, specializing in crafting modern web applications with clean, efficient code and intuitive user experiences. Currently, I’m pursuing a B.Tech in Computer Science Engineering at GGSIPU's BPIT and exploring data science through a B.S. degree at IIT Madras, blending innovation and learning to create impactful digital solutions.
            </p>
            <p className = "text-gray-600 leading-relaxed">
            Web Developer intern @EternaInfoTech | Ex-Community Manager intern @InAmigos Foundation| Intern @Kaizen,IIT Delhi | 1x Hack winner | 2x Finalist | 12x Participated | Junior Council @nameSpace
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">arshtiwari12345@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">New Delhi, India</span>
              </div>
            </div>

            <a
              href="/resume.pdf"
              className="inline-block px-8 py-3 bg-transparent border-2 border-blue-600 
              text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white 
              transition-all duration-300 font-semibold mt-6"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;