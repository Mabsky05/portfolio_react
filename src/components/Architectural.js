import React, {useState} from 'react'
import {motion} from 'framer-motion'


import image1_1 from '../assets/1-1.jpg'
import image1_2 from '../assets/1-2.jpg'
import image1_3 from '../assets/1-3.jpg'
import image1_4 from '../assets/1-4.jpg'

import image2_1 from '../assets/2-1.png'
import image2_2 from '../assets/2-2.png'
import image2_3 from '../assets/2-3.png'
import image2_4 from '../assets/2-4.png'

import image3_1 from '../assets/3-1.png'
import image3_2 from '../assets/3-2.jpg'
import image3_3 from '../assets/3-3.jpg'
import image3_4 from '../assets/3-4.jpg'

import image4_1 from '../assets/4-1.jpg'
import image4_2 from '../assets/4-2.png'
import image4_3 from '../assets/4-3.jpg'
import image4_4 from '../assets/4-4.jpg'


import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'

const Architectural = () => {
    
    // Usestate for 1st image
    const [isOpen1, setIsOpen1] = useState(false)

    // Usestate for 2nd image
    const [isOpen2, setIsOpen2] = useState(false)

    // Usestate for 3rd image
    const [isOpen3, setIsOpen3] = useState(false)

    // Usestate for 4th image
    const [isOpen4, setIsOpen4] = useState(false)

  return (
    <motion.div name='work' 
    className='bg-[#0a192f] w-full h-screen text-gray-300 flex justify-center align-center'
    // initial={{opacity: 0}}
    // animate={{opacity: 1}}
    // exit={{opacity:0}}
    >
        
        <div className='grid grid-cols-2 gap-20 place-content-center'>

        {/* Thesis */}
            <motion.div className='flex items-center justify-center' 
                initial={{x: -50, y: -50, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{duration: 1}}
                exit={{x: -50, y: -50, opacity: 0}}>

                <button className='font-spectral text-4xl hover:text-grey-600 hover:opacity-50' 
                onClick={() => setIsOpen1(true)}>Thesis
                </button>

                <Modal1 className='' open={isOpen1} onClose={() => setIsOpen1(false)}>
                <div className='grid grid-cols-2 gap-5 place-content-center'>
                    <img className='transition duration-700 hover:scale-[2.5] hover:translate-y-1/2' 
                    src={image1_1} style={{maxWidth: "15rem"}} alt="image1-1"/>
                    <img className='transition duration-700 hover:scale-[2] hover:translate-y-1/3' 
                    src={image1_2} style={{maxWidth: "15rem"}} alt="image1-2"/>
                    <img className='transition duration-700 hover:scale-[3]' 
                    src={image1_3} style={{maxWidth: "15rem"}} alt="image1-1"/>
                    <img className='transition duration-700 hover:scale-[2.5] hover:-translate-y-1/3' 
                    src={image1_4} style={{maxWidth: "15rem"}} alt="image1-1"/>
                </div>
                </Modal1>
            </motion.div>
            
        {/* Commercial */}
            <motion.div className='flex items-center justify-center'
                initial={{x: 50, y: -50, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{duration: 1}}
                exit={{x: 50, y: -50, opacity: 0}}>

            <button className='font-spectral text-4xl hover:text-grey-600 hover:opacity-50' 
            onClick={() => setIsOpen2(true)}>Commercial
            </button>

            <Modal2  className='' open={isOpen2} onClose={() => setIsOpen2(false)}>
            <div className='grid grid-cols-2 gap-5 place-content-center'>
                    <img className='transition duration-700 hover:scale-[2.5] hover:translate-x-1/3 hover:translate-y-2/3' 
                    src={image2_1} style={{maxWidth: "15rem"}} alt="image2-1"/>
                    <img className='transition duration-700 hover:scale-[3] hover:-translate-x-1/3 hover:translate-y-1/3' 
                    src={image2_2} style={{maxWidth: "15rem"}} alt="image2-2"/>
                    <img className='transition duration-700 hover:scale-[2]' 
                    src={image2_3} style={{maxWidth: "15rem"}} alt="image2-3 hover:-translate-y-3/4"/>
                    <img className='transition duration-700 hover:scale-[3] hover:translate-y-1/3' 
                    src={image2_4} style={{maxWidth: "15rem"}} alt="image2-4"/>
                </div>  
            </Modal2>
            </motion.div>

        {/* Retail */}
            <motion.div className='flex items-center justify-center'
                initial={{x: -50, y: 50, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{duration: 1}}
                exit={{x: -50, y: 50, opacity: 0}}>

                <button className='font-spectral text-4xl hover:text-grey-600 hover:opacity-50' 
                onClick={() => setIsOpen3(true)}>Residential
                </button>

                <Modal3  className='' open={isOpen3} onClose={() => setIsOpen3(false)}>
                <div className='grid grid-cols-2 gap-5 place-content-center'>
                    <img className='transition duration-700 hover:scale-[2.5] hover:translate-x-1/3 hover:translate-y-2/3' 
                    src={image3_1} style={{maxWidth: "15rem"}} alt="image2-1"/>
                    <img className='transition duration-700 hover:scale-[3] hover:-translate-x-1/3 hover:translate-y-1/3' 
                    src={image3_2} style={{maxWidth: "15rem"}} alt="image2-2"/>
                    <img className='transition duration-700 hover:scale-[2]' 
                    src={image3_3} style={{maxWidth: "15rem"}} alt="image2-3 hover:-translate-y-3/4"/>
                    <img className='transition duration-700 hover:scale-[3] hover:translate-y-1/3' 
                    src={image3_4} style={{maxWidth: "15rem"}} alt="image2-4"/>
                </div>
                </Modal3>
            </motion.div>

        {/* Misc */}
            <motion.div className='flex items-center justify-center'
                initial={{x: 50, y: 50, opacity: 0}}
                animate={{x: 0, y: 0, opacity: 1}}
                transition={{duration: 1}}
                exit={{x: 50, y: 50, opacity: 0}}>

        <button className='font-spectral text-4xl hover:text-grey-600 hover:opacity-50' 
        onClick={() => setIsOpen4(true)}>Misc
        </button>

        <Modal4  className='' open={isOpen4} onClose={() => setIsOpen4(false)}>
                <div className='grid grid-cols-2 gap-5 place-content-center'>
                    <img className='transition duration-700 hover:scale-[2.5] hover:translate-x-1/3 hover:translate-y-2/3' 
                    src={image4_1} style={{maxWidth: "15rem"}} alt="image2-1"/>
                    <img className='transition duration-700 hover:scale-[3] hover:-translate-x-1/3 hover:translate-y-1/3' 
                    src={image4_2} style={{maxWidth: "15rem"}} alt="image2-2"/>
                    <img className='transition duration-700 hover:scale-[2]' 
                    src={image4_3} style={{maxWidth: "15rem"}} alt="image2-3 hover:-translate-y-3/4"/>
                    <img className='transition duration-700 hover:scale-[3] hover:translate-y-1/3' 
                    src={image4_4} style={{maxWidth: "15rem"}} alt="image2-4"/>
                </div>
        </Modal4>

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