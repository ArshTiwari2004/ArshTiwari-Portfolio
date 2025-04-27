"use client"
import { Typewriter } from "react-simple-typewriter"
import { Mail, ArrowUpRight, Twitter, Github, Linkedin, Instagram } from "lucide-react"
import ParticleBackground from "./ParticleBackground"

const Main = () => {
  const description =
    "Transforming ideas into impactful digital solutions, I blend creativity with cutting-edge technology to drive meaningful innovation. Guided by a passion for learning and an eye for detail, I thrive on building experiences that make a difference. Whether crafting sleek applications or exploring emerging tech, I am dedicated to shaping a future fueled by purpose and excellence."

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-800 tracking-tight mt-8">Hi There,</h1>
              <div className="space-y-2">
                <div className="text-6xl md:text-7xl font-bold">
                  I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-display">
                    Arsh Tiwari
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xl font-semibold text-gray-700 min-h-[120px] flex items-center">
              <span className="text-blue-600">
                <Typewriter
                  words={[
                    "Full-Stack Developer | Building scalable web solutions.",
                    "Participated in 10+ hackathons and organized global tech events.",
                    "5x Hackathon Winner | Award-winning project builder.",
                    "Developed and deployed 10+ full-stack projects.",
                    "5+ months of professional internship experience in web development.",
                    "Helping startups scale and optimize their websites.",
                    "Organized PEARS Global Hackathon 2025.",
                    "AI/ML Enthusiast | Building real-world applications.",
                    "Contributor to 3+ major open-source programs.",
                    "Entrepreneurial mindset | Thriving on innovation and impact.",
                    "Deploying full-stack web applications for community growth."
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </div>

            <p className="text-gray-900 leading-relaxed">{description}</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="https://www.linkedin.com/in/arsh-tiwari-072609284/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold group"
              >
                Get in Touch
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              {/* Social Links - Now beside the button */}
              <div className="flex space-x-4">
                <a href="https://twitter.com/ArshTiwari17" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://github.com/ArshTiwari2004" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/arsh-tiwari-072609284/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/_.arshtiwari/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="mailto:arshtiwari12345@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Section with Achievement Strips */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              {/* Achievement Strips */}
             

              {/* Profile Image */}
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

      <style jsx global>{`
        .font-display {
          font-family: 'Montserrat', sans-serif;
          letter-spacing: -0.025em;
        }
        
        @media (max-width: 1024px) {
          .achievement-strips {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            right: auto !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Main