import React from "react";
import styles from "./contact.module.scss";

const Contact = (): React.JSX.Element => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactWrapper}>
        <small>
          Let&apos;s elevate your product&apos;s experience together. Whether
          you&apos;re launching a new venture or elevating an existing one,
          I&apos;m here to transform its digital journey.
        </small>
        <h1 id="h1BG">Reach out</h1>
      </div>
    </section>
  );
};

export default Contact;
