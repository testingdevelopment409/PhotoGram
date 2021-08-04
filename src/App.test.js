import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App properly", () => {
  render(<App />);
  const linkElement = screen.getByText(/Upload Picture/i);
  expect(linkElement).toBeInTheDocument();
});
