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
        <MenuItem>See detail</MenuItem>
        {props.status == "free" && <MenuItem>Approve</MenuItem>}
        {props.status == "free" && <MenuItem>Decline</MenuItem>}
        <MenuItem>Remove</MenuItem>
      </MenuList>
    </Menu>
  )

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
          </Table>;
};

export default Certificates;