import React from "react";
import { Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      height={28}
      alignItems="center"
      justifyContent="center"
      bgColor="gray.400"
      fontSize="2rem"
    >
      Lista de Produtos
    </Flex>
  );
}
