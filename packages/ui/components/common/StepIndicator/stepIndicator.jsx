import React, { useEffect, useState } from "react";
import { Flex, HStack, Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

export const StepIndicator = (props) => {
  const steps = props.steps;
  const [iconNumber, setIconNumber] = useState(1);

  useEffect(() => {
    setIconNumber(props.active - 1);
  }, [props.active]);

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  const handleSelect = (num) => {
    setIconNumber(num);
  };

  return (
    <>
      <Flex p={20}>
        {[...Array(steps)].map((tag, index) => (
          <>
            {index !== iconNumber ? (
              <CircleIcon
                w={"20px"}
                h={"20px"}
                m={"1px"}
                key={index}
                color={index === iconNumber ? "teal.500" : "gray.200"}
                onClick={() => handleSelect(index)}
              />
            ) : (
              <HStack spacing="24px">
                <Box
                  w="35px"
                  h="16px"
                  bg="teal.500"
                  borderRightRadius="9"
                  borderLeftRadius="9"
                ></Box>
              </HStack>
            )}
          </>
        ))}
      </Flex>
    </>
  );
};

