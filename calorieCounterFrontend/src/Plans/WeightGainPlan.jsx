import "./WeightLossPlan.css";

const WeightGainPlan = () => {
  return (
    <div className="plan-details">
      <h1 className="plan-title">Weight Gain Plan</h1>
      <p className="plan-intro">
        This plan is tailored to help you gain healthy weight with nutrient-rich, calorie-dense meals.
      </p>

      <h2 className="recipe-heading">Signature Recipe: Creamy Peanut Butter Banana Smoothie</h2>
      <img
        src="https://media.istockphoto.com/id/1035941188/photo/banana-protein-smoothie-in-drinking-glass.jpg?s=612x612&w=0&k=20&c=z_ZA5aNB4EmrK91LnABUV8qHdIbAuud3AZu7iEPsWEk="
        alt="Peanut Butter Banana Smoothie"
        className="recipe-image"
      />
      <h3 className="section-title">Ingredients</h3>
      <ul className="recipe-list">
        <li>1 large banana, ripe</li>
        <li>2 tbsp natural peanut butter</li>
        <li>1 cup whole milk (or almond milk for lactose-free)</li>
        <li>1/2 cup Greek yogurt</li>
        <li>1 tbsp honey or maple syrup</li>
        <li>2 tbsp rolled oats</li>
        <li>1/4 tsp cinnamon (optional)</li>
        <li>4-5 ice cubes</li>
      </ul>

      <h3 className="section-title">Instructions</h3>
      <ol className="recipe-steps">
        <li>Peel and slice the banana, and add it to a blender.</li>
        <li>Add peanut butter, whole milk, Greek yogurt, honey, oats, and cinnamon (if using).</li>
        <li>Blend until smooth and creamy.</li>
        <li>Add ice cubes and blend again until the smoothie reaches your desired consistency.</li>
        <li>Pour into a glass and serve immediately. Enjoy!</li>
      </ol>
    </div>
  );
};

export default WeightGainPlan;
