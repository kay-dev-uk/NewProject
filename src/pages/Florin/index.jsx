import React, { useState } from 'react'

const Florin = () => {

  const images = [
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681987403/Florin-1_h0ef8h.png',
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1682340147/Flipping-2_xu7xja.png',
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681999938/Screenshot_2023-04-20_at_12.52.57_c4nnq6.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          onClick={showNextImage}
          className="rounded-xl w-3/5 shadow-custom"
          src={images[currentImageIndex]}
          alt={`Picture ${currentImageIndex + 1}`}
        />
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow mr-2 btn-size"
            onClick={showPreviousImage}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow btn-size"
            onClick={showNextImage}
          >
            Next
          </button>
        </div>

      </div>

      <div className="flex items-center justify-center h-auto">
  <div className="bg-blue-100 rounded-xl shadow-custom sm:ml-20 sm:mr-20 mt-10 mb-10 ml-10 mr-10 items-center justify-center flex w-3/5">
    <div className="pl-8 pr-8 pt-8 pb-8">
      <h2 className="text-2xl font-bold pb-2 flex items-center justify-center">Florin Events App</h2>
      <p className="text-gray-600 md:font-sm">
        I'm a brand-new developer who's just starting out on this exciting journey. I'm constantly pushing myself to
        grow and expand my knowledge, whether it's through online courses, coding challenges, or collaborating with
        other developers. I just finished my coding bootcamp with La Fosse. I'm excited to be a part of this vibrant
        community and can't wait to see where this journey takes me!
      </p>
      <br />
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow">
          Deployment
        </button>
        <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow">
          Github
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Florin
