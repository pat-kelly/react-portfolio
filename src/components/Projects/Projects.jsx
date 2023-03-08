import styles from './Projects.module.css'
import * as techIcons from '../../_svgs/techSvg.js'
import { Link } from 'react-router-dom';

const Projects = () => {


  return ( 
    <div id='projects' className={styles.sectionContainer}>
      <h1>What I've worked on</h1>
      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <div className={`${styles.pCardBG} ${styles.tableTop}`}></div>
          <div className={styles.pCardInfo}>
            <h3>TableTop</h3>
            <div className={styles.pCardDesc}>A board game collection app built using a decoupled PERN stack.</div>
            <div className={styles.badgeContainer}>
              {techIcons.javascript}
              {techIcons.typeScript}
              {techIcons.html}
              {techIcons.css}
              {techIcons.react}
              {techIcons.nodeJS}
              {techIcons.express}
              {techIcons.git}
              {techIcons.github}
            </div>
            <div className={styles.linkContainer}>
              <div className={styles.link}>
                <Link to='https://github.com/pat-kelly/tableTop-front' target='blank'>
                  Github Repo
                </Link>
              </div>
              <div className={styles.link}>
                <Link to='https://tabletop-pkelly.netlify.app/' target='blank'>
                  Deployed App
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={`${styles.pCardBG} ${styles.recDrop}`}></div>
          <div className={styles.pCardInfo}>
            <h3>RecDrop</h3>
            <div className={styles.pCardDesc}>A full stack web app that lets users write reviews and recommendations for their favorite media.</div>
            <div className={styles.badgeContainer}>
              {techIcons.javascript}
              {techIcons.html}
              {techIcons.css}
              {techIcons.react}
              {techIcons.nodeJS}
              {techIcons.express}
              {techIcons.git}
              {techIcons.github}
            </div>
            <div className={styles.linkContainer}>
              <div className={styles.link}>
                <Link to='https://github.com/pat-kelly/rec-drop-front-end' target='blank'>
                  Github Repo
                </Link>
              </div>
              <div className={styles.link}>
                <Link to='https://rec-drop.netlify.app/' target='blank'>
                  Deployed App
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={`${styles.pCardBG} ${styles.partStore}`}></div>
          <div className={styles.pCardInfo}>
            <h3>The Parts Store</h3>
            <div className={styles.pCardDesc}>E-Commerce web app built using a decoupled MEN stack, utilizing Google OAuth</div>
            <div className={styles.badgeContainer}>
              {techIcons.html}
              {techIcons.css}
              {techIcons.javascript}
              {techIcons.mongoDB}
              {techIcons.nodeJS}
              {techIcons.express}
              {techIcons.git}
              {techIcons.github}
            </div>
            <div className={styles.linkContainer}>
              <div className={styles.link}>
                <Link to='https://github.com/pat-kelly/notRadioShack' target='blank'>
                  Github Repo
                </Link>
              </div>
              <div className={styles.link}>
                <Link to='https://notanotherelectronicsstore.fly.dev/' target='blank'>
                  Deployed App
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={`${styles.pCardBG} ${styles.nadc}`}></div>
          <div className={styles.pCardInfo}>
            <h3>!AnotherDungeonCrawler</h3>
            <div className={styles.pCardDesc}>Not Another Dungeon Crawler is an immersive dungeon crawling experience, including custom soundtrack and animations.</div>
            <div className={styles.badgeContainer}>
              {techIcons.javascript}
              {techIcons.html}
              {techIcons.github}
              {techIcons.css}
              {techIcons.git}
            </div>
            <div className={styles.linkContainer}>
              <div className={styles.link}>
                <Link to='https://github.com/pat-kelly/not-another-dungeon-crawler' target='blank'>
                  Github Repo
                </Link>
              </div>
              <div className={styles.link}>
                <Link to='https://not-another-dungeon-crawler.netlify.app/' target='blank'>
                  Deployed App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.borderElement}></div>
    </div>
  );
}

export default Projects;

