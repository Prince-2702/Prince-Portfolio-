import React, { useState } from 'react'
import img1 from '../../assets/images/E-commerce_website.png'
import img2 from '../../assets/images/coffee_shop.png'
import img3 from '../../assets/images/Real-estate.png'
import img4 from '../../assets/images/Foodies.png'
import img5 from '../../assets/images/Car_rental.png'

const projects = [
  {
    id: 0,
    title: "E-commerce Gadgets Website",
    decription: "A powerful and user friendly Ract.js website.",
    img: img1,
    tags: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Tailwind CSS'],
    github: "https://github.com/Prince-2702/E-commerce-Website.git",
    webpage: "https://e-commerce-website-ochre-alpha.vercel.app/"
  },
  {
    id: 1,
    title: "Coffee Shop Website",
    decription: "A powerful and user friendly website.",
    img: img2,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: "https://github.com/Prince-2702/Coffee-Shop-Website.git",
    webpage: "https://prince-2702.github.io/Coffee-Shop-Website/"
  },
  {
    id: 2,
    title: "Real-Estate-website",
    decription: "A powerful and user friendly website.",
    img: img3,
    tags: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Tailwind CSS'],
    github: "https://github.com/Prince-2702/Real-Estate-website",
    webpage: "https://real-estate-website-gilt-beta.vercel.app/"
  },
  {
    id: 3,
    title: "Foodies_website",
    decription: "A powerful and user friendly website.",
    img: img4,
    tags: ['HTML', 'CSS', 'JavaScript', 'React.JS'],
    github: "https://github.com/Prince-2702/Foodies_website",
    webpage: "https://foodies-website-eight.vercel.app/"
  },
  {
    id: 4,
    title: "Car-Rental",
    decription: "A powerful and user friendly website.",
    img: img5,
    tags: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Tailwind CSS'],
    github: "https://github.com/Prince-2702/Car-Rental",
    webpage: "https://car-rental-iota-ruby.vercel.app/"
  }
]

const Work = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenMode = (project) => {
    setSelectedProject(project);
  }

  const handleCloseMode = (project) => {
    setSelectedProject(null);
  }

  return (
    <section id='work'
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>
          PROJECTS
        </h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p
          className='text-gray-400 mt-4 text-lg font-semibold'
        >A showcase of the project I have orked on highlighting my skills and experience in various technologies.
        </p>
      </div>

      {/* project grid */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {projects.map((project) => (
          <div key={project.id}
            onClick={() => handleOpenMode(project)}
            className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
          >
            <div className='p-4'>
              <img src={project.img} alt={project.title} className='w-full h-48 object-cover rounded-xl' />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-500 mb-4 pt-4 line-clamp-3'>{project.decription}</p>
              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span key={index} className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded px-2 py-1 mr-2 mb-2'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* model container */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
          <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>
            <div className='flex justify-end p-4'>
              <button
                onClick={handleCloseMode}
                className='text-white text-3xl font-bold hover:text-purple-500'
              >
                &times;
              </button>
            </div>
            <div className='flex flex-col'>
              <div className='w-full flex justify-center bg-gray-900 px-4'>
                <img src={selectedProject.img} alt={selectedProject.title} className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl' />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.decription}
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className='bg-[#251f38] text-xs font-semibold text-purple-500 rounded px-2 py-1'>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a href={selectedProject.github} target='_blank' rel='noopener noreferrer'
                  className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'
                  >
                    View Code
                  </a>
                  <a href={selectedProject.webpage} target='_blank' rel='noopener noreferrer'
                  className='w-1/2 bg-purple-600 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Work