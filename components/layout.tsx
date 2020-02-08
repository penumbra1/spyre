import React from "react";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Box
} from "@chakra-ui/core";

import { Header } from "./header";

export const Layout = ({ children }) => (
  <ThemeProvider>
    <ColorModeProvider>
      <CSSReset />
      <Header />
      <Box as="main">{children}</Box>
    </ColorModeProvider>
  </ThemeProvider>
);
