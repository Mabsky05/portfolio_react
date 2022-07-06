import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

// const Home = () => 
function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-4xl sm:text-7xl'>Hi, my name is </p>
            <h1 className=''>Mimimimi</h1>
            <h2>Full Stack Dev</h2>
            <p className='max-w-[700px]'>lorem ipsum hahahaha
                <button className='text-white group border-2 px-6 py-3 my-2 flex 
                items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight />
                </span>
                </button>

            </p>

        </div>
    </div>
  )
}

export default Home;