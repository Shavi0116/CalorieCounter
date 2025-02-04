import  { useState } from "react";
import "./SearchSection.css";

function SearchSection() {
  const [food, setFood] = useState(""); 
  const [result, setResult] = useState(null);  
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async () => {
    if (!food) {
      alert("Please enter a food name.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3081/get-calories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cal : food }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.response); 
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="search-section">
      <h2>Search Food Nutrition</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter food name..."
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {result && (
        <div className="result-container">
          <h3>{food}</h3>
          <p><strong>Results:</strong></p>
          <p>{result}</p>
        </div>
      )}
    </section>
  );
}

export default SearchSection;
