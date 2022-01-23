import React, { FC } from "react";
import { LoanProps } from "../../../types";

const Loan: FC<LoanProps> = ({ loan }) => {
  return <div>{loan.title}</div>;
};

export default Loan;
