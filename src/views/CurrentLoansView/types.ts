export interface LoanListProps {
  loans: Array<Loan>;
}

export interface LoanProps {
  loan: Loan;
}

export interface Loan {
  id: string;
  title: string;
  tranche: string;
  availableAmount: string;
  annualisedReturn: string;
  termRemaining: string;
  ltv: string;
  loanValue: string;
  invested: boolean;
}
