import { Box, Text } from "@chakra-ui/react";
import React from "react";

export function PrivacyPolicy() {
  return (
    <Box
      bgColor="gray.400"
      width="100%"
      height="6rem"
      bottom="0"
      left="0"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontStyle="normal"
        fontWeight="400"
        fontSize="0.75rem"
        lineHeight="1rem"
        color="primary.200"
        cursor="pointer"
        textDecoration="none"
        textAlign="center"
      >
        ©Copyright 2022 Soluevo - All Rights Reserved
      </Text>
    </Box>
  );
}
