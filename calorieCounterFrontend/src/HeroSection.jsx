import "./HeroSection.css";
import healthyImage from "../src/assets/healthy-meal.jpg"; 
import SearchSection from "./SearchSection";
import Blog from "./Blog"
function HeroSection() {
  return (
    <>
    <section className="hero">
      <div className="hero-text">
        <h1>Empower Your Wellness Journey with Expert Nutrition Guidance</h1>
        <p>
          Welcome to your personalized path to a healthier lifestyle! Whether
          you are looking to lose weight, build muscle, or simply eat better, our
          tailored nutrition advice and meal plans are designed to meet your
          unique needs. Discover balanced meals, track your progress, and consult
          with a professional dietitian to reach your goals, one step at a time.
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={healthyImage} alt="Healthy Meal" />
      </div>
    </section>
    <SearchSection/>
    <Blog/>
    </>
  );
}

export default HeroSection;
