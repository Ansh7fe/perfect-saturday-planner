import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const AgentTrace = ({ traceLog, isPlanning }) => {
  if (traceLog.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel" style={{ padding: '1.5rem' }}
      >
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RefreshCw size={18} className={isPlanning ? "animate-spin text-purple-400" : "text-purple-400"} /> 
          Agent Chain of Thought
        </h3>
        <div className="trace-log">
          {traceLog.map((log) => (
            <motion.div 
              key={log.id} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`trace-item ${log.status}`}
            >
              {log.status === 'pending' && <Loader2 size={16} className="animate-spin" />}
              {log.status === 'success' && <CheckCircle size={16} />}
              {log.status === 'error' && <AlertCircle size={16} />}
              {log.message}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgentTrace;
