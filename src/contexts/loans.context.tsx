import { createContext, FC } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import loansReducer, {
  initialDispatch,
  initialState,
} from "../store/reducers/loans.reducer";

export const LoansContext = createContext(initialState);
export const DispatchContext = createContext(initialDispatch);

const LoansContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useLocalStorage(
    "loansData",
    initialState,
    loansReducer
  );
  console.log("state", state);
  return (
    <LoansContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </LoansContext.Provider>
  );
};

export default LoansContextProvider;
