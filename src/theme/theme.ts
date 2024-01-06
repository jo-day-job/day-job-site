/* theme.ts */
import { colors } from "./colors";
import { type ThemeConfig, extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./button";

const theme: ThemeConfig = extendTheme({
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
