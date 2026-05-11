import { useState } from 'react';
import {
  parseUserPreferences,
  generateCandidates,
  scoreAndSelectBest,
  calculateLogistics,
  generateFinalPlan
} from '../ai/agent';

export const usePlanner = () => {
  const [formData, setFormData] = useState({
    city: 'Bangalore',
    budget: '2000',
    available_time: '4 hours',
    mood: 'tired but wants to do something fun',
    interests: 'food, music, walks',
    constraints: ''
  });

  const [isPlanning, setIsPlanning] = useState(false);
  const [traceLog, setTraceLog] = useState([]);
  const [finalPlan, setFinalPlan] = useState(null);
  const [clarification, setClarification] = useState(null);

  const addTrace = (message, status = 'pending') => {
    setTraceLog(prev => [...prev, { id: Date.now(), message, status }]);
  };

  const updateLastTrace = (status) => {
    setTraceLog(prev => {
      const newLog = [...prev];
      if (newLog.length > 0) {
        newLog[newLog.length - 1].status = status;
      }
      return newLog;
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlan = (e) => {
    e?.preventDefault();
    
    // Check for vagueness (Agent asks clarifying questions)
    if (!formData.constraints || formData.constraints.trim() === '') {
      setClarification({
        question: "I noticed you didn't mention any constraints. Do you have any dietary restrictions (like vegetarian/vegan) or places to avoid before I calculate the routes?",
        field: 'constraints'
      });
      return;
    }

    if (!formData.interests || formData.interests.trim().length < 4) {
      setClarification({
        question: "Your interests seem a bit vague. Could you tell me a specific activity you love? (e.g., clubbing, history, street food)",
        field: 'interests'
      });
      return;
    }

    // If no clarification needed, proceed to pipeline
    executePipeline(formData);
  };

  const handleClarificationAnswer = (answer) => {
    const updatedData = { ...formData, [clarification.field]: answer };
    setFormData(updatedData);
    setClarification(null);
    executePipeline(updatedData);
  };

  const executePipeline = async (currentData) => {
    setIsPlanning(true);
    setTraceLog([]);
    setFinalPlan(null);

    try {
      // Step 1: Parse Input
      addTrace('Parsing constraints and extracting parameters...');
      const parsedPrefs = await parseUserPreferences(currentData);
      updateLastTrace('success');

      // Step 2: Generate Candidates
      addTrace(`Generating multiple candidate itineraries for ${parsedPrefs.city}...`);
      const candidates = await generateCandidates(parsedPrefs);
      updateLastTrace('success');

      // Step 3: Score and Evaluate
      addTrace(`Evaluating 3 paths using constraint-satisfaction scoring...`);
      const { bestPlan, evaluated } = await scoreAndSelectBest(candidates, parsedPrefs);
      
      // Simulate reading out the scores
      for (const plan of evaluated) {
        addTrace(`Scored ${plan.id}: ${plan.score}/100`, 'success');
        await new Promise(r => setTimeout(r, 600));
      }
      
      addTrace(`Selected highest scoring route: ${bestPlan.id}`, 'success');

      // Step 4: Calculate Logistics
      addTrace(`Calculating commute and building timeline...`);
      const logistics = await calculateLogistics(bestPlan, parsedPrefs);
      updateLastTrace('success');

      // Step 5: Final Plan
      addTrace('Synthesizing final trade-off analysis...');
      const plan = await generateFinalPlan(parsedPrefs, bestPlan, logistics);
      updateLastTrace('success');

      setFinalPlan(plan);
    } catch (error) {
      console.error(error);
      addTrace('An error occurred during planning.', 'error');
    } finally {
      setIsPlanning(false);
    }
  };

  return {
    formData,
    isPlanning,
    traceLog,
    finalPlan,
    clarification,
    handleChange,
    handlePlan,
    handleClarificationAnswer
  };
};
