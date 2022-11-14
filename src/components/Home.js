import React from 'react'
import {motion} from 'framer-motion'

// const Home = () => 
function Home() {
  return (
    <motion.div name='home' className='w-full h-screen bg-[#0a192f]' 
    >
        {/* container */}
        <motion.div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: .5}}
        exit={{x: -100, opacity:0}}
        >
          <p className='flex items-center justify-center'>
              <p className='Left column'>
                <p className='text-4xl sm:text-7xl font-spectral text-gray-400'>Miguel Afable</p>
                <h1 className='text-4xl sm:text-4xl font-spectral text-gray-500'>Architectural Graduate</h1>
                <h1 className='text-4xl sm:text-4xl font-spectral text-gray-500'>Developer</h1>
                <p className='max-w-[700px] sm:text-2xl font-spectral text-gray-600'>Online Portfolio
                </p>
              </p>
          </p>
        </motion.div>
    </motion.div>
  )
}

export default Home;