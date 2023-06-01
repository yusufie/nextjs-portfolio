import React from "react";

import skillData from "/public/datas/skillData.json";

import styles from "./page.module.css"
import "../globals.css";
import Link from "next/link";

function Skills() {
  return (
    <>
      <section className="skills">

        <h1 className={styles.sectionTitle}>skills</h1>

        <div className={styles.sectionSkills}>
              {skillData.skills.map((skill) => (
                <Link
                  key={skill.id}
                  href={skill.url}
                  target="_blank"
                  className={styles.skillsItem}
                >
              <div className={styles.skillCard}>
                <img
                  src={skill.logo}
                  alt={skill.alt}
                  className={styles.skillCardImage}
                />
                <span className={styles.skillName}>{skill.name}</span>
              </div>
                </Link>
              ))}
        </div>
        
      </section>
    </>
  );
}

export default Skills;