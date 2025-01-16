import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home/index.js";
import About from "./containers/about/index.js";
import Resume from "./containers/resume/index.js";
import Skills from "./containers/skills/index.js";
import Portfolio from "./containers/portfolio/index.js";
import Contact from "./containers/contact/index.js";
import Navbar from "./components/navBar/index.jsx";
// import Particles from "@tsparticles/react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function App() {
  const location = useLocation();
  console.log(location);

  // const handleInit = async (main) =>{
  //   await loadFull(main)
  //   }

  return (
    <div className="App">
      {/* partical js */}

      {/* <Particles id="particles" init={handleInit}/> */}
      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/resume" element={<Resume />} />
          <Route index path="/skills" element={<Skills />} />
          <Route index path="/portfolio" element={<Portfolio />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
