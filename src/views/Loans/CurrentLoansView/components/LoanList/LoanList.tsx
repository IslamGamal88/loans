import { FC } from "react";
import Loan from "../Loan/Loan";
import { LoanListProps } from "../../../types";
import { VStack } from "@chakra-ui/react";

const LoanList: FC<LoanListProps> = ({ loans }) => {
  return (
    <VStack align="flex-start" w="100%" spacing={10}>
      {loans.map((loan) => (
        <Loan key={loan.id} loan={loan} />
      ))}
    </VStack>
  );
};

export default LoanList;
