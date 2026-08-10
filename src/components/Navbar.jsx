import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} className="logo">
          Portfolio.
        </Link>
        <ul className="nav-links">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><Link to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><Link to="experience" smooth={true} duration={500} spy={true} activeClass="active">Experience</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><Link to="skills" smooth={true} duration={500} spy={true} activeClass="active">Skills</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><Link to="news" smooth={true} duration={500} spy={true} activeClass="active">News</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><Link to="reading" smooth={true} duration={500} spy={true} activeClass="active">Reading</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><Link to="contact" smooth={true} duration={500} spy={true} activeClass="active">Contact</Link></motion.li>
        </ul>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};

export default Navbar;
