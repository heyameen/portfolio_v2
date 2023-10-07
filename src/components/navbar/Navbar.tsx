import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";
// import Spotify from "@/lib/spotify";

const Navbar = (): React.JSX.Element => {
  return (
    <nav id={styles.nav}>
      <div className={styles.wrapper}>
        <h1>
          <Link href="/">Ameen.</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
