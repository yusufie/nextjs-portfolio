import React from 'react'

import aboutData from "/public/datas/aboutData.json"

import styles from "./page.module.css"
import "../globals.css"
import Link from 'next/link';


function About() {

  return (
    <>
      <section className="about">
        <div className={styles.sectionAbout}>
          <h1 className={styles.sectionTitle}>about</h1>

          <div className={styles.skillCard}>

            <div className={styles.profileCard}>
              {aboutData.profiles.map((profile) => (
                <Link key={profile.id} href={profile.url} target="_blank" className={styles.skillsItem}>
                  <img
                    src={profile.logo}
                    alt={profile.alt}
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

export default About