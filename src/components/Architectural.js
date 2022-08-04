import React from 'react'
import {motion} from 'framer-motion'
import Logo from '../assets/logo.jpg'
import image1 from '../assets/1-1.jpg'
import image2 from '../assets/2-1.jpg'
import image3 from '../assets/3-1.png'
import image4 from '../assets/4-1.png'

const Architectural = () => {
  return (
    <motion.div name='work' 
    className='bg-[#0a192f] w-full h-screen text-gray-300 flex justify-center align-center'
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opacity:0}}
    >
        <div className='grid grid-cols-2 gap-4 place-content-center'>
            
            <motion.div
                initial={{x: -50, y: -50, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{duration: 1}}
                exit={{x: -50, y: -50, opacity: 0}}
            ><img src={image1} style={{maxWidth: "15rem"}} alt="image1"/>
            </motion.div>

            <motion.div
                initial={{x: 50, y: -50, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{duration: 1}}
                exit={{x: 50, y: -50, opacity: 0}}
            ><img src={image2} style={{maxWidth: "15rem"}} alt="image2"/>
            </motion.div>

            <motion.div
                initial={{x: -50, y: 50, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{duration: 1}}
                exit={{x: -50, y: 50, opacity: 0}}
            ><img src={image3} style={{maxWidth: "15rem"}} alt="image3"/>
            </motion.div>

            <motion.div
                initial={{x: 50, y: 50, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{duration: 1}}
                exit={{x: 50, y: 50, opacity: 0}}
            ><img src={image4} style={{maxWidth: "15rem"}} alt="image4"/>
            </motion.div>
        </div>
{/* 
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Check out my work</p>
            </div>
        </div> */}

{/* Project Card */}
        {/* <div style={{backgroundImage: `url(${Logo})`}}
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
             mx-auto content-div'>

                 Hover Effects
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        ReactJS Application
                    </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white 
                                text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white 
                                text-gray-700 font-bold text-lg'>
                                </button>
                            </a>
                        </div>
             

                </div>
            </div>
        </div> */}

        {/* <div style={{backgroundImage: `url(${Logo})`}}
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
             mx-auto content-div'>

                 Hover Effects
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        ReactJS Application
                    </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white 
                                text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white 
                                text-gray-700 font-bold text-lg'>
                                </button>
                            </a>
                        </div>
                </div>
            </div>
        </div> */}
    </motion.div>
  )
}

export default Architectural