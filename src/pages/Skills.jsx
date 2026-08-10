import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaLock, FaMicrochip, FaRobot } from 'react-icons/fa';
import './Skills.css';

const hardSkills = [
  { name: 'Python', icon: <FaPython />, level: 'Advanced', blocks: 2 },
  { name: 'Database (SQL/NoSQL)', icon: <FaDatabase />, level: 'Advanced', blocks: 2 },
  { name: 'AI / Machine Learning', icon: <FaRobot />, level: 'Advanced', blocks: 2 },
  { name: 'Cyber Security', icon: <FaLock />, level: 'Intermediate', blocks: 1 },
  { name: 'IoT (Arduino / Raspberry Pi)', icon: <FaMicrochip />, level: 'Advanced', blocks: 2 },
];

const softSkills = [
  'Problem Solving', 'Team Collaboration', 'Effective Communication', 
  'Critical Thinking', 'Adaptability', 'Time Management'
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const softSkillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  },
  hover: { 
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(0, 255, 255)",
    transition: { duration: 0.3, yoyo: Infinity }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="skills-container">
        <div className="hard-skills">
          <h3>Hard Skills</h3>
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hardSkills.map((skill, idx) => (
              <motion.div key={idx} className="skill-card" variants={itemVariants}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <div className="skill-header">
                    <h4 dangerouslySetInnerHTML={{__html: skill.name.replace(' (', '<br/>(')}}></h4>
                    <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
                  </div>
                  <div className="progress-blocks-container">
                    {[1, 2, 3].map((blockIndex) => (
                      <motion.div 
                        key={blockIndex}
                        className={`progress-block ${blockIndex <= skill.blocks ? 'filled' : 'empty'}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + (blockIndex * 0.1) }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <motion.div 
            className="soft-skills-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {softSkills.map((skill, idx) => (
              <motion.div 
                key={idx} 
                className="soft-skill-badge" 
                variants={softSkillVariants}
                whileHover="hover"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
