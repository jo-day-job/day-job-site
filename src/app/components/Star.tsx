import { chakra, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MotionBox = motion(chakra.div);

const Star: React.FC = () => {
  const base = useColorModeValue("#FFFFFF", "#252525");
  console.log("🚀 ~ file: Star.tsx:9 ~ base:", base);

  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    // Update the key periodically to trigger a re-render
    const interval = setInterval(() => {
      setKey(Math.random()); // Update the key with a new random number
    }, 4000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  // Randomize initial position and animation delay
  const initialY = Math.random() * 100;
  const delay = Math.random() * 2;

  const randomAngle = Math.random() * 60;

  const randomNegative = Math.random() < 0.5 ? 1 : -1;

  return (
    <MotionBox
      key={key}
      initial={{ opacity: 0, y: initialY }}
      animate={{
        opacity: [0, 1, 0],
        y: [initialY, initialY + 50],
        fill: [base, base, "#FFBE98", "#FFBE98"],
        rotate: [0, randomAngle * randomNegative],
      }}
      transition={{ duration: 2, delay }}
      style={{ width: 40, height: 41, position: "absolute" }}
      top={`${Math.random() * 100}%`}
      left={`${Math.random() * 100}%`}
      zIndex={Math.random() * 3}
    >
      {/* Insert your SVG star here */}
      <motion.svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M39.3941 20.3014C38.1335 20.8257 36.8695 21.3424 35.6069 21.8633C34.4493 22.3407 33.2937 22.8222 32.1449 23.3214C27.8741 25.1776 24.9269 28.321 23.2694 32.6729C22.3807 35.0065 21.5137 37.3476 20.6338 39.6839C20.5803 39.8257 20.5498 39.9837 20.4292 40.1153C20.3961 40.1512 20.3609 40.1858 20.3121 40.2163C20.2606 40.1899 20.2247 40.1526 20.1881 40.1153C20.0262 39.9539 19.9748 39.7145 19.884 39.5069C18.6275 36.6321 17.6846 33.6155 16.1748 30.858C14.289 27.4129 11.4406 25.0128 7.7734 23.6049C6.6036 23.1559 5.43039 22.7151 4.2572 22.2736C3.0962 21.8362 1.93517 21.3974 0.775528 20.9552C0.532354 20.8623 0.245883 20.8297 0 20.492C0.993692 20.0709 1.9596 19.6694 2.91875 19.253C3.36174 19.061 3.80879 18.8793 4.2572 18.7002C6.05628 17.9827 7.88178 17.3222 9.5657 16.3483C13.0358 14.3422 15.435 11.4301 16.8094 7.65668C17.6547 5.3339 18.5462 3.02807 19.4166 0.714779C19.4769 0.555405 19.5189 0.385854 19.7858 0.216307C20.6054 2.20407 21.4337 4.10502 22.1775 6.03921C23.2714 8.88351 24.6431 11.5284 26.9286 13.6301C28.9173 15.4592 31.2515 16.6311 33.7645 17.5256C34.3816 17.7454 34.9939 17.978 35.6069 18.2079C36.8668 18.6806 38.1226 19.1621 39.3791 19.6429C39.5661 19.7148 39.8885 19.6985 39.8635 19.9962C39.8452 20.2106 39.5709 20.2275 39.3941 20.3014Z"
          fill="inherit"
        />
      </motion.svg>
    </MotionBox>
  );
};

export default Star;
