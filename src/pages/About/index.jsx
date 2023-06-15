import React from 'react'

const About = () => {

  return (
    <>
        <div className="flex items-center justify-center">
          <div className="back-custom-small rounded-xl shadow-custom m-10 sm:m-20 p-5">
            <div>
            <div className='mx-2'>
              <h1 className='text-cyan-100'>About Me</h1>
              <p className='text-black'>
                With extensive experience in frontend and backend development, I excel at delivering intuitive and feature-rich software applications that cater to the unique needs of clients and users.
              </p>
              <p className='text-black'>
                Having worked across the entire software development lifecycle, I possess comprehensive knowledge and expertise in every phase of the process.
              </p>
              <p className='text-black'>
                With proficiency in multiple languages, I possess strong communication skills that enable effective collaboration with diverse teams and stakeholders. I approach problem-solving with diligence, employing analytical thinking and a creative mindset to overcome complex challenges. By exploring innovative solutions, I strive to optimize performance and drive continuous improvement in every project I undertake. Recognized for my reliability and adaptability, I thrive in fast-paced environments where I can remain composed under pressure. I excel both independently and as part of a dynamic team, consistently meeting tight deadlines and delivering high-quality work. 
              </p>
            </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 ">
            <div className="flex-1 bg-teal-100 shadow-custom-small rounded-lg p-4 mx-1 animate-flash">
              <h2 className='text-cyan-700'>Enthusiastic</h2>
              <p className=''>Career change just made me even thirstier for knowledge and new experinces. I got fire in my eyes, my heart and my fingers.</p>
            </div>
            <div className="flex-1 bg-teal-100 shadow-custom-small rounded-lg p-4 mx-1">
              <h2 className='text-cyan-700'>Passionate</h2>
              <p className=''>I appreciate and follow technology in general. Programming makes a half of my life since the last year.</p>
            </div>
            <div className="flex-1 bg-teal-100 shadow-custom-small rounded-lg p-4 mx-1">
              <h2 className='text-cyan-700'>Critical Thinker</h2>
              <p>I observe the problem from all the angles, when needed exclude/include emotions and experience, always rely on facts.</p>
            </div>
            <div className="flex-1 bg-teal-100 shadow-custom-small rounded-lg p-4 mx-1">
              <h2 className='text-cyan-700'>Dependable</h2>
              <p>You can always rely on me and my skilss, I don't let people down! Ask my previous managers.</p>
            </div>
            <div className="flex-1 bg-teal-100 shadow-custom-small rounded-lg p-4 mx-1">
              <h2 className='text-cyan-700'>Honest</h2>
              <p>My philosophie includes an array of rules and honesty with the world is on the top!</p>
            </div>
            <div className="flex-1 bg-teal-100 shadow-custom-small rounded-lg p-4 mx-1">
              <h2 className='text-cyan-700'>Can do attitude</h2>
              <p>I always do the right thing and I'm happy to work on any task.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
          <div className="back-custom rounded-xl shadow-custom m-10 w-full sm:ml-20 sm:mr-20 sm:mb-20 p-5">
            <h2 className='text-3xl pb-4 text-cyan-100'>Skills</h2>
            <ol className="grid grid-cols-3 gap-4">
              <li className="text-cyan-100 text-2xl mb-2 flex items-center "><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452210/javascript_pp0zjv.svg' alt='JavaScript'></img>JavaScript</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452182/react_hwybaa.svg' alt='React'></img>React</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452012/nodejs-icon_yqz6fc.svg' alt='Node'></img>Node</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451852/express_kly0nt.svg' alt='Express'></img>Express</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452197/python_evu9so.svg' alt='Python'></img>Python</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452051/flask_ie5jb2.svg' alt='Flask'></img>Flask</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452032/django-icon_uk4wsp.svg' alt='Django'></img>Django</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451924/postgresql_qckumv.svg' alt='PostgreSQL'></img>PostgreSQL</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451907/mongodb-icon_cmsasc.svg' alt='MongoDB'></img>MongoDB</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451940/sqlite_om5rbl.svg' alt='SQLite'></img>SQLite</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452115/html-5_zhw0y5.svg' alt='HTML'></img>HTML</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452099/css-3_fi9cle.svg' alt='CSS'></img>CSS</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452084/tailwindcss-icon_vryuon.svg' alt='TailwindCSS'></img>TailwindCSS</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683452067/bootstrap_vonqqf.svg' alt='Bootstrap'></img>Bootstrap</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451973/github-icon_puneos.svg' alt='GitHub'></img>GitHub</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451957/git-icon_vknstp.svg' alt='Git'></img>Git</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451991/jest_udx4sn.svg' alt='Jest'></img>Jest</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1682847452/pytest_zbwuei.png' alt='Pytest'></img>Pytest</li>
              <li className="text-cyan-100 text-2xl mb-2 flex items-center"><img className='h-10 w-10 mr-2' viewBox="0 0 20 20" src='https://res.cloudinary.com/dlxcjxezc/image/upload/v1683451888/docker-icon_rt9pnh.svg' alt='Docker'></img>Docker</li>
            </ol>
          </div>
      </div>    
    </>
  )
}

export default About
