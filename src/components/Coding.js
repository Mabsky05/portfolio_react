import React from 'react'
import {motion} from 'framer-motion'
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import express from '../assets/express.png'
import graphql from '../assets/graphql.png'
import html5 from '../assets/html5.png'
import jquery from '../assets/jquery.png'
import js from '../assets/js.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import node from '../assets/node.png'
import react from '../assets/react.png'


const Coding = () => {
  const devIconStyle = {
    width: "5rem"
  };

  return (
    <div name='skills' className='w-full my-auto h-screen bg-[#0a192f] text-gray-300'>
      <motion.div 
        initial={{x: -100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration:2}}
        className='max-w-[1150px] mx-auto my-auto pt-20 grid grid-cols-1 gap-6 justify-center'>

      <a href="http://mabsky05project3.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <div className='pl-12 flex flex-row  ring-gray-500 hover:ring-2 duration-200'>
          <div className='text-4xl font-spectral pr-24 flex items-center'>MARP</div>
          <div className='flex items-center font-spectral'>Mapping App with login/logout functionality</div>
            <div className='text-4xl font-spectral pl-24 flex flex-row'>  
              <img style={{maxWidth: "4rem"}} src={mongodb} alt='mongodb'></img>
              <img style={{maxWidth: "4rem"}} src={express} alt='express'></img>
              <img style={{maxWidth: "4rem"}} src={react} alt='react' width={'128rem'}></img>
              <img style={{maxWidth: "4rem"}} src={node} alt='node' width={'128rem'}></img>
            </div>
        </div>
      </a>

      <a href="https://mabsky05.github.io/weather_dashboard" target="_blank" rel="noopener noreferrer">
        <div className='pl-12 flex flex-row  ring-gray-500 hover:ring-2 duration-200'>
          <div className='text-4xl font-spectral pr-24 flex items-center'>WeatherDash</div>
          <div className='flex items-center font-spectral'>Track weather data by city input</div>
            <div className='text-4xl font-spectral pl-24 flex flex-row'>
              <img style={{maxWidth: "4rem"}} src={bootstrap} alt='bootstrap'></img>
              <img style={{maxWidth: "4rem"}} src={css} alt='css'></img>
              <img style={{maxWidth: "4rem"}} src={html5} alt='html5' width={'128rem'}></img>
              <img style={{maxWidth: "4rem"}} src={js} alt='js' width={'128rem'}></img>
              <img style={{maxWidth: "4rem"}} src={jquery} alt='jquery' width={'128rem'}></img>
            </div>
        </div>
        </a>

        <a href="https://github.com/Mabsky05/team_gen" target="_blank" rel="noopener noreferrer">
          <div className='pl-12 flex flex-row  ring-gray-500 hover:ring-2 duration-200'>
            <div className='text-4xl font-spectral pr-24 flex items-center'>Team Gen</div>
            <div className='flex items-center font-spectral'>HTML team generator</div>
              <div className='text-4xl font-spectral pl-24 flex flex-row'>
                <img style={{maxWidth: "4rem"}} src={node} alt='node'></img>
                <img style={{maxWidth: "4rem"}} src={html5} alt='html5' width={'128rem'}></img>
              </div>
            </div>
          </a>

          <a href="https://github.com/Mabsky05/revamp" target="blank" rel="noopener noreferrer">
          <div className='pl-12 flex flex-row  ring-gray-500 hover:ring-2 duration-200'>
          <div className='text-4xl font-spectral pr-24 flex items-center'>
          ReVamp
          </div>
          <div className='flex items-center font-spectral'>Home DIY repository</div>
            <div className='text-4xl font-spectral pl-24 flex flex-row'>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={express} alt='express'></img>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={mysql} alt='mysql' width={'128rem'}></img>
              <img style={{maxWidth: "4rem"}} src={node} alt='node' width={'128rem'}></img>
            </div>
          </div>
          </a>
          
          
       

        {/* <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='' alt='skill_icon'/>
            <p className='my-4'>skill name</p>
          </div> 
        </div> */}
      </motion.div>
    </div>
  )
}

export default Coding
