import TotalAvailable from "./TotalAvailable";
import { render, screen } from "@testing-library/react";

describe("TotalAvailable", () => {
  it("should render", () => {
    render(<TotalAvailable />);
    expect(
      screen.getByText("Total amount available for investments: £55,723")
    ).toBeInTheDocument();
  });

  it("should render the correct total available amount", () => {
    render(<TotalAvailable />);
    expect(
      screen.queryByText("Total amount available for investments: 54")
    ).not.toBeInTheDocument();
  });
});
