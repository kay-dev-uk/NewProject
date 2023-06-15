import React, { useState } from 'react'

const Flipping = () => {

  const images = [
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1682340147/Flipping-2_xu7xja.png',
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681986200/Flipping-1_igcqmw.png',
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681986200/Flipping-3_crkmfa.png',
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
      <div id='top' className="bg-blue-100 flex flex-col pt-5 items-left justify-left border-b border-blue-200">
        <h1 className="text-center text-blue-500">
          Flipping Flashcards
        </h1>
        <p className='flex flex-row items-center justify-center'>Webb App for material revision</p>
        <div className='flex flex-row items-left justify-center'>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452210/javascript_pp0zjv.svg' alt='JavaScript'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452182/react_hwybaa.svg'/>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452012/nodejs-icon_yqz6fc.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451924/postgresql_qckumv.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452115/html-5_zhw0y5.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452099/css-3_fi9cle.svg'></img>
        </div>
      </div>
      <div className="flex items-center justify-center h-auto">
        <div className="rounded-t-xl shadow-custom sm:ml-20 sm:mr-20 mt-10 mb-10 ml-10 mr-10 items-center justify-center flex w-4/5 sm:w-3/5">
          <div className="">
            <div className="flex flex-col items-center justify-center">
              <img
              onClick={showNextImage}
              className="rounded-xl w-5/5 shadow-custom"
              src={images[currentImageIndex]}
              alt={`Picture ${currentImageIndex + 1}`}
              />
              <div className="flex justify-center mt-4">
                <button className="icon-back hover:bg-white hover:animate-pulse hover:text-blue-500 text-cyan-700 border-blue-500 shadow-custom font-semibold py-2 mr-4 px-4 rounded-lg shadow btn-size"
                    onClick={showPreviousImage}
                  >
                    Previous
                </button>
                <button
                    className="icon-back hover:bg-white hover:animate-pulse hover:text-blue-500 text-cyan-700 border-blue-500 shadow-custom font-semibold py-2 mr-4 px-4 rounded-lg shadow btn-size"
                    onClick={showNextImage}
                  >
                    Next
                </button>
              </div>
            </div>
      <div className="pl-8 pr-8 pt-8 pb-8">
      <h2 className="text-5xl font-bold pb-2 text-cyan-500 flex items-center justify-left">Learn fast with Flipping Flashcards</h2>
      <p className="text-gray-600 md:font-sm">
      Introducing Flipping Flashcards: The Ultimate Web App for Effortless Material Revision!</p> 
      <p className="text-gray-600 md:font-sm">Flipping Flashcards revolutionizes studying with its dynamic flip action and engaging interface. Covering a wide range of subjects, including History, Geography, Maths, Language, and Art, it caters to all your revision needs.
      <p className="text-gray-600 md:font-sm">Create your own questions and customize your learning experience. Flipping Flashcards empowers you to tailor the content to match your unique learning goals.
      Experience the joy of learning with Flipping Flashcards and unlock your full potential!</p>
      </p>
      <br />
      <h3 className="text-3xl pb-2 flex items-center justify-left">Technologies</h3>
      <ol className="list-none list-inside pl-5">
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452210/javascript_pp0zjv.svg' alt='JavaScript'></img>JavaScript</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452182/react_hwybaa.svg' alt='JavaScript'></img>React</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452012/nodejs-icon_yqz6fc.svg' alt='JavaScript'></img>Node</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451924/postgresql_qckumv.svg' alt='JavaScript'></img>PostgreSQL</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452115/html-5_zhw0y5.svg' alt='JavaScript'></img>HTML</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452099/css-3_fi9cle.svg' alt='JavaScript'></img>CSS</li>
      </ol>
      <br />
      <h3 className="text-3xl pb-2 flex items-center justify-left">Challenges</h3>
      <div className="flex justify-center">
        <a target="_blank" href='https://flipping-flashcards.onrender.com/'>
          <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow btn-size">
            Deployment
          </button>

        </a>
        <a target="_blank" href='https://github.com/kay-dev-uk/flipping-flashcards'>
          <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow btn-size">
            Github
          </button>
        </a>
      </div>

      </div>
      
    </div>
  </div>
</div>

    </>
  )
}

export default Flipping
