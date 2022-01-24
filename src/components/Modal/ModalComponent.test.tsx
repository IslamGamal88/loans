import ModalComponent from "./ModalComponent";
import { render, screen, fireEvent } from "@testing-library/react";
import { stringToNumber } from "../../util/string";

describe("ModalComponent", () => {
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
  it("should render", () => {
    render(
      <ModalComponent
        isOpen={true}
        onClose={() => {}}
        header={"header"}
        availableAmount={stringToNumber(loan.availableAmount)}
        loan={loan}
      >
        <div>content</div>
      </ModalComponent>
    );
    expect(screen.getByText("header")).toBeInTheDocument();
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("should render with no content", () => {
    render(
      <ModalComponent
        isOpen={true}
        loan={loan}
        onClose={() => {}}
        header={"header"}
        availableAmount={stringToNumber(loan.availableAmount)}
      />
    );
    expect(screen.getByText("header")).toBeInTheDocument();
  });
});
