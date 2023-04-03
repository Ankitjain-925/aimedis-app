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
  Form,
  Alert,
  FormErrorMessage
} from '@chakra-ui/react'

import {TableSkeleton , useDatabase , useAllProfileQuery , useAddProfileMutation } from 'ui'
import { useRef, useState } from "react";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup';





  



export default function Admin() {

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

  const {queryClient} = useDatabase()

  const handleUserCreation = async (event) => {
    event.preventDefault();

    // Call the Supabase API to create the admin user
    const response = await fetch('http://app.localhost:3001/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // Handle the response from the API
    if (response.ok) {
      console.log('Admin user created successfully');
      setEmail('')
      setPassword('')
      onClose()
      queryClient.invalidateQueries('allprofile');
    } else {
      console.error('Failed to create admin user');
    }

  };


  const heads =['Username', 'Email', 'First Name', 'Last Name']

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
            {'Add User'}
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
          
        </Tr>
      ))}
    </Tbody>
  </Table>
  </Box>
  </>       
  )}

