import { Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { AnimateAllChildren } from "easy-chakra-animate";
import Star from "../components/Star";

export const Hero = () => {
  const base = useColorModeValue("black", "white");
  const imgSrc = useColorModeValue(
    "/assets/svgs/Colour=White.svg",
    "/assets/svgs/Colour=Black.svg"
  );

  return (
    <Flex
      direction={{ base: "column", tablet: "row" }}
      h={{ base: "100%", tablet: "100vh" }}
      sx={{ img: { h: "fit-content" } }}
      bg={base}
      overflow={"hidden"}
    >
      <Star />
      <Star />
      <Star />
      <Star />
      {/* <AnimateAllChildren> */}
      <Flex
        alignItems={{ base: "center", tablet: "flex-end" }}
        w="100%"
        h="100%"
        sx={{
          img: {
            transform: "rotate(-5.78deg)",
            minW: "33vw",
          },
        }}
        position="relative"
      >
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />

        <Image
          alt=""
          width={462}
          height={356}
          src="/assets/images/Group 51.png"
        />
      </Flex>
      <Flex
        p={{ base: "16px", tablet: "0" }}
        justifyContent="flex-end"
        w="100%"
        h="100%"
      >
        <Image
          alt=""
          layout="responsive"
          width={500}
          height={500}
          src={imgSrc}
        />
      </Flex>
      <Flex
        justifyContent="flex-end"
        w="100%"
        h="100%"
        sx={{
          img: {
            transform: "rotate(-5.78deg) scaleX(-1)",
            mr: "-20px",
            minW: "33vw",
          },
        }}
        position="relative"
      >
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />

        <Image
          alt=""
          width={462.4}
          height={356.8}
          src="/assets/images/Group 51.png"
        />
      </Flex>
      {/* </AnimateAllChildren> */}
    </Flex>
  );
};
