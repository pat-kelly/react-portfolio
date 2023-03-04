import styles from './Navbar.module.css'

const NavBar = () =>{

  function handleScroll(linkName){
    window.location.replace(`/#${linkName}`)
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navLink} onClick={() => handleScroll('home')}>
        Home
      </div>
      <div className={styles.navLink} onClick={() => handleScroll('about')}>
        About
      </div>
      <div className={styles.navLink} onClick={() => handleScroll('projects')}>
        Projects
      </div>
      <div className={styles.navLink} onClick={() => handleScroll('contact')}>
        Contact
      </div>
    </div>
  )
}

export default NavBar;