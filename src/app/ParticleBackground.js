"use client"
import React from "react";

import Particles from "/node_modules/particlesjs/src/particles.js";

const ParticleBackground = () => {
  const initializeParticles = () => {
    Particles.init({
      selector: ".background",
      color: ["#FF0099", "#00ffff"],
      connectParticles: true,
      responsive: [
        {
          breakpoint: 375,
          options: {
            color: ["#fFF", "#FF0099", "#00ffff"],
            maxParticles: 43,
            connectParticles: false,
          },
        },
      ],
    });
  };

  React.useEffect(() => {
    initializeParticles();
  }, []);

  return <canvas className="background"></canvas>;
};

export default ParticleBackground;
