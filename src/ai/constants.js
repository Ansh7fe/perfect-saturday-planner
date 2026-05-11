/**
 * this would be fetched from a database or an external API like Google Places.
*/

export const ACTIVITIES_DATABASE = {
  delhi: {
    "food": { name: "Chandni Chowk Street Food Crawl", cost: 500, duration: "2.5 hours", type: "food", energetic: true },
    "music": { name: "Sufi Night at Nizamuddin", cost: 200, duration: "2 hours", type: "music", energetic: false },
    "walks": { name: "Lodhi Garden Heritage Walk", cost: 0, duration: "2 hours", type: "nature", energetic: false },
    "art": { name: "National Gallery of Modern Art", cost: 150, duration: "3 hours", type: "culture", energetic: false },
    "exploring": { name: "Hauz Khas Village Fort Sunset", cost: 50, duration: "2 hours", type: "exploring", energetic: true },
    "clubbing": { name: "Clubbing at Kitty Su", cost: 3000, duration: "4 hours", type: "clubbing", energetic: true },
    "devotion": { name: "Akshardham Temple Visit", cost: 100, duration: "3 hours", type: "devotion", energetic: false }
  },
  mumbai: {
    "food": { name: "Mohammed Ali Road Kebab Run", cost: 600, duration: "2 hours", type: "food", energetic: true },
    "music": { name: "Live Jazz at NCPA", cost: 1000, duration: "3 hours", type: "music", energetic: false },
    "walks": { name: "Marine Drive Evening Stroll", cost: 0, duration: "1.5 hours", type: "nature", energetic: false },
    "art": { name: "Kala Ghoda Art Galleries", cost: 200, duration: "2 hours", type: "culture", energetic: false },
    "exploring": { name: "Bandra Fort and Carter Road", cost: 100, duration: "2.5 hours", type: "exploring", energetic: true },
    "clubbing": { name: "Prive Nightclub Experience", cost: 4000, duration: "4 hours", type: "clubbing", energetic: true },
    "devotion": { name: "Siddhivinayak Temple Darshan", cost: 0, duration: "2 hours", type: "devotion", energetic: false }
  },
  pune: {
    "food": { name: "Camp Bakery & Food Tour", cost: 400, duration: "2 hours", type: "food", energetic: true },
    "music": { name: "High Spirits Gig Night", cost: 800, duration: "4 hours", type: "music", energetic: true },
    "walks": { name: "Osho Teerth Park Walk", cost: 50, duration: "1.5 hours", type: "nature", energetic: false },
    "art": { name: "Pune Okayama Friendship Garden", cost: 30, duration: "2 hours", type: "culture", energetic: false },
    "exploring": { name: "Shaniwar Wada Heritage Tour", cost: 100, duration: "2 hours", type: "exploring", energetic: false },
    "clubbing": { name: "Mi-A-Mi Club Night", cost: 2500, duration: "4 hours", type: "clubbing", energetic: true },
    "devotion": { name: "Dagdusheth Halwai Temple", cost: 0, duration: "1.5 hours", type: "devotion", energetic: false }
  },
  hyderabad: {
    "food": { name: "Charminar Biryani Trail", cost: 500, duration: "2.5 hours", type: "food", energetic: true },
    "music": { name: "Live Band at Jubilee Hills", cost: 1200, duration: "3 hours", type: "music", energetic: true },
    "walks": { name: "KBR Park Morning/Evening Trail", cost: 40, duration: "1.5 hours", type: "nature", energetic: false },
    "art": { name: "Salar Jung Museum", cost: 100, duration: "3 hours", type: "culture", energetic: false },
    "exploring": { name: "Golconda Fort Sound & Light", cost: 200, duration: "2.5 hours", type: "exploring", energetic: false },
    "clubbing": { name: "Prism Club & Kitchen Night", cost: 3000, duration: "4 hours", type: "clubbing", energetic: true },
    "devotion": { name: "Birla Mandir Visit", cost: 0, duration: "2 hours", type: "devotion", energetic: false }
  },
  gurgaon: {
    "food": { name: "Cyber Hub Cafe Hopping", cost: 1500, duration: "3 hours", type: "food", energetic: true },
    "music": { name: "Sector 29 Brewery Night", cost: 2000, duration: "4 hours", type: "music", energetic: true },
    "walks": { name: "Aravalli Biodiversity Park", cost: 0, duration: "2 hours", type: "nature", energetic: false },
    "art": { name: "Museo Camera", cost: 300, duration: "2 hours", type: "culture", energetic: false },
    "exploring": { name: "Leisure Valley Park", cost: 0, duration: "2 hours", type: "exploring", energetic: false },
    "clubbing": { name: "Clubbing at Soi 7", cost: 2500, duration: "4 hours", type: "clubbing", energetic: true },
    "devotion": { name: "Sheetla Mata Mandir", cost: 0, duration: "1.5 hours", type: "devotion", energetic: false }
  },
  bangalore: {
    "food": { name: "VV Puram Food Street", cost: 300, duration: "2 hours", type: "food", energetic: true },
    "music": { name: "Indiranagar Pub Crawl & Live Music", cost: 1500, duration: "4 hours", type: "music", energetic: true },
    "walks": { name: "Cubbon Park Weekend Walk", cost: 0, duration: "2 hours", type: "nature", energetic: false },
    "art": { name: "NGMA Bengaluru", cost: 150, duration: "2 hours", type: "culture", energetic: false },
    "exploring": { name: "Commercial Street Shopping", cost: 500, duration: "3 hours", type: "exploring", energetic: true },
    "clubbing": { name: "Skyye Bar Evening Party", cost: 3500, duration: "4 hours", type: "clubbing", energetic: true },
    "devotion": { name: "Iskcon Temple Visit", cost: 0, duration: "2 hours", type: "devotion", energetic: false }
  },
  default: {
    "food": { name: "Local Food Tour", cost: 800, duration: "2 hours", type: "food", energetic: false },
    "music": { name: "Live Indie Gig at The Garage", cost: 500, duration: "3 hours", type: "music", energetic: true },
    "walks": { name: "Sunset Botanical Garden Walk", cost: 50, duration: "1.5 hours", type: "nature", energetic: false },
    "art": { name: "Modern Art Exhibition", cost: 300, duration: "2 hours", type: "culture", energetic: false },
    "exploring": { name: "Hidden Alleys Photography Walk", cost: 0, duration: "2 hours", type: "exploring", energetic: true },
    "clubbing": { name: "Downtown Nightclub", cost: 2500, duration: "4 hours", type: "clubbing", energetic: true },
    "devotion": { name: "Historic Central Temple/Shrine", cost: 0, duration: "2 hours", type: "devotion", energetic: false }
  }
};

