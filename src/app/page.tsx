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
    <Flex direction={"column"}>
      <Hero />
      <Intro />
      <GoodCompany />
      <References />
      <Contact />
      <Footer />
    </Flex>
  );
}
