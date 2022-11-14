import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

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
                <li><Link to ="arch">Arch</Link></li>
                <li><Link to="coding">Coding</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
    </div>
    </nav>
  )
}

export default Navbar