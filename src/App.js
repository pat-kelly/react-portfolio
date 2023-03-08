// import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TechBadges from './components/TechBadges/TechBadges';
import Projects from './components/Projects/Projects';
import About from './components/About/About';


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
