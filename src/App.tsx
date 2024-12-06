import React, { useRef } from 'react';
import Nav from './componnent/nav';
import Footer from './componnent/fotter';

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
          src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
          alt="Profile"
          className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
        />
        
        {/* Introductory Text */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
            Hi, I'm Theekshana
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed">
            I'm a Software Developer, working towards creating software that makes life easier and more meaningful.
          </p>
        </div>
      </header>

      {/* Images Section */}
      <section
        ref={imageSectionRef}
        className="p-8 md:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto"
      >
        <img
          src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
          alt="Project 2"
          className="w-full h-120 object-cover rounded-lg shadow-md"
        />
        {/* Add more images here */}
        <img
          src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
          alt="Project 2"
          className="w-full h-120 object-cover rounded-lg shadow-md"
        />
        <img
          src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
          alt="Project 2"
          className="w-full h-120 object-cover rounded-lg shadow-md"
        />
        <img
          src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
          alt="Project 2"
          className="w-full h-120 object-cover rounded-lg shadow-md"
        /><img
        src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
        alt="Project 2"
        className="w-full h-120 object-cover rounded-lg shadow-md"
      /><img
          src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
          alt="Project 2"
          className="w-full h-120 object-cover rounded-lg shadow-md"
        />
      </section>

      <Footer />
    </main>
  );
}

export default App;
