import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// functional test can include multiple assertions
test("button has correct initial color", () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);
  // expect the color button to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

// add new functional tests for a new checkbox feature
test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled(); // jest-dom

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  // first click: disable the button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  // second click: re-enable the buton
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Button turns gray when disabled", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  // gray the button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  // re-enable the buton
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  
  // change button to blue
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  // gray the button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  // re-enable the buton
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
});
