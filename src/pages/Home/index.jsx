import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div id='top' className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-center mt-[-15vh] text-cyan-500">
          Welcome to my digital playground!
        </h1>
        <div className="mt-8 -mt-[-5vh]">
          <button className="bg-blue-500 hover:bg-white animate-bounce hover:animate-ping hover:text-blue-500 text-white border-2 border-blue-500 shadow-custom font-semibold py-2 px-4 rounded-lg shadow" onClick={() => scrollToSection('mid')}>
            Get to know me
          </button>
        </div>
      </div>
      <div id='mid' className="flex flex-col sm:flex-row justify-between">
        <div className="back-custom rounded-xl shadow-custom lg:mr-5 sm:order-first order-last sm:ml-20 mb-5 ml-10 mr-10 flex flex-col items-center justify-center md:w-3/5">
          <div className="pl-8 pr-8 pt-8 pb-8">
            <h2 className="text-2xl text-cyan-100 font-bold pb-2 flex items-center justify-center">Hello and welcome to my portfolio website!</h2>
            <p className="text-white md:font-sm flex items-center justify-center">Software Developer with experience across the full development lifecycle with a strong foundation in frontend & backend.
            Multilingual, diligent and creative professional with excellent problem-solving skills, dependable and able to work well both independently & in a fast- paced team environment.</p>
            <br />
            <Link to='/about' className='flex items-center justify-center' onClick={handleScrollToTop}>
              <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow animate-bounce">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      <div className="rounded-xl lg:ml-5 shadow-custom sm:mr-20 mr-10 mb-5 ml-10 justify-center items-center md:w-2/5">
        <div>
          <img
            className="rounded-xl w-auto h-3/5 order-first sm:order-last"
            src="https://res.cloudinary.com/dlxcjxezc/image/upload/v1682627268/Subject_3_asrqj0.png"
            alt="Your Picture"
          />
        </div>
      </div>
</div>





      <div id='bot' class="flex items-center justify-center h-auto">
      <div class="grid grid-cols-3 gap-10 mb-10 sm:m-20 m-10">
        <Link to='/work/kanban' onClick={handleScrollToTop}>
          <div class="back-custom flex-grow rounded-xl shadow-custom p-0 transition-all hover:scale-105 hover:shadow-custom hover:cursor-pointer hover:bg-blue-400 hover:text-white">
            <div class="aspect-w-1 aspect-h-1">
              <img src="https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681999938/Screenshot_2023-04-20_at_12.52.57_c4nnq6.png" alt="Image 1" class="object-contain rounded-t-lg h-full w-full" />
            </div>
            <div className='p-5 flex-grow text'>
              <h3 class="text-xl font-bold pb-2">Kanban AI</h3>
              <p class="text-cyan-100">New way to manage projects using AI tools.</p>
            </div>    
          </div>
        </Link>
        <Link to='/work/flipping' onClick={handleScrollToTop}>
          <div class="back-custom flex-grow rounded-xl shadow-custom p-0 transition-all hover:scale-105 hover:shadow-red hover:cursor-pointer hover:bg-blue-400 hover:text-white">
            <div class="aspect-w-1 aspect-h-1">
              <img src="https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1682340147/Flipping-2_xu7xja.png" alt="Image 2" class="object-contain rounded-t-lg h-full w-full" />
            </div>
            <div className='p-5 flex-grow text'>
              <h3 class="text-xl font-bold pb-2">Flipping Flashcards</h3>
              <p class="text-cyan-100">An innovative and cutting-edge study tool.</p>
            </div>
          </div>
        </Link>
        <Link to='/work/florin' onClick={handleScrollToTop}>
          <div class="back-custom flex-grow rounded-xl shadow-custom p-0 transition-all hover:scale-105 hover:shadow-red hover:cursor-pointer hover:bg-blue-400 hover:text-white">
            <div class="aspect-w-1 aspect-h-1">
              <img src="https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681987403/Florin-1_h0ef8h.png" alt="Image 3" class="object-contain rounded-t-lg h-full w-full" />
            </div>
            <div className='p-5 flex-grow text'>
              <h3 class="text-xl font-bold pb-2">Florin Events</h3>
              <p class="text-cyan-100">Event creation app made for our community.</p>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </>
  )
}

export default Home
