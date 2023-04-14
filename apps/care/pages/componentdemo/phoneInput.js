import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { StepIndicator, PhoneNumberInput, DropZone } from "ui";

const phoneInput=()=> {
  return (
    <>
           <Box>
          <Text>Step Indicator</Text>
          <StepIndicator active={1} steps={5} />
          </Box>

          <Box>
          <Text>Phone number Input</Text>
          <PhoneNumberInput onChange={(number)=>{console.log(number)}}/>
          </Box>

          <Box mt="20px">
          <Text>DropZone with Image Preview</Text>
          <DropZone />
          </Box>
    </>
  );
}

export default phoneInput;