import React from 'react'

const Work = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-custom m-20 p-5">
        <div className="flex">
          <div className="mx-2">
            <div>
              <h1>About Me</h1>
              <p>As a multilingual professional, I have developed a unique skill set by working across various industries such as customer service, logistics, and management. My passion for technology and dedication to delivering exceptional customer experiences have been the driving forces throughout my career.</p>
              <p>Recognising the potential for growth and impact in the tech industry, I made a bold decision to pursue a career in Tech leaving my full-time job last year and enrolling in a full-time intensive programming bootcamp. This investment not only demonstrates my commitment to the world of technology but also allowed me to further develop my skills and potential.</p>
              <p>Armed with a Bachelor's degree in International Relations and newfound programming expertise, I am now well-prepared to take on the challenges of the tech industry. As a valuable asset to any organisation, I am eager to embark on my next professional adventure, using my diverse skills and experiences to make a meaningful difference in the fast-paced, ever-evolving world of technology.</p>
            </div>
          </div>
          <div className="inline-block">
            <img src="https://res.cloudinary.com/dlxcjxezc/image/upload/v1682430307/IMG_9755_e6ss8x.jpg" alt="Main Image" className="rounded-lg h-full w-full" />
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
          <h2>Enthusiastic</h2>
          <p>During my time as TL I did that. During my time as TL I did that.During my time as TL I did that.</p>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
          <h2>Enthusiastic</h2>
          <p>During my time as TL I did that. During my time as TL I did that.During my time as TL I did that.</p>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg p-4 mx-1">
          <h2>Enthusiastic</h2>
          <p>During my time as TL I did that. During my time as TL I did that.During my time as TL I did that.</p>
        </div>
      </div>

    </div>
  </div>

  );
}

export default Work
