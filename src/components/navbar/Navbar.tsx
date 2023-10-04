import React, { FC } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Spotify from "@/lib/spotify";

const Navbar = (): FC => {
  return (
    <>
      <nav id={styles.nav}>
        <div className={styles.wrapper}>
          <h1>
            <Link href="/">Ameen.</Link>
          </h1>
          <Spotify />
        </div>
      </nav>
    </>
  );
};

export default Navbar;



