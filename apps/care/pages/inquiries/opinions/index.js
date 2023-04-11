import React from 'react';
import {
  Tfoot,
  Thead,
  Table,
  Tbody,
  Tr,
  Image,
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
  Text,
  Input,
  Divider
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'

const Opinions = () => {

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
        <Th>About</Th>
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
        <Th>About</Th>
        <Th>Rcieved On</Th>
        <Th>Patient</Th>
        <Th>Status</Th>
        <Th></Th>
      </Tr>
    </Tfoot>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Second opinion inquiry</ModalHeader>
        <ModalCloseButton />
        <Divider orientation="horizontal" mb="10px" />
        <ModalBody>

          <Text fontWeight="600" pt="15px" pb="5px">
            Standard Questions
          </Text>
          <Box mb="10px">
            <Text fontSize="13px" fontWeight="600">How would patient like to receive the Second Opinion?</Text>
            <Text fontSize="15px">Online</Text>
          </Box>
          <Box mb="10px" mt="10px">
            <Text fontSize="13px" fontWeight="600"> Patient profession</Text>
            <Text fontSize="15px">Student</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px" fontWeight="600">
              Annotations / Details / Questions
            </Text>
            <Text fontSize="15px">Here is the details</Text>
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px" fontWeight="600">
              Attachements
            </Text>
            <Box>
            <Image src='https://via.placeholder.com/150'  />
            </Box>
            
          </Box>
          <Box mb="15px" mt="10px">
            <Text fontSize="13px" mb="7px" fontWeight="600">
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
          <Button variant='ghost' onClick={onClose}>Reject</Button>
          <Button colorScheme='teal' mr={3} onClick={onClose}>
            Accept
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Table>;
};

export default Opinions;
