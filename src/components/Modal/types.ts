import { Loan } from "../../views/CurrentLoansView/types";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  availableAmount: number;
  loan: Loan;
}
