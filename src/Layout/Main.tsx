import { FC } from "react";
import { Container, Box } from "@chakra-ui/react";

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
      {children}
    </Container>
  </Box>
);

export default Main;
