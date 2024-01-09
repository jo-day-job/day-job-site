import theme from "@/theme/theme";
import { ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, Suspense } from "react";
import { Providers } from "./providers";

// Define link URLs as constants
const SITE_URL = "http://www.dayjobstudios.co.uk";
const APPLE_TOUCH_ICON = "/apple-touch-icon.png";
const FAVICON_32x32 = "/favicon-32x32.png";
const FAVICON_16x16 = "/favicon-16x16.png";
const SITE_WEBMANIFEST = "/site.webmanifest";
const SAFARI_PINNED_TAB = "/safari-pinned-tab.svg";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_IMAGE = `${SITE_URL}/og-image.png`;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* SEO and Metadata */}
      <head>
        <title>Day Job Studios | Digital Product Design by Jo Williamson</title>

        {/* Viewport for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Day Job Studios | Digital Product Design by Jo Williamson"
        />
        <meta
          name="description"
          content="Jo Williamson, a seasoned digital product designer from the North East of England, specializes in creating exceptional web and mobile user experiences. Available for contract roles across all industries."
        />
        <meta
          name="keywords"
          content="Digital Product Design, UX Design, User Interface, Web Design, Mobile Design, Interaction Design, Contract Designer, Jo Williamson, Day Job Studios"
        />
        <meta name="author" content="Jo Williamson" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:title"
          content="Day Job Studios | Digital Product Design by Jo Williamson"
        />
        <meta
          property="og:description"
          content="Discover the creative world of Jo Williamson, a digital product designer with a knack for pixel-perfect designs and innovative UX solutions."
        />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta
          name="twitter:title"
          content="Day Job Studios | Digital Product Design by Jo Williamson"
        />
        <meta
          name="twitter:description"
          content="Join Jo Williamson on her design journey at Day Job Studios, offering tailored design solutions for web and mobile platforms."
        />
        <meta name="twitter:image" content={TWITTER_IMAGE} />
        <meta name="twitter:creator" content="@DayJobStudios" />

        {/* Canonical Link */}
        <link rel="canonical" href={SITE_URL} />

        {/* Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href={APPLE_TOUCH_ICON} />
        <link rel="icon" type="image/png" sizes="32x32" href={FAVICON_32x32} />
        <link rel="icon" type="image/png" sizes="16x16" href={FAVICON_16x16} />
        <link rel="manifest" href={SITE_WEBMANIFEST} />
        <link rel="mask-icon" href={SAFARI_PINNED_TAB} color="#5bbad5" />

        {/* Additional Meta Tags */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      {/* Color Mode Script */}
      <body>
        <Suspense fallback={<span>loading</span>}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {/* Providers and Page Content */}
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
