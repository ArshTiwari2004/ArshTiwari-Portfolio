import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects/Projects';
import ExperiencePage from './components/Experience/Experience';
import EducationPage from './components/Education/Education';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ManipalhackathonAchievement from './components/Achievement/Achievement';
import ProjectsShowcase from './components/Projects/ProjectsShowcase';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-20">
        <section id="home" className="min-h-screen">
          <Main darkMode={darkMode} />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About darkMode={darkMode} />
        </section>
        
        {/* <section id="projects" className="min-h-screen py-20">
          <Projects darkMode={darkMode} />
        </section> */}

        <section id="projects" className="min-h-screen py-20">
          <ProjectsShowcase darkMode={darkMode} />
        </section>
        
        <section id="education" className="min-h-screen py-20">
          <EducationPage darkMode={darkMode} />
        </section>
        
        <section id="experience" className="min-h-screen py-20">
          <ExperiencePage darkMode={darkMode} />
        </section>
        
        <section id="achievements" className="min-h-screen py-20">
          <ManipalhackathonAchievement darkMode={darkMode} />
        </section>
        
        <section id="contact" className="min-h-screen py-20">
          <Contact darkMode={darkMode} />
        </section>


      </main>
    </div>
  );
};

export default App;
