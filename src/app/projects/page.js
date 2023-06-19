"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import projectData from "/public/datas/projectData.json";

import Tilt from 'react-tilt';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./page.module.css";
import "./page.css"
import "../globals.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

function Projects() {


  return (

    <section className="projects">
      <h1 className={styles.sectionTitle}>Projects</h1>

      <Swiper
        slidesPerView={3}
        // spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
              2560: {
                slidesPerView: 5,
              },
        }}

        className="swiper"

      >

        {projectData.projects.map((project) => (
          <SwiperSlide className="swiperSlide" key={project.id}>

          <Tilt options={{ max: 35, perspective: 1550, scale: 1.00, speed: 300, easing: "cubic-bezier(.06,.97,.63,.95)", transition: true, }}>
            <div className={styles.projectCard}>

              <div key={project.id} className={styles.projectCardImage} >
                  <Image 
                  src={project.image} 
                  alt={project.alt} 
                  width={350} 
                  height={300} 
                  className="swiperSlideImg"
                  priority
                  />
              </div>

              <div className={styles.projectLinks}>

                <Link href={project.githubUrl} target="_blank">
                  <Image src="./logos/repo-icon.svg" width={36} height={36} alt="repo" className={styles.repoLink} />
                </Link>

                <Link href={project.liveUrl} target="_blank">
                  <Image src="./logos/world-icon.svg" width={36} height={36} alt="world" className={styles.worldLink} />
                </Link>

              </div>

            </div>

            </Tilt>
            
          </SwiperSlide>
        ))}

      </Swiper>
    

    </section>
  )
}

export default Projects