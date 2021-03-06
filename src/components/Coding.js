import React from 'react'
import {motion} from 'framer-motion'
// import image_name from '../assets/image_name.jpg'

const Coding = () => {
  return (
    <motion.div name='skills' className='backface-hidden w-full h-screen bg-[#0a192f] text-gray-300'
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opacity:0}}
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
          <p className='py-4'>These are the techs I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='' alt='skill_icon'/>
            <p className='my-4'>skill name</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='' alt='skill_icon'/>
            <p className='my-4'>skill name</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='' alt='skill_icon'/>
            <p className='my-4'>skill name</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='' alt='skill_icon'/>
            <p className='my-4'>skill name</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='' alt='skill_icon'/>
            <p className='my-4'>skill name</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='' alt='skill_icon'/>
            <p className='my-4'>skill name</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Coding
