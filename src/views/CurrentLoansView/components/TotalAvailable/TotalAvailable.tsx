import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { LoansContext } from "../../../../contexts/loans.context";

const TotalAvailable = () => {
  const { totalAvailable } = useContext(LoansContext);
  return (
    <Box alignSelf={"center"}>
      Total amount available for investments: {totalAvailable}
    </Box>
  );
};

export default TotalAvailable;
