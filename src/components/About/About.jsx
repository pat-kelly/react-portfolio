import { Link } from 'react-router-dom';
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedIn }

const About = () => {
  return ( 
    <div id='about' className={styles.sectionContainer}>
      <h1>So who <span className={styles.ital}>is</span> Patrick?</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLeft}>
          <img className={styles.photo} alt='patrick kelly' src='portfolio_bike.jpg' />
        </div>
        <div className={styles.aboutRight}>
          <p>I'm a Full Stack Developer that recently transitioned careers from IT support to development. After graduating from General Assembly’s Software Engineering Immersive program, I am now looking to join a team of other dedicated developers.</p>
          <p>When I'm not staring at a rainbow colored text editor or digging through the MDN docs, I can usually be found enjoying the outdoors, riding or working on motorcycles, or mountain biking.</p>
          <p>I’m always looking for new opportunities to connect with like-minded individuals and collaborate on projects, or just trade pointers.</p>
        </div>
      </div>
      <div className={styles.borderElement}></div>
      <div id='contact' className={styles.connectContainer}>
        <h1>Connect With Me</h1>
        <div className={styles.linkContainer}>
          <Link 
            to='#'
            onClick={(e) =>{
              window.location.href = "mailto:kelly.patj@gmail.com";
              e.preventDefault();
            }}
            className={styles.emailLink}
          >
            <FontAwesomeIcon icon='envelope' size='3x'/>
          </Link>
          <Link to='https://www.linkedin.com/in/patrick-kelly32/'>
            <FontAwesomeIcon icon='fa-brands fa-linkedin' size='3x'/>
          </Link>
          <Link to='https://github.com/pat-kelly'>
            <FontAwesomeIcon icon='fa-brands fa-square-github' size='3x' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;