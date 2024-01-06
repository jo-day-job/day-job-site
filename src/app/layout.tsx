// app/layout.tsx
import { ColorModeScript } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import theme from "@/theme/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
