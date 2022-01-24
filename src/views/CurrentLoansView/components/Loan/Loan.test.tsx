import Loan from "./Loan";
import { render, screen, fireEvent } from "@testing-library/react";

const loan = {
  id: "12",
  title: "Robins Gate, Wavering Lane West, Gillingham",
  tranche: "C",
  availableAmount: "12,359",
  annualisedReturn: "4.80",
  termRemaining: "879000",
  ltv: "48.80",
  loanValue: "85,754",
  invested: false,
};

describe("Loan", () => {
  it("should render", () => {
    render(<Loan loan={loan} />);
    expect(
      screen.getByText("Robins Gate, Wavering Lane West, Gillingham")
    ).toBeInTheDocument();
  });

  it("should render no title", () => {
    const loan = {
      id: "12",
      title: "",
      tranche: "C",
      availableAmount: "12,359",
      annualisedReturn: "4.80",
      termRemaining: "879000",
      ltv: "48.80",
      loanValue: "85,754",
      invested: false,
    };
    render(<Loan loan={loan} />);
    expect(
      screen.queryByText("Robins Gate, Wavering Lane West, Gillingham")
    ).not.toBeInTheDocument();
  });

  it("should render no tranche", () => {
    const loan = {
      id: "12",
      title: "Robins Gate, Wavering Lane West, Gillingham",
      tranche: "",
      availableAmount: "12,359",
      annualisedReturn: "4.80",
      termRemaining: "879000",
      ltv: "48.80",
      loanValue: "85,754",
      invested: false,
    };
    render(<Loan loan={loan} />);
    expect(screen.queryByText("tranche: C")).not.toBeInTheDocument();
  });

  it("should render no available amount", () => {
    const loan = {
      id: "12",
      title: "Robins Gate, Wavering Lane West, Gillingham",
      tranche: "C",
      availableAmount: "",
      annualisedReturn: "4.80",
      termRemaining: "879000",
      ltv: "48.80",
      loanValue: "85,754",
      invested: false,
    };
    render(<Loan loan={loan} />);
    expect(
      screen.queryByText("available amount: 12,359")
    ).not.toBeInTheDocument();
  });

  // test open and close modal
  it("should open modal", () => {
    render(<Loan loan={loan} />);
    const button = screen.getByText("Invest");
    fireEvent.click(button);
    expect(screen.getByText("Invest in loan")).toBeInTheDocument();
  });

  it("should close modal", () => {
    render(<Loan loan={loan} />);
    const button = screen.getByText("Invest");
    fireEvent.click(button);
    fireEvent.click(document);
    expect(screen.queryByText("Invest in loan")).not.toBeInTheDocument();
  });
});
