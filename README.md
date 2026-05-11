# 🌟 Perfect Saturday Planner (AI Engineer Assignment)

An AI-powered agent built with React (Vite) that crafts a highly personalized, fun Saturday itinerary. It utilizes complex constraint-satisfaction logic to simulate advanced reasoning without relying on expensive LLM calls.

---

## 🎯 Submission Requirements

### 1. Live URL
https://perfect-saturday-planner.netlify.app/
*(Click the link above to test the app in your browser!)*

### 2. Loom Demo
(https://www.loom.com/share/bcb209252c524613a90a487340f40191)

## 🧠 Advanced Agent Features (Bonus Points Completed)

I specifically focused on product thinking and building an agent that *feels* intelligent:

- **Constraint-Satisfaction Scoring**: The agent generates multiple candidate itineraries and mathematically scores them against the user's budget, mood, and explicit interests.
- **Clarifying Questions**: If a user submits vague inputs (e.g., leaves "constraints" empty), the agent halts the pipeline and asks a clarifying question before proceeding.
- **Trade-off Explanations**: The final plan explicitly explains *why* the agent chose it (e.g., *"Agent Decision: I picked this route because it perfectly matches your desired vibe"*).
- **Dynamic Logistics Engine**: It calculates realistic start times based on the activity type (e.g., Clubbing starts at 8 PM, Temples start at 9 AM) and factors in commute times.
- **Graceful Fallbacks**: If the user provides an impossibly low budget (e.g., ₹0), the agent gracefully switches to a cost-free "Zero-Budget Protocol".
- **Streaming "Chain of Thought"**: The UI visually exposes the agent's internal routing and scoring processes in real-time.

---

## 🛠️ How I Used AI Tools

For this assignment, I utilized AI coding assistants primarily for **CSS styling and logic optimization**. I leveraged AI to rapidly generate the complex glassmorphism UI components, build responsive CSS media queries, and help optimize the mathematical scoring functions inside the agent's logic pipeline. This allowed me to focus heavily on the overall architecture and product thinking rather than writing boilerplate code.

---

## 🚀 Running Locally

If you'd like to run the code on your local machine to inspect the architecture:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

*(Note: The project is structured with production-standard architecture, separating business logic into `/src/ai/`, UI components into `/src/components/`, and state management into `/src/hooks/`)*
