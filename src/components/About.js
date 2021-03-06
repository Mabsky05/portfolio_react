import React from 'react'
import {motion} from "framer-motion"

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'
    // initial={{y: -50, opacity: .5}}
    // animate={{y: 0, opacity: 1}}
    // transition={{duration: 1.1}}
    // exit={{y: 0, opacity:0}}
    >
        <motion.div className='flex flex-col justify-center items-center w-full h-full'
        initial={{y: -50, opacity: .5}}
    animate={{rotate: 360, opacity: 1}}
    transition={{duration: .5}}
    exit={{y: 0, opacity:0}}
    >
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>

                <div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi I'm Mike. Nice to meet you, Please take a look.</p>
                    </div>
                </div>
                <div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                xcepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About; 