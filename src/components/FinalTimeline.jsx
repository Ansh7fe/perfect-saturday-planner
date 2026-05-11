import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Scale, Wallet, MapPin, Clock } from 'lucide-react';

const FinalTimeline = ({ finalPlan }) => {
  if (!finalPlan) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel results-container"
      >
        <h2 className="glow-text">Optimized Itinerary</h2>
        
        {finalPlan.fallback && (
          <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b', padding: '1rem', borderRadius: '6px' }}>
            <AlertCircle size={20} style={{ display: 'inline', marginRight: '0.5rem', color: '#f59e0b' }} />
            <span style={{ color: '#fcd34d' }}>Triggered Fallback Protocol</span>
          </div>
        )}

        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{finalPlan.summary}</p>
        
        {!finalPlan.fallback && finalPlan.tradeoffAnalysis && (
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '0.5rem' }}>
            <Scale size={16} className="text-purple-400 inline mr-2" />
            <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{finalPlan.tradeoffAnalysis}</span>
          </div>
        )}

        <p style={{ fontWeight: '600', color: '#10b981', marginTop: '1rem' }}>
          <Wallet size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
          Estimated Cost: {finalPlan.totalEstimatedCost}
        </p>

        <div className="timeline">
          {finalPlan.timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                {item.title.includes('Commute') ? (
                  <MapPin size={14} color="var(--text-secondary)" />
                ) : (
                  <MapPin size={14} color="var(--text-primary)" />
                )}
              </div>
              <div className="timeline-content" style={{ opacity: item.title.includes('Commute') ? 0.7 : 1 }}>
                <span className="timeline-time">
                  <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {item.time}
                </span>
                <h3>{item.title}</h3>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-reason">{item.reason}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FinalTimeline;
