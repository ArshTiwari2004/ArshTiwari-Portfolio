import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Main = () => {
  const description = "Transforming ideas into impactful digital solutions, I blend creativity with cutting-edge technology to drive meaningful innovation. Guided by a passion for learning and an eye for detail, I thrive on building experiences that make a difference. Whether crafting sleek applications or exploring emerging tech, I am dedicated to shaping a future fueled by purpose and excellence.";

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-800 tracking-tight mt-20">
                Hi There,
              </h1>
              <div className="space-y-2">
                <div className="text-6xl md:text-7xl font-bold">
                  I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    Arsh Tiwari
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xl font-semibold text-gray-700">
              <span className="text-blue-600">
                <Typewriter
                  words={['I am a full-stack web developer', 'I am passionate about app development', 'I participate actively in hackathons because I like to win ', 'I build and deploy web solutions' , 'I contribute to open-source projects' , 'I enjoy networking with tech enthusiasts at meetups.' , 'I thrive on innovation with an entrepreneurial mindset.' , 'Passionate about helping startups scale their websites.']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <p className="text-gray-900 leading-relaxed">
              {description}
            </p>

            <a 
              href="https://www.linkedin.com/in/arsh-tiwari-072609284/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
            >
              Get in Touch
            </a>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[
                { href: "https://twitter.com/ArshTiwari17", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", label: "Twitter" },
                { href: "https://github.com/ArshTiwari2004", icon: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z", label: "GitHub" },
                { href: "https://www.linkedin.com/in/arsh-tiwari-072609284/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", label: "LinkedIn" },
                { href: "https://www.instagram.com/_.arshtiwari/", icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z", label: "Instagram" },
                { href: "mailto:arshtiwari12345@gmail.com", icon: null, label: "Email", component: <Mail className="w-6 h-6" /> }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {social.component || (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative w-72 h-72 mx-auto lg:w-96 lg:h-96">
              <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute inset-0 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/profileimage.jpeg"
                  alt="Arsh Tiwari"
                  className="rounded-full w-full h-full object-cover border-4 border-white shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  );
};

export default Main;