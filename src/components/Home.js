import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {motion} from 'framer-motion'

// const Home = () => 
function Home() {
  return (
    <motion.div name='home' className='backface-hidden w-full h-screen bg-[#0a192f]' 
 
    >

        {/* container */}
        <motion.div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'
        initial={{x: -50, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1.1}}
        // exit={{x: 50, opacity:0}}
        >
            <p className='text-4xl sm:text-7xl font-spectral text-gray-400'>Miguel Afable</p>
            <h1 className='text-4xl sm:text-4xl font-spectral text-gray-500'>Architectural Graduate</h1>
            <h1 className='text-4xl sm:text-4xl font-spectral text-gray-500'>Developer</h1>
            <p className='max-w-[700px]'>lorem ipsum hahahaha
                <button className='text-white group border-2 px-6 py-3 my-2 flex 
                items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight />
                </span>
                </button>
            </p>
        </motion.div>
    </motion.div>
  )
}

export default Home;