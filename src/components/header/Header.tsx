// import React from 'react'
// import Image from 'next/image'
// import styles from './header.module.scss'
// // import Star from "../../../public/icons/Portal.svg";
//
// const Header = (): React.JSX.Element => {
//   return (
//     <header className={styles.header} id="#header">
//       <div className={styles.wrapperLanding}>
//         <Image
//           src="/icons/Portal.svg"
//           width={31}
//           height={31}
//           alt="star"
//           className={styles.leftStar}
//         />
//         <div className={styles.text}>
//           <div className={styles.textI}>
//             <div className={styles.gradientText}>
//               <h1>FRONT-END DEVELOPER</h1>
//             </div>
//             <p>
//               I am a developer based in Manchester, UK focused on creating
//               interactive digital experiences on the web.
//             </p>
//           </div>
//         </div>
//
//         <Image
//           src="/icons/Portal.svg"
//           width={31}
//           height={31}
//           alt="star"
//           className={styles.rightStar}
//         />
//       </div>
//     </header>
//   )
// }
//
// export default Header

import React from 'react'
import Image from 'next/image'
import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.ameen}>
        <Image
          src="/icons/ameen_smiley.svg"
          alt="Ameen smiley image"
          width={308}
          height={183}
        />
      </div>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          <div className={styles.stickyNote}>
            <Image
              src="/icons/sticky_note.svg"
              alt="Ameen smiley image"
              width={204}
              height={204}
            />
          </div>
          <h1>I craft web interactions that captivates</h1>
          <p>
            I&apos;m an independent creative developer from United Kingdom. From
            interaction design to scalable design systems, single-page apps to
            something more experimental with Three js.
          </p>
          <div className={styles.btnContainer}>
            <button className={styles.portfolioBtn}>See Portfolio</button>
            <Image
              src="/icons/cta.svg"
              alt="emphasis for the cta button"
              width={39}
              height={81}
            />
          </div>
        </div>
        <div className={styles.rightSection}>
          <Image
            src="/icons/profile_frame.svg"
            alt="Ameen smiley image"
            width={512}
            height={512}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
