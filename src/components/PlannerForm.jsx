import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

const PlannerForm = ({ formData, handleChange, handlePlan, isPlanning }) => {
  return (
    <div className="glass-panel form-container">
      <h2><Sparkles className="inline-block mr-2 text-purple-400" size={24} /> Parameters</h2>
      <form onSubmit={handlePlan} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="input-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        
        <div className="form-grid-2">
          <div className="input-group">
            <label>Budget (₹)</label>
            <input type="number" name="budget" value={formData.budget} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Available Time</label>
            <input type="text" name="available_time" value={formData.available_time} onChange={handleChange} required />
          </div>
        </div>

        <div className="input-group">
          <label>How are you feeling? (Mood)</label>
          <input type="text" name="mood" value={formData.mood} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Interests (comma separated)</label>
          <input type="text" name="interests" value={formData.interests} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Constraints (e.g. vegetarian, no crowds)</label>
          <input type="text" name="constraints" value={formData.constraints} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn" disabled={isPlanning}>
          {isPlanning ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Loader2 className="animate-spin" /> Computing Routes...
            </span>
          ) : 'Execute Planning Protocol'}
        </button>
      </form>
    </div>
  );
};

export default PlannerForm;
