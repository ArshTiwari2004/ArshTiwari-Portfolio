import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import 'tailwindcss/tailwind.css';
import Projects from './components/Projects/Projects';
import ExperiencePage from './components/Experience/Experience';
import EducationPage from './components/Education/Education';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
     
    </Router>
  );
};

export default App;
