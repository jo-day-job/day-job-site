import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import FancyTextBox from "../components/FancyTextBox";
import Link from "next/link";
import { AnimateAllChildren } from "easy-chakra-animate";

export const Intro = () => {
  const base = useColorModeValue("white", "black");

  return (
    <Flex
      direction="column"
      // h={{ base: "100%", tablet: "100vh" }}
      bg={base}
      overflow={"hidden"}
      // px="80px"
      py="64px"
      alignItems={"center"}
      px={{ base: "24px", tablet: "80px" }}
    >
      <AnimateAllChildren>
        <Center
          w="100%"
          maxW={{ base: "100%", tablet: "1200px" }}
          flexDirection={{ base: "column", tablet: "row" }}
        >
          <Flex
            direction="column"
            minW={{ base: "100%", tablet: "700px" }}
            zIndex={1}
            alignItems={{ base: "center", tablet: "flex-start" }}
          >
            <AnimateAllChildren>
              <Text
                variant="h1"
                as="h1"
                whiteSpace={{ base: "normal", tablet: "nowrap" }}
                textAlign={{ base: "center", tablet: "left" }}
              >
                Day Job Studios is the home of
              </Text>
              <Flex
                alignItems="center"
                flexDirection={{ base: "column", tablet: "row" }}
                gap="8px"
              >
                <FancyTextBox
                  textArray={["Product", "UX", "Product", "UI", "digital"]}
                  interval={3000}
                  variant={"h1"}
                  // as="h1"
                />
                <Text
                  as="h1"
                  variant="h1"
                  w="100%"
                  whiteSpace={{ base: "normal", tablet: "nowrap" }}
                  textAlign={{ base: "center", tablet: "left" }}
                >
                  designer Jo Williamson
                </Text>
              </Flex>
            </AnimateAllChildren>
          </Flex>
          <Box
            w="100%"
            maxW={{ base: "100%", tablet: "150px", laptop: "393px" }}
            sx={{
              img: {
                // h: "fit-content",
                w: "100%",
                maxH: "350px",
                transform: "rotate(5.78deg)",
              },
            }}
            display={{ base: "none", tablet: "block" }}
          >
            <Image
              alt=""
              width={261}
              height={350}
              src="/assets/images/Group 53.png"
            />
          </Box>
        </Center>
        <Center w="100%" display={{ base: "flex", tablet: "none" }}>
          <Image
            alt=""
            width={261}
            height={350}
            src="/assets/images/Group 58.png"
          />
        </Center>
        <Center
          w="100%"
          flexDirection={{ base: "column", tablet: "row" }}
          maxW={{ base: "100%", tablet: "1200px" }}
        >
          <Box
            w="100%"
            sx={{
              img: {
                w: "auto",
                h: "fit-content",
                max: "350px",
                transform: "rotate(-5.78deg)",
              },
            }}
            display={{ base: "none", tablet: "block" }}
          >
            <Image
              alt=""
              width={261}
              height={350}
              src="/assets/images/Group 52.png"
            />
          </Box>
          <Flex
            direction="column"
            minW={{ base: "100%", tablet: "700px" }}
            zIndex={1}
            gap="24px"
          >
            <AnimateAllChildren>
              <Text variant="body" fontWeight="bold">
                Jo Williamson is a digital product designer based in the North
                East of England. With a first-class degree in Interaction Design
                from Northumbria University and six+ years experience designing
                for web and mobile.
              </Text>
              <Text variant="body">
                She’s adept at working in cross functional teams, working
                closely with product owners, delivery managers, developers and
                stakeholders. Having worked with in sectors from fintech to
                cheese-tech Jo is a dab hand at all things interface and
                experience.
              </Text>
              <Button
                variant={"primary"}
                ml="auto"
                w={{ base: "100%", tablet: "auto" }}
                as="a"
                href="mailto:jo@day-job.co.uk"
              >
                Let’s work together
              </Button>
            </AnimateAllChildren>
          </Flex>
        </Center>
      </AnimateAllChildren>
    </Flex>
  );
};
