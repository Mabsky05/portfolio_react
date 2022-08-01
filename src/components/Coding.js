import React from 'react'
import {motion} from 'framer-motion'
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
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
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      {/* <div>Format: Project Name / Desc / Techs</div>
      <div>MARP / Desc / MERN stack, react-map-gl, Mapbox</div>
      <div>WeatherDash / Desc / Bootstrap, CSS, HTML, Javascript, Jquery</div>
      <div>Team gen / Desc / Node.js, html</div>
      <div>Revamp / Express, MySQL, node.js </div> */}
      <motion.div 
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration:2}}
      
      className='max-w-[1250px] mx-auto my-auto pt-20 grid grid-cols-1 gap-6 justify-center'>
        <div className='flex flex-row'>
          <div className='text-4xl font-spectral pr-24 flex items-center'>MARP</div>
          <div className='flex items-center font-spectral'>Mapping App with login/logout functionality</div>
            <div className='text-4xl font-spectral pl-24 flex flex-row'>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={mongodb} alt='mongodb'></img>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={react} alt='react' width={'128rem'}></img>
              <img style={{maxWidth: "4rem"}} src={node} alt='node' width={'128rem'}></img>
            </div>
          </div>

          <div className='pl-24 flex flex-row'>
          <div className='text-4xl font-spectral pr-24 flex items-center'>WeatherDash</div>
          <div className='flex items-center font-spectral'>Mapping App with login/logout functionality</div>
            <div className='text-4xl font-spectral pl-24 flex flex-row'>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={mongodb} alt='mongodb'></img>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={react} alt='react' width={'128rem'}></img>
              <img style={{maxWidth: "4rem"}} src={node} alt='node' width={'128rem'}></img>
            </div>
          </div>

          <div className='pl-48 flex flex-row'>
          <div className='text-4xl font-spectral pr-24 flex items-center'>Team Gen</div>
          <div className='flex items-center font-spectral'>Mapping App with login/logout functionality</div>
            <div className='text-4xl font-spectral pl-24 flex flex-row'>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={mongodb} alt='mongodb'></img>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={react} alt='react' width={'128rem'}></img>
              <img style={{maxWidth: "4rem"}} src={node} alt='node' width={'128rem'}></img>
            </div>
          </div>
          
          <div className='pl-72 flex flex-row'>
          <div className='text-4xl font-spectral pr-24 flex items-center'>ReVamp</div>
          <div className='flex items-center font-spectral'>Mapping App with login/logout functionality</div>
            <div className='text-4xl font-spectral pl-24 flex flex-row'>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={mongodb} alt='mongodb'></img>
              <img className='ring-green-200 hover:ring-2 duration-200' style={{maxWidth: "4rem"}} src={react} alt='react' width={'128rem'}></img>
              <img style={{maxWidth: "4rem"}} src={node} alt='node' width={'128rem'}></img>
            </div>
          </div>
          
          
       

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