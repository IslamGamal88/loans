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
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { Props } from "./types";

const ModalComponent: FC<Props> = ({
  isOpen,
  onClose,
  header,
  totalAvailable,
  children,
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (value: string) => setValue(parseInt(value) || 0);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <HStack justifyContent={"space-between"} w={"full"}>
              <NumberInput
                value={value}
                onChange={handleChange}
                clampValueOnBlur={false}
                w={"full"}
                min={0}
                max={totalAvailable}
              >
                <NumberInputField />
                <NumberInputStepper></NumberInputStepper>
              </NumberInput>
              <Button disabled={value > totalAvailable} bg={"yellow.300"}>
                Invest
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalComponent;
