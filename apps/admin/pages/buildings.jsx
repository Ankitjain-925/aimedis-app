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
  Tabs,
  Tab,
  TabList,
  IconButton,
  Stack,
  FormErrorMessage,
} from '@chakra-ui/react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import Link from 'next/link';

import {TableSkeleton, AvatarUpload, useDatabase, Option, CustomSelect,RadioCard, RadioCardGroup } from 'ui'
import { useRef, useState } from "react";
import {useAllBuildingQuery, useAddBuildingMutation, useDeleteBuildingMutation, useUpdateBuildingMutation, useAllTenantQuery} from 'ui';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup';


export default function Building() {

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
  
  const heads =['Icon','Name', 'Description', 'Actions']

  const {isLoading, data:buildings, error} = useAllBuildingQuery()
  const {isLoading:loadingTenants, data:tenants, error:tenantError} = useAllTenantQuery()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [id, setId] = useState(null)
  const [tenant, setTenant] = useState()
  const [editing, setEditing] = useState(false)

  const {queryClient} = useDatabase()

  const { mutate, isLoading:isMutating } = useAddBuildingMutation({
    onSuccess: () => {
      setName('')
      setDescription('')
      onClose()
      queryClient.invalidateQueries('allbuildings');
    },
    onError: (error) => {
      console.log(error)
    },
  });
  const { mutate:deleteBuilding, isLoading:isDeleting } = useDeleteBuildingMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('allbuildings');
    },
    onError: (error) => {
      alert(error)
    },
  });

  const { mutate:updateBuilding, isLoading:isUpdating } = useUpdateBuildingMutation(id,{
    onSuccess: () => {
      queryClient.invalidateQueries('allbuildings');
      setName('')
      setDescription('')
      setEditing(false);
      handleClose()
    },
    onError: (error) => {
      alert(error)
    },
  });

  const editHandler = (id, name, description, tenant)=>{
    console.log(id, name, description)
    setName(name);
    setDescription(description);
    setId(id);
    setTenant(tenant);
    setEditing(true);
    onOpen()
  }

  const handleBuildingAdd =  (e) => {
    const newBuildingData = {
      name,
      description,
      tenant_id:tenant
      
    };
      mutate(newBuildingData)
    //  await onClose()
  };
  const handleBuildingDelete =  (id) => {

      deleteBuilding(id)
    //  await onClose()
  };

  const handleBuildingUpdate =  (id, name, description, tenant) => {

    const updatedBuildingData = {
      name,
      description,
      tenant_id:tenant
      
    };
    updateBuilding(updatedBuildingData)
  //  await onClose()
};

  const handleClose = (e)=>{
    setEditing(false);
    onClose();
  }

  if(isLoading || loadingTenants){

    return(
      <>
      {/* <Tabs  size={'md'} variant="with-line" defaultIndex={1}>
            <TabList>
                <Tab><Link href='/servers'>Servers </Link></Tab>
                <Tab>Buildings</Tab>
                <Tab><Link href='rooms'>Rooms </Link></Tab>
            </TabList>

        </Tabs> */}

      <TableSkeleton heads={heads} />
      </>
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
        isCentered
        borderRadius='0'
        
      >
        <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px)' />
        <ModalContent borderRadius={0} w='100%'>
          <ModalHeader> {editing ? 'Update' : 'Add new'} Building <Text fontWeight='400' fontSize='sm' >{editing ? 'Updating' : 'Adding new'} server on the metaverse</Text> </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <Stack >

          <CustomSelect
          name="Tenant"
          value={tenant}
          onChange={setTenant}
          placeholder="Select Partner"
        >
          {tenants.map((tenant)=>
          <Option key={tenant.id} value={tenant.id}>
              <Text>{tenant.name}</Text>
          </Option>)}
          
          {/* <Option value="dark">
              <Text>Dark</Text>
          </Option>
          <Option value="system">
              <Text>System</Text>
          </Option> */}
        </CustomSelect>
            
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input  {...register('name')} isInvalid={errors.name} placeholder='Building name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder='Describe this server' isInvalid={errors.description} {...register('description')} name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>

            <RadioCardGroup defaultValue="one" spacing="3">
        {['one', 'two', 'three'].map((option) => (
          <RadioCard key={option} value={option}>
            <Text color="emphasized" fontWeight="medium" fontSize="sm">
              Option {option}
            </Text>
            <Text color="muted" fontSize="sm">
              Jelly biscuit muffin icing dessert powder macaroon.
            </Text>
          </RadioCard>
        ))}
      </RadioCardGroup>

      </Stack>

          </ModalBody>

          <ModalFooter display={'flex'}  flexDirection={'column'} alignItems={'center'}>
            <Button colorScheme="blue" w="60%" mb={3}
            onClick={editing ? () => handleBuildingUpdate(id, name, description, tenant) : handleBuildingAdd} // Check if editing is true
            isLoading={editing ? isUpdating : isMutating}
            loadingText={editing ? 'Updating' : 'Adding'} // Change the label of the button
          >
            {editing ? 'Update' : 'Add'}
          </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Tabs  size={'md'} variant="with-line" defaultIndex={1}>
            <TabList>
                <Tab><Link href='/servers'>Servers </Link></Tab>
                <Tab>Buildings</Tab>
                <Tab><Link href='rooms'>Rooms </Link></Tab>
            </TabList>

        </Tabs> */}

      


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
      {buildings.map((p) => (
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
                icon={<FiEdit2 fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Edit member"
                onClick={()=>editHandler(p.id, p.name, p.description)}
              />
              <IconButton
                icon={<FiTrash2 fontSize="1.25rem" />}
                variant="ghost"
                aria-label="Delete member"
                onClick={()=>handleBuildingDelete(p.id)}
                isDisabled={isDeleting}
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

