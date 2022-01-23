import { Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import LoanList from "./components/LoanList";
import loans from "../../../current-loans.json";
import { transformObjectKeys } from "../../../util/object";

const CurrentLoans: FC = ({ children }) => {
  return (
    <Container p="0" maxW="container.xl" bg="gray.50">
      <Flex h="100vh" py={20}>
        <VStack px={[4, 8, 16]}>
          <Heading>Current Loans</Heading>
          <LoanList loans={transformObjectKeys(loans)} />
        </VStack>
      </Flex>
    </Container>
  );
};

export default CurrentLoans;
