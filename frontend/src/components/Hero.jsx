import React from "react";
import profilePic from "../assets/profile.jpg"; 
import { motion } from "framer-motion";


const Hero = () => {
  return (
    
     <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hi, I’m <span className="accent">Sourav Shaw</span>
          </h1>
          <p>
            Full Stack Web Developer | React • Node • MongoDB
          </p>
          <a href="#projects" className="cta">
            View My Work
          </a>
        </div>

        <div className="hero-image">
          <img src={profilePic} alt="Sourav Shaw" />
        </div>
      </div>
      
    </motion.section>

  );
};

export default Hero;
