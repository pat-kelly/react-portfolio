// import logo from './logo.svg';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Resume />
    </>
  );
}

export default App;
