import React from 'react'
import { Link } from 'react-router'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div name='contact' className='backface-hidden w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'

    >
        <motion.form action="" className='flex flex-col max-w-[600px] w-full'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.1}}
            // exit={{x: 50, opacity:0}}
        
        >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline font-spectral text-gray-400'>Contact</p>
            </div>
            <input className='bg-sky-200 p-2 font-spectral text-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#819cf7]' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 
                    px-4 py-3 my-8 mx-auto flex items-center'>Collab</button>
        </motion.form>

    </motion.div>
  )
}

export default Contact