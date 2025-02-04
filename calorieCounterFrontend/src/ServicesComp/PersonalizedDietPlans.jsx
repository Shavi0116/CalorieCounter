import { useState } from "react";
import "./PersonalizedDietPlans.css";

const PersonalizedDietPlans = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    healthGoals: "",
    dietaryPreferences: "",
  });

  const [dietPlan, setDietPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setDietPlan("");

    try {
      const response = await fetch("http://localhost:3081/generate-diet-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setDietPlan(data.plan);
      } else {
        setError(data.error || "Failed to generate a diet plan.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.",err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="personalized-diet-plans">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Your Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="healthGoals"
          placeholder="Your Health Goals"
          value={formData.healthGoals}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dietaryPreferences"
          placeholder="Dietary Preferences (Optional)"
          value={formData.dietaryPreferences}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Get My Plan"}
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      {dietPlan && (
        <div className="diet-plan-result">
          <h3>Your Personalized Diet Plan</h3>
          <pre>{dietPlan}</pre>
        </div>
      )}
    </div>
  );
};

export default PersonalizedDietPlans;
