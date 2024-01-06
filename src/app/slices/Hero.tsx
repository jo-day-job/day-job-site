import { Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

export const Hero = () => {
  const base = useColorModeValue("black", "white");
  const imgSrc = useColorModeValue(
    "/assets/svgs/Colour=White.svg",
    "/assets/svgs/Colour=Black.svg"
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      //   w={{ base: "100%", md: "100vw" }}
      h={{ base: "100%", md: "100vh" }}
      sx={{ img: { h: "fit-content" } }}
      bg={base}
      overflow={"hidden"}
    >
      <Flex
        alignItems={{ base: "center", md: "flex-end" }}
        w="100%"
        h="100%"
        sx={{
          img: {
            transform: "rotate(-5.78deg)",
          },
        }}
      >
        <Image
          alt=""
          //   layout="responsive"
          width={462}
          height={356}
          src="/assets/images/Group 51.png"
        />
      </Flex>
      <Flex
        p={{ base: "16px", md: "0" }}
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
            // scaleX: -1,
            mr: "-20px",
          },
        }}
      >
        <Image
          alt=""
          //   layout="responsive"
          width={462.4}
          height={356.8}
          src="/assets/images/Group 51.png"
        />
      </Flex>
    </Flex>
  );
};
