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
  Stack,
  TabList,
  IconButton,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Link from "next/link";

import {
  TableSkeleton,
  AvatarUpload,
  useDatabase,
  Option,
  CustomSelect,
  RadioCard,
  RadioCardGroup,
} from "ui";
import { useRef, useState } from "react";
import {
  useAllServerQuery,
  useAddServerMutation,
  useDeleteServerMutation,
  useUpdateServerMutation,
  useAllBuildingQuery,
  useAllWorldQuery,
  useAllRoomQuery
} from "ui";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

export default function Server() {
  const schema = yup
    .object({
      name: yup
        .string()
        .min(3, "Must be more than 3 characters")
        .required("Can’t be blank"),
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

  const heads = ["Icon", "Name", "Description","Space","Space Name", "Actions"];

  const { isLoading, data: servers, error } = useAllServerQuery();
  const { worldLoading, data: worlds, worldError } = useAllWorldQuery();
  const { buildingLoading, data: buildings, buildingError } = useAllBuildingQuery();
  const { roomLoading, data: rooms, roomError } = useAllRoomQuery();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [space, setSpace] = useState(null);
  const [id, setId] = useState(null);
  const [editing, setEditing] = useState(false);

  const [radioValue, setRadioValue] = useState('world');

  const handleRadioChange = (newVal) => {
    setRadioValue(newVal);
    setSpace(null)
  };

  const { queryClient } = useDatabase();

  const { mutate, isLoading: isMutating } = useAddServerMutation({
    onSuccess: () => {
      setName("");
      setDescription("");
      setSpace(null);
      setRadioValue("world");
      onClose();
      queryClient.invalidateQueries("allservers");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { mutate: deleteServer, isLoading: isDeleting } =
    useDeleteServerMutation({
      onSuccess: () => {
        queryClient.invalidateQueries("allservers");
      },
      onError: (error) => {
        alert(error);
      },
    });

  const { mutate: updateServer, isLoading: isUpdating } =
    useUpdateServerMutation(id, {
      onSuccess: () => {
        queryClient.invalidateQueries("allservers");
        setName("");
        setDescription("");
        setSpace(null);
        setRadioValue("world");
        setEditing(false);
        handleClose();
      },
      onError: (error) => {
        alert(error);
      },
    });

  const editHandler = (id, name, description , space , radioValue) => {
    console.log(id, name, description, space);
    setName(name);
    setDescription(description);
    setId(id);
    setSpace(space);
    setRadioValue(radioValue);
    setEditing(true);
    onOpen();
  };

  const handleServerAdd = (e) => {
    let newServerData;

    if(radioValue=='world'){

   
     newServerData = {
      name,
      description,
      world_id:space
    };
  }
    if(radioValue=='building'){

    
     newServerData = {
      name,
      description,
      building_id:space
    };
  }
    if(radioValue=='room'){

    
     newServerData = {
      name,
      description,
      room_id:space
    };
  }
    
    mutate(newServerData);
    //  await onClose()
  };
  const handleServerDelete = (id) => {
    deleteServer(id);
    //  await onClose()
  };

  const handleServerUpdate = (id, name, description, space) => {
    // updateServer({ id, name, description });

    let updatedServerData;

    if (radioValue == "world") {
      updatedServerData = {
        name,
        description,
        world_id: space,
        building_id: null,
        room_id: null,
      };
    }
    if (radioValue == "building") {
      updatedServerData = {
        name,
        description,
        building_id: space,
        world_id: null,
        room_id: null,
      };
    }
    if (radioValue == "room") {
      updatedServerData = {
        name,
        description,
        room_id: space,
        building_id: null,
        world_id: null,
      };
    }

    updateServer(updatedServerData);
    //  await onClose()
  };

  const handleClose = (e) => {
    setEditing(false);
    onClose();
  };

  if (isLoading) {
    return (
      <>
        {/* <Tabs size={"md"} variant="with-line">
          <TabList>
            <Tab>Servers</Tab>
            <Tab>
              <Link href="servers/buildings">Buildings </Link>
            </Tab>
            <Tab>
              <Link href="servers/buildings">Rooms </Link>
            </Tab>
          </TabList>
        </Tabs> */}

        <TableSkeleton heads={heads} />
      </>
    );
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={editing ? handleClose : onClose}
        size='xl'
        borderRadius='0'
        isCentered
      >
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
        <ModalContent borderRadius={0} w='100%'>
          <ModalHeader>
            {" "}
            {editing ? "Update" : "Add new"} Server{" "}
            <Text fontWeight='400' fontSize='sm'>
              {editing ? "Updating" : "Adding new"} server on the metaverse
            </Text>{" "}
          </ModalHeader>
          <ModalCloseButton isDisabled={isMutating} />
          <ModalBody pb={6}>
            <Stack spacing={5}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  {...register("name")}
                  isInvalid={errors.name}
                  placeholder='Server name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} mb={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder='Describe this server'
                  isInvalid={errors.description}
                  {...register("description")}
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <FormErrorMessage>
                  {errors.description?.message}
                </FormErrorMessage>
              </FormControl>

              <RadioCardGroup
                defaultValue={radioValue}
                spacing='3'
                onChange={handleRadioChange}
              >
                {["world", "building", "room"].map((option) => (
                  <RadioCard key={option} value={option}>
                    <Text color='emphasized' fontWeight='medium' fontSize='sm'>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Text>
                    {/* <Text color="muted" fontSize="sm">
                      Jelly biscuit muffin icing dessert powder macaroon.
                    </Text> */}
                  </RadioCard>
                ))}
              </RadioCardGroup>
              <CustomSelect
                name={radioValue}
                value={space}
                onChange={setSpace}
                placeholder={
                  "Select " +
                  radioValue.charAt(0).toUpperCase() +
                  radioValue.slice(1)
                }
              >
                {radioValue === "world" && worlds
                  ? worlds.map((world) => (
                      <Option key={world.id} value={world.id}>
                        <Text>{world.name}</Text>
                      </Option>
                    ))
                  : null}
                {radioValue === "building" && buildings
                  ? buildings.map((building) => (
                      <Option key={building.id} value={building.id}>
                        <Text>{building.name}</Text>
                      </Option>
                    ))
                  : null}
                {radioValue === "room" && rooms
                  ? rooms.map((room) => (
                      <Option key={room.id} value={room.id}>
                        <Text>{room.name}</Text>
                      </Option>
                    ))
                  : null}
              </CustomSelect>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} isDisabled={isMutating} mr={3}>
              Cancel
            </Button>
            <Button
              variant={"primary"}
              onClick={
                editing
                  ? () => handleServerUpdate(id, name, description, space)
                  : handleServerAdd
              } // Check if editing is true
              isLoading={editing ? isUpdating : isMutating}
              loadingText={editing ? "Updating" : "Adding"} // Change the label of the button
            >
              {editing ? "Update" : "Add"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Tabs  size={'md'} variant="with-line">
            <TabList>
                <Tab>Servers</Tab>
                <Tab><Link href='/buildings'>Buildings </Link></Tab>
                <Tab><Link href='servers/buildings'>Rooms </Link></Tab>
            </TabList>

        </Tabs> */}

      <Flex justify='end' mb='4'>
        <Button
          bg='#00abaf'
          color='#fff'
          _hover={{ bg: "#00abaf" }}
          onClick={() => {
            setName("");
            setDescription("");
            onOpen();
          }}
        >
          Add
        </Button>
      </Flex>
      <Box border='1px' borderColor='gray.200'>
        <Table>
          <Thead>
            <Tr>
              {heads.map((head) => (
                <Th fontWeight='medium' key={head}>
                  {head}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {servers.map((p) => (
              <Tr key={p.id}>
                <Td>
                  <Avatar name={p.name} src={p.logo_url} boxSize='10' />
                </Td>
                <Td>
                  <Text>{p.name}</Text>
                </Td>
                <Td>
                  <Text>{p.description}</Text>
                </Td>
                <Td>
                  <Text>
                    {p.world_id ? "World": p.building_id ? "Building": p.room_id ? "Room" : "Independent"}
                  </Text>
                </Td>
                <Td>
                  <Text>
                    {p.world_id ? p.world.name : p.building_id ? p.building.name : p.room_id ? p.room.name : "Independent"}
                  </Text>
                </Td>
                <Td>
                  <HStack spacing='1'>
                    <IconButton
                      icon={<FiEdit2 fontSize='1.25rem' />}
                      variant='ghost'
                      aria-label='Edit member'
                      onClick={() => editHandler(p.id, p.name, p.description, p.world_id ? p.world_id : p.building_id ? p.building_id: p.room_id , p.world_id ? "world" : p.building_id ? "building": "room")}
                    />
                    <IconButton
                      icon={<FiTrash2 fontSize='1.25rem' />}
                      variant='ghost'
                      aria-label='Delete member'
                      onClick={() => handleServerDelete(p.id)}
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
  );
}
