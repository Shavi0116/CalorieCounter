import { useState } from "react";
import "./Services.css";
import PersonalizedDietPlans from "../src/ServicesComp/PersonalizedDietPlans";
import Consultation from "./Consultation";
import FitnessGuidance from "../src/ServicesComp/FitnessGuidance";
import ProgressTracking from "../src/ServicesComp/ProgressTracking";

function Services() {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Personalized Diet Plans",
      description:
        "Tailored diet plans crafted specifically for your nutritional needs and health goals.",
      component: <PersonalizedDietPlans />,
    },
    {
      title: "Nutritional Consultation",
      component: <Consultation />,
    },
    {
      title: "Fitness Guidance",
      component: <FitnessGuidance />,
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your progress with detailed reports and insights into your health journey.",
      component: <ProgressTracking />,
    },
  ];

  return (
    <div className="services-container">
      <div className="services-sidebar">
        <div className="sidebar-title">Our Services</div>
        {services.map((service, index) => (
          <div
            key={index}
            className={`sidebar-item ${
              selectedService === index ? "active" : ""
            }`}
            onClick={() => setSelectedService(index)}
          >
            {service.title}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="services-content">
        <div className="content-section">
          <h2 className="content-header">{services[selectedService].title}</h2>
          <div className="content-body">
            <p>{services[selectedService].description}</p>
            {services[selectedService].component}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
