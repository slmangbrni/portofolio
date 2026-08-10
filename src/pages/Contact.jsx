import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="contact-desc">
          Feel free to reach out to me for any collaborations, opportunities, or just to say hi!
        </p>
        
        <form className="contact-form" action="mailto:salman.gibrani@gmail.com" method="post" encType="text/plain">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <motion.button 
            type="submit" 
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        <div className="direct-contact">
          <p>Or contact me directly on WhatsApp:</p>
          <motion.a 
            href="https://wa.me/6281282204247" 
            target="_blank" 
            rel="noopener noreferrer"
            className="wa-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chat on WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
