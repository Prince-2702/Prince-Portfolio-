import React from 'react'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/images/my_photo.jpg'

const About = () => {
  return (
    <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between'>
        {/* left side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 items-center'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className='tet-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Prince Undaviya
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a
            </span>
            <span className='text-[#8245ec] ml-2 text-2xl sm:text-3xl md:text-4xl font-bold'>Frontend Developer</span>
          </h3>
          {/* About Me */}
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relax'>
            Innovation and driven Computer Engineering student puruuing Bachelor`s degree. Proficient in programming language such as HTML, Javascript, CSS, React.JS, Talwind CSS.
            I have good communication skills and can work effectively in a team and independently, with strong attention to detail.</p>
          {/* resume button */}
          <a href="src\assets\resume\Prince_Undaviya_resume.pdf"
            download
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >DOWNLOAD CV</a>
        </div>

        {/* Right section */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt 
          className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          >
            <img src={profileImage} alt="Prince Udaviya" 
              className='w-full h-full rounded-full object-cover drop-shadow[0_10px_20px_rgb(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About