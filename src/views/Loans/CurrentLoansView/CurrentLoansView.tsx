import { FC } from "react";
import LoanList from "./components/LoanList/LoanList";
import { loans } from "../../../data";

const CurrentLoans: FC = ({ children }) => {
  return <LoanList loans={loans} />;
};

export default CurrentLoans;
