import {
  FormControl,
  FormLabel,
  Text,
  Grid,
  Input,
  Button,
  Select,
  RadioGroup,
  Stack,
  Radio

} from '@chakra-ui/react'
import React, { useState } from 'react'
import { PhoneNumberInput } from 'ui';

export default function Donor() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [value, setValue] = useState("");

  const submitDonors = () => {
    setIsSubmit(true)
    setTimeout(() => {
      setIsSubmit(false)
    }, 2000)
  }
  return (
    <>
      <Text fontSize='17px' fontWeight='600'  pl="10px">
        Organ Donor
      </Text>
      <Text fontSize="13px" pl="10px" >
        Here you can easily select to be an organ donor or not at anytime.
      </Text>
      <Grid mt="20px" ml="10px">
        <Text fontWeight='600'>
          In case an organ / tissue of mine is considered to be transplanted after my death, I herewith declare:
        </Text>
        <RadioGroup mt="15px">
          <Stack direction='column'>
            <Radio value='yes' colorScheme='green'>Yes, I herewith agree with a transplantation of one or more organ / tissues of mine after doctors have pronounced me dead</Radio>
            <Radio value='no' colorScheme='green'>Yes, I allow this except for following organ / tissues: </Radio>
            <Select my="10px" height="40px" placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Radio value='yes2' colorScheme='green'>Yes, I allow this only for following organ / tissues: </Radio>
            <Select my="10px" height="40px" placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <Radio value='yes3' colorScheme='green'>No, I DO NOT allow a transplantation of any of my organs or tissues</Radio>
            <Radio value='yes4' colorScheme='green'>Yes or No shall be decided by the following person:</Radio>
            <Grid>
      <FormControl mt="15px">
        <FormLabel>First Name</FormLabel>
        <Input type='text' height="40px"/>
      </FormControl>
      <FormControl mt="15px">
        <FormLabel>Last Name</FormLabel>
        <Input type='text' height="40px"/>
        {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
      </FormControl >
      <FormControl mt="15px">
        <FormLabel>City</FormLabel>
        <Input type='text' height="40px"/>
      </FormControl>
      <FormControl mt="15px">
        <FormLabel>Postal Code</FormLabel>
        <Input type='text' height="40px"/>
      </FormControl>
      <FormControl mt="15px">
        <FormLabel>Mobile</FormLabel>
        <PhoneNumberInput
            value={value}
            placeholder="Enter phone number"
            onChange={(value) => setValue(value)}
            height="40px"
          />
      </FormControl>
      <FormControl mt="15px">
        <FormLabel>Free Text</FormLabel>
        <Input type='text' height="40px"/>
      </FormControl>
      <FormControl mt="15px">
      <Button
        isLoading={isSubmit}
        loadingText='Submitting'
        colorScheme='teal'
        variant='solid'
        onClick={submitDonors}
        mt="15px"
      >
        Submit
      </Button>
      </FormControl>
      </Grid>
          </Stack>
        </RadioGroup>
      </Grid>
    </>
  );
}