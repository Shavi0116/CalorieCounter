import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Empowering your health journey with personalized nutrition and expert guidance.</p>
      </header>

      <section className="about-content">
        <div className="about-image">
          <img src="https://plus.unsplash.com/premium_photo-1687975124304-fb6fd27594fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlldGl0aWFufGVufDB8fDB8fHww" alt="Dietitian" />
        </div>
        <div className="about-text">
          <h2>Shavi Sharma</h2>
          <p>
            She is a certified dietitian with over 4 years of experience in nutrition and health counseling.
            Specializing in personalized dietary plans, she is passionate about helping clients achieve their wellness
            goals through balanced and sustainable eating habits.
          </p>
          <p>
            She provides
            clients with comprehensive support tailored to their unique needs. Whether your goal is to lose weight, manage a
            health condition, or simply eat better, she is here to guide you every step of the way.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire a healthier world by providing accessible, personalized nutritional guidance.
          We believe in empowering our clients with knowledge and support, fostering lifelong habits that promote optimal health and well-being.
        </p>
      </section>

      <section className="about-specialties">
        <h2>Our Specialties</h2>
        <ul>
          <li>Weight Management</li>
          <li>Heart-Healthy Diet Plans</li>
          <li>Meal Planning and Prep Guidance</li>
          <li>Sports and Performance Nutrition</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
