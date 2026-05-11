import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const ClarifyingQuestion = ({ question, onAnswer }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(answer);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 10 }} 
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      className="glass-panel" 
      style={{ 
        padding: '3rem 2rem', 
        textAlign: 'center',
        background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9))',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(139, 92, 246, 0.15)',
        borderRadius: '16px'
      }}
    >
      <motion.div 
        animate={{ scale: [1, 1.1, 1], color: ['#a78bfa', '#c084fc', '#a78bfa'] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ display: 'inline-block', marginBottom: '1rem' }}
      >
        <MessageSquare size={40} />
      </motion.div>
      <h3 style={{ marginBottom: '1rem', color: '#e2e8f0', fontSize: '1.4rem', fontWeight: '600' }}>Agent Clarification Needed</h3>
      <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        "{question}"
      </p>
      
      <form onSubmit={handleSubmit} className="clarify-form">
        <input 
          type="text" 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} 
          placeholder="Type your answer here (or say 'no')..."
          autoFocus
          required 
          style={{ 
            flex: 1,
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(167, 139, 250, 0.5)',
            boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.5), 0 0 10px rgba(167, 139, 250, 0.1)',
            padding: '1rem 1.2rem',
            fontSize: '1.05rem',
            borderRadius: '8px',
            color: '#fff',
            outline: 'none'
          }}
        />
        <button type="submit" className="submit-btn" style={{ width: 'auto', padding: '0 2rem', fontSize: '1.05rem' }}>
          Reply
        </button>
      </form>
    </motion.div>
  );
};

export default ClarifyingQuestion;
