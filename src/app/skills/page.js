import React from "react";

import skillData from "/public/datas/skillData.json";

// import styles from "../skills/page.module.css"
import "../globals.css";
import Link from "next/link";

function Skills() {
  return (
    <>
    <section className="skills">
      <div class="sectionSkills">
        <h2 className="sectionTitle">skills</h2>

        <div class="skillCard">
          <div className="languageCard">
            {skillData.skills.map((skill) => (
              <Link
                key={skill.id}
                href={skill.url}
                target="_blank"
                className="skillsItem"
              >
                <img
                  src={skill.logo}
                  alt={skill.alt}
                  className="skillCardImage"
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