import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import About from "./AboutUs";
import Services from "./Services";
import MealPlans from "./MealPlan";
import Consultation from "./Consultation";
import Blog from "./Blog";
import Contact from "./Contact";
import WeightLossPlan from "./Plans/WeightLossPlan";
import Login from "./Login";
import SignUp from "./SignUp";
import WeightGainPlan from "./Plans/WeightGainPlan";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/meal-plans" element={<MealPlans />} />
          <Route path="/consultation" element={<Consultation />} />      
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/calorie-counter" element={<SearchSection />} />
          <Route path="/weight-loss-plan" element={<WeightLossPlan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="//muscle-gain-plan" element={<WeightGainPlan />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
