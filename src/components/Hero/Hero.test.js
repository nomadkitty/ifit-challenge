import React from "react";
import { render } from "@testing-library/react";
import Hero from "./Hero";

test("renders hero text", () => {
  const { getByText } = render(<Hero />);
  const heroText = getByText(/best personal training/i);
  expect(heroText).toBeInTheDocument();
});
