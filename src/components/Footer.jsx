import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p>Built with React & Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
