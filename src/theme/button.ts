import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      bg: "peachFuzz",
      color: "black",
      _hover: {
        bg: "peachHover",
        color: "peachFuzz",
      },
      _active: {
        bg: "blackLowEmp",
        color: "peachFuzz",
      },
    },
    secondary: (props: any) => ({
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "peachFuzz",
      bg: "transparent",
      color: mode("black", "white")(props),
      _hover: {
        bg: "whiteLowEmp",
        color: "peachFuzz",
      },
      _active: {
        bg: "peachHover",
        color: "peachFuzz",
      },
    }),
  },
  defaultProps: {
    rounded: "4px",
    px: "20px",
    py: "13px",
  },
};
