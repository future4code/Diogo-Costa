import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Ao digitar no input deve mudar value do mesmo", () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(<App />);

  const inputField = getByPlaceholderText(/Novo/i);
  const addButtom = getByText(/adicionar/i);

  fireEvent.change(inputField, { target: { value: "teste" } });
  fireEvent.click(addButtom);

  expect(getByTestId("inputMade")).toBeInTheDocument();
});

test("Ao clicar deve curtir e descurtir post", () => {
  const { getByText } = render(<App />);

  const LikeButtom = getByText(/Curtir/i);

  fireEvent.click(LikeButtom);

  
});
