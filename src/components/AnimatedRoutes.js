import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Home"
import Coding from "./Coding";
import Architectural from "./Architectural";
import Contact from "./Contact";
import {AnimatePresence} from "framer-motion"

//This component needed to enclose and activate animations

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/arch" element={<Architectural />}/>
        <Route path="/coding" element={<Coding />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
