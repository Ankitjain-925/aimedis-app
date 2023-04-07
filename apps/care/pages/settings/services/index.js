import React, { useState } from 'react';
import { SettingsLayout, PageLayout, FormLayout, AvatarUpload } from 'ui';
import { IoMdInformationCircle } from 'react-icons/io';
import { MdMedicalServices } from 'react-icons/md';
import { TbLicense } from 'react-icons/tb';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  Textarea,
  Switch,
  Flex,
  Checkbox,
  Text,
  Box,
  Button,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { yupResolver } from '@hookform/resolvers/yup';
import { BsFillChatDotsFill } from "react-icons/Bs"
import { DateRange } from 'react-date-range';
// import style from "../../../styles/Services.Module.css";

const schema = yup
  .object({
    username: yup
      .string()
      .min(3, 'Must be more than 3 characters')
      .required('Can’t be blank'),
    email: yup.string().email('Address is invalid'),
    bio: yup.string().max(50, 'Must be less than 50 characters'),
  })
  .required();
const Office = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  const { colorMode, toggleColorMode } = useColorMode();

  const [value, setValue] = useState([false, false]);

  const weekNames = ["M", "T", "W", "T", "F", "S", "S"];

  const weekFullNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { dirtyFields, errors, isSubmitting, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  return (
    <SettingsLayout
      links={[
        {
          label: 'Basic Information',
          href: '/settings',
          icon: IoMdInformationCircle,
        },
        {
          label: 'Office Information',
          href: '/settings/office',
          icon: IoMdInformationCircle,
        },
        {
          label: 'Service and Appointment',
          href: '/settings/services',
          icon: MdMedicalServices,
        },
        {
          label: 'License',
          href: '/settings/license',
          icon: TbLicense,
        }
      ]}
    >
      <PageLayout
        title="Services"
        description="Instant activation and deactivation of services you offer"
        actions={<></>}
        hasDivider
      >
        <Stack spacing="8" divider={<StackDivider />} pt="2">
          {/* <Flex> */}
          {/* <Box mt="5px" mr="7px"> */}
          {/* <BsFillChatDotsFill color='teal' /> */}
          {/* </Box> */}
          <FormLayout
            title="Chat & Voicecalls"
            description="Invite your patients to contact you online"
            comesFrom="Chatandvoice"
          >


            <Flex justifyContent="flex-end">
              <Switch size='md' colorScheme='teal' />
            </Flex>


            {/* 
            <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input {...register('username')} />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              </FormControl>

              <FormControl w="64px" isInvalid={errors.image}>
                <FormLabel htmlFor="image">Avatar</FormLabel>
                <AvatarUpload
                  src={''}
                  avatarProps={{ size: 'lg', bg: 'bg-canvas' }}
                  register={() => register('image')}
                />
                <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
              </FormControl>
            </Stack> */}

            {/* <FormControl isInvalid={errors.bio}>
              <FormLabel htmlFor="bio">Bio</FormLabel>
              <Textarea
                _placeholder={{ color: 'subtle' }}
                resize="none"
                {...register('bio')}
              />
              <FormErrorMessage>{errors.bio?.message}</FormErrorMessage>
            </FormControl> */}
          </FormLayout>
          {/* </Flex> */}
          <FormLayout
            title="Prescription & Sick Certificates"
            description="Issue prescriptions & sick certificates online"
          >
            <Stack spacing="6" direction={{ base: 'column' }}>
              <Flex justifyContent="flex-end">
                <Switch size='md'
                  colorScheme='teal'
                  onChange={(e) => setValue([e.target.checked, e.target.checked])}
                  isChecked={value[0] && value[1]}
                />
              </Flex>
              <FormControl id="firstName">
                <Checkbox
                  colorScheme='teal'
                  onChange={(e) => setValue([e.target.checked, value[1]])}
                  isChecked={value[0]}
                >
                  Online Sick Certificates
                </Checkbox>
              </FormControl>
              <FormControl id="firstName">
                <Checkbox
                  colorScheme='teal'
                  onChange={(e) => setValue([value[0], e.target.checked])}
                  isChecked={value[1]}
                >
                  Online Prescriptions
                </Checkbox>
              </FormControl>
            </Stack>
          </FormLayout>

          <FormLayout
            title="Appointments"
            description="Just mention holiday"
          >
            <Stack spacing="6" direction={{ base: 'column' }}>

              <Flex justifyContent="space-between">
                <Text fontSize="sm">Holiday period between:</Text>
                <Switch size='md' colorScheme='teal' />
                {/* <DateRangePicker
                  ranges={[selectionRange]}
                // onChange={this.handleSelect}
                /> */}

              </Flex>
              <DateRange
                className={colorMode === 'light' ? "setLightColor" : "setDarkColor"}
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
              />
            </Stack>
          </FormLayout>

          <FormLayout
            title="Appointment"
            description="Basic Appointment Information"
          >


            <Stack spacing="6" direction={{ base: 'column' }}>
              {/* <Flex justifyContent="flex-end">
                <Switch size='md' colorScheme='teal' />
              </Flex> */}
              <FormControl id="firstName">
                {/* <Checkbox colorScheme='teal' defaultChecked> */}
                <Text fontSize="md" fontWeight="600">Video call</Text>
                {/* </Checkbox> */}
              </FormControl>
              <Flex display="flex">
                <Box w="50%"> <Text>Set time duration:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"> <Text>Break time:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>

              <Text>Appointments can be booked:</Text>
              <Flex display="flex">
                <Box w="25%"> <Text fontSize="12px">Up to days:</Text></Box>
                <Box w="35%"><Input w="70%" ml="10px" h="6vh" placeholder='60' />   </Box>
                <Box w="40%"><Text fontSize="12px">before the day of appointment</Text></Box>
              </Flex>

              <Text>Appointments can be cancelled:</Text>
              <Flex display="flex">
                <Box w="10%"> <Text fontSize="12px">Max:</Text></Box>
                <Box w="40%"><Input w="70%" ml="10px" h="6vh" placeholder='60' />   </Box>
                <Box w="50%"><Text fontSize="12px">hours before the time of appointment</Text></Box>
              </Flex>
            </Stack>


            <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
              <FormControl id="firstName">
                <Text fontSize="md" fontWeight="600">Office visit</Text>
              </FormControl>
              <Flex display="flex">
                <Box w="50%"> <Text>Set time duration:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"> <Text>Break time:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>

              <Text>Appointments can be booked:</Text>
              <Flex display="flex">
                <Box w="25%"> <Text fontSize="12px">Up to days:</Text></Box>
                <Box w="35%"><Input w="70%" ml="10px" h="6vh" placeholder='60' />   </Box>
                <Box w="40%"><Text fontSize="12px">before the day of appointment</Text></Box>
              </Flex>

              <Text>Appointments can be cancelled:</Text>
              <Flex display="flex">
                <Box w="10%"> <Text fontSize="12px">Max:</Text></Box>
                <Box w="40%"><Input w="70%" ml="10px" h="6vh" placeholder='60' />   </Box>
                <Box w="50%"><Text fontSize="12px">hours before the time of appointment</Text></Box>
              </Flex>
            </Stack>


            <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
              <FormControl id="firstName">
                <Text fontSize="md" fontWeight="600">Consultancy (Custom calendar)</Text>
              </FormControl>
              <Flex display="flex">
                <Box w="50%"> <Text>Set time duration:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"> <Text>Break time:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>

              <Text>Appointments can be booked:</Text>
              <Flex display="flex">
                <Box w="25%"> <Text fontSize="12px">Up to days:</Text></Box>
                <Box w="35%"><Input w="70%" ml="10px" h="6vh" placeholder='60' />   </Box>
                <Box w="40%"><Text fontSize="12px">before the day of appointment</Text></Box>
              </Flex>

              <Text>Appointments can be cancelled:</Text>
              <Flex display="flex">
                <Box w="10%"> <Text fontSize="12px">Max:</Text></Box>
                <Box w="40%"><Input w="70%" ml="10px" h="6vh" placeholder='60' />   </Box>
                <Box w="50%"><Text fontSize="12px">hours before the time of appointment</Text></Box>
              </Flex>
            </Stack>


            <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
              <FormControl id="firstName">
                <Text fontSize="md" fontWeight="600">Sick leave certificate</Text>
              </FormControl>
              <Flex display="flex">
                <Box w="50%"> <Text>Set time duration:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"> <Text>Break time:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
            </Stack>

            <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
              <FormControl id="firstName">
                <Text fontSize="md" fontWeight="600">Home visit</Text>
              </FormControl>
              <Flex display="flex">
                <Box w="50%"> <Text>Set time duration:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"> <Text>Break time:</Text></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>
              <Flex display="flex">
                <Box w="50%"></Box>
                <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
              </Flex>

              <Text>Appointments can be booked:</Text>
              <Flex display="flex">
                <Box w="25%"> <Text fontSize="12px">Up to days:</Text></Box>
                <Box w="35%"><Input w="70%" ml="10px" h="6vh" placeholder='60' />   </Box>
                <Box w="40%"><Text fontSize="12px">before the day of appointment</Text></Box>
              </Flex>

              <Text>Appointments can be cancelled:</Text>
              <Flex display="flex">
                <Box w="10%"> <Text fontSize="12px">Max:</Text></Box>
                <Box w="40%"><Input w="70%" ml="10px" h="6vh" placeholder='60' />   </Box>
                <Box w="50%"><Text fontSize="12px">hours before the time of appointment</Text></Box>
              </Flex>
            </Stack>









          </FormLayout>



          <FormLayout
            title="Appointments Schedule"
            description="Please enter time slots"
          >
            <Stack spacing="6" direction={{ base: 'column' }}>
              <Flex justifyContent="flex-end">
                <Switch size='md' colorScheme='teal' />
              </Flex>
              <FormControl id="firstName">
                <Checkbox colorScheme='teal' defaultChecked>
                  <Text fontSize="md" fontWeight="600">Video call</Text>
                </Checkbox>
              </FormControl>
              <Text>Set online working hours</Text>
              <Flex justifyContent="flex-end">
                <Text fontSize="sm">Copy time to all</Text>
              </Flex>
              <Flex display="flex" spacing="6">
                {weekNames.map((element) =>
                  <>
                    <Button p="3px" colorScheme='teal'>{element}</Button>
                    <Spacer />
                  </>
                )
                }
              </Flex>
              {weekFullNames.map((element) =>
                <>
                  <Text>{element}</Text>
                  <Flex display="row">
                    <Input w={["100%", "25%", "25%", "100%"]} mb="25px" placeholder='5:00' />
                    <Spacer />
                    <Input w={["100%", "25%", "25%", "100%"]} placeholder='6:00' />
                  </Flex>
                </>
              )
              }
            </Stack>

            <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
              {/* <Flex justifyContent="flex-end">
                <Switch size='md' colorScheme='teal' />
              </Flex> */}
              <FormControl id="firstName">
                <Checkbox colorScheme='teal' defaultChecked>
                  <Text fontSize="md" fontWeight="600">Office visit</Text>
                </Checkbox>
              </FormControl>
              <Text>Set online working hours</Text>
              <Flex justifyContent="flex-end">
                <Text fontSize="sm">Copy time to all</Text>
              </Flex>
              <Flex display="flex" spacing="6">
                {weekNames.map((element) =>
                  <>
                    <Button w="10%" colorScheme='teal'>{element}</Button>
                    <Spacer />
                  </>
                )
                }
              </Flex>
              {weekFullNames.map((element) =>
                <>
                  <Text>{element}</Text>
                  <Flex display="row">
                    <Input w={["100%", "25%", "25%", "100%"]} mb="25px" placeholder='5:00' />
                    <Spacer />
                    <Input w={["100%", "25%", "25%", "100%"]} placeholder='6:00' />
                  </Flex>
                </>
              )
              }
            </Stack>

            <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
              {/* <Flex justifyContent="flex-end">
                <Switch size='md' colorScheme='teal' />
              </Flex> */}
              <FormControl id="firstName">
                <Checkbox colorScheme='teal' defaultChecked>
                  <Text fontSize="md" fontWeight="600">Consultancy (Custom calendar)</Text>
                </Checkbox>
              </FormControl>
              <Text>Set online working hours</Text>
              <Flex justifyContent="flex-end">
                <Text fontSize="sm">Copy time to all</Text>
              </Flex>
              <Flex display="flex" spacing="6">
                {weekNames.map((element) =>
                  <>
                    <Button w="10%" colorScheme='teal'>{element}</Button>
                    <Spacer />
                  </>
                )
                }
              </Flex>
              {weekFullNames.map((element) =>
                <>
                  <Text>{element}</Text>
                  <Flex display="row">
                    <Input w={["100%", "25%", "25%", "100%"]} mb="25px" placeholder='5:00' />
                    <Spacer />
                    <Input w={["100%", "25%", "25%", "100%"]} placeholder='6:00' />
                  </Flex>
                </>
              )
              }
            </Stack>

            <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
              {/* <Flex justifyContent="flex-end">
                <Switch size='md' colorScheme='teal' />
              </Flex> */}
              <FormControl id="firstName">
                <Checkbox colorScheme='teal' defaultChecked>
                  <Text fontSize="md" fontWeight="600">Sick leave certificate</Text>
                </Checkbox>
              </FormControl>
              <Text>Set online working hours</Text>
              <Flex justifyContent="flex-end">
                <Text fontSize="sm">Copy time to all</Text>
              </Flex>
              <Flex display="flex" spacing="6">
                {weekNames.map((element) =>
                  <>
                    <Button w="10%" colorScheme='teal'>{element}</Button>
                    <Spacer />
                  </>
                )
                }
              </Flex>
              {weekFullNames.map((element) =>
                <>
                  <Text>{element}</Text>
                  <Flex display="row">
                    <Input w={["100%", "25%", "25%", "100%"]} mb="25px" placeholder='5:00' />
                    <Spacer />
                    <Input w={["100%", "25%", "25%", "100%"]} placeholder='6:00' />
                  </Flex>
                </>
              )
              }
            </Stack>

            <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
              {/* <Flex justifyContent="flex-end">
                <Switch size='md' colorScheme='teal' />
              </Flex> */}
              <FormControl id="firstName">
                <Checkbox colorScheme='teal' defaultChecked>
                  <Text fontSize="md" fontWeight="600">Home visit</Text>
                </Checkbox>
              </FormControl>
              <Text>Set online working hours</Text>
              <Flex justifyContent="flex-end">
                <Text fontSize="sm">Copy time to all</Text>
              </Flex>
              <Flex display="flex" spacing="6">
                {weekNames.map((element) =>
                  <>
                    <Button w="10%" colorScheme='teal'>{element}</Button>
                    <Spacer />
                  </>
                )
                }
              </Flex>
              {weekFullNames.map((element) =>
                <>
                  <Text>{element}</Text>
                  <Flex display="row">
                    <Input w={["100%", "25%", "25%", "100%"]} mb="25px" placeholder='5:00' />
                    <Spacer />
                    <Input w={["100%", "25%", "25%", "100%"]} placeholder='6:00' />
                  </Flex>
                </>
              )
              }
            </Stack>

          </FormLayout>



        </Stack>
      </PageLayout >
    </SettingsLayout >
  );
};

export default Office;
