import "./App.css";
import React, { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

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
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={handleChange}
        defaultChecked={disabled}
        aria-checked={disabled}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
