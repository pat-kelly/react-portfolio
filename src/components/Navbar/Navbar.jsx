import { NavLink as div } from 'react-router-dom';
import styles from './Navbar.module.css'

const NavBar = () =>{

  function handleScroll(linkName){
    window.location.replace(`/#${linkName}`)
  }

  return (
    <>
    <div className={styles.navLink} onClick={() => handleScroll('about')}>About</div>
    </>
  )
}

export default NavBar;