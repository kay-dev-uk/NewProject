import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm fixed bottom-0 w-full mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            &copy; 2023 Kyrylo Rybalko.
          </div>
          <div className="flex space-x-2">
            <a
              href="https://github.com/kay-dev-uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGithub  className="h-6 w-6 fill-current"/>
            </a>
            <a
              href="https://www.linkedin.com/in/kyrylo-rybalko-03a62b178/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
                <FaLinkedin className="h-6 w-6 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
