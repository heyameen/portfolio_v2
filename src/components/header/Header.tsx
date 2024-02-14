import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";
// import Star from "../../../public/icons/Portal.svg";

const Header = (): React.JSX.Element => {
  return (
    <header className={styles.header} id="#header">
      <div className={styles.wrapperLanding}>
        <Image
          src="/icons/Portal.svg"
          width={31}
          height={31}
          alt="star"
          className={styles.leftStar}
        />
        <div className={styles.text}>
          <div className={styles.textI}>
            <div className={styles.gradientText}>
              <h1>FRONT-END DEVELOPER</h1>
            </div>
            <p>
              I am a developer based in Manchester, UK focused on creating
              interactive digital experiences on the web.
            </p>
          </div>
        </div>

        <Image
          src="/icons/Portal.svg"
          width={31}
          height={31}
          alt="star"
          className={styles.rightStar}
        />
      </div>
    </header>
  );
};

export default Header;
