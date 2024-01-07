import {
  Button,
  Center,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

export const Footer = () => {
  const base = useColorModeValue("white", "black");
  const highlight = useColorModeValue("black", "white");

  const imgSrc = useColorModeValue(
    "/assets/svgs/Colour=Black.svg",
    "/assets/svgs/Colour=White.svg"
  );

  return (
    <Center
      flexDir="column"
      bg={base}
      color={highlight}
      overflow={"hidden"}
      p="40px"
      gap="24px"
      textAlign={"center"}
    >
      <Image alt="" src={imgSrc} width={193} height={110} />
      <Flex
        gap="8px"
        sx={{ a: { minW: "194px" } }}
        direction={{ base: "column", tablet: "row" }}
      >
        <Button
          w="100%"
          variant="ghost"
          as="a"
          href="https://www.linkedin.com/in/iamjowill/"
        >
          LinkedIn
        </Button>
        <Button
          w="100%"
          variant="secondary"
          as="a"
          href="mailto:jo@day-job.co.uk"
        >
          Contact
        </Button>
        <Button
          w="100%"
          variant="ghost"
          as="a"
          href="https://medium.com/@heck-yeah"
        >
          Blog
        </Button>
      </Flex>
      <Text variant={"bodysmall"} opacity={0.8}>
        Day Job Studios is a private limited company registered in Scotland with
        company registration number SC787062.
        <br />
        The registered office is at at 69 Gateside Street, West Kilbride, KA23
        9BB.
      </Text>
      <Text variant={"bodysmall"}>©2024 Day Job Studios</Text>
    </Center>
  );
};
