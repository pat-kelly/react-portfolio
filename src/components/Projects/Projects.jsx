import styles from './Projects.module.css'
import * as techIcons from '../../_svgs/techSvg.js'

const Projects = () => {


  return ( 
    <div className={styles.sectionContainer}>
      <h1>What I've worked on</h1>
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <div className={`${styles.pCardBG} ${styles.tableTop}`}></div>
          <div className={styles.pCardInfo}>
          <h3>TableTop</h3>
            <div>A board game collection app built using a decoupled PERN stack.</div>
              <div className={styles.badgeContainer}>
                {techIcons.nodeJS}
              </div>
            </div>
        </div>
        <div className={styles.projectCard}>
          <div className={`${styles.pCardBG} ${styles.recDrop}`}></div>
          <div className={styles.pCardInfo}></div>
        </div>
        <div className={styles.projectCard}>
          <div className={`${styles.pCardBG} ${styles.partStore}`}></div>
          <div className={styles.pCardInfo}></div>
        </div>
        <div className={styles.projectCard}>
          <div className={`${styles.pCardBG} ${styles.nadc}`}></div>
          <div className={styles.pCardInfo}></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

