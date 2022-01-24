import LoanList from "./LoansList";
import { render, screen } from "@testing-library/react";

describe("LoanList", () => {
  it("renders correctly", () => {
    render(<LoanList />);
    expect(
      screen.getByText("9 Munro Court, Bartin Close, Sheffield")
    ).toBeInTheDocument();
    expect(
      screen.getByText("12 Hollins Green Road, Marple")
    ).toBeInTheDocument();
    expect(screen.queryByText("Loan 3")).not.toBeInTheDocument();
  });
});
