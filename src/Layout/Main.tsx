import { FC } from "react";
import { VStack, Heading, Container, Box, Flex } from "@chakra-ui/react";
import CurrentLoans from "../views/Loans/CurrentLoansView/CurrentLoansView";
import TotalAvailable from "../views/Loans/CurrentLoansView/components/TotalAvailable/TotalAvailable";

const Main: FC = ({ children }) => (
  <Box
    p={[4, 8, 16]}
    width="100%"
    h={"100vh"}
    minH="100vh"
    maxWidth="1440px"
    bg="gray.200"
  >
    <Container h="100%" p="0" maxW="container.xl">
      <Flex
        justifyContent={"space-between"}
        direction={"column"}
        alignItems="flex-start"
        h="full"
      >
        <Heading>Current Loans</Heading>
        <CurrentLoans>{children}</CurrentLoans>
        <TotalAvailable />
      </Flex>
    </Container>
  </Box>
);

export default Main;