export const RESTAURANTS_DATABASE = {
  delhi: [
    { name: "Saravana Bhavan (Connaught Place)", cost: 500, vegOnly: true, desc: "Iconic South Indian vegetarian food." },
    { name: "Karim's (Jama Masjid)", cost: 800, vegOnly: false, desc: "Legendary Mughlai cuisine." },
    { name: "Indian Accent", cost: 4000, vegOnly: false, desc: "Ultra-premium fine dining." },
    { name: "Big Chill Cafe", cost: 1200, vegOnly: false, desc: "Popular cafe with great Italian food and desserts." }
  ],
  mumbai: [
    { name: "Bhagat Tarachand", cost: 400, vegOnly: true, desc: "Famous homestyle vegetarian thalis." },
    { name: "Bademiya", cost: 600, vegOnly: false, desc: "Iconic late-night kebabs and rolls." },
    { name: "The Bombay Canteen", cost: 2000, vegOnly: false, desc: "Modern Indian with local flavors." },
    { name: "Leopold Cafe", cost: 1000, vegOnly: false, desc: "Historic cafe in Colaba." }
  ],
  pune: [
    { name: "Vaishali", cost: 300, vegOnly: true, desc: "Legendary South Indian snacks and coffee." },
    { name: "Goodluck Cafe", cost: 400, vegOnly: false, desc: "Famous for bun maska and kheema." },
    { name: "Malaka Spice", cost: 1500, vegOnly: false, desc: "Great Pan-Asian food in a beautiful setting." },
    { name: "Shabree", cost: 600, vegOnly: true, desc: "Authentic Maharashtrian Thali." }
  ],
  hyderabad: [
    { name: "Chutneys", cost: 500, vegOnly: true, desc: "Famous for its wide variety of chutneys and dosas." },
    { name: "Paradise Biryani", cost: 700, vegOnly: false, desc: "The iconic Hyderabadi biryani experience." },
    { name: "Olive Bistro", cost: 2500, vegOnly: false, desc: "Beautiful lakeside dining." },
    { name: "Roastery Coffee House", cost: 800, vegOnly: false, desc: "Excellent coffee and continental food." }
  ],
  gurgaon: [
    { name: "Bikanervala", cost: 400, vegOnly: true, desc: "Reliable North Indian vegetarian food." },
    { name: "Farzi Cafe", cost: 1800, vegOnly: false, desc: "Modern Indian bistro with theatrical food." },
    { name: "Comorin", cost: 2500, vegOnly: false, desc: "Premium regional Indian cuisine." },
    { name: "Paul", cost: 1200, vegOnly: false, desc: "Great bakery and European food." }
  ],
  bangalore: [
    { name: "CTR (Shri Sagar)", cost: 200, vegOnly: true, desc: "Famous for Benne Masala Dosa." },
    { name: "Meghana Foods", cost: 600, vegOnly: false, desc: "Spicy and flavorful Andhra biryani." },
    { name: "Toit", cost: 1800, vegOnly: false, desc: "Iconic microbrewery with great food." },
    { name: "Truffles", cost: 800, vegOnly: false, desc: "Popular cafe known for its burgers." }
  ],
  default: [
    { name: "The Green Bowl", cost: 400, vegOnly: true, desc: "Healthy, refreshing vegetarian bowls." },
    { name: "Street Spice Cart", cost: 150, vegOnly: false, desc: "Authentic local street food experience." },
    { name: "Skyline Dining", cost: 1500, vegOnly: false, desc: "Premium dining with a city view." },
    { name: "Cozy Corner Cafe", cost: 300, vegOnly: false, desc: "Quiet cafe perfect for relaxing." }
  ]
};
