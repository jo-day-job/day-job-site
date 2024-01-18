import { Button, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { AnimateAllChildren } from "easy-chakra-animate";
import Image from "next/image";
import { useState } from "react";

export const References = () => {
  const quotes = [
    {
      text: "Jo has consistently demonstrated a commitment to both pixel-perfection and creative UX processes, which have greatly impacted the quality of our projects.",
      author: "Ray Clarke",
      position: "Chief Design Officer",
    },
    {
      text: "Jo has shown passion and enthusiasm from the get-go. The client really trusts Jo's input.",
      author: "Billie Mortimer",
      position: "Head of Delivery",
    },
    {
      text: "Her creativity knows no bounds, and she has a knack for transforming vague ideas into visually stunning designs.",
      author: "Sam Morgan",
      position: "Developer",
    },
    {
      text: "Her ability to convey complex design concepts with clarity and impact is truly commendable.",
      author: "Dean Rimington",
      position: "Lead Designer",
    },
    {
      text: "Jo’s excellent client relationship building skills have resulted in lasting partnerships for the organisation, and her internal projects have driven enhanced cross-team collaboration and improved processes.",
      author: "Hannah Zahira",
      position: "User Researcher",
    },
  ];

  // State to hold the current quote index
  const [currentQuote, setCurrentQuote] = useState(0);

  // Function to go to the next quote
  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
    console.log(currentQuote);
  };

  // Function to go to the previous quote
  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <SimpleGrid
      columns={{ base: 1, tablet: 2 }}
      h={{ base: "100%", tablet: "744px", laptop: "1024px" }}
    >
      <Center
        bg="black"
        h="100%"
        flexDirection="column"
        gap={{ base: "120px", tablet: "95px" }}
        px={{ base: "24px", tablet: "64px", laptop: "120px" }}
        py={{ base: "80px", tablet: "64px" }}
      >
        <AnimateAllChildren>
          <Center
            sx={{
              img: {
                w: "auto",
                h: "auto",
                maxH: { base: "100%", tablet: "265px" },
                maxW: { base: "100%", tablet: "395px" },
              },
            }}
          >
            <Image
              alt=""
              width={395}
              height={265}
              src="/assets/images/Group_56.webp"
            />
          </Center>
          <Text variant={"h1"} as="h1" color="white" textAlign={"center"}>
            Don’t just take our word for it
          </Text>
        </AnimateAllChildren>
      </Center>
      <Center
        bg="peachFuzz"
        h="100%"
        minH="100vh"
        flex={1}
        flexDirection={"column"}
        justifyContent={"space-between"}
        // gap="64px"
        px={{ base: "24px", tablet: "64px", laptop: "120px" }}
        py={{ base: "80px", tablet: "64px" }}
        width={"100%"}
        sx={{ "&>*": { w: "100%" } }}
      >
        <AnimateAllChildren width={"100%"}>
          <Flex
            direction={"column"}
            gap={{ base: "8px", laptop: "35px" }}
            h="100%"
            w={"100%"}
          >
            <AnimateAllChildren>
              <Center
                h={{ base: "100%", tablet: "430px", laptop: "637px" }}
                mt={{ laptop: "65px" }}
              >
                <Text variant={"h2"} as="h2" color="black" textAlign={"center"}>
                  {quotes[currentQuote].text}
                </Text>
              </Center>

              <Text variant="body" color="black" textAlign={"center"}>
                {quotes[currentQuote].author}
              </Text>
              <Text variant="body" color="black" textAlign={"center"}>
                {quotes[currentQuote].position}
              </Text>
            </AnimateAllChildren>
          </Flex>
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Button
              variant={"primary"}
              onClick={prevQuote}
              textDecoration={"underline"}
            >
              Prev
            </Button>
            <Button
              variant={"primary"}
              onClick={nextQuote}
              textDecoration={"underline"}
            >
              Next
            </Button>
          </Flex>
        </AnimateAllChildren>
      </Center>
    </SimpleGrid>
  );
};
