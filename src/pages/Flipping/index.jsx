import React from 'react'

const Flipping = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://res.cloudinary.com/dlxcjxezc/image/upload/v1682430307/IMG_9755_e6ss8x.jpg"
          alt="Profile"
        />
        <div className="ml-2">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-600">Software Engineer</p>
        </div>
      </div>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies augue a
        feugiat tempor. Nulla facilisi. Etiam feugiat condimentum ex, ut porta orci sagittis sed.
      </p>
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none">
          View Profile
        </button>
        <div>
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 4C6.48 4 2 6.36 2 9.67c0 4.34 7.55 10.81 9.65 12.21a1 1 0 0 0 1.7 0C14.45 20.48 22 14.01 22 9.67 22 6.36 17.52 4 12 4zm0 16.5c-1.95-1.68-8-7.45-8-11.83C4 5.28 7.58 2 12 2s8 3.28 8 6.67c0 4.38-6.05 10.15-8 11.83z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Flipping
