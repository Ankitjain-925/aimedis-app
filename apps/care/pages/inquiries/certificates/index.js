import React from 'react';
import {
  Tfoot,
  Thead,
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Divider,
  Text,
  Input
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'

const Certificates = () => {

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

  const { isOpen, onOpen, onClose } = useDisclosure()
  return <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Case</Th>
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
        <Th>Case</Th>
        <Th>Rcieved On</Th>
        <Th>Patient</Th>
        <Th>Status</Th>
        <Th></Th>
      </Tr>
    </Tfoot>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sick Certificate inquiry</ModalHeader>
        <ModalCloseButton />
        <Divider orientation="horizontal" mb="10px" />
        <ModalBody>

          <Text fontWeight="600" pt="15px" pb="5px">
            Standard Questions
          </Text>
          <Box mb="10px">
            <Text fontSize="13px">How are you feeling?</Text>
            <Text fontSize="15px">Good</Text>
          </Box>
          <Box mb="10px" mt="10px">
            <Text fontSize="13px">
            Is your temperature higher than 38 °C?
            </Text>
            <Text fontSize="15px">no</Text>
          </Box>

          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Which symptoms do you have?</Text>
            <Text fontSize="15px">ABC-1</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Since when?</Text>
            <Text fontSize="15px">2 days</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">
              Have you already been sick at home for the same problem?
            </Text>
            <Text fontSize="15px">no</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">How long do you think you will be unable to work?</Text>
            <Text fontSize="15px">2 days</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Is it a known disease?</Text>
            <Text fontSize="15px">Yes</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Are you taking any medication?</Text>
            <Text fontSize="15px">Yes</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">Do you have any allergies?</Text>
            <Text fontSize="15px">No</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px">What is your profession?</Text>
            <Text fontSize="15px">Student</Text>
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
  </Table>;
};

export default Certificates;