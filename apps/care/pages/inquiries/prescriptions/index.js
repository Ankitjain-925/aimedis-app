import React from 'react';
import {
  TabPanels,
  TabPanel,
  TabList,
  Tabs,
  Tab,
  Tfoot,
  Thead,
  TableContainer,
  useDisclosure,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  WrapItem,
  Wrap,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  Input,
  Divider
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'

const Prescriptions = () => {

  const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props} mt="3px">
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )
  const Actions = (props) => (
    <Menu>
      <MenuButton >
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onOpen}>See detail</MenuItem>
        {props.status == "free" && <MenuItem onClick={onOpen}>Approve</MenuItem>}
        {props.status == "free" && <MenuItem>Decline</MenuItem>}
        <MenuItem>Remove</MenuItem>
      </MenuList>
    </Menu>
  )
  const Actions2 = (props) => (
    <Menu>
      <MenuButton >
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>See detail</MenuItem>
        {(!props.status || props.status !== "handled")&& <MenuItem>Handle</MenuItem>}
      </MenuList>
    </Menu>
  )

  const { isOpen, onOpen, onClose } = useDisclosure()

  return <Tabs>
    <TabList>
      <Tab>Recieved</Tab>
      <Tab>Sent</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Medicine</Th>
                <Th>Rcieved On</Th>
                <Th>Patient</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>ABC</Td>
                <Td>21 / 01 / 2023</Td>
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
                <Td>
                  <Wrap>
                    <WrapItem>
                      <CircleIcon color='red.500' />
                    </WrapItem>
                    <WrapItem>
                      Rejected
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td><Actions /></Td>
              </Tr>
              <Tr>
                <Td>ABC-2</Td>
                <Td>21 / 02 / 2023</Td>
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
                <Td>
                  <Wrap>
                    <WrapItem>
                      <CircleIcon color='orange.500' />
                    </WrapItem>
                    <WrapItem>
                      Pending
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td><Actions /></Td>
              </Tr>
              <Tr>
                <Td>ABC-3</Td>
                <Td>23 / 02 / 2023</Td>
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
                <Td>
                  <Wrap>
                    <WrapItem>
                      <CircleIcon color='gray.500' />
                    </WrapItem>
                    <WrapItem>
                      Sent Request
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td><Actions status="free" /></Td>
              </Tr>
              <Tr>
                <Td>ABC-4</Td>
                <Td>23 / 02 / 2023</Td>
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
                <Td>
                  <Wrap>
                    <WrapItem>
                      <CircleIcon color='green.500' />
                    </WrapItem>
                    <WrapItem>
                      Answered
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td><Actions /></Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Medicine</Th>
                <Th>Rcieved On</Th>
                <Th>Patient</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel>
        <TableContainer>
          <Table variant='simple'>

            <Thead>
              <Tr>
                <Th>Pharmacist</Th>
                <Th>Recieved On</Th>
                <Th>Patient</Th>
                <Th>Remark</Th>
                <Th>Status</Th>
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
                    <WrapItem>Pharmist1 Tioluwani</WrapItem>
                  </Wrap>
                </Td>
                <Td>23 / 02 / 2023</Td>
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
                <Td>ABC-2</Td>
                <Td>
                  <Wrap>
                    <WrapItem>
                      <CircleIcon color='gray.500' />
                    </WrapItem>
                    <WrapItem>
                      Not Handled
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td><Actions2 /></Td>
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
                    <WrapItem>Pharmist1 Tioluwani</WrapItem>
                  </Wrap>
                </Td>
                <Td>23 / 02 / 2023</Td>
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
                <Td>ABC-1</Td>
                <Td>
                  <Wrap>
                    <WrapItem>
                      <CircleIcon color='green.500' />
                    </WrapItem>
                    <WrapItem>
                      Handled
                    </WrapItem>
                  </Wrap>
                </Td>
                <Td><Actions2 status="handled" /></Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Pharmacist</Th>
                <Th>Recieved On</Th>
                <Th>Patient</Th>
                <Th>Remark</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </TabPanel>
    </TabPanels>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Prescription inquiry</ModalHeader>
        <ModalCloseButton />
        <Divider orientation="horizontal" mb="10px" />
        <ModalBody>

          <Text fontWeight="600" pt="15px" pb="5px">
            Standard Questions
          </Text>
          <Box mb="10px">
            <Text fontSize="13px">Is this a follow-up prescription?</Text>
            <Text fontSize="15px">Yes</Text>
          </Box>
          <Box mb="10px" mt="10px">
            <Text fontSize="13px">
              How would you like to receive the prescription?
            </Text>
            <Text fontSize="15px">Online</Text>
          </Box>

          <Text fontWeight="600" pt="15px" pb="5px">
            Medicine Inquiry
          </Text>
          <Box mb="15px">
            <Text fontSize="13px">
              Medicine / Substance
            </Text>
            <Text fontSize="15px">ABC-1</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Dose</Text>
            <Text fontSize="15px">50-mg</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Trade name</Text>
            <Text fontSize="15px">ABC-34</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">
              ATC code if applicable
            </Text>
            <Text fontSize="15px">CODE123</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Manufacturer</Text>
            <Text fontSize="15px">India</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Pack size</Text>
            <Text fontSize="15px">10</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">
              Annotations / Details / Questions
            </Text>
            <Text fontSize="15px">Here is the details</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px" mb="7px">
              Upload scenned prescription
            </Text>
            <Box
              minHeight="100px"
              borderRadius={"8px"}
              border={"1px dotted"}>
              <Box
                position="relative"
                top="50px"
                left="27%">
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
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Accept
          </Button>
          <Button variant='ghost' onClick={onClose}>Reject</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Tabs>;
};

export default Prescriptions;
