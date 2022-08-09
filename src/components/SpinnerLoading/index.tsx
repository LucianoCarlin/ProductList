import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export function SpinnerLoading() {
  return (
    <Flex py="8" alignItems="center" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
}
