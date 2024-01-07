import { Box, Text, TextProps } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const CustomBorderBox = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="228"
    height="93"
    viewBox="0 0 228 93"
    fill="none"
  >
    <rect
      x="2"
      y="2.5"
      width="12"
      height="12"
      stroke="#FFBE98"
      strokeWidth="4"
    />
    <rect
      x="2"
      y="78.5"
      width="12"
      height="12"
      stroke="#FFBE98"
      strokeWidth="4"
    />
    <rect
      x="214"
      y="78.5"
      width="12"
      height="12"
      stroke="#FFBE98"
      strokeWidth="4"
    />
    <rect
      x="214"
      y="2.5"
      width="12"
      height="12"
      stroke="#FFBE98"
      strokeWidth="4"
    />
    <rect x="6" y="15.5" width="4" height="61" fill="#FFBE98" />
    <rect x="218" y="15.5" width="4" height="61" fill="#FFBE98" />
    <rect
      x="214"
      y="82.5"
      width="4"
      height="199"
      transform="rotate(90 214 82.5)"
      fill="#FFBE98"
    />
    <rect
      x="212"
      y="6.5"
      width="4"
      height="197"
      transform="rotate(90 212 6.5)"
      fill="#FFBE98"
    />
  </motion.svg>
);

interface FancyTextBoxProps extends TextProps {
  textArray: string[];
  interval?: number; // in milliseconds
}

const FancyTextBox: React.FC<FancyTextBoxProps> = ({
  textArray,
  interval = 3000,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, interval);

    return () => clearInterval(timer);
  }, [textArray.length, interval]);

  return (
    <Box position="relative" width="228px" height="93px">
      <CustomBorderBox />
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        {...props}
      >
        {textArray[currentIndex]}
      </Text>
    </Box>
  );
};

export default FancyTextBox;
