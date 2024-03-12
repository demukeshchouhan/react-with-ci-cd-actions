import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render component", () => {
    render(<App />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
