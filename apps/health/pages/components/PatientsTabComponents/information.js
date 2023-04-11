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
  Flex,
  Radio,
  Box,
  useDisclosure,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { PhoneNumberInput } from 'ui';

export default function Information() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [value, setValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = useColorModeValue("gray.100", "gray.700");
  const border = useColorModeValue("gray.100", "gray.700");
  const submitInformation = () => {
    setIsSubmit(true)
    setTimeout(() => {
      setIsSubmit(false)
    }, 2000)
  }
  return (
    <>
      <Text fontSize='17px' fontWeight='600' pl="10px">
        Infomation
      </Text>
      <Text fontSize="13px" pl="10px" >
        This is your profile information, which is accessible to your trusted doctors and those you share your Profile ID and PIN with.
      </Text>
      <Box
        // mx={["10px", "20px"]}
        bg={bg}
        border={border}
        borderRadius="7px"
        py="12px"
        px="12px"
        mt="10px">
        <Flex
            direction={["column", "row", "row"]}
            justifyContent="space-between">
            <Flex align="center">
              <Box ml="2">
                <Text fontSize="14px" fontWeight="600">
                  Profile id - P_qw231sa
                </Text>
              </Box>
            </Flex>
            <Flex align="center" mt={["2"]}>
              <Box>
                <Text fontSize="14px" fontWeight="600">
                  PIN - 1234
                </Text>
              </Box>
            </Flex>
            <Flex align="center" justifyContent="flex-end" mr="2" mt={["2"]}>
              <Text fontSize={'13px'} onClick={onOpen}>Change ID/Pin</Text>
              {/* <Link fontSize="13px" onClick={onOpen}>Change ID/Pin </Link> */}
            </Flex>
        </Flex>
      </Box>
      <Grid ml="10px">
        <Flex
          mt="20px" 
          direction={["column", "row", "row"]}
          >
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input type='email' height="40px" />
              </FormControl>
            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%" px={'10px'}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>

            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
            </Box>
          </Flex>
        </Flex>
        <Flex
          mt="20px" 
          direction={["column", "row", "row"]}
          >
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                <FormLabel>Date of Birth</FormLabel>
                <Input type='date' height="40px" />
              </FormControl>
            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%" px="15px">
              <RadioGroup>
                <FormLabel>Gender</FormLabel>
                <Stack spacing={'40px'} direction='row'>
                  <Radio value='male' colorScheme='green'>Male</Radio>
                  <Radio value='female' colorScheme='green'>Female</Radio>
                  <Radio value='other' colorScheme='green'>Other</Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                <FormLabel>Title/Degree</FormLabel>
                <Select my="10px" height="40px" placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
            </Box>
          </Flex>
        </Flex>
        <Flex
          mt="20px" 
          direction={["column", "row", "row"]}
          >
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
             
                <FormLabel>Country</FormLabel>
                <Select my="10px" height="40px" placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%" px="15px">
              <FormControl>
                <FormLabel>Citizenship country</FormLabel>
                <Select my="10px" height="40px" placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                <FormLabel>Languages spoken</FormLabel>
                <Select my="10px" height="40px" placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>

            </Box>
          </Flex>
        </Flex>
        <Flex
          mt="20px" 
          direction={["column", "row", "row"]}
          >
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                <FormLabel>Street Address</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%" px="15px">
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>

            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                  <FormLabel>Postal Code</FormLabel>
                  <Input type='number' height="40px" />
                </FormControl>
            </Box>
          </Flex>
        </Flex>
        <Flex
          mt="20px" 
          direction={["column", "row", "row"]}
          >
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                <FormLabel>Blood</FormLabel>
                <Select my="10px" height="40px" placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%" px="15px">
              <FormControl>
                <FormLabel>Rhesus</FormLabel>
                <Select my="10px" height="40px" placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>

            </Box>
          </Flex>
          <Flex flex={1}>
              <Box w="100%">
              <FormControl>
                <FormLabel>Marital Status</FormLabel>
                <Select my="10px" height="40px" placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
  
              </Box>
            </Flex>
        </Flex>
        <Flex
          mt="20px" 
          direction={["column", "row", "row"]}
          >
          <Flex flex={1}>
            <Box w="100%">
              <FormControl>
                <FormLabel>Home telephone number</FormLabel>
                <PhoneNumberInput
                  value={value}
                  placeholder="Enter phone number"
                  height="40px"
                  onChange={(value) => setValue(value)}
                />
              </FormControl>
            </Box>
          </Flex>
          <Flex flex={1}>
            <Box w="100%" pl="15px">
              <FormControl>
                <FormLabel>Mobile phone number</FormLabel>
                <PhoneNumberInput
                  value={value}
                  placeholder="Enter phone number"
                  height="40px"
                  onChange={(value) => setValue(value)}
                />
              </FormControl>
            </Box>
          </Flex>
        </Flex>
        <FormControl>
          <Button
            isLoading={isSubmit}
            loadingText='Submitting'
            colorScheme='teal'
            variant='solid'
            onClick={submitInformation}
            mt="30px"
          >
            Submit
          </Button>
        </FormControl>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit ID and Pin
              <Text fontSize={'13px'}>You can change your ID and PIN as many times as you want.</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Profile ID</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl>
                <FormLabel>PIN</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='teal' mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Grid>
    </>
  );
}