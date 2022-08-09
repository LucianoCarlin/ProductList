import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

interface PriceProps {
  text: string;
  amount: number;
}

export function Price({ text, amount }: PriceProps) {
  return (
    <Flex
      color="black"
      gap="1"
      alignItems="flex-start"
      justifyContent="flex-start"
      width="10rem"
      pl="1"
    >
      <Text>{text}</Text>{" "}
      <Box color="black" mr="1rem">
        {amount}
      </Box>
    </Flex>
  );
}
