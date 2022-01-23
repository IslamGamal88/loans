import { FC } from "react";
import LoanList from "./components/LoanList/LoanList";
import loansJson from "../../../current-loans.json";
import { transformObjectKeys } from "../../../util/object";

const CurrentLoans: FC = ({ children }) => {
  const loans = loansJson.loans.map((loan) => transformObjectKeys(loan));
  return <LoanList loans={loans} />;
};

export default CurrentLoans;
