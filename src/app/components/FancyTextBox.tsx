import {
  Box,
  Text,
  TextProps,
  chakra,
  shouldForwardProp,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  AnimatePresence,
  animate,
  isValidMotionProp,
  motion,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
interface CustomBorderBoxProps {
  width: number;
}

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const CustomBorderBox: React.FC<CustomBorderBoxProps> = ({
  width,
}: {
  width: number;
}) => {
  if (width < 1) return;

  const base = useColorModeValue("white", "black");

  const defaultWidth = width * 1.05;
  const adjustedWidth = useMotionValue(defaultWidth);

  useEffect(() => {
    const controls = animate(adjustedWidth, defaultWidth, {
      type: "spring",
      stiffness: 100,
      damping: 10,
    });

    return () => {
      controls.stop();
    };
  }, [width, adjustedWidth]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="221"
      height="93"
      viewBox={`0 0 250 93`}
      fill="none"
    >
      <motion.rect
        x='80"'
        y="85"
        width={adjustedWidth}
        height={"4"}
        fill="#FFBE98"
      />

      <motion.rect
        x='0"'
        y="6.5"
        width={adjustedWidth}
        height={"4"}
        fill="#FFBE98"
      />
      <motion.rect
        x="2"
        y="2.5"
        width="12"
        height="12"
        stroke="#FFBE98"
        strokeWidth="4"
        fill={base}
      />
      <motion.rect
        x="2"
        y="78.5"
        width="12"
        height="12"
        stroke="#FFBE98"
        strokeWidth="4"
        fill={base}
      />
      <motion.rect
        x={adjustedWidth}
        y="78.5"
        width="12"
        height="12"
        stroke="#FFBE98"
        strokeWidth="4"
        fill={base}
      />
      <motion.rect
        x={adjustedWidth}
        y="2.5"
        width="12"
        height="12"
        stroke="#FFBE98"
        strokeWidth="4"
        fill={base}
      />
      <motion.rect x="6" y="15.5" width="4" height="61" fill="#FFBE98" />
      <motion.rect
        x={adjustedWidth}
        y="15.5"
        width="4"
        height="61"
        fill="#FFBE98"
        style={{ transform: "translate(4px, 0px)" }}
      />
    </motion.svg>
  );
};
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
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, interval);

    return () => clearInterval(timer);
  }, [textArray.length, interval]);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [currentIndex]); // Update on text change

  const textVariants = {
    initial: { opacity: 0, y: 20, transform: "translate(-50%, 50%)" },
    animate: { opacity: 1, y: 0, transform: "translate(-50%, -50%)" },
    exit: { opacity: 0, y: -20, transform: "translate(-50%, -150%)" },
  };
  return (
    <Box
      position="relative"
      width={`${textWidth}px`}
      height="93px"
      sx={{ svg: { overflow: "visible" } }}
      // sx={{
      //   rect: {
      //     transition: "all 0.3s ease-out",
      //     // animationDelay: "0.5s",
      //   },
      //   line: {
      //     transition: "all 0.3s ease-out",
      //     // animationDelay: "0.5s",
      //   },
      //   transition: "all 0.3s ease-out",
      // }}
    >
      <CustomBorderBox width={textWidth} />
      <AnimatePresence>
        {textArray.map(
          (text, index) =>
            index === currentIndex && (
              <Text
                as={motion.div}
                key={index} // Important for triggering animations on change
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                {...props}
                p="16px"
                ref={textRef}
              >
                {text}
              </Text>
            )
        )}
        {/* {currentIndex === 0 && (
          <Text
            as={motion.div}
            key={currentIndex} // Important for triggering animations on change
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            {...props}
            p="16px"
            ref={textRef}
          >
            {textArray[0]}
          </Text>
        )} */}
      </AnimatePresence>
    </Box>
  );
};

export default FancyTextBox;
