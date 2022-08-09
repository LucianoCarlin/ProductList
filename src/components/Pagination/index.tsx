import React from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountRegisters: number | undefined;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePageArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountRegisters = 1,
  registersPerPage = 6,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePageArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      mt="2rem"
      alignItems="center"
      justifyContent="space-between"
      mb="2rem"
    >
      <Flex gap={1}>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text display="flex" alignItems="flex-end" color="black">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                onPageChange={onPageChange}
                number={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text display="flex" alignItems="flex-end" color="black">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Flex>
    </Stack>
  );
}
