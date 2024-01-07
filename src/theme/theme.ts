/* theme.ts */
import { colors } from "./colors";
import { type ThemeConfig, extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./button";
import { TextStyles } from "./text";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const breakpoints = {
  base: "0px",
  tablet: "768px",
  laptop: "960px",
  // tablet: "1133px",
  // laptop: "1440px",
};

const theme = extendTheme({
  config,
  colors,
  breakpoints,
  components: {
    Button: ButtonStyles,
    Text: TextStyles,
  },
  fonts: {
    body: "brockmann",
    heading: "brockmann",
  },
});

export default theme;
