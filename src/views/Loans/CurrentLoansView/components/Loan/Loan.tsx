import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import ModalComponent from "../../../../../components/Modal/ModalComponent";
import { LoanProps } from "../../../types";

const Loan: FC<LoanProps> = ({ loan }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w={"full"} bg="white" p={[4, 8]}>
      <Flex justifyContent="space-between" align="center">
        <VStack align="flex-start" px={[2]}>
          <Heading>{loan.tranche}</Heading>
          <Text>{loan.title}</Text>
        </VStack>
        <VStack spacing={5}>
          <Text color="green.500" fontSize={"sm"}>
            Invested
          </Text>
          <Button onClick={onOpen} p={5} bg={"yellow.300"}>
            Invest
          </Button>
          <ModalComponent
            totalAvailable={10}
            header="Invest in loan"
            onClose={onClose}
            isOpen={isOpen}
          >
            <VStack align={"flex-start"}>
              <Text>{loan.title}</Text>
            </VStack>
          </ModalComponent>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Loan;
