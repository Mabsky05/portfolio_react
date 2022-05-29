import React, {state, useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)



  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]
    text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'50px'}} />
        </div>

        {/* menu */}

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
      

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li classname='py-6 text-4xl'>Home</li>
                <li classname='py-6 text-4xl'>About</li>
                <li classname='py-6 text-4xl'>Skills</li>
                <li classname='py-6 text-4xl'>Work</li>
                <li classname='py-6 text-4xl'>Contact</li>
            </ul>
            

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
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
        </div>


    </div>
  )
}

export default Navbar