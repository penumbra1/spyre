import React from "react";
import { IconButton, useColorMode, Box, Flex } from "@chakra-ui/core";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" borderBottomWidth="1px" width="full">
      <Flex align="center" justify="flex-end">
        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          variant="ghost"
          m={2}
          color="current"
          fontSize="20px"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : "sun"}
        />
      </Flex>
    </Box>
  );
};
