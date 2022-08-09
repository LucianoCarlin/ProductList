import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="small"
        colorScheme="pink"
        fontSize="1rem"
        width="2rem"
        height="2.5rem"
        minWidth="40px"
        p="3px"
        borderRadius="8px"
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="small"
      onClick={() => onPageChange(number)}
      fontSize="1rem"
      width="2rem"
      height="2.5rem"
      minWidth="40px"
      p="3px"
      borderRadius="8px"
      colorScheme="blackAlpha"
    >
      {number}
    </Button>
  );
}
