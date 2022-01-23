import LoanList from "./LoanList";
import { render, screen } from "@testing-library/react";

describe("LoanList", () => {
  it("renders correctly", () => {
    const loans = [
      {
        id: "1",
        title: "9 Munro Court, Bartin Close, Sheffield",
        tranche: "A",
        availableAmount: "11,959",
        annualisedReturn: "8.60",
        termRemaining: "864000",
        ltv: "48.80",
        loanValue: "85,754",
      },
      {
        id: "5",
        title: "12 Hollins Green Road, Marple",
        tranche: "B",
        availableAmount: "31,405",
        annualisedReturn: "7.10",
        termRemaining: "1620000",
        ltv: "48.80",
        loanValue: "85,754",
      },
    ];
    render(<LoanList loans={loans} />);
    expect(
      screen.getByText("9 Munro Court, Bartin Close, Sheffield")
    ).toBeInTheDocument();
    expect(
      screen.getByText("12 Hollins Green Road, Marple")
    ).toBeInTheDocument();
    expect(screen.getByText("Loan 3")).not.toBeInTheDocument();
  });
});
