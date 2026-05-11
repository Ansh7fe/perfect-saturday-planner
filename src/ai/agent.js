import { ACTIVITIES_DATABASE, RESTAURANTS_DATABASE } from './constants';
import { delay, normalizeCityKey, isEnergeticMood, isChillMood } from './utils';

export const parseUserPreferences = async (input) => {
  await delay(1200);
  
  const city = input.city?.trim() || "Local Area";
  const budget = parseInt(input.budget, 10) || 0;
  const mood = input.mood?.trim() || "chill";
  
  const rawInterests = Array.isArray(input.interests) ? input.interests : input.interests.split(',');
  const interests = rawInterests.map(i => i.trim().toLowerCase()).filter(i => i);

  const rawConstraints = Array.isArray(input.constraints) ? input.constraints : (input.constraints || '').split(',');
  const constraints = rawConstraints.map(c => c.trim().toLowerCase()).filter(c => c);

  const timeStr = input.available_time || "4";
  const timeMatch = timeStr.match(/\d+(\.\d+)?/);
  const hours = timeMatch ? parseFloat(timeMatch[0]) : 4;

  return {
    city,
    budget,
    available_time: input.available_time,
    total_hours: hours,
    mood,
    interests: interests.length > 0 ? interests : ["exploring"],
    constraints
  };
};


export const generateCandidates = async (prefs) => {
  await delay(2000);
  
  const cityKey = normalizeCityKey(prefs.city);
  const activities = ACTIVITIES_DATABASE[cityKey] || ACTIVITIES_DATABASE['default'];
  const restaurants = RESTAURANTS_DATABASE[cityKey] || RESTAURANTS_DATABASE['default'];
  
  const allActs = Object.values(activities);
  
  const budgetAct = [...allActs].sort((a, b) => a.cost - b.cost)[0];
  const budgetFood = [...restaurants].sort((a, b) => a.cost - b.cost)[0];
  
  const premiumAct = [...allActs].sort((a, b) => b.cost - a.cost)[0];
  const premiumFood = [...restaurants].sort((a, b) => b.cost - a.cost)[0];
  
  const interestAct = allActs.find(a => prefs.interests.some(i => a.name.toLowerCase().includes(i) || a.type.includes(i))) || allActs[1];
  
  const vegFoods = restaurants.filter(r => r.vegOnly || r.desc.toLowerCase().includes('vegetarian'));
  const vegFood = vegFoods.length > 1 ? vegFoods[1] : (vegFoods[0] || restaurants[0]);

  return [
    { id: 'Candidate A (Budget)', activity: budgetAct, food: budgetFood },
    { id: 'Candidate B (Premium)', activity: premiumAct, food: premiumFood },
    { id: 'Candidate C (Balanced)', activity: interestAct, food: vegFood }
  ];
};

export const scoreAndSelectBest = async (candidates, prefs) => {
  await delay(2500);
  
  const isEnergetic = isEnergeticMood(prefs.mood);
  const isChill = isChillMood(prefs.mood);
  const needsVeg = prefs.constraints.some(c => c.includes('veg'));

  const scored = candidates.map(plan => {
    let score = 100;
    const totalCost = plan.activity.cost + plan.food.cost;
    let tradeoffs = [];

    if (totalCost > prefs.budget) {
      score -= 50;
      tradeoffs.push(`Exceeds budget by ₹${totalCost - prefs.budget}`);
    } else if (totalCost < prefs.budget * 0.4) {
      tradeoffs.push(`Highly economical (leaves ₹${prefs.budget - totalCost} buffer)`);
    }

    if (needsVeg && !plan.food.vegOnly && !plan.food.desc.toLowerCase().includes('vegetarian')) {
      score -= 30;
      tradeoffs.push("Selected restaurant might lack extensive vegetarian options");
    } else if (needsVeg && plan.food.vegOnly) {
      score += 15;
      tradeoffs.push("Strictly adheres to vegetarian constraint");
    }

    if (isEnergetic && !plan.activity.energetic) {
      score -= 15;
      tradeoffs.push("Activity is more relaxed than your energetic mood requests");
    } else if (isChill && plan.activity.energetic) {
      score -= 15;
      tradeoffs.push("Activity is high-energy, contrasting your chill mood");
    } else {
      score += 10;
      tradeoffs.push("Perfectly matches your desired vibe");
    }

    const matchesInterest = prefs.interests.some(i => plan.activity.name.toLowerCase().includes(i) || plan.activity.type.includes(i));
    if (matchesInterest) {
      score += 60;
      tradeoffs.push("Directly matches your specific requested interest");
    } else {
      score -= 20;
    }

    return { ...plan, score, totalCost, tradeoffs };
  });

  scored.sort((a, b) => b.score - a.score);
  return { bestPlan: scored[0], evaluated: scored };
};

