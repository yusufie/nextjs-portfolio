import React from "react";

import skillData from "/public/datas/skillData.json";

import styles from "./page.module.css"
import "../globals.css";
import Link from "next/link";

function Skills() {
  return (
    <>
    <section className="skills">
      <div className={styles.sectionSkills}>
        <h1 className={styles.sectionTitle}>skills</h1>        

        <div className={styles.skillCard}>
          <div className={styles.languageCard}>
            {skillData.skills.map((skill) => (
              <Link
                key={skill.id}
                href={skill.url}
                target="_blank"
                className={styles.skillsItem}
              >
                <img
                  src={skill.logo}
                  alt={skill.alt}
                  className={styles.skillCardImage}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Skills;