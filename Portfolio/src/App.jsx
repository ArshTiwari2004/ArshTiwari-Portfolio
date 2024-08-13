import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <main>
        {/* Add empty sections to enable scrolling */}
        {['home', 'about', 'skills', 'education', 'work', 'experience', 'contact'].map(section => (
          <section id={section} key={section} className="h-screen"></section>
        ))}
      </main>
    </Router>
  );
};

export default App;
