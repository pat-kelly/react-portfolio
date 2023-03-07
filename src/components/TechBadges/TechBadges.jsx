import styles from './TechBadges.module.css'

const TechBadges = () => {
  return ( 
    <div className={styles.sectionContainer}>
      <div className={styles.techContainer}>
        <img alt='javascript badge' src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' />
        <img alt='typescript badge' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />
        <img alt='node.js badge' src='https://img.shields.io/badge/node.js-339933?logo=node.js&logoColor=white&style=for-the-badge' />
        <img alt='react badge' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' />
        <img alt='express.js badge' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' />
        <img alt='mongodb badge' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' />
        <img alt='microsoft sql badge' src='https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white' />
        <img alt='postgres badge' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' />
        <img alt='css3 badge' src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' />
        <img alt='sequelize badge' src='https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white' />
        <img alt='git badge' src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white' />
        <img alt='github badge' src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' />
        <img alt='html badge' src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' />
        <img alt='postman badge' src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' />
      </div>
    </div>
  );
}

export default TechBadges;