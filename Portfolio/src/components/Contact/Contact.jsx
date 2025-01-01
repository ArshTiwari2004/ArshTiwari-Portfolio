import React from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, Facebook, Link, BookOpen, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/ArshTiwari2004", label: "GitHub", bgColor: "bg-gray-800" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/arsh-tiwari-072609284/", label: "LinkedIn", bgColor: "bg-blue-600" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:arshtiwari12345@gmail.com", label: "Email", bgColor: "bg-red-500" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/ArshTiwari17", label: "Twitter", bgColor: "bg-sky-500" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/_.arshtiwari/", label: "Instagram", bgColor: "bg-pink-600" },
    { icon: <BookOpen className="w-5 h-5" />, href: "https://stackoverflow.com/users/23074599/arsh-tiwari", label: "Stack Overflow", bgColor: "bg-orange-500" },
    { icon: <Link className="w-5 h-5" />, href: "https://linktr.ee/Arsh_Tiwari", label: "Linktree", bgColor: "bg-green-500" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook", bgColor: "bg-blue-800" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://medium.com/@arshtiwari12345", label: "Medium", bgColor: "bg-black" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://www.quora.com/profile/Arsh-Tiwari-23", label: "Quora", bgColor: "bg-red-700" },
    { icon: <Users className="w-5 h-5" />, href: "https://www.commudle.com/users/ArshTiwari7", label: "Commudle", bgColor: "bg-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-16">
          {/* Hero Section with Gradient Background */}
          <div className="relative w-full rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 p-12">
            <div className="max-w-5xl text-white">
              <h1 className="text-5xl font-bold mb-6 leading-tight ">Building Digital Experiences That Matter</h1>
              <p className="text-xl text-gray-100 leading-relaxed flex item-center justify-center">
              I'm actively seeking opportunities to collaborate on innovative projects and contribute to forward-thinking teams.
              Whether you're looking for a dedicated developer for your team or a collaborative partner for your next project, I bring a blend of technical expertise and creative problem-solving to every endeavor. Let's explore how we can create something remarkable together!
                </p>
              <div className="mt-8 flex gap-4 flex item-center justify-center">
              <button
  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-colors duration-300"
  onClick={() => window.location.href = '/projects'}
>
  View Projects
</button>

<a
  href="/path-to-your-resume.pdf"
  download="Your_Name_Resume.pdf"
  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-colors duration-300"
>
  Download CV
</a>

              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 flex item-center justify-center">Find me across the web</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  title={social.label}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${social.bgColor} text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Get in Touch</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <textarea
                  className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300 h-40 resize-none"
                  placeholder="Your message"
                />
              </div>
              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;