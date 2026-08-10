import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';
import './Reading.css';

const books = [
  {
    id: 1,
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    description: 'How to Win Friends and Influence People by Dale Carnegie is a classic self-help guide centered on the art of human relations and effective communication. The book emphasizes that the key to winning people over, building strong relationships, and influencing decisions lies not in heated arguments or criticism, but in showing genuine interest in others, respecting their viewpoints, and making them feel valued',
    coverColor: '#2b2b2b'
  },
  {
    id: 2,
    title: 'Pulang - Pergi Series',
    author: 'Tere Liye',
    description: 'Pulang-Pergi by Tere Liye is an action-packed psychological thriller that continues the journey of Agam (Bujang), a former top hitman and key figure in the international shadow economy. The story centers on high-stakes conflict and armed confrontation when Bujang is ensnared in a political engagement between global crime syndicates, forcing him into battle against Russian, Ottoman, and other secret mafia alliances.',
    coverColor: '#0369a1'
  },
  {
    id: 3,
    title: 'Grow Up Faster',
    author: 'Mahdi Karim',
    description: 'Grow Up Faster by Mahdi Karim is a self development book focusing on the process of personal growth and mental transformation in the face of life\'s uncertainties. The book emphasizes that true maturity is measured not by the absence of mistakes or mere chronological age, but by how quickly one converts failure into actionable evaluation and learning. With a pragmatic perspective, Mahdi Karim encourages readers to realize that the world provides no ready-made roadmap, leaving every individual responsible for charting their own path through decisive action, emotional resilience, and taking full ownership of their growth.',
    coverColor: '#b91c1c'
  },
  {
    id: 4,
    title: 'Let Them theory',
    author: 'Mel Robbins',
    description: 'The Let Them Theory by Mel Robbins is a self-development book offering a simple yet transformative mindset strategy to release the stress of trying to control others. The theory centers on a two-word philosophy: "Let Them" let people form their own opinions, make their own choices, or fail to meet expectations without overreacting or trying to change them. By letting go of the need to control others and relinquishing unrealistic expectations, Robbins prompts readers to reclaim their time, energy, and peace of mind, redirecting their focus entirely onto their own actions, personal growth, and happiness.',
    coverColor: '#4d7c0f'
  }
];

const Reading = () => {
  return (
    <section id="reading" className="section reading-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Reading List
      </motion.h2>

      <div className="books-container">
        {books.map((book, index) => (
          <motion.div 
            key={book.id} 
            className="book-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="book-cover" style={{ backgroundColor: book.coverColor }}>
              <FaBookOpen className="book-icon" />
            </div>
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <p className="book-desc">{book.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reading;
