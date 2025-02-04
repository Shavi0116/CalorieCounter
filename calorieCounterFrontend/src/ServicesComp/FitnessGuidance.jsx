import { useState } from "react";
import "./FitnessGuidance.css";

const FitnessGuidance = () => {
  const [tip, setTip] = useState("");
  const [workout, setWorkout] = useState("");
  const [category, setCategory] = useState("General");
  const [completed, setCompleted] = useState([]);

  const tips = {
    General: "Start your day with a 10-minute warm-up to boost your energy!",
    Hydration: "Drink at least 8 glasses of water daily for optimal hydration!",
    Strength: "Include 3 sets of push-ups in your routine to build strength!",
    Flexibility: "Practice 5 minutes of stretching to improve flexibility!",
  };

  const workouts = [
    "20 minutes of jogging and 15 minutes of stretching.",
    "15 push-ups, 20 squats, and a 30-second plank.",
    "A 10-minute yoga session focusing on deep breathing.",
    "30 minutes of cycling at a moderate pace.",
  ];

  const motivationalQuotes = [
    "Fitness is not about being better than someone else; it’s about being better than you used to be.",
    "Every journey begins with a single step.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Push yourself, because no one else is going to do it for you.",
  ];

  const fetchTip = () => {
    setTip(tips[category] || "Stay active and keep moving!");
    setWorkout(workouts[Math.floor(Math.random() * workouts.length)]);
  };

  const handleComplete = () => {
    setCompleted([...completed, tip]);
    setTip("");
    setWorkout("");
  };

  return (
    <div className="fitness-guidance">
      <p>Select a category and get tailored fitness advice!</p>
      
      <div className="fitness-controls">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Hydration">Hydration</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
        </select>
        <button onClick={fetchTip}>Get Tip</button>
      </div>

      {tip && (
        <div className="tip-section">
          <p className="fitness-tip">
            <strong>Tip:</strong> {tip}
          </p>
          <p className="workout-recommendation">
            <strong>Workout:</strong> {workout}
          </p>
          <p className="motivational-quote">
            <strong>Motivational Quote:</strong> {motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}
          </p>
          <button className="complete-button" onClick={handleComplete}>
            Mark as Complete
          </button>
        </div>
      )}

      {completed.length > 0 && (
        <div className="completed-tips">
          <h3>Completed Tips</h3>
          <ul>
            {completed.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FitnessGuidance;
