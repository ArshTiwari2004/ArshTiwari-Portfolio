import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import 'tailwindcss/tailwind.css';
import Projects from './components/Projects/Projects';
import ExperiencePage from './components/Experience/Experience';
import EducationPage from './components/Education/Education';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import ManipalhackathonAchievement from './components/Achievement/Achievement';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<ManipalhackathonAchievement />} />

      </Routes>
     
    </Router>
  );
};

export default App;
