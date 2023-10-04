import React from "react";
import styles from "./header.module.scss";


const Header = (): React.JSX.Element => {
  return (
    <>
      <header id={styles.header}>
        <div className={styles.wrapperLanding}>
          <div className={styles.text}>
            <div className={styles.textI}>
              <div className={styles.gradientText}>
                <h1>Software</h1>

                <h1>
                  Developer<span>.</span>
                </h1>
              </div>

              <p>
                I find fulfillment in seamlessly blending code and design to
                craft resilient software that brings joy to users.
              </p>
            </div>

            <div className={styles.paraG}>
              <p id="h1BG">
                Highly skilled at developing scalable web applications using
                modern frameworks, with a proven track record of optimizing
                performance and ensuring robust security.
              </p>
            </div>
          </div>

          <div className={styles.imageH}>
            <div>
              <span className={styles.dp}></span>
            </div>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
