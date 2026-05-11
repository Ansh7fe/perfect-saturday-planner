import React from 'react';
import { usePlanner } from './hooks/usePlanner';
import PlannerForm from './components/PlannerForm';
import AgentTrace from './components/AgentTrace';
import FinalTimeline from './components/FinalTimeline';
import ClarifyingQuestion from './components/ClarifyingQuestion';
import './App.css';

function App() {
  const {
    formData,
    isPlanning,
    traceLog,
    finalPlan,
    clarification,
    handleChange,
    handlePlan,
    handleClarificationAnswer
  } = usePlanner();

  return (
    <div className="app-container">
      <div className="animated-bg"></div>
      
      <header className="header">
        <h1>Perfect Saturday Planner</h1>
        <p>Advanced AI Agent orchestrating your ideal weekend via constraint-satisfaction routing.</p>
      </header>

      <main className="main-content">
        {!clarification ? (
          <PlannerForm 
            formData={formData} 
            handleChange={handleChange} 
            handlePlan={handlePlan} 
            isPlanning={isPlanning} 
          />
        ) : (
          <div style={{ gridColumn: '1 / -1' }}>
            <ClarifyingQuestion 
              question={clarification.question} 
              onAnswer={handleClarificationAnswer} 
            />
          </div>
        )}

        <div className="results-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <AgentTrace traceLog={traceLog} isPlanning={isPlanning} />
          <FinalTimeline finalPlan={finalPlan} />
        </div>
      </main>
    </div>
  );
}

export default App;
