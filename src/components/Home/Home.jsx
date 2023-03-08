import styles from './Home.module.css';

const Home = () => {
  return ( 
    <div className={styles.sectionContainer}>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1>Meet Patrick Kelly</h1>
          <div>Full Stack Developer</div>
          <div><img alt='ampersand' src='amp.png' /></div>
          <div>Motorcycle Enthusiast</div>
        </div>
        <div className={styles.heroRight}>
          <img className={styles.headShot} alt='patrick' src='https://i.imgur.com/izJwDia.png' title='I love taking my motorcycle on cross-contry road trips!'/>
          {/* TODO: change this to a pretty css popup */}
        </div>
      </div>
    </div>
  );
}

export default Home;