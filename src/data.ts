import loansJson from "./current-loans.json";
import { transformObjectKeys } from "./util/object";

const loans = loansJson.loans.map((loan) => transformObjectKeys(loan));
const totalAvailable = loans.reduce(
  (acc, loan) => acc + parseFloat(loan.availableAmount),
  0
);

export { loans, totalAvailable };
