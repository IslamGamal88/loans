import { Container, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import LoanList from "./LoanList";

function CurrentLoans() {
  return (
    <Container p="0" maxW="container.xl" bg="gray.50">
      <Flex h="100vh" py={20}>
        <VStack px={[4, 8, 16]}>
          <Heading>Current Loans</Heading>
          <LoanList />
        </VStack>
      </Flex>
    </Container>
  );
}

export default CurrentLoans;
