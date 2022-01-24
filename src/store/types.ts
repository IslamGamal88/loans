import { Loan } from "../views/CurrentLoansView/types";

export type Context = LoansContext | DispatchContext;

export interface LoansContext {
  loans: Loan[];
  totalAvailable: number;
}

export interface DispatchContext {
  type: string;
  payload: any;
}

export interface Action {
  type: string;
  payload: any;
}
