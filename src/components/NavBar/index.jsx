import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleWorkLinkClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex-shrink-0 flex items-center">
            <h2 className='mr-1 animate-pulse'>KYRYLO RYBALKO</h2>
            <br></br>
            <p className="text-sm text-gray-600">Junior Developer</p>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center relative">
            <Link to='/' onClick={handleScrollToTop} className="px-3 py-2 text-sm font-medium text-blue-400 hover:text-gray-800">
              Home
            </Link>
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button type="button" className="px-3 py-2 text-sm font-medium text-blue-400 hover:text-gray-800 focus:outline-none" onClick={handleWorkLinkClick}>
                Work
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-0 py-1 w-40 bg-white rounded-lg shadow-lg">
                  <Link onClick={handleScrollToTop} className="block px-4 py-2 text-sm text-blue-400 hover:bg-blue-400 hover:text-white" to='/work/kanban'>Kanban AI</Link>
                  <Link onClick={handleScrollToTop} className="block px-4 py-2 text-sm text-blue-400 hover:bg-blue-400 hover:text-white" to='/work/flipping'>Flipping Flashcards</Link>
                  <Link onClick={handleScrollToTop} className="block px-4 py-2 text-sm text-blue-400 hover:bg-blue-400 hover:text-white" to='/work/florin'>Florin Events</Link>
                </div>
              )}
            </div>
            <Link to='/about' onClick={handleScrollToTop} className="px-3 py-2 text-sm font-medium text-blue-400 hover:text-gray-800">
              About
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-800 focus:outline-none"
              onClick={handleWorkLinkClick}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 py-2 px-4 bg-white shadow-lg rounded-lg">
                <Link onClick={handleScrollToTop} to='/' className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-800">
                  Home
                </Link>
                <Link onClick={handleScrollToTop} to='/work' className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-800">
                  Work
                </Link>
                <Link onClick={handleScrollToTop} to='/about' className="block px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-800">
                  About
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
