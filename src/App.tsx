import React, { useRef } from 'react';
import Nav from './componnent/nav';
import Footer from './componnent/fotter';
import Aboutme from './componnent/Aboutme';
import Socialmedia from './componnent/socialmedia';
import css from './App.css'
import Technologies from './componnent/Technologies'
import Project from './componnent/Project';


function App() {
  // Create a ref for the image section
  const imageSectionRef = useRef(null);

  // Function to handle scrolling to the image section
  const scrollToImages = () => {
    imageSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <main className="">
      {/* Pass the scroll handler to the Nav component */}
      <Nav onProjectsClick={scrollToImages} />

      <header className="p-8 md:p-16 lg:p-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Profile Image */}
        <img
          src="src/images/35e9789b-4ca9-4ef0-a7f8-69b71df8dd41.jfif"
          alt="Profile"
          className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
        />
        
        {/* Introductory Text */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold animate-typewriter">
    Hi, I'm Theekshana
  </h4>

  <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed mt-4">
    I'm a Software Developer, working towards creating software that makes life easier and more meaningful.
  </p>
  <div className="mt-5 md:mt-6"> {/* Adds spacing between the text and the social media section */}
    <Socialmedia />
  </div>
  </div>
      </header>
     
      <Aboutme/>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-8">
       Projects
      </h2>

      <Project/>

      {/* Images Section */}
      <section
        ref={imageSectionRef}
        className="p-8 md:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto"
      >
 
      </section>
      
      <Technologies/>
  
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 mb-8">
        Contact Me
      </h2>

      <Footer />
     
    </main>
  );
}

export default App;
