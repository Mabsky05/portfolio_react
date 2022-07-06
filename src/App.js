import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/arch" element={<Architectural />}/>
          <Route path="/coding" element={<Coding />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
    </Router>

  );
}

export default App;
