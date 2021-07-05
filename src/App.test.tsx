import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const imageElement = await screen.findByAltText(/logo/i);
  expect(imageElement).toBeInTheDocument();
});
