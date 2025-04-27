"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FiDownload } from "react-icons/fi"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "bg-white/90 backdrop-blur-md shadow-lg"
          : darkMode
            ? "bg-gray-900/50 backdrop-blur-sm"
            : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 md:w-14 md:h-14 hover:scale-105 transition-transform duration-300"
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`hidden md:flex items-center space-x-8 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Education", path: "/education" },
            { name: "Experience", path: "/experience" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`font-semibold hover:text-blue-500 transition-colors duration-300 text-sm tracking-wide ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {name}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors duration-300`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Special Resume Button */}
          <motion.a
            href="/Arsh_Tiwari_Resume.pdf"
            download="Arsh_Tiwari_Resume.pdf"
            className={`flex items-center gap-2 px-6 py-2 ${
              darkMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-600 text-white hover:bg-blue-700"
            } font-semibold rounded-lg 
              transform hover:scale-105 transition-all duration-300 
              shadow-md hover:shadow-[0_8px_16px_rgba(59,_130,_246,_0.3)] 
              text-sm tracking-wide`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="text-lg" />
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-700"}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-lg ${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
          >
            <svg
              className={`w-6 h-6 ${darkMode ? "text-white" : "text-gray-800"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className={`md:hidden ${
            darkMode ? "bg-gray-900 border-t border-gray-800" : "bg-white border-t border-gray-100"
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Education", path: "/education" },
              { name: "Experience", path: "/experience" },
              { name: "Contact", path: "/contact" },
            ].map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`block font-semibold hover:text-blue-500 transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}

            <motion.a
              href="/Arsh_Tiwari_Resume.pdf"
              download="Arsh_Tiwari_Resume.pdf"
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg w-full justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiDownload className="text-lg" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
