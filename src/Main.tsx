import { FC } from "react";
import { VStack, Box } from "@chakra-ui/react";
import App from "./App";

const Main: FC = ({ children }) => (
  <VStack>
    <Box p={[4, 8, 16]} width="100%" maxWidth="1440px">
      <App />
    </Box>
  </VStack>
);

export default Main;
