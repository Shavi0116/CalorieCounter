import "./WeightLossPlan.css";

const WeightLossPlan = () => {
  return (
    <div className="plan-details">
      <h1 className="plan-title">Weight Loss Plan</h1>
      <p className="plan-intro">
        This plan is designed to help you achieve your weight-loss goals with delicious and satisfying meals.
      </p>

      <h2 className="recipe-heading">Signature Recipe: Grilled Lemon Herb Chicken Salad</h2>
      <img
        src="https://media.istockphoto.com/id/1212723383/photo/chicken-breast-or-chicken-piccatta-pan-seared-to-a-crispy-golden-brown-in-brown-butter-and.jpg?s=612x612&w=0&k=20&c=NoOVZI3m5wofIm32qi7RnDXZTdnOzB2xjKwY3hTfhd4="
        alt="Grilled Lemon Herb Chicken Salad"
        className="recipe-image"
      />
      <h3 className="section-title">Ingredients</h3>
      <ul className="recipe-list">
        <li>200g grilled chicken breast, sliced</li>
        <li>2 cups fresh mixed greens (arugula, spinach, lettuce)</li>
        <li>1/2 cup cherry tomatoes, halved</li>
        <li>1/4 cup sliced cucumbers</li>
        <li>1/4 cup crumbled feta cheese</li>
        <li>1 tbsp olive oil</li>
        <li>Juice of 1/2 lemon</li>
        <li>1 tsp dried oregano</li>
        <li>Salt and pepper to taste</li>
      </ul>

      <h3 className="section-title">Instructions</h3>
      <ol className="recipe-steps">
        <li>Season the chicken breast with salt, pepper, and oregano, and grill until golden and cooked through.</li>
        <li>In a large bowl, toss the greens, cherry tomatoes, and cucumbers.</li>
        <li>Top the salad with grilled chicken slices and crumbled feta cheese.</li>
        <li>Drizzle olive oil and freshly squeezed lemon juice over the salad.</li>
        <li>Mix gently and serve immediately.</li>
      </ol>
    </div>
  );
};

export default WeightLossPlan;
