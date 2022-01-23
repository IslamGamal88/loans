import ModalComponent from "./ModalComponent";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ModalComponent", () => {
  it("should render", () => {
    render(
      <ModalComponent
        isOpen={true}
        onClose={() => {}}
        header={"header"}
        totalAvailable={10}
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
        onClose={() => {}}
        header={"header"}
        totalAvailable={10}
      />
    );
    expect(screen.getByText("header")).toBeInTheDocument();
  });
});
