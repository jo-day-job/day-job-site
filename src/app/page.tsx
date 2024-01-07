// app/page.tsx
"use client";
import { Flex } from "@chakra-ui/react";
import { Contact } from "./slices/Contact";
import { Footer } from "./slices/Footer";
import { GoodCompany } from "./slices/GoodCompany";
import { Intro } from "./slices/Intro";
import { References } from "./slices/References";
import { Hero } from "./slices/Hero";

export default function Page() {
  return (
    <Flex
      direction={"column"}
      sx={{
        img: "auto",
        button: {
          rounded: "4px",
          px: "20px",
          py: "13px",
          fontSize: { base: "14px", tablet: "16px", laptop: "18px" },
          lineHeight: "150%",
        },
        // "&>*": {
        //   h: { base: "844px", tablet: "744px", laptop: "1024px" },
        // },
      }}
    >
      <Hero />
      <Intro />
      <GoodCompany />
      <References />
      <Contact />
      <Footer />
    </Flex>
  );
}
