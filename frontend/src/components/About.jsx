import React from "react";
import { motion } from "framer-motion";


const About = () => {
  return (

    <motion.section className="about" id="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}>
      <h2>About Me</h2>
      <div className="about-container">
        {/* Left Side – About Description */}
        <div className="about-text">
          <p>
            I’m a passionate web developer focused on creating modern, responsive, and
            user-friendly web applications using React and Node.js.
          </p>
          <p>
            As a MERN Stack Developer, I enjoy transforming ideas into efficient web solutions.
            I focus on building dynamic, responsive, and user-friendly applications from front to back.
            I have hands-on experience with MongoDB, Express, React, and Node.js to build full-stack web apps.

          </p>
        </div>

        {/* Right Side – Personal Details */}
        <div className="personal-details">
          <h3>Personal Details</h3>
          <ul>
            <li><strong>Name:</strong> Sourav Shaw</li>
            <li><strong>Email:</strong> souravshaw@gmail.com</li>
            <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js,Express.js MongoDB</li>

          </ul>
        </div>
      </div>
    </motion.section>

  );
};

export default About;
