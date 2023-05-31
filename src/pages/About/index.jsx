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
      <div className="flex items-center justify-center h-screen">
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
      </div>


    </>
  )
}

export default About
