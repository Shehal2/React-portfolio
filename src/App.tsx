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
          src="src/images/35e9789b-4ca9-4ef0-a7f8-69b71df8dd41.jfif"
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


      <div className="project-card max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img
    src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    alt="Project 2"
    className="w-full h-120 object-cover"
  />
  <div className="p-4">
    <p className="mt-2 text-sm text-gray-600">
      <b>Group Project:</b> Web-Based Hotel Reservation & Management System.
    </p>
    <a
      href="https://github.com/your-repo-link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center mt-3 text-blue-500 hover:text-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.868 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.009-.867-.014-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.003.071 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.637-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.254-.446-1.276.097-2.659 0 0 .84-.269 2.75 1.025A9.573 9.573 0 0112 6.843c.851.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.383.201 2.405.099 2.659.641.699 1.03 1.592 1.03 2.683 0 3.841-2.338 4.688-4.566 4.936.36.31.682.92.682 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.576.688.478C19.134 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
      View Code on GitHub
    </a>
  </div>
</div>


        {/* Add more images here */}
        <div className="project-card max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img
    src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    alt="Project 2"
    className="w-full h-120 object-cover"
  />
  <div className="p-4">
    <p className="mt-2 text-sm text-gray-600">
      <b>Group Project:</b> Web-Based Hotel Reservation & Management System.
    </p>
    <a
      href="https://github.com/your-repo-link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center mt-3 text-blue-500 hover:text-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.868 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.009-.867-.014-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.003.071 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.637-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.254-.446-1.276.097-2.659 0 0 .84-.269 2.75 1.025A9.573 9.573 0 0112 6.843c.851.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.383.201 2.405.099 2.659.641.699 1.03 1.592 1.03 2.683 0 3.841-2.338 4.688-4.566 4.936.36.31.682.92.682 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.576.688.478C19.134 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
      View Code on GitHub
    </a>
  </div>
</div>


<div className="project-card max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img
    src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    alt="Project 2"
    className="w-full h-120 object-cover"
  />
  <div className="p-4">
    <p className="mt-2 text-sm text-gray-600">
      <b>Group Project:</b> Web-Based Hotel Reservation & Management System.
    </p>
    <a
      href="https://github.com/your-repo-link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center mt-3 text-blue-500 hover:text-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.868 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.009-.867-.014-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.003.071 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.637-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.254-.446-1.276.097-2.659 0 0 .84-.269 2.75 1.025A9.573 9.573 0 0112 6.843c.851.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.383.201 2.405.099 2.659.641.699 1.03 1.592 1.03 2.683 0 3.841-2.338 4.688-4.566 4.936.36.31.682.92.682 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.576.688.478C19.134 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
      View Code on GitHub
    </a>
  </div>
</div>


<div className="project-card max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img
    src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    alt="Project 2"
    className="w-full h-120 object-cover"
  />
  <div className="p-4">
    <p className="mt-2 text-sm text-gray-600">
      <b>Group Project:</b> Web-Based Hotel Reservation & Management System.
    </p>
    <a
      href="https://github.com/your-repo-link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center mt-3 text-blue-500 hover:text-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.868 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.009-.867-.014-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.003.071 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.637-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.254-.446-1.276.097-2.659 0 0 .84-.269 2.75 1.025A9.573 9.573 0 0112 6.843c.851.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.383.201 2.405.099 2.659.641.699 1.03 1.592 1.03 2.683 0 3.841-2.338 4.688-4.566 4.936.36.31.682.92.682 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.576.688.478C19.134 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
      View Code on GitHub
    </a>
  </div>
</div>

<div className="project-card max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img
    src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    alt="Project 2"
    className="w-full h-120 object-cover"
  />
  <div className="p-4">
    <p className="mt-2 text-sm text-gray-600">
      <b>Group Project:</b> Web-Based Hotel Reservation & Management System.
    </p>
    <a
      href="https://github.com/your-repo-link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center mt-3 text-blue-500 hover:text-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.868 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.009-.867-.014-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.003.071 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.637-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.254-.446-1.276.097-2.659 0 0 .84-.269 2.75 1.025A9.573 9.573 0 0112 6.843c.851.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.383.201 2.405.099 2.659.641.699 1.03 1.592 1.03 2.683 0 3.841-2.338 4.688-4.566 4.936.36.31.682.92.682 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.576.688.478C19.134 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
      View Code on GitHub
    </a>
  </div>
</div>

<div className="project-card max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img
    src="src/images/64d62d1f-e51d-4b54-826f-73dfad3d36ee.jfif"
    alt="Project 2"
    className="w-full h-120 object-cover"
  />
  <div className="p-4">
    <p className="mt-2 text-sm text-gray-600">
      <b>Group Project:</b> Web-Based Hotel Reservation & Management System.
    </p>
    <a
      href="https://github.com/your-repo-link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center mt-3 text-blue-500 hover:text-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.417 2.868 8.166 6.839 9.489.5.09.683-.217.683-.482 0-.237-.009-.867-.014-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.621.069-.608.069-.608 1.003.071 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.637-1.338-2.22-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.254-.446-1.276.097-2.659 0 0 .84-.269 2.75 1.025A9.573 9.573 0 0112 6.843c.851.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.383.201 2.405.099 2.659.641.699 1.03 1.592 1.03 2.683 0 3.841-2.338 4.688-4.566 4.936.36.31.682.92.682 1.852 0 1.336-.012 2.414-.012 2.742 0 .267.18.576.688.478C19.134 20.165 22 16.417 22 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
      View Code on GitHub
    </a>
  </div>
</div>


      </section>

      <Footer />
    </main>
  );
}

export default App;
