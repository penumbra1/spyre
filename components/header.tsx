import React from "react";
import { IconButton, useColorMode, Box, Flex } from "@chakra-ui/core";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" borderBottomWidth="1px">
      <Flex justify="flex-end">
        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          variant="ghost"
          m={2}
          fontSize="20px"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : "sun"}
        />
      </Flex>
    </Box>
  );
};
