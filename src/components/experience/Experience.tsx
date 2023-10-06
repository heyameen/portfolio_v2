import React from "react";
import styles from "./experience.module.scss";

const Experience = (): React.JSX.Element => {
  return (
    <section className={styles.experience}>
      <div className={styles.expWrapper}>
        <article className={styles.expText}>
          <h1 id="h1BG">Before now,</h1>
          <p>
            My journey began at Starlabel, where I embraced the foundational
            rigors of web development, ensuring optimal website performance and
            functionality.
          </p>
          <p>
            At Venture Garden Group, I enhanced a cross-border payment solution,
            bolstering user engagement. My initiatives in multi-language
            accessibility widened our user base, while rapid development of
            critical components streamlined our processes.
          </p>
          <p>
            With Bellhop Inc., I championed strategies, from A/B testing that
            boosted lead generation to a comprehensive website redesign,
            elevating user experience.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Experience;
