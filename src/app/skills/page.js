import React from "react";
import Link from "next/link";
import Image from "next/image";

import skillData from "/public/datas/skillData.json";

import styles from "./page.module.css"
import "../globals.css";

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
                <Image
                  src={skill.logo}
                  alt={skill.alt}
                  width={64}
                  height={64}
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