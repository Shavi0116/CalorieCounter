import {useNavigate } from "react-router-dom";
import "./MealPlan.css";
import muscle from "../src/assets/muscle.jpg";
import keto from "../src/assets/keto.jpg";
import vegan from "../src/assets/vegan.jpg";
import loss from "../src/assets/loss.jpg";

const MealPlan = () => {
  const navigate = useNavigate();

  const mealPlans = [
    {
      id: 1,
      title: "Weight Loss Plan",
      image: loss,
      description: "A low-calorie, high-protein plan to help you shed those extra pounds.",
      link: "/weight-loss-plan",
    },
    {
      id: 2,
      title: "Muscle Gain Plan",
      image: muscle,
      description: "High-protein meals tailored for muscle building and recovery.",
      link: "/muscle-gain-plan",
    },
    {
      id: 3,
      title: "Vegan Plan",
      image: vegan,
      description: "Plant-based meals packed with nutrients for a healthy lifestyle.",
      link: "/vegan-plan",
    },
    {
      id: 4,
      title: "Keto Plan",
      image: keto,
      description: "Low-carb, high-fat meals to help you maintain ketosis.",
      link: "/keto-plan",
    },
  ];

  return (
    <div className="meal-plans">
      <h1 className="meal-plans-heading">Personalized Meal Plans Tailored for You!</h1>
      <div className="meal-plans-grid">
        {mealPlans.map((plan) => (
          <div key={plan.id} className="meal-plan-card">
            <img src={plan.image} alt={plan.title} className="meal-plan-image" />
            <h2 className="meal-plan-title">{plan.title}</h2>
            <p className="meal-plan-description">{plan.description}</p>
            <button
              className="meal-plan-button"
              onClick={() => navigate(plan.link)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;
