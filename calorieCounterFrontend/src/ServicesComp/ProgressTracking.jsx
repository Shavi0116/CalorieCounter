import { useState } from "react";
import "./ProgressTracking.css";

const ProgressTracking = () => {
  const [progress, setProgress] = useState({ weight: 0, activity: "" });

  const updateProgress = () => {
    // Mock progress update
    setProgress({ weight: 65, activity: "Completed 5k run" });
  };

  return (
    <div className="progress-tracking">
      <button onClick={updateProgress}>Update Progress</button>
      {progress.weight > 0 && (
        <div className="progress-details">
          <p>Current Weight: {progress.weight} kg</p>
          <p>Recent Activity: {progress.activity}</p>
        </div>
      )}
    </div>
  );
};

export default ProgressTracking;
