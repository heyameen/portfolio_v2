"use client";

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [currentTab, setTab] = useState("");

  const handleTabChange = (tab: string) => {
    setTab(tab);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Ameen.</h1>
        <div className={styles.tabs}>
          {["expertise", "about", "projects", "contact"].map((tab) => (
            <ScrollLink
              key={tab}
              activeClass={styles.active}
              to={tab}
              spy
              smooth
              duration={500}
              onClick={() => handleTabChange(tab)}
              className={styles.tab}
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
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
