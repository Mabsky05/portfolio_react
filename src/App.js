import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import CV from "./components/CV";
import Code from "./components/Code";
import Design from "./components/Design";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/"
          element={<Home />}
          />
          {/* <About/>
          <Skills/>
          <Work/>
          <Contact /> */}
        </Routes>
    </Router>

  );
}

export default App;
