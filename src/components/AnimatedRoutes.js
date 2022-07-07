import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "./Home"
import About from "./About";
import Coding from "./Coding";
import Architectural from "./Architectural";
import Contact from "./Contact";

import {AnimatePresence} from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* <Route element={<Navbar/>}/> */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/arch" element={<Architectural />}/>
        <Route path="/coding" element={<Coding />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
