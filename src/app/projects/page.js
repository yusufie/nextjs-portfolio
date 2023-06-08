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
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              2560: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
        }}

        className={styles.swiper}

      >

        {projectData.projects.map((project) => (
          <SwiperSlide className={styles.swiperSlide} key={project.id}>

          <Tilt options={{ max: 35, perspective: 1550, scale: 1.00, speed: 300, easing: "cubic-bezier(.06,.97,.63,.95)", transition: true, }}>
            <div className="projectCard">

              <div className={styles.projectCardImage}>
                <Link key={project.id} href={project.githubUrl} target="_blank" className="projectCardLink">
                  <Image 
                  src={project.image} 
                  alt={project.alt} 
                  width={320} 
                  height={288} 
                  className={styles.swiperSlideImg} 
                  priority
                  />
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