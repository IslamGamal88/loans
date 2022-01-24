import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import LoansList from "./components/LoansList/LoansList";
import TotalAvailable from "./components/TotalAvailable/TotalAvailable";

function index() {
  return (
    <Flex
      justifyContent={"space-between"}
      direction={"column"}
      alignItems="flex-start"
      h="full"
    >
      <Heading>Current Loans</Heading>
      <LoansList />
      <TotalAvailable />
    </Flex>
  );
}

export default index;
