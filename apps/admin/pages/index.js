import {
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Box,
  Avatar,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  HStack,
  Avatarup,
  VStack,
  IconButton,
  Form,
  Alert,
  FormErrorMessage
} from '@chakra-ui/react'

import { FiEdit2, FiTrash2 } from 'react-icons/fi'

import {TableSkeleton , useDatabase , useUserData, useAllProfileQuery, useAdminClaim } from 'ui'
import { useRef, useState } from "react";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {useMutation} from 'react-query'

import { yupResolver } from '@hookform/resolvers/yup';


export default function Admin() {

  const {database , queryClient} = useDatabase()
  const { session , user , profile } = useUserData()


  const schema = yup
    .object({
      name: yup
        .string()
        .min(3, 'Must be more than 3 characters')
        .required('Can’t be blank'),
      description: yup.string(),
    })
    .required();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { dirtyFields, errors, isSubmitting, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
  });

  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [id, setId] = useState(null)
  const [editing, setEditing] = useState(false)

  const createUserMutation = async ({ email, password }) => {
    const response = await fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to create admin user');
    }
  };

  const { mutate, isLoading:isMutating  } = useMutation(createUserMutation);
  

  const handleUserCreation = async (event) => {
    event.preventDefault();

    mutate({ email, password }, {
      onSuccess: () => {
        queryClient.invalidateQueries('allprofile');
        onClose();
        setEmail('');
        setPassword('');
        console.log('Admin user created successfully');
      },
      onError: (error) => {
        console.error(error.message);
      },
    });

  };

  
  const deleteUserMutation = async (id) => {
    const response = await fetch('/api/deleteUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(id),
    });
  
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to delete admin user');
    }
  };

  const { mutate:deleteUser, isLoading:isDeleting  } = useMutation(deleteUserMutation);
  

  const handleUserDelete = async (id) => {

    deleteUser(id, {
      onSuccess: () => {
        queryClient.invalidateQueries('allprofile');
        
      },
      onError: (error) => {
        console.error(error.message);
      },
    });

  };




  const heads =['Username', 'Email', 'First Name', 'Last Name', 'Action']

  const {isLoading, data, error} = useAllProfileQuery()

  if(isLoading){

    return(
      <TableSkeleton heads={heads} />
    )

  }

  if(error){

    return(
      <Text>{error.message}</Text>
    )
  }

    return (<>



      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        borderRadius='0'
        
      >
        <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px)' />
        <ModalContent borderRadius={0} w='100%'>
          <ModalHeader>Add new User <Text fontWeight='400' fontSize='sm' >Adding new user on the metaverse</Text> </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <HStack spacing='10'>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} {...register('email')} isInvalid={errors.email} placeholder='Email' name='email' value={email}  onChange={(e) => setEmail(e.target.value)} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            </HStack>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input ref={initialRef} {...register('password')} isInvalid={errors.password} placeholder='Password'   name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter display={'flex'}  flexDirection={'column'} alignItems={'center'}>
            <Button colorScheme='blue' w='60%' mb={3} onClick={handleUserCreation}>
            {isMutating ? 'Adding...' : 'Add User'}
            </Button>
            <Button onClick={onClose} w='60%'>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    <Flex justify='end' mb='4'> 
      <Button bg="#00abaf" color="#fff" _hover={{ bg: '#00abaf' }} onClick={onOpen} >Add</Button>
      </Flex>


<Box border='1px' borderColor='gray.200'>
  <Table>
    <Thead>
      <Tr>
      {heads.map((head)=><Th fontWeight='medium' key={head} >{head}</Th>)}
      </Tr>
    </Thead>
    <Tbody>
      {data.map((p) => (
        <Tr key={p.id}>
          <Td>
            <Text >{p.username}</Text>
          </Td>
          <Td>
            <Text>{p.email}</Text>
          </Td>
          <Td>
            <Text>{p.firstname}</Text>
          </Td>
          <Td>
            <Text>{p.lastname}</Text>
          </Td>
          <Td>
            <HStack spacing="1">
              <IconButton
                icon={<FiTrash2 fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Delete member"
                onClick={()=>handleUserDelete(p.id)}
              />
              <IconButton
                icon={<FiEdit2 fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Edit member"
              />
            </HStack>
          </Td>
          
        </Tr>
      ))}
    </Tbody>
  </Table>
  </Box>
  </>       
  )}

