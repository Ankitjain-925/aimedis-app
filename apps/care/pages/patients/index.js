import React from 'react';
import { PageLayout, PhoneNumberInput } from 'ui';
import {
  Tfoot,
  Checkbox,
  Thead,
  useDisclosure,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Wrap,
  WrapItem,
  Avatar,
  Menu,
  MenuButton,
  FormControl,
  Input,
  FormLabel,
  MenuList,
  StackDivider,
  Stack,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Spacer,
  ButtonGroup,
  Box,
  Text,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { GrLocation, GrLanguage } from 'react-icons/gr'
const Patients = () => {
  const Actions = (props) => (
    <Menu>
      <MenuButton >
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem onClick={information.onOpen}>See detail</MenuItem>
        <MenuItem>Open Journal</MenuItem>
        <MenuItem>Remove Patient</MenuItem>
      </MenuList>
    </Menu>
  )

  const information = useDisclosure()
  const request = useDisclosure()
  const access = useDisclosure()
  const addition = useDisclosure()


  return <PageLayout
    title="Patient"
    description="Patients you've added to a list and marked as your favourites"
    actions={<></>}
    hasDivider
  >
    <Stack spacing="8" divider={<StackDivider />} pt="2">
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'></Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal' onClick={addition.onOpen}>Add New Patient</Button>
          <Button colorScheme='teal' onClick={access.onOpen}>Patient Data Access</Button>
          <Button colorScheme='teal' onClick={request.onOpen}>Private Doctor Request</Button>
        </ButtonGroup>
      </Flex>

      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Patient</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
            <Th>Mobile number</Th>
            <Th>Patient ID</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Wrap>
                <WrapItem>
                  <Avatar
                    size='xs'
                    name='Kola Tioluwani'
                    src='https://bit.ly/tioluwani-kolawole'
                  />{' '}
                </WrapItem>
                <WrapItem>Kola Tioluwani</WrapItem>
              </Wrap>
            </Td>
            <Td>23</Td>
            <Td>Male </Td>
            <Td>IN- 8946686744</Td>
            <Td>P_25675443</Td>
            <Td></Td>
            <Td><Actions /></Td>
          </Tr>
          <Tr>
            <Td>
              <Wrap>
                <WrapItem>
                  <Avatar
                    size='xs'
                    name='Kola Tioluwani'
                    src='https://bit.ly/tioluwani-kolawole'
                  />{' '}
                </WrapItem>
                <WrapItem>Kola Tioluwani</WrapItem>
              </Wrap>
            </Td>
            <Td>23</Td>
            <Td>Male </Td>
            <Td>IN- 8946686744</Td>
            <Td>P_25675443</Td>
            <Td>By Hospital</Td>
            <Td><Actions /></Td>
          </Tr>
          <Tr>
            <Td>
              <Wrap>
                <WrapItem>
                  <Avatar
                    size='xs'
                    name='Kola Tioluwani'
                    src='https://bit.ly/tioluwani-kolawole'
                  />{' '}
                </WrapItem>
                <WrapItem>Kola Tioluwani</WrapItem>
              </Wrap>
            </Td>
            <Td>23</Td>
            <Td>Male </Td>
            <Td>IN- 8946686744</Td>
            <Td>P_25675443</Td>
            <Td></Td>
            <Td><Actions /></Td>
          </Tr>
          <Tr>
            <Td>
              <Wrap>
                <WrapItem>
                  <Avatar
                    size='xs'
                    name='Kola Tioluwani'
                    src='https://bit.ly/tioluwani-kolawole'
                  />{' '}
                </WrapItem>
                <WrapItem>Kola Tioluwani</WrapItem>
              </Wrap>
            </Td>
            <Td>23</Td>
            <Td>Male </Td>
            <Td>IN- 8946686744</Td>
            <Td>P_25675443</Td>
            <Td></Td>
            <Td><Actions /></Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Patient</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
            <Th>Mobile number</Th>
            <Th>Patient ID</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Tfoot>

        <Modal isOpen={information.isOpen} onClose={information.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Patient Information</ModalHeader>
            <ModalCloseButton />
            <Divider orientatioDCXn="horizontal" mb="10px" />
            <ModalBody>
              <Flex>
                <Box p='4'>
                  <Avatar
                    size='lg'
                    name='Kola Tioluwani'
                    src='https://bit.ly/tioluwani-kolawole'
                  />{' '}
                </Box>

                <Box p='4'>
                  <Text fontWeight="600" fontSize="15px">Kola Tioluwani</Text>
                  <Text fontSize="13px">Male</Text>
                  <Text fontSize="13px">10-10-1999 (23 Years)</Text>
                </Box>
              </Flex>

              <Text fontWeight="600" pt="15px" pb="5px">
                Contact Information
              </Text>
              <Box mb="10px">
                <Flex my="7px"><AiOutlineMail /><Text fontSize="13px" ml="10px" mt="-3px">test1@gmail.com</Text></Flex>
                <Flex my="7px"><AiOutlineMobile /><Text fontSize="13px" ml="10px" mt="-3px">IN-8978665567</Text></Flex>
                <Flex my="7px"><GrLocation /><Text fontSize="13px" ml="10px" mt="-3px">Ghaziabad, India</Text></Flex>
                <Flex my="7px"><GrLanguage /><Text fontSize="13px" ml="10px" mt="-3px">English, Hindi</Text></Flex>
              </Box>

              <Text fontWeight="600" pt="15px" pb="5px">
                Pharma / Research / Insurance
              </Text>
              <Flex>
                <Box><Text fontSize="13px">Australia</Text></Box>
                <Box mx="20px" w="60%"><Text fontSize="13px">Health secure</Text></Box>
                <Box><Text fontSize="13px">112255</Text></Box>
              </Flex>
              <Flex>
                <Box ><Text fontSize="13px">Australia</Text></Box>
                <Box mx="20px" w="60%"><Text fontSize="13px">Australian Unity Health Limited</Text></Box>
                <Box><Text fontSize="13px">112333</Text></Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' onClick={information.onClose}>Cancel</Button>
             <Button colorScheme='teal' mr={3}>
                Go to Journal
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={access.isOpen} onClose={access.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Patient Data Access
              <Text fontSize="13px">Healthdata access for non-connected patient</Text></ModalHeader>
            <ModalCloseButton />
            <Divider orientatioDCXn="horizontal" mb="10px" />
            <ModalBody>
            <FormControl>
              <FormLabel>Patient ID</FormLabel>
              <Input />
            </FormControl>
            <FormControl mt="10px">
              <FormLabel>Pin</FormLabel>
              <Input />
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='teal' mr={3}>
                View Data
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={request.isOpen} onClose={request.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Private Doctor Request
              <Text fontSize="13px">Ask patient to become a private doctor</Text></ModalHeader>
            <ModalCloseButton />
            <Divider orientatioDCXn="horizontal" mb="10px" />
            <ModalBody>
            <FormControl>
              <FormLabel>Email or ID</FormLabel>
              <Input />
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='teal' mr={3}>
                Ask
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={addition.isOpen} onClose={addition.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              New Patient
              <Text fontSize="13px">Add new patient in your list</Text></ModalHeader>
            <ModalCloseButton />
            <Divider orientatioDCXn="horizontal" mb="10px" />
            <ModalBody>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input />
            </FormControl>
            <FormControl mt="10px">
              <FormLabel>Last Name</FormLabel>
              <Input />
            </FormControl>
            <FormControl mt="10px">
              <FormLabel>E-mail address</FormLabel>
              <Input type="email"/>
            </FormControl>
            <FormControl mt="10px">
              <FormLabel>Password</FormLabel>
              <Input type="password"/>
            </FormControl>
            <FormControl mt="10px">
              <FormLabel>Mobile</FormLabel>
              <PhoneNumberInput
                placeholder=""
                height="40px"
                onChange={(value) => console.log(value)}
              />
            </FormControl>
            <FormControl mt="10px">
              <Checkbox>Activate 2 factor authentication</Checkbox>
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='teal' mr={3}>
                Create Account
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Table>
    </Stack>
  </PageLayout>;

};

export default Patients;