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
  IconButton,
  Form,
  Alert,
  FormErrorMessage
} from '@chakra-ui/react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

import {TableSkeleton, AvatarUpload, useDatabase} from 'ui'
import { useRef, useState } from "react";
import {useAllWorldQuery, useAddWorldMutation, useDeleteWorldMutation, useUpdateWorldMutation} from 'ui';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup';






export default function World() {

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
  
  const heads =['Icon','Name', 'Description', 'Action']

  const {isLoading, data:worlds, error} = useAllWorldQuery()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [id, setId] = useState(null)
  const [editing, setEditing] = useState(false)

  const {queryClient} = useDatabase()

  const { mutate, isLoading:isMutating } = useAddWorldMutation({
    onSuccess: () => {
      setName('')
      setDescription('')
      onClose()
      queryClient.invalidateQueries('allworlds');
    },
    onError: (error) => {
      alert(error)
    },
  });
  const { mutate:deleteWorld, isLoading:isDeleting } = useDeleteWorldMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('allworlds');
    },
    onError: (error) => {
      alert(error)
    },
  });

  const { mutate:updateWorld, isLoading:isUpdating } = useUpdateWorldMutation(id,{
    onSuccess: () => {
      queryClient.invalidateQueries('allworlds');
      setName('')
      setDescription('')
      setEditing(false);
      handleClose()
    },
    onError: (error) => {
      alert(error)
    },
  });

  const editHandler = (id, name, description)=>{
    console.log(id, name, description)
    setName(name);
    setDescription(description);
    setId(id);
    setEditing(true);
    onOpen()
  }

  const handleWorldAdd =  (e) => {
    const newWorldData = {
      name,
      description
    };
      mutate(newWorldData)
    //  await onClose()
  };
  const handleWorldDelete =  (id) => {

      deleteWorld(id)
    //  await onClose()
  };

  const handleWorldUpdate =  (id, name, description) => {
    updateWorld({id, name, description})
  //  await onClose()
};

  const handleClose = (e)=>{
    setEditing(false);
    onClose();
  }

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
        onClose={editing ? handleClose: onClose}
        size='xl'
        borderRadius='0'
        isCentered
        
      >
        <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px)' />
        <ModalContent borderRadius={0} w='100%'>
          <ModalHeader> {editing ? 'Update' : 'Add new'} World <Text fontWeight='400' fontSize='sm' >{editing ? 'Updating' : 'Adding new'} world on the metaverse</Text> </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
            <HStack spacing='5'>
              <FormControl w="64px" >
                <AvatarUpload
                  src={''}
                  avatarProps={{ size: 'lg', bg: 'bg-canvas' }}
                  register={() => register('image')}
                />
              </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input  {...register('name')} isInvalid={errors.name} placeholder='World name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            </HStack>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='Describe this world' isInvalid={errors.description} {...register('description')} name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
          <Button onClick={onClose} isDisabled={isMutating}  mr={3}>
              Cancel
            </Button>
            <Button variant={'primary'}
            onClick={editing ? () => handleWorldUpdate(id, name, description) : handleWorldAdd} // Check if editing is true
            isLoading={editing ? isUpdating : isMutating}
            loadingText={editing ? 'Updating' : 'Adding'} // Change the label of the button
          >
            {editing ? 'Update' : 'Add'} {/* Change the label of the button */}
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    <Flex justify='end' mb='4'> 
      <Button bg="#00abaf" color="#fff" _hover={{ bg: '#00abaf' }} onClick={()=>{
        setName('')
        setDescription('')
        onOpen()}} >Add</Button>
      </Flex>
<Box border='1px' borderColor='gray.200'>
  <Table>
    <Thead>
      <Tr>
      {heads.map((head)=><Th fontWeight='medium' key={head} >{head}</Th>)}
      </Tr>
    </Thead>
    <Tbody>
      {worlds.map((p) => (
        <Tr key={p.id}>
          <Td>
          <Avatar name={p.name} src={p.logo_url} boxSize="10" />
          </Td>
          <Td>
            <Text >{p.name}</Text>
          </Td>
          <Td>
            <Text>{p.description}</Text>
          </Td>
          <Td>
            <HStack spacing="1">
              <IconButton
                icon={<FiTrash2 fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Delete member"
                onClick={()=>handleWorldDelete(p.id)}
                isDisabled={isDeleting}
              />
              <IconButton
                icon={<FiEdit2 fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Edit member"
                onClick={()=>editHandler(p.id, p.name, p.description)}
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

