import "./App.css";
import React, { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const handleChange = (e) => {
    setDisabled(e.target.checked);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={handleChange} defaultChecked={disabled} />
    </div>
  );
}

export default App;
