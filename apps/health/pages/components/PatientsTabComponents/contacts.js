import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  Text,
  Button
} from '@chakra-ui/react'
import React, {useState } from 'react'
 import { PhoneNumberInput } from 'ui';
// import PhoneNumberInput from "";


export default function Contacts() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [value, setValue] = useState("");

  const submitContacts = ()=>{
    setIsSubmit(true)
    setTimeout(()=>{
      setIsSubmit(false)
    }, 2000)
  }
  return ( 
    <>
     <Text fontSize='17px' as='b'  pl="10px" >
        Emergency Contacts
      </Text>
      <Grid m="10px" mt="20px">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type='text' style={{height:"40px"}}/>
      </FormControl>
      <FormControl mt="15px">
        <FormLabel>Relation</FormLabel>
        <Input type='text' style={{height:"40px"}}/>
        {/* <FormErrorMessage>Email is required.</FormErrorMessage> */}
      </FormControl>
      <FormControl mt="15px">
        <FormLabel>Email Address</FormLabel>
        <Input type='email' style={{height:"40px"}}/>
      </FormControl>
      <FormControl mt="15px">
        <FormLabel>Mobile</FormLabel>
        <PhoneNumberInput
            value={value}
            placeholder="Enter phone number"
            style={{height:"40px"}}
            onChange={(value) => setValue(value)}
          />
      </FormControl>
      <FormControl mt="15px">
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
