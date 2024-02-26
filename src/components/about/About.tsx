import React from "react";
import styles from "./about.module.scss";
import ProgressIndicator from "@/components/progressIndicator/ProgressIndicator";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const About = (): React.JSX.Element => {
  return (
    <section className={styles.about} id="expertise">
      <div className={styles.aboutWrapper}>
        <div className={styles.section}>
          <SectionTitle title="Expertise" />
        </div>
        {/*  <div className={styles.sectionTitle}> */}
        {/*    <h1 id="h1BG">Expertise</h1> */}
        {/*    <p className={styles.paraG}> */}
        {/*      From designing intuitive UIs that captivate users to engineering */}
        {/*      robust applications tailored for scalability, my expertise is a */}
        {/*      fusion of form and function. */}
        {/*    </p> */}
        {/*  </div> */}
        {/*  <div className={styles.articleWrapper}> */}
        {/*    <article className={styles.articleCard}> */}
        {/*      <div className={styles.articleHeader}> */}
        {/*        <div className={styles.iconContainer}> */}
        {/*          <FaPaintBrush /> */}
        {/*        </div> */}
        {/*        <h1>Artistry in UI/UX</h1> */}
        {/*      </div> */}

        {/*      <p> */}
        {/*        While I might not be the stereotypical designer, I have an eye for */}
        {/*        detail that goes beyond just code. My time is often spent deep in */}
        {/*        stylesheets, adjusting font aesthetics, and orchestrating */}
        {/*        responsive layouts. Crafting a seamless user experience, one that */}
        {/*        feels intuitive yet stylish, is my kind of art. */}
        {/*      </p> */}
        {/*    </article> */}

        {/*    <article className={styles.articleCard}> */}
        {/*      <div className={styles.articleHeader}> */}
        {/*        <div className={styles.iconContainer}> */}
        {/*          <BsGearWideConnected /> */}
        {/*        </div> */}
        {/*        <h1>Precision in Code & Systems</h1> */}
        {/*      </div> */}

        {/*      <p> */}
        {/*        My toolkit? A diverse range of tools suited for crafting */}
        {/*        impeccable JavaScript applications. But here&apos;s the thing: */}
        {/*        I&apos;m not bound by them. Stripping things down to basics, I */}
        {/*        deliver solutions that are not only quick but can stand the test */}
        {/*        of time. Performance and scalability aren&apos;t just buzzwords */}
        {/*        for me; they&apos;re benchmarks I set for every project. */}
        {/*      </p> */}
        {/*    </article> */}
        {/*  </div> */}
        <ProgressIndicator />
      </div>
    </section>
  );
};

export default About;
