import React from 'react';
import { useRouter } from 'next/router'
import {
  Button,
  Tfoot,
  Thead,
  useDisclosure,
  Tooltip,
  IconButton,
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
  Box,
  Text,
  Input,
  Divider,
  Flex,
  Icon
} from '@chakra-ui/react';
import Link from 'next/link'
import { PageLayout } from 'ui';
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai'
import { GrLocation, GrLanguage } from 'react-icons/gr'
import { AddIcon } from '@chakra-ui/icons'


const Questionnaire = () => {

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
        <MenuItem>Open Journal</MenuItem>
        <MenuItem>Remove Patient</MenuItem>
      </MenuList>
    </Menu>
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  return <PageLayout
    title="Questionnaire"
    description="Questionnaire you've added to a list and marked as your favourites"
    actions={<Tooltip label="Add Care Questionnaire">
    <IconButton
      variant="primary"
      aria-label="Add Care Questionnaire"
      icon={<AddIcon />}
      onClick={() => router.push('/questionnaire/create')}
    />
  </Tooltip>}
    hasDivider
  >
    <Stack spacing="8" divider={<StackDivider />} pt="2">
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Questionnaire</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
            <Th>Mobile number</Th>
            <Th>Questionnaire ID</Th>
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
            <Th>Questionnaire</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
            <Th>Mobile number</Th>
            <Th>Questionnaire ID</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Tfoot>
        <Modal isOpen={isOpen} onClose={onClose}>
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
                <Flex my="7px"><AiOutlineMail /><Text fontSize="15px" ml="10px" mt="-3px">test1@gmail.com</Text></Flex>
                <Flex my="7px"><AiOutlineMobile /><Text fontSize="15px" ml="10px" mt="-3px">IN-8978665567</Text></Flex>
                <Flex my="7px"><GrLocation /><Text fontSize="15px" ml="10px" mt="-3px">Ghaziabad, India</Text></Flex>
                <Flex my="7px"><GrLanguage /><Text fontSize="15px" ml="10px" mt="-3px">English, Hindi</Text></Flex>
              </Box>

              <Text fontWeight="600" pt="15px" pb="5px">
                Pharma / Research / Insurance
              </Text>
              <Flex>
                <Box><Text>Australia</Text></Box>
                <Box mx="20px" w="60%"><Text>Health secure</Text></Box>
                <Box><Text>112255</Text></Box>
              </Flex>
              <Flex>
                <Box ><Text>Australia</Text></Box>
                <Box mx="20px" w="60%"><Text>Australian Unity Health Limited</Text></Box>
                <Box><Text>112333</Text></Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Go to Journal
              </Button>
              <Button variant='ghost' onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Table>
    </Stack>
  </PageLayout>;
};

export default Questionnaire;
