import React from 'react'

import aboutData from "/public/datas/aboutData.json"

// import styles from "../about/page.module.css"
import "../globals.css"
import Link from 'next/link';


function About() {

  return (
    <>
      <section className="about">
        <div className="sectionAbout">
          <h2 className="sectionTitle">about</h2>

          <div className="skillCard">

            <div className="profileCard">
              {aboutData.profiles.map((profile) => (
                <Link key={profile.id} href={profile.url} target="_blank" className="skillsItem">
                  <img
                    src={profile.logo}
                    alt={profile.alt}
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

export default About