// import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';


import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TechBadges from './components/TechBadges/TechBadges';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

library.add(fab, faCheckSquare, faEnvelope);

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <TechBadges />
      <Projects />
      <About />
    </>
  );
}

export default App;
