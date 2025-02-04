import { useState } from "react";
import "./Consultation.css";

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for booking a consultation. We'll contact you soon!");
    setFormData({ name: "", email: "", phone: "", date: "", time: "", notes: "" });
  };

  return (
    <div className="consultation-page">
      <p className="consultation-description">
        Take the first step toward a healthier lifestyle by booking a personalized consultation.
      </p>
      <form className="consultation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Additional Notes (Optional)"
        ></textarea>
        <button type="submit" className="consultation-button">
          Book Consultation
        </button>
      </form>
      <div className="consultation-contact">
        <h2>Contact Information</h2>
        <p>Email: dietitian@example.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Healthy Lane, Wellness City</p>
      </div>
    </div>
  );
};

export default Consultation;
