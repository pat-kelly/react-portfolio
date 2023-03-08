import styles from './About.module.css';

const About = () => {
  return ( 
    <div id='about' className={styles.sectionContainer}>
      <h1>So who <span className={styles.ital}>is</span> Patrick?</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutLeft}>
          <img alt='patrick kelly' src='https://i.imgur.com/izJwDia.png' />
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
        
      </div>
    </div>
  );
}

export default About;