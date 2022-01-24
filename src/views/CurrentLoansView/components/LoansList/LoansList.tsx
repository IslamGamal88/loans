import { useContext } from "react";
import Loan from "../Loan/Loan";
import { VStack } from "@chakra-ui/react";
import { LoansContext } from "../../../../contexts/loans.context";

const LoanList = () => {
  const { loans } = useContext(LoansContext);
  return (
    <VStack align="flex-start" w="100%" spacing={10}>
      {loans.map((loan) => (
        <Loan key={loan.id} loan={loan} />
      ))}
    </VStack>
  );
};

export default LoanList;
