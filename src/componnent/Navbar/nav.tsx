import { useState } from 'react';

const Nav = ({ onProjectsClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-900 fixed w-full z-20 top-0 start-0 border-b border-blue-700 rounded-3xl md:px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 md:p-0">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Theekshana</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={() => window.open('https://drive.google.com/file/d/1kl8-bjhn3Jhdk5Tsxj4g6vMP8N_HtwMj/view?usp=sharing', '_blank')}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-4"
          >
            Download CV
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blue-700 rounded-lg bg-blue-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-900 dark:bg-blue-900">
            <li className="md:mr-4">
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-blue-700">Home</a>
            </li>
            <li className="md:mr-4">
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-blue-700">About</a>
            </li>
            <li className="md:mr-4">
              <button
                onClick={onProjectsClick}
                className="block py-2 px-3 text-white rounded hover:bg-blue-700 md:hover:bg-transparent"
              >
                Projects
              </button>
            </li>
            <li className="md:mr-4">
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-blue-700">Contact Me</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-blue-700">Use Technologies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;