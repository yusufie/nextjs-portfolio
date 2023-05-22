"use client"
import React, { useRef, useState } from "react";
import projectData from "/public/datas/projectData.json";

import Tilt from 'react-tilt';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./page.module.css";
import "./page.css"
import "../globals.css";
import Link from "next/link";

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

          <Tilt options={{ max: 25, perspective: 750, scale: 1.05, speed: 400, easing: "cubic-bezier(.02,.77,.43,.87)", transition: true, }}>
            <div className="projectCard">

              <div className="projectCardImage">
                <Link key={project.id} href={project.githubUrl} target="_blank" className="projectCardLink">
                  <img src={project.image} alt={project.alt} className={styles.swiperSlideImg} />
                </Link>
              </div>
            {/*
              <div className="projectCardText">

                <h3 className="projectCardTitle">{project.title}</h3>
                <p className="projectCardDescription">{project.description}</p>

                 <div className="projectCardLinks">
                <Link key={project.id} href={project.githubUrl} target="_blank" className="projectCardLink">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={styles.swiperSlideImg}
                  />
                </Link>
                </div> 

              </div> 
            */}

            </div>

            </Tilt>
            
          </SwiperSlide>
        ))}

      </Swiper>
    

    </section>
  )
}

export default Projects