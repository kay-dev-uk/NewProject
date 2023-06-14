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
        <h1 className="text-center mt-[-15vh] text-blue-500">
          Welcome to my digital playground!
        </h1>
        <div className="mt-8 -mt-[-5vh]">
          <button className="bg-blue-500 hover:bg-white animate-bounce hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow" onClick={() => scrollToSection('mid')}>
            Get to know me
          </button>
        </div>
      </div>
<div className="flex flex-col sm:flex-row justify-between">
  <div className="bg-blue-100 rounded-xl shadow-custom lg:mr-5 sm:order-first order-last sm:ml-20 mb-5 ml-10 mr-10 flex flex-col items-center justify-center md:w-3/5">
    <div className="pl-8 pr-8 pt-8 pb-8">
      <h2 className="text-2xl font-bold pb-2">Hello and welcome to my portfolio website!</h2>
      <p className="text-gray-600 md:font-sm">I'm a brand-new developer who's just starting out on this exciting journey. I'm constantly pushing myself to grow and expand my knowledge, whether it's through online courses, coding challenges, or collaborating with other developers. I just finished my coding bootcamp with La Fosse. I'm excited to be a part of this vibrant community and can't wait to see where this journey takes me!</p>
      <br />
      <Link to='/about' onClick={handleScrollToTop}>
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
        <Link to='/work/kanban'>
          <div class="bg-blue-100 flex-grow rounded-xl shadow-custom p-0 transition-all hover:scale-105 hover:shadow-custom hover:cursor-pointer hover:bg-blue-400 hover:text-white">
            <div class="aspect-w-1 aspect-h-1">
              <img src="https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681999938/Screenshot_2023-04-20_at_12.52.57_c4nnq6.png" alt="Image 1" class="object-contain rounded-t-lg h-full w-full" />
            </div>
            <div className='p-5 flex-grow text'>
              <h3 class="text-xl font-bold pb-2">Kanban AI</h3>
              <p class="">New way to manage projects using AI tools.</p>
            </div>    
          </div>
        </Link>
        <Link to='/work/flipping'>
          <div class="bg-blue-100 flex-grow rounded-xl shadow-custom p-0 transition-all hover:scale-105 hover:shadow-red hover:cursor-pointer hover:bg-blue-400 hover:text-white">
            <div class="aspect-w-1 aspect-h-1">
              <img src="https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1682340147/Flipping-2_xu7xja.png" alt="Image 2" class="object-contain rounded-t-lg h-full w-full" />
            </div>
            <div className='p-5 flex-grow text'>
              <h3 class="text-xl font-bold pb-2">Flipping Flashcards</h3>
              <p class="">An innovative and cutting-edge study tool.</p>
            </div>
          </div>
        </Link>
        <Link to='/work/florin'>
          <div class="bg-blue-100 flex-grow rounded-xl shadow-custom p-0 transition-all hover:scale-105 hover:shadow-red hover:cursor-pointer hover:bg-blue-400 hover:text-white">
            <div class="aspect-w-1 aspect-h-1">
              <img src="https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681987403/Florin-1_h0ef8h.png" alt="Image 3" class="object-contain rounded-t-lg h-full w-full" />
            </div>
            <div className='p-5 flex-grow text'>
              <h3 class="text-xl font-bold pb-2">Florin Events</h3>
              <p class="">Event creation app made for our community.</p>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </>
  )
}

export default Home
