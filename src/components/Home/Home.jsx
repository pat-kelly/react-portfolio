import styles from './Home.module.css';

const Home = () => {
  return ( 
    <div className={styles.sectionContainer}>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1>Meet Patrick</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam illo cumque officiis asperiores</p>
        </div>
        <div className={styles.heroRight}>
          <img className={styles.headShot} alt='patrick' src='https://i.imgur.com/izJwDia.png'></img>
        </div>
      </div>
    </div>
  );
}

export default Home;