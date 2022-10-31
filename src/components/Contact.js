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

            <input className='p-2 font-expletus text-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 font-expletus 'type='email' placeholder='Email' name='email' />
            <textarea className='p-2 font-expletus 'name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white font-spectral hover:text-gray-600 text-4xl px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </motion.form>

    </motion.div>
  )
}

export default Contact