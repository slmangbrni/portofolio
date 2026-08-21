import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Teacher',
    company: 'Al Umanaa Boarding School',
    date: 'June 2022 - June 2023',
    description: [
      'Staff Students Affairs',
      'Headcoach Basketball Team Junior and Senior High School'
    ],
    type: 'Work',
  },
  {
    id: 2,
    title: 'Vice President Student Senate',
    company: 'Faculty of Engineering, Universitas Majalengka',
    date: 'Sept 2024 - Aug 2025',
    description: [
      'Led policy formulation and organizational governance, overseeing cross-functional committees and ensuring compliance with campus regulations.',
      'Streamlining information flow across departments to increase operational efficiency'
    ],
    type: 'Organization',
  },
  {
    id: 3,
    title: 'Executive Producer / Director',
    company: 'Kelam Production House',
    date: 'Sept 2024 - Feb 2025',
    description: [
      'Directed end-to-end creative production and project management for short film projects, leading creative vision, scheduling, and budget execution',
      'Managed cross-functional production teams (cinematography, audio, editing) to deliver high quality visual storytelling under tight deadlines'
    ],
    type: 'Organization',
  },
  {
    id: 4,
    title: 'Committee',
    company: 'International Student Mobility (CAPEU)',
    date: 'April 2026 - Aug 2026',
    description: [
      'Volunteer for the Consortium of Asia Pacific Education Universities (CAPEU).'
    ],
    type: 'Volunteer',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      
      <div className="experience-landscape">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            className="exp-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="exp-content">
              <span className={`badge ${exp.type.toLowerCase()}`}>{exp.type}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="date">{exp.date}</p>
              <ul className="desc-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
