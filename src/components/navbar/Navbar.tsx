"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [currentTab, setTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setTab(tab);
  };

  return (
    <nav className={styles.nav} id="navbar">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <a href="#navbar">Ameen.</a>
        </h1>
        <div className={styles.tabs}>
          {["home", "expertise", "about", "projects"].map((tab) => (
            <Link
              key={tab}
              activeClass={styles.active}
              to={tab}
              spy
              smooth
              duration={500}
              onClick={() => handleTabChange(tab)}
              className={`${styles.tab} ${
                currentTab === tab ? styles.active : ""
              }`}
            >
              <input
                type="radio"
                id={tab}
                name="navigation"
                value={tab}
                checked={currentTab === tab}
                onChange={() => {}}
                className={styles.srOnly}
              />
              <label htmlFor={tab} className={styles.label}>
                {tab === "home" ? (
                  <Image
                    src="/icons/home.png"
                    alt="Home"
                    width={20}
                    height={20}
                  />
                ) : (
                  tab.charAt(0).toUpperCase() + tab.slice(1)
                )}
              </label>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
