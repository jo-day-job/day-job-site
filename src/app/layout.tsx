// app/layout.tsx
import theme from "@/theme/theme";
import { ColorModeScript } from "@chakra-ui/react";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
