import {
  FormControl,
  Image,
  Text,
  Box,
  Grid,
  Flex,
  useColorModeValue,
  Button,
  useDisclosure,
  Select,
  Link,
  ModalFooter,
  FormLabel,
  Input,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'

export default function Trusted() {
  // const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmit1, setIsSubmit1] = useState(false);
  // const [value, setValue] = useState("");

  const submitMyDoctor = () => {
    setIsSubmit1(true)
    setTimeout(() => {
      setIsSubmit1(false)
    }, 2000)
  }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const bg = useColorModeValue("gray.100", "gray.700");
    const border = useColorModeValue("gray.100", "gray.700");
  return (
    <>
      <Text fontSize='17px' as='b' pl="10px">
        Family Doctor
      </Text>
      <Text fontSize="13px" pl="10px">
          Visible on Emergency Data information. Has access to Journal.
      </Text>
      <Grid mt="20px" pl="10px" mb="20px">
        <Select placeholder='Select option' size="md">
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <FormControl>
          <Button
            isLoading={isSubmit1}
            loadingText='Submitting'
            colorScheme='teal'
            variant='solid'
            onClick={submitMyDoctor}
            mt="17px"
            mb="15px"
          >
            Submit
          </Button>
        </FormControl>
      </Grid>
      <Text fontSize='17px' as='b'  pl="10px" mt="30px">
        Trusted Nurses
      </Text>
      <Text fontSize="13px" pl="10px">
        These Nurses have access to your Journal.
      </Text>
      <Grid pl="10px">
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
              <Image
                borderRadius="full"
                boxSize="30px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Box ml="2">
                <Text fontSize="14px" fontWeight="600">
                  Nurse Lili
                </Text>
              </Box>
            </Flex>
            <Flex align="center" mt={["2"]}>
              <Box>
                <Text fontSize="14px" fontWeight="600">
                  Fls989msm
                </Text>
              </Box>
            </Flex>
            <Flex align="center" mt={["2"]}>
              <Box>
                <Text fontSize="14px" fontWeight="600">
                  By Hospital
                </Text>
              </Box>
            </Flex>
            <Flex align="center" justifyContent="flex-end" mr="2" mt={["2"]}>
              <DeleteIcon
                onClick={() => console.log("💧💧💧💧💧💧💧💧💧💧💧💧💧")}
              />
            </Flex>
          </Flex>
        </Box>
      </Grid>
      <Flex 
        mt="25px"
        direction={["column", "row", "row"]}
        justifyContent="space-between">
        <Flex align="center">
        <Text fontSize='17px' as='b'  pl="10px">
            Trusted Doctors
          </Text>
        </Flex>
        <Flex align="center"> 
          <Link fontSize="13px" onClick={onOpen}>Add New Trusted doctor</Link>
        </Flex>

      </Flex>
      <Text fontSize="13px" pl="10px">
          These Doctors have access to your Journal. You can add as many trusted doctors as you want.
      </Text>
      <Grid pl="10px">
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
              <Image
                borderRadius="full"
                boxSize="30px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Box ml="2">
                <Text fontSize="14px" fontWeight="600">
                  Doctor one
                </Text>
              </Box>
            </Flex>
            <Flex align="center" mt={["2"]}>
              <Box>
                <Text fontSize="14px" fontWeight="600">
                  Dls989msm
                </Text>
              </Box>
            </Flex>
            <Flex align="center" mt={["2"]}>
              <Box>
                {/* <Text fontSize="14px" fontWeight="600">
                By Hospital
              </Text> */}
              </Box>
            </Flex>
            <Flex align="center" justifyContent="flex-end" mr="2" mt={["2"]}>
              <DeleteIcon
                onClick={() => console.log("💧💧💧💧💧💧💧💧💧💧💧💧💧")}
              />
            </Flex>
          </Flex>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
            <FormLabel>Find a doctor</FormLabel>
            <Input type='text' style={{height:"40px"}} placeholder="Search by Name or ID"/>
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