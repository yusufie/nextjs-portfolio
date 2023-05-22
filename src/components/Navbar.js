import React from "react";
import Link from "next/link";
import styles from "./page.module.css";


function Navbar() {
  return (
    <div className={styles.glassMorphism}>
      <div className={styles.btn} id="btnHome">
        <Link href="/">Home</Link>
      </div>

      <div className={styles.btn} id="btnProjects">
        <Link href="/projects">Projects</Link>
      </div>

      <div className={styles.btn} id="btnSkills">
        <Link href="/skills">Skills</Link>
      </div>

      <div className={styles.btn} id="btnAbout">
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
