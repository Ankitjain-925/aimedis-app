import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Grid,
  Input,
  Heading,
  Button,
  Select,
  RadioGroup,
  Stack,
  Radio

} from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Rights() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmit1, setIsSubmit1] = useState(false);
  const [value, setValue] = useState("");

  const submitContacts = () => {
    setIsSubmit(true)
    setTimeout(() => {
      setIsSubmit(false)
    }, 2000)
  }
  return (
    <>
      <Text fontSize='17px' as='b' mb="10px"  pl="10px">
        Rights Management
      </Text>
      <Text fontSize='13px' pl="10px">
        Setup who can see your data and who can upload data to your profile
      </Text>
      <Grid m="10px" mt="20px">
        <Text>
          Emergency access to my emergency files for hospital and doctors
        </Text>
        <RadioGroup mt="10px">
          <Stack direction='column'>
            <Radio value='yes' colorScheme='green'>Yes</Radio>
            <Radio value='no' colorScheme='green'>No</Radio>
          </Stack>
        </RadioGroup>

        <RadioGroup mt="30px">
          <Stack direction='column'>
            <Radio colorScheme='green' value='optin' >
              <Text as="b">Opt-In</Text>
            </Radio>
            <Text fontSize="13px">A new item is automatically HIDDEN to Doctors & Nurses in case of a regular profile access (PIN & ID) & must manually be made VISIBLE by me (SHOW ALWAYS or SHOW UNTIL A SPECIFIED DATE.)</Text>
            <Radio colorScheme='green' value='optout' >
              <Text as="b" mt="50px">Opt-Out</Text>
            </Radio>
            <Text fontSize="13px">A new item is automatically VISIBLE to Doctors & Nurses in case of a regular profile access (PIN & ID) & must manually be made INVISIBLE by me (HIDE ALWAYS or HIDE UNTIL A SPECIFIED DATE.)</Text>
          </Stack>
        </RadioGroup>
      </Grid>

      <Grid m="10px" mt="30px">
        <Text as='b' fontSize="14px">
          Apply a right management setting of all items
        </Text>
        <RadioGroup mt="10px">
          <Stack direction='column'>
            <Radio colorScheme='green' value='optin' >
              Make all items VISIBLE now (Until changed)
            </Radio>
            <Radio colorScheme='green' value='optout' >
              Make all items VISIBLE until
            </Radio>
          </Stack>
        </RadioGroup>
        <Input
          mt="10px"
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
        />
        <FormControl>
          <Button
            isLoading={isSubmit1}
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