import loansJson from "../../current-loans.json";
import { transformObjectKeys } from "../../util/object";
import { stringToNumber } from "../../util/string";
import { Action, LoansContext } from "../types";

const loans = loansJson.loans.map((loan) => transformObjectKeys(loan));
const totalAvailable = loans.reduce(
  (acc, loan) => parseInt(acc) + stringToNumber(loan.availableAmount),
  0
);

export const initialState: LoansContext = { loans, totalAvailable };
const loansReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case "UPDATE_LOAN":
      return {
        ...state,
        loans: state.loans.map((loan) =>
          loan.id === payload.id ? payload : loan
        ),
      };
    case "SET_TOTAL_AVAILABLE":
      return { ...state, totalAvailable: payload };
    default:
      return state;
  }
};

export default loansReducer;
