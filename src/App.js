import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './containers/home/index.js';
import About from './containers/about/index.js';
import Resume from './containers/resume/index.js';
import Skills from './containers/skills/index.js';
import Portfolio from './containers/portfolio/index.js';
import Contact from './containers/contact/index.js';
import Navbar from './components/navBar/index.jsx';

function App() {
  return (
    <div className="App">

      {/* partical js */}

      {/* navbar */}
      <Navbar/>

      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/about' element={<About/>} />
        <Route index path='/resume' element={<Resume/>} />
        <Route index path='/skills' element={<Skills/>} />
        <Route index path='/portfolio' element={<Portfolio/>} />
        <Route index path='/contact' element={<Contact/>} /> 
      </Routes>

    </div>
  );
}

export default App;
