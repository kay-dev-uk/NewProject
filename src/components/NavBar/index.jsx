import React, { useState } from 'react';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src="https://res.cloudinary.com/dlxcjxezc/image/upload/v1684964234/LogotWR_oazmgg.png"
              alt="Logo"
            />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center relative">
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Home
            </a>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                Work
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-1 py-1 w-40 bg-white rounded-lg shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Kanban AI
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Flipping Flashcards
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Florin Events
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
