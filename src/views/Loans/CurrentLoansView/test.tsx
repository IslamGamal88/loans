import CurrentLoans from ".";
import { render, screen } from "@testing-library/react";

describe("CurrentLoans", () => {
  it("renders the component", () => {
    render(<CurrentLoans />);
    expect(screen.getByText("Current Loans")).toBeInTheDocument();
  });
});
