import "./NutritionalConsultation.css";

const NutritionalConsultation = () => {
  return (
    <div className="nutritional-consultation">
      <h2>Nutritional Consultation</h2>
      <p>
        Schedule a one-on-one consultation with our expert dietitian to address
        your health concerns.
      </p>
      <button onClick={() => alert("Booking functionality coming soon!")}>
        Book Now
      </button>
    </div>
  );
};

export default NutritionalConsultation;
