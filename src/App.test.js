import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("Adds information to list when form is submitted", async() => {
  
  render(<App />);
  
  // const h1 = screen.getByText(/A Form to Beat All Others!/i);
  const firstNameInput = screen.getByLabelText(/first Name/i);
  const lastNameInput = screen.getByLabelText(/last Name/i);
  const emailInput = screen.getByLabelText(/email/i);


  fireEvent.change(firstNameInput, { target: { value: 'Orlando' } })
  fireEvent.change(lastNameInput, { target: { value: 'Davila' } })
  fireEvent.change(emailInput, { target: { value: 'oly@gmail.com' } })

  const submitBtn = screen.getByRole('button', { name: /submit/i});
  
  fireEvent.click(submitBtn);

  expect(await screen.findByText(/Orlando/i)).toBeInTheDocument();
})