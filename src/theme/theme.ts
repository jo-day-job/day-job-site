/* theme.ts */
import { colors } from "./colors";
import { type ThemeConfig, extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./button";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button: ButtonStyles,
  },
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
});

export default theme;
