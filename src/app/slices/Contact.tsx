import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimateAllChildren } from "easy-chakra-animate";
import Image from "next/image";

export const Contact = () => {
  const base = useColorModeValue("black", "white");
  const highlight = useColorModeValue("white", "black");

  return (
    <Flex
      direction="column"
      bg={base}
      color={highlight}
      overflow={"hidden"}
      py={{ base: "52px", tablet: "120px" }}
      alignItems={"center"}
    >
      <Flex w="100%" h="full" justify="center" align="center">
        <Box w="40%" display={{ base: "none", tablet: "block" }}>
          <Image
            alt=""
            src="/assets/images/image_8.1.webp"
            width={312}
            height={380}
          />
        </Box>
        <Flex
          direction={"column"}
          textAlign={"center"}
          justifyContent={"center"}
          p={{ base: "24px", tablet: "40px" }}
          gap="16px"
          align="center"
          w="100%"
        >
          <AnimateAllChildren>
            <Text variant={"h2"} as="h2">
              Available for new contracts
            </Text>
            <Button
              variant="primary"
              borderRadius="112px  !important"
              h={{ base: "68px !important", tablet: "106px  !important" }}
              fontSize={{
                base: "24px !important",
                tablet: "48px !important",
                laptop: "64px !important",
              }}
              w="100%"
              p="32px !important"
              as="a"
              href="mailto:jo@day-job.co.uk"
            >
              February 2024
            </Button>
          </AnimateAllChildren>
        </Flex>
        <Box w="40%" display={{ base: "none", tablet: "block" }} />
      </Flex>
      <Center w="100%" display={{ base: "flex", tablet: "none" }}>
        <Image
          alt=""
          src="/assets/images/Group_57.webp"
          width={414}
          height={404}
        />
      </Center>
      <Flex w="100%" h="full" justify="center" align="center">
        <Box w="40%" display={{ base: "none", tablet: "block" }} />

        <Center
          flexDirection={"column"}
          textAlign={"center"}
          justifyContent={"center"}
          p={{ base: "24px", tablet: "40px" }}
          gap={{ base: "24px", tablet: "40px" }}
          w="100%"
        >
          <AnimateAllChildren>
            <Text variant={"h1"} as="h1">
              Get in touch
            </Text>
            <Flex direction={"column"} gap="24px" alignItems={"center"}>
              <Text variant={"body"}>
                To see a sample of my work, discuss potential contracts or have
                a general chat, send me an email and I’ll be in touch ASAP
              </Text>
              <Button
                variant="primary"
                w="fit-content"
                as="a"
                href="mailto:jo@day-job.co.uk"
              >
                Contact
              </Button>
            </Flex>
          </AnimateAllChildren>
        </Center>
        <Box w="40%" display={{ base: "none", tablet: "block" }}>
          <Image
            alt=""
            src="/assets/images/image_8.webp"
            width={414}
            height={404}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
