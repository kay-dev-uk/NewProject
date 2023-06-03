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

  return (
    <nav className="bg-white shadow fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex-shrink-0 flex items-center">
            <h2>KYRYLO RYBALKO</h2>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center relative">
            <Link to='/' className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-800">
              Home
            </Link>
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button type="button" className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-800 focus:outline-none">
                <Link to='/work'>Work</Link>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-0 py-1 w-40 bg-white rounded-lg shadow-lg">
                  <Link className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white" to='/work/kanban'>Kanban AI</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white" to='/work/flipping'>Flipping Flashcards</Link>
                  <Link className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white" to='/work/florin'>Florin Events</Link>
                </div>
              )}
            </div>
            <Link to='/about' className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-800">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
