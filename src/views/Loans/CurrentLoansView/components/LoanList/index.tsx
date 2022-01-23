import { FC } from "react";
import Loan from "../Loan";
import { LoanListProps } from "../../../types";

const LoanList: FC<LoanListProps> = ({ loans }) => {
  return (
    <div>
      {loans.map((loan) => (
        <Loan loan={loan} />
      ))}
    </div>
  );
};

export default LoanList;
