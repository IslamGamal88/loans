import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  HStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import { DispatchContext, LoansContext } from "../../contexts/loans.context";
import { stringToNumber } from "../../util/string";
import { Props } from "./types";

const ModalComponent: FC<Props> = ({
  isOpen,
  onClose,
  header,
  loan,
  children,
}) => {
  const [value, setValue] = useState(0);
  const dispatch = useContext(DispatchContext);
  const { totalAvailable } = useContext(LoansContext);
  const handleChange = (value: string) => setValue(parseInt(value) || 0);
  const handleClick = (e: any) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_LOAN",
      payload: {
        ...loan,
        availableAmount: stringToNumber(loan.availableAmount) - value,
        invested: true,
      },
    });
    dispatch({
      type: "SET_TOTAL_AVAILABLE",
      payload: stringToNumber(totalAvailable) - value,
    });
    setValue(0);
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Flex>
              <Text>Invested amount (&pound;)</Text>
              <HStack justifyContent={"space-between"} w={"full"}>
                <NumberInput
                  data-testid="invest-input"
                  value={value}
                  onChange={handleChange}
                  clampValueOnBlur={false}
                  w={"full"}
                  min={0}
                  max={stringToNumber(loan.availableAmount)}
                >
                  <NumberInputField />
                  <NumberInputStepper></NumberInputStepper>
                </NumberInput>
                <Button
                  data-testid="invest-button"
                  onClick={handleClick}
                  disabled={value > stringToNumber(loan.availableAmount)}
                  bg={"yellow.300"}
                >
                  Invest
                </Button>
              </HStack>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalComponent;
