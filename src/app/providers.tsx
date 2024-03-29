"use client";

import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={`
        @font-face {
          font-family: 'brockmann';
          font-weight: 400;
          src: url('/assets/Brockman Font/brockmann-regular-webfont.ttf') format('truetype');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        body {
          background-color: #252525};
        }
      
      `}
      />
      {children}
    </ChakraProvider>
  );
}
