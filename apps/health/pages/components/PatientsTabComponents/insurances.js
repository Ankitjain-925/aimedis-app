  import {
    FormControl,
    Image,
    Text,
    Box,
    Grid,
    TableContainer,
    useDisclosure,
    Table,
    ModalFooter,
  FormLabel,
  Input,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Flex,
    Button,
    Select,
    Link
  } from '@chakra-ui/react';
  import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
  import React, { useState } from 'react'
  
  export default function Insurance() {
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
    return (
      <>
        <Flex
          direction={["column", "row", "row"]}
          justifyContent="space-between">
          <Flex align="center">
            <Text fontSize='17px' as='b' pl="10px">
            Insurances
            </Text>
          </Flex>
          <Flex align="center">
            <Link fontSize="13px" onClick={onOpen}>Add New Insurance</Link>
          </Flex>
  
        </Flex>
        <Grid m="10px" mt="20px">
        <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Insurance Country</Th>
        <Th>Insurance Company</Th>
        <Th>Insurance Number</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>India</Td>
        <Td>ABC</Td>
        <Td>2534</Td>
        <Td><DeleteIcon /> <EditIcon ml="10px" /></Td>
      </Tr>
      <Tr>
        <Td>India</Td>
        <Td>ABC</Td>
        <Td>2534</Td>
        <Td><DeleteIcon /> <EditIcon ml="10px" /></Td>
      </Tr>
      <Tr>
        <Td>India</Td>
        <Td>ABC</Td>
        <Td>2534</Td>
        <Td><DeleteIcon /> <EditIcon ml="10px" /></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add insurance</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl mt="15px">
            <FormLabel>Insurnace Country</FormLabel>
            <Input type='text' style={{height:"40px"}} />
          </FormControl>
          <FormControl mt="15px">
            <FormLabel>Insurnace Company</FormLabel>
            <Input type='text' style={{height:"40px"}} />
          </FormControl>
          <FormControl mt="15px">
            <FormLabel>Insurnace Number</FormLabel>
            <Input type='text' style={{height:"40px"}} />
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