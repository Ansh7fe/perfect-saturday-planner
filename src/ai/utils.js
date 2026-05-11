export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const normalizeCityKey = (city) => {
  const cityKey = city.toLowerCase();
  if (cityKey.includes('delhi') || cityKey.includes('new delhi')) return 'delhi';
  if (cityKey.includes('mumbai') || cityKey.includes('bombay')) return 'mumbai';
  if (cityKey.includes('pune')) return 'pune';
  if (cityKey.includes('hyd') || cityKey.includes('hyderabad')) return 'hyderabad';
  if (cityKey.includes('gurgaon') || cityKey.includes('gurugram')) return 'gurgaon';
  if (cityKey.includes('bangalore') || cityKey.includes('bengaluru')) return 'bangalore';
  
  return 'default';
};

export const isEnergeticMood = (mood) => {
  const m = mood.toLowerCase();
  return m.includes("energetic") || m.includes("fun") || m.includes("active") || m.includes("exciting");
};

export const isChillMood = (mood) => {
  const m = mood.toLowerCase();
  return m.includes("tired") || m.includes("relax") || m.includes("chill") || m.includes("calm") || m.includes("lazy");
};
