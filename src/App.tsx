import { FC } from "react";
import Main from "./Layout/Main";
import CurrentLoansView from "./views/CurrentLoansView";

const App: FC = ({ children }) => (
  <Main>
    <CurrentLoansView />
  </Main>
);

export default App;
