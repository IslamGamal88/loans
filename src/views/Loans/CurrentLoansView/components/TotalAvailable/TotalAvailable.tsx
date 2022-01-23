import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { Props } from "./types";

const TotalAvailable: FC<Props> = ({ totalAvailable }) => {
  return (
    <Box alignSelf={"center"}>
      Total amount available for investments: {totalAvailable}
    </Box>
  );
};

export default TotalAvailable;
