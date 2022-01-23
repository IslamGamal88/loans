import TotalAvailable from "./TotalAvailable";
import { render, screen } from "@testing-library/react";

describe("TotalAvailable", () => {
  it("should render", () => {
    render(<TotalAvailable totalAvailable={10} />);
    expect(
      screen.getByText("Total amount available for investments: 10")
    ).toBeInTheDocument();
  });

  it("should render the correct total available amount", () => {
    render(<TotalAvailable totalAvailable={10} />);
    expect(
      screen.getByText("Total amount available for investments: 10")
    ).toBeInTheDocument();
  });
});
