"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import aboutData from '/public/datas/aboutData.json';

import styles from './page.module.css';
import '../globals.css';

function About() {
  const [previewUrl, setPreviewUrl] = useState('');

  const handleMouseEnter = (preview) => {
    setPreviewUrl(preview);
  };

  const handleMouseLeave = () => {
    setPreviewUrl('');
  };

  return (
    <>
      <section className="about">
        <div className={styles.sectionAbout}>
          <h1 className={styles.sectionTitle}>about</h1>
          
            <div className={styles.profileCard}>
              {aboutData.profiles.map((profile) => (
                <Link key={profile.id} href={profile.url} target="_blank" className={styles.skillsItem}>
                  <div
                    className={styles.skillCardWrapper}
                    onMouseEnter={() => handleMouseEnter(profile.preview)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      src={profile.logo}
                      alt={profile.alt}
                      width={64}
                      height={64}
                      className={styles.skillCardImage}
                    />
                    
                    {previewUrl === profile.preview && (
                      <div className={styles.previewOverlay}>

                        <Image 
                          src={profile.preview}
                          alt={profile.alt}
                          width={352}
                          height={176}
                          className={styles.previewImage}
                          priority
                          />

                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </section>
    </>
  );
}

export default About;