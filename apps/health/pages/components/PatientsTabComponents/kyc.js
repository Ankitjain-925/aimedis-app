import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  Button,
  Checkbox,
  Box,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { PhoneNumberInput } from 'ui';
// import PhoneNumberInput from "";


export default function KYC() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [value, setValue] = useState("");

  const submitContacts = () => {
    setIsSubmit(true)
    setTimeout(() => {
      setIsSubmit(false)
    }, 2000)
  }
  return (
    <>
      <Text fontSize='17px' fontWeight='600' pl="10px">
        KYC / licence
      </Text>
      <Text fontSize="13px" pl="10px">Please enter your healthcare Pharma / Research / Insurance data and upload a copy of your ID and heathcare Pharma / Research / Insurance card into your account</Text>
      <Grid ml="10px">
        <FormControl mt="20px">
          <FormLabel>Country</FormLabel>
          <Input type='text' height="40px" />
        </FormControl>
        <FormControl mt="15px">
          <FormLabel>Insurance Company</FormLabel>
          <Input type='text' height="40px" />
          {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
        </FormControl>
        <FormControl mt="15px">
          <FormLabel>Insurance number</FormLabel>
          <Input type='text' height="40px" />
        </FormControl>
        <FormControl mt="15px">
          <FormLabel>Upload a photo of your ID Card</FormLabel>
          {/* <Box
                  minHeight="100px"
                  borderRadius={"8px"}
                  border={"1px dotted"}>
                  <Box
                    style={{
                      position: "absolute",
                      top: "50%",
                      bottom: "50%",
                      left: "30%",
                      // right:'30%'
                    }}>
                    <Text fontSize="13px" fontWeight={"500"}>
                      Browse or drag here
                    </Text>
                  </Box>
                  <Input
                    opacity={"0"}
                    minHeight="100px"
                    type="File"
                    placeholder="extra small size"
                    height="40px"
                  />
                </Box> */}
          {/* <Input type="File" placeholder='extra small size' height="40px" /> */}
        </FormControl>
        <FormControl mt="15px">
          <FormLabel>Upload a photo of your ID Card</FormLabel>
          <Box
            minHeight="100px"
            borderRadius={"8px"}
            border={"1px dotted"}>
            <Box
              style={{
                position: "absolute",
                top: "50%",
                bottom: "50%",
                left: "30%",
                // right:'30%'
              }}>
              <Text fontSize="13px" fontWeight={"500"}>
                Browse or drag here
              </Text>
            </Box>
            <Input
              opacity={"0"}
              minHeight="100px"
              type="File"
              placeholder="extra small size"
              height="40px"
            />
          </Box>
          {/* <Input type="File" placeholder='extra small size' height="40px" /> */}
        </FormControl>
        <FormControl mt="30px">
          <Checkbox colorScheme='green' defaultChecked>
            By clicking this you accept AIS terms and its privacy policy
          </Checkbox>
        </FormControl>
        <FormControl>
          <Button
            isLoading={isSubmit}
            loadingText='Submitting'
            colorScheme='teal'
            variant='solid'
            onClick={submitContacts}
            mt="15px"
          >
            Submit
          </Button>
        </FormControl>
      </Grid>
    </>
  );
}
