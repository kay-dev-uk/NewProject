import React, { useState } from 'react'

const Kanban = () => {

  const images = [
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681999938/Screenshot_2023-04-20_at_12.52.57_c4nnq6.png',
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681999938/Kanban-2_gxxg5j.png',
    'https://res.cloudinary.com/dlxcjxezc/image/upload/c_scale,h_892,w_1498/v1681999938/Kanban-3_fndutn.png',
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
          Kanban AI
        </h1>
        <p className='flex flex-row items-center justify-center'>Kanban board with AI features and GitHub & StackOverflow integrations.</p>
        <div className='flex flex-row items-left justify-center'>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452210/javascript_pp0zjv.svg' alt='JavaScript' data-tip="JavaScript Description"></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452012/nodejs-icon_yqz6fc.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452182/react_hwybaa.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452197/python_evu9so.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452051/flask_ie5jb2.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452115/html-5_zhw0y5.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452084/tailwindcss-icon_vryuon.svg'></img>
          <img className='w-10 m-3' src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451924/postgresql_qckumv.svg'></img>
          
        </div>
      </div>
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
  <div className="back-custom rounded-xl shadow-custom sm:ml-20 sm:mr-20 mt-10 mb-10 ml-10 mr-10 items-center justify-center flex w-4/5 sm:w-3/5">
    <div className="pl-8 pr-8 pt-8 pb-8">
      <h2 className="text-2xl font-bold pb-2 flex items-center justify-center">Kanban AI</h2>
      <p className="text-gray-600 md:font-sm">
        The Kanban Board is a feature-rich tool with AI capabilities designed to enhance productivity and innovation. It offers step generation for task breakdown, seamless test generation, GitHub and StackOverflow integrations, an admin dashboard for task tracking, and email notifications for prompt issue resolution. Simplifying workflow and fostering effective collaboration, the Kanban Board boosts efficiency and delivers quality results.
      </p>
      <p className="text-black font-black">
        Login: "kay" | Password: "password1"
      </p>
      <br />
      <h3 className="text-3xl pb-2 flex items-center justify-left">Technologies</h3>
      <ol className="list-none list-inside pl-5">
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452210/javascript_pp0zjv.svg' alt='JavaScript'></img>JavaScript</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452182/react_hwybaa.svg' alt='JavaScript'></img>React</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452012/nodejs-icon_yqz6fc.svg' alt='JavaScript'></img>Node</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452197/python_evu9so.svg' alt='Python'></img>Python</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452051/flask_ie5jb2.svg' alt='Flask'></img>Flask</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451924/postgresql_qckumv.svg' alt='JavaScript'></img>PostgreSQL</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452115/html-5_zhw0y5.svg' alt='JavaScript'></img>HTML</li>
        <li className="text-blue-500 mb-2 flex items-center"><img className='h-5 w-5 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452099/css-3_fi9cle.svg' alt='JavaScript'></img>CSS</li>
      </ol>
      <br />
      <h3 className="text-3xl pb-2 flex items-center justify-left">Challenges</h3>
      <p className="text-gray-600 md:font-sm">
        As a team
      </p>
      <div className="flex justify-center">
            <a target="_blank" href='https://built-differently.onrender.com/'>
              <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow btn-size">
                Deployment
              </button>
            </a>
            <a target="_blank" href='https://github.com/kay-dev-uk/Florin-Events-App'>
              <button className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white border-2 border-gray-300 font-semibold py-2 px-4 rounded-lg shadow btn-size">
                Github
              </button>
            </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Kanban
