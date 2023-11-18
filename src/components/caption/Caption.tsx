import React from "react";
import styles from "./caption.module.scss";

const Caption = (): React.JSX.Element => {
  return (
    <section className={styles.caption}>
      <div className={styles.captionWrapper}>
        <div className={styles.capture}>
          <article className={styles.captureText}>
            <h1 id="h1BG">
              I bridge pixels
              <br />
              &amp; performance
            </h1>

            <p>
              From open source endeavors,
              <br />
              to web apps, &amp;
              <br />
              curious experimentations.
            </p>
          </article>

          <a href="#projects" className={styles.aCapture}>
            see my work
            <span />
          </a>
        </div>

        <div className={styles.capture}>
          <article className={styles.captureText}>
            <h1 id="h1BG">
              I write,
              <br />
              occasionally
            </h1>

            <p>
              Bits about design,
              <br />
              frontend tips and tricks,
              <br />
              learning experiences, &amp; life&apos;s moments.
            </p>
          </article>

          <a
            href="https://blog.ameenalade.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.aCapture}
          >
            read my articles
            <span />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Caption;
