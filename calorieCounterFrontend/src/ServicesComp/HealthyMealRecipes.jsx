import { useState } from "react";
import "./HealthyMealRecipes.css";

const HealthyMealRecipes = () => {
  const [recipe, setRecipe] = useState("");

  const fetchRecipe = () => {
    // Mock fetch call or real API integration
    setRecipe("Quinoa Salad with Avocado and Lemon Dressing.");
  };

  return (
    <div className="healthy-meal-recipes">
      <h2>Healthy Meal Recipes</h2>
      <p>Click below to get a healthy meal idea!</p>
      <button onClick={fetchRecipe}>Get Recipe</button>
      {recipe && <p className="recipe-result">{recipe}</p>}
    </div>
  );
};

export default HealthyMealRecipes;
