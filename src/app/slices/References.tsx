import { Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const References = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, tablet: 2 }}
      h={{ base: "100%", tablet: "744px", laptop: "1024px" }}
    >
      <Center
        bg="black"
        h="100%"
        flexDirection="column"
        px={{ base: "24px", tablet: "64px", laptop: "120px" }}
        gap={{ base: "120px", tablet: "95px" }}
        py={{ base: "80px", tablet: "64px" }}
      >
        <Center
          sx={{
            img: {
              w: "auto",
              h: "auto",
              maxH: "265px",
              maxW: "395px",
            },
          }}
        >
          <Image
            alt=""
            width={395}
            height={265}
            src="/assets/images/Group 56.png"
          />
        </Center>
        <Text variant={"h1"} as="h1" color="white" textAlign={"center"}>
          Don’t just take our word for it
        </Text>
      </Center>
      <Center bg="peachFuzz" h="100%" flex={1}></Center>
    </SimpleGrid>
  );
};
