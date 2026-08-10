import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './News.css';

const defaultNews = [
  {
    id: 1,
    title: 'Best Director in Omnibus Hope Majalengka',
    date: 'Feb 2025',
    content: 'Awarded Best Director at Omnibus Hope Majalengka for directing an inspirational short film, orchestrating a cross-functional crew of videographers, editors, and actors to execute a cohesive visual narrative.',
    category: 'Multimedia',
  },
  {
    id: 2,
    title: 'Won 1st Place in "One Day in UNMA"',
    date: 'May 2025',
    content: 'Awarded 1st Place in "Sehari di UNMA" Video Competition for delivering a compelling visual story under time-constrained conditions, highlighting creative problem-solving and rapid editing proficiency.',
    category: 'Multimedia',
  }
];

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({ title: '', date: '', content: '', category: 'AI' });

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_news_v2');
    if (saved) {
      setNewsItems(JSON.parse(saved));
    } else {
      setNewsItems(defaultNews);
      localStorage.setItem('portfolio_news_v2', JSON.stringify(defaultNews));
    }
  }, []);

  const handleDoubleClick = () => {
    setIsAdmin(!isAdmin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: Date.now()
    };
    const updated = [newItem, ...newsItems];
    setNewsItems(updated);
    localStorage.setItem('portfolio_news_v2', JSON.stringify(updated));
    setFormData({ title: '', date: '', content: '', category: 'Multimedia' });
  };

  const handleDelete = (id) => {
    const updated = newsItems.filter(item => item.id !== id);
    setNewsItems(updated);
    localStorage.setItem('portfolio_news_v2', JSON.stringify(updated));
  };

  return (
    <section id="news" className="section news-section">
      <motion.h2 
        className="section-title news-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onDoubleClick={handleDoubleClick}
        title="Double click for admin mode"
      >
        News & Updates
      </motion.h2>

      <AnimatePresence>
        {isAdmin && (
          <motion.div 
            className="admin-form-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h3>Add New Update</h3>
            <form onSubmit={handleSubmit} className="admin-form">
              <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
              <input type="text" name="date" placeholder="Date (e.g. August 2025)" value={formData.date} onChange={handleChange} required />
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="AI">AI</option>
                <option value="IoT">IoT</option>
                <option value="Cyber">Cyber</option>
                <option value="General">General</option>
              </select>
              <textarea name="content" placeholder="Content..." value={formData.content} onChange={handleChange} required></textarea>
              <button type="submit" className="admin-submit-btn">Post Update</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="news-grid">
        {newsItems.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="news-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
            whileHover={{ y: -10 }}
          >
            {isAdmin && (
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>×</button>
            )}
            <div className="news-header">
              <span className={`news-category ${item.category.toLowerCase()}`}>{item.category}</span>
              <span className="news-date">{item.date}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default News;
