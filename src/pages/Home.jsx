import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profilePhoto from '../assets/profile-photo.jpg';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content-wrapper">
        <div className="home-text">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="greeting"
          >
            Hello, I'm Salman Gibrani
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="name"
          >
            Undergraduate Informatics Student
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="role"
          >
            AI | IoT | Database | Cyber Security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="description"
          >
            I am an Informatics undergraduate student at Universitas Majalengka, specializing in AI Engineering and Computer Vision, with hands on experience building waste classification systems using OpenCV and Teachable Machine. Multilingual in Indonesian, English, and Arabic, combining technical precision with strong team collaboration and leadership proven through campus film direction and organizational roles. Driven to apply scalable AI solutions and creative problem solving in fast paced professional environments.
          </motion.p>
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="https://github.com/slmangbrni" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/salmangibrani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/sl.grni?igsh=Y3BrcTl3djloNTY2" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </motion.div>
        </div>

        <motion.div 
          className="home-photo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="photo-wrapper">
            <img src={profilePhoto} alt="Salman Gibrani" className="profile-photo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
