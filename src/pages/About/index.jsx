import React from 'react'

const About = () => {

  return (
    <>
      {/* <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-between">
          <div className="mr-8">
            <h2 className="text-2xl font-bold">Your Name</h2>
            <p className="text-gray-600">Your Job Title</p>
            <p className="text-gray-600">Your Company</p>
            <p className="text-gray-600">Your Location</p>
          </div>
          <div>
            <img
              className="w-40 h-40 object-cover rounded"
              src="https://res.cloudinary.com/dlxcjxezc/image/upload/v1682627268/Subject_3_asrqj0.png"
              alt="Your Picture"
            />
          </div>
        </div>
      </div> */}
      {/* <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-xl shadow-custom m-20 p-5">
          <div className="aspect-w-16 aspect-h-9 p-5">
            <iframe
              className="w-full h-full "
              src="https://www.youtube.com/embed/z0hCl9MUL0Y"
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div> */}
        <div className="flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-custom m-10 sm:m-20 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className='order-2 md:order-2'>
                <h1>About Me</h1>
                <p>As a multilingual professional, I have developed a unique skill set by working across various industries such as customer service, logistics, and management. My passion for technology and dedication to delivering exceptional customer experiences have been the driving forces throughout my career.</p>
                <p>Recognising the potential for growth and impact in the tech industry, I made a bold decision to pursue a career in Tech leaving my full-time job last year and enrolling in a full-time intensive programming bootcamp. This investment not only demonstrates my commitment to the world of technology but also allowed me to further develop my skills and potential.</p>
                <p>Armed with a Bachelor's degree in International Relations and newfound programming expertise, I am now well-prepared to take on the challenges of the tech industry. As a valuable asset to any organisation, I am eager to embark on my next professional adventure, using my diverse skills and experiences to make a meaningful difference in the fast-paced, ever-evolving world of technology.</p>
              </div>
              <div className="md:flex md:items-center order-1 md:order-2">
                <img src="https://res.cloudinary.com/dlxcjxezc/image/upload/v1682430307/IMG_9755_e6ss8x.jpg" alt="Main Image" className="rounded-lg mx-auto my-4 md:my-0 max-w-full" />
              </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
            <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
              <h2>Enthusiastic</h2>
              <p>Career change just made me even thirstier for knowledge and new experinces. I got fire in my eyes, my heart and my fingers.</p>
            </div>
            <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
              <h2>Passionate</h2>
              <p>I appreciate and follow technology in general. Programming makes a half of my life since the last year.</p>
            </div>
            <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
              <h2>Critical Thinker</h2>
              <p>I observe the problem from all the angles, when needed exclude/include emotions and experience, always rely on facts.</p>
            </div>
            <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
              <h2>Dependable</h2>
              <p>You can always rely on me and my skilss, I don't let people down! Ask my previous managers.</p>
            </div>
            <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
              <h2>Honest</h2>
              <p>My philosophie includes an array of rules and honesty with the world is on the top!</p>
            </div>
            <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
              <h2>Can do attitude</h2>
              <p>I always do the right thing and I'm happy to work on any task.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
