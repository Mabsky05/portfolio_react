import React, {state, useState} from 'react'

import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {motion} from 'framer-motion'


import { Link } from 'react-router-dom'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Navbar = () => {
    // const[nav, setNav] = useState(false)
    // const handleClick = () => setNav(!nav)

  return (
    <nav className='sticky top-0 w-full bg-[#0a192f] px-4 z-10'>
    <div className='h-[80px] flex justify-center items-center text-gray-200'>
        {/* menu */}
            <ul className='hidden md:flex font-expletus text-4xl'>
                <li><Link to="/">
                    <button className='hover:text-grey-600 hover:opacity-50'>
                        Home
                    </button></Link>
                </li>
                <motion.li
                whileHover={{
                    opacity: 0.5,
                    textShadow: "0px 0px 8px rgb(255, 255, 255)",
                    // boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
                ><Link to="about">About</Link></motion.li>
                <li><Link to ="arch">Arch</Link></li>
                <li><Link to="coding">Coding</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
    
        {/*Hamburger*/}
        {/* <div onClick={handleClick} className='md:hidden z-10'>
            {!nav? <FaBars/> : <FaTimes/>}
        </div> */}

        {/* Mobile Menu */}
            {/* <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>CV</li>
                <li className='py-6 text-4xl'>Architectural</li>
                <li className='py-6 text-4xl'>Programming</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul> */}
            

        {/* Social Icons */}
        {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[50px] flex justify-between items-center 
                           ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full
                           text-gray-300' href= "/">Linkedin  <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center 
                           ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full
                           text-gray-300' href= "/">Linkedin  <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center 
                           ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full
                           text-gray-300' href= "/">Linkedin  <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[50px] flex justify-between items-center 
                           ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full
                           text-gray-300' href= "/">Linkedin  <BsFillPersonLinesFill size={30} />
                </a>
            </li>
        </ul>
        </div> */}
    </div>
    </nav>
  )
}

export default Navbar