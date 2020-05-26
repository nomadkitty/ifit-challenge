import React from "react";
import { render } from "@testing-library/react";
import ProductNav from "./ProductNav";

test("renders product navigation links", () => {
  const { getByText } = render(<ProductNav />);
  const linkElement = getByText(/blog/i);
  expect(linkElement).toBeInTheDocument();
});