export const calculateLogistics = async (plan, prefs) => {
  await delay(1500);
  
  let startHour = 15;
  const actType = plan.activity.type;
  
  if (actType === 'clubbing' || actType === 'music') {
    startHour = 20;
  } else if (actType === 'devotion' || actType === 'nature') {
    startHour = 9;
  } else if (actType === 'food') {
    startHour = 13;
  }
  
  const formatTime = (hour) => {
    const h = Math.floor(hour);
    const m = Math.round((hour - h) * 60);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 || 12;
    return `${h12}:${m.toString().padStart(2, '0')} ${ampm}`;
  };

  const actHours = parseFloat(plan.activity.duration.split(' ')[0]) || 2;
  const commuteHours = 0.5;
  const foodHours = 1.5;
  
  const totalRequiredHours = actHours + commuteHours + foodHours;

  const timeline = [];
  
  timeline.push({
    time: formatTime(startHour),
    title: plan.activity.name,
    description: `Enjoy a ${plan.activity.duration} session.`,
    reason: plan.tradeoffs.find(t => t.includes('vibe') || t.includes('mood')) || "Matches your interests."
  });

  timeline.push({
    time: formatTime(startHour + actHours),
    title: "Commute & Transit",
    description: "Travel to your dining destination.",
    reason: "Estimated 30-minute transit in the city."
  });

  timeline.push({
    time: formatTime(startHour + actHours + commuteHours),
    title: "Dinner at " + plan.food.name,
    description: plan.food.desc,
    reason: plan.tradeoffs.find(t => t.includes('vegetarian') || t.includes('diet')) || "Selected based on budget compatibility."
  });

  return {
    timeline,
    fitsSchedule: totalRequiredHours <= prefs.total_hours
  };
};

export const generateFinalPlan = async (prefs, selectedPlan, logistics) => {
  await delay(1000);
  
  if (prefs.budget < 200) {
    return {
      fallback: true,
      summary: "I noticed your budget is extremely tight (under ₹200). I've triggered the Zero-Budget protocol for a fantastic cost-free Saturday!",
      totalEstimatedCost: "₹0",
      timeline: [
        { time: "3:00 PM", title: "City Park Exploration", description: `Head to the largest public park in ${prefs.city}.`, reason: "Costs absolutely nothing." },
        { time: "6:00 PM", title: "Window Shopping & Street Wandering", description: "Enjoy the evening energy in bustling parts of the city.", reason: "Great way to explore without spending." }
      ]
    };
  }

  const primaryTradeoff = selectedPlan.tradeoffs.find(t => t.includes('budget') || t.includes('buffer')) || selectedPlan.tradeoffs[0];

  return {
    fallback: false,
    summary: `Based on your mood ("${prefs.mood}") and interests, I evaluated multiple scenarios and selected a plan scoring ${selectedPlan.score}/100.`,
    tradeoffAnalysis: `Agent Decision: I picked this route because it ${primaryTradeoff.toLowerCase()}. ${!logistics.fitsSchedule ? 'Note: This itinerary might feel slightly rushed given your available time.' : ''}`,
    totalEstimatedCost: `₹${selectedPlan.totalCost}`,
    timeline: logistics.timeline
  };
};
