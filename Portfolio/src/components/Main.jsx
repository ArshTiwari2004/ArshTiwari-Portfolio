import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from 'react-simple-typewriter';


const Main = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/profile2.jpg)' }}>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-black text-left p-4 space-y-4 ml-8">
        <h1 className="text-4xl font-bold">Hi There,</h1>
        
        <div className="pb-[130px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
 Im Arsh{" "}
  <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
    Tiwari
  </span>
</div>

        <p className="text-xl font-semibold">
          I am into <Typewriter
            words={['Full Stack Development', 'App Development', 'Blockchain Development', 'Competitive Programming', 'Open Source']}
            loop={0} // 0 means infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full">About Me :)</button>
        <div className="flex space-x-4 mt-4">
          <a href="https://twitter.com/ArshTiwari17" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/ArshTiwari2004" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/arsh-tiwari-072609284/" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/_.arshtiwari/" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-8">
        <img src="/myprofile1.jpg" alt="Arsh Tiwari" className="rounded-full h-80 w-80 object-cover border-4 border-white shadow-lg" />
      </div>
    </div>
  );
};

export default Main;

