import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import AnimatedRoutes from "./components/AnimatedRoutes"
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Coding from "./components/Coding";
import Architectural from "./components/Architectural";
import Contact from "./components/Contact";


function App() {
  
  return (
    <Router>
      <Navbar/>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
