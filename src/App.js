import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import './App.css';
import ContactUs from './ContactUs';
import Home from './Home';



function App() {
  return <Router>
    <nav>
<Link to='/' className="link">Home</Link>
<Link to='/about' className="link">About</Link>
<Link to='/contactus' className="link">Contact Us</Link>
    </nav>

    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contactus" element={<ContactUs/>}/>
  </Routes>

  </Router>
  
}

export default App;
