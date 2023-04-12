import React, { useState } from 'react';
import { SettingsLayout, PageLayout, FormLayout, AvatarUpload } from 'ui';
import { IoMdInformationCircle } from 'react-icons/io';
import { MdMedicalServices } from 'react-icons/md';
import { TbLicense } from 'react-icons/tb';
import { SaveDiscardBar } from 'ui';
import _ from 'lodash';
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
    videocall: yup.boolean(),
    officevisit: yup.boolean(),
    consultancy: yup.boolean(),
    sickleave: yup.boolean(),
    homevisit: yup.boolean(),
    videocall1: yup.number().when("videocall", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    videocall2: yup.number().when("videocall", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    videocall3: yup.number().when("videocall", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    videocall4: yup.number().when("videocall", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    officevisit1: yup.number().when("officevisit", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    officevisit2: yup.number().when("officevisit", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    officevisit3: yup.number().when("officevisit", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    officevisit4: yup.number().when("officevisit", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    consultancy1: yup.number().when("consultancy", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    consultancy2: yup.number().when("consultancy", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    consultancy3: yup.number().when("consultancy", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    consultancy4: yup.number().when("consultancy", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    sickleave1: yup.number().when("sickleave", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    sickleave2: yup.number().when("sickleave", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),

    homevisit1: yup.number().when("homevisit", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    homevisit2: yup.number().when("homevisit", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    homevisit3: yup.number().when("homevisit", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),
    homevisit4: yup.number().when("homevisit", {
      is: "true",
      then: yup
        .number()
        .required("Required field")
    }),









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
    // resolver: yupResolver(schema),
    mode: "onTouched",

  });
  let videocall = watch("videocall", false);
  let officevisit = watch("officevisit", false);
  let consultancy = watch("consultancy", false);
  let sickleave = watch("sickleave", false);
  let homevisit = watch("homevisit", false);

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  const onSubmit = (data) =>{
    console.log('data', data)
    console.log('Do Query')
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
        {console.log("23", errors)}
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
            title="Appointments Schedule"
            description="Please enter time slots"
          >
            <Stack spacing="6" direction={{ base: 'column' }}>
              <Flex justifyContent="flex-end">
                <Switch size='md' colorScheme='teal' />
              </Flex>
              <FormControl id="firstName">
                <Checkbox colorScheme='teal' {...register("videocall")}>
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
                <Checkbox colorScheme='teal' {...register("officevisit")}>
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
                <Checkbox colorScheme='teal' {...register("consultancy")}>
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
                <Checkbox colorScheme='teal' {...register("sickleave")}>
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
                <Checkbox colorScheme='teal' {...register("homevisit")}>
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

          <FormLayout
            title="Appointment"
            description="Basic Appointment Information"
          >

            {videocall && (
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
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('videocall1')} /></Box>


                </Flex>
                <Text color='tomato'>{errors?.videocall1?.message}</Text>
                <Flex display="flex">
                  <Box w="50%"> <Text>Break time:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('videocall2')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.videocall2?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"></Box>
                  <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
                </Flex>

                <Text>Appointments can be booked:</Text>
                <Flex display="flex">
                  <Box w="25%"> <Text fontSize="12px">Up to days:</Text></Box>
                  <Box w="35%"><Input type="number" w="70%" ml="10px" h="6vh" placeholder='60' {...register('videocall3')} />   </Box>
                  <Box w="40%"><Text fontSize="12px">before the day of appointment</Text></Box>

                </Flex>
                <Text color='tomato'>{errors?.videocall3?.message}</Text>

                <Text>Appointments can be cancelled:</Text>
                <Flex display="flex">
                  <Box w="10%"> <Text fontSize="12px">Max:</Text></Box>
                  <Box w="40%"><Input type="number" w="70%" ml="10px" h="6vh" placeholder='60' {...register('videocall4')} />   </Box>
                  <Box w="50%"><Text fontSize="12px">hours before the time of appointment</Text></Box>

                </Flex>
                <Text color='tomato'>{errors?.videocall4?.message}</Text>

              </Stack>
            )}

            {officevisit && (
              <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
                <FormControl id="firstName">
                  <Text fontSize="md" fontWeight="600">Office visit</Text>
                </FormControl>
                <Flex display="flex">
                  <Box w="50%"> <Text>Set time duration:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('officevisit1')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.officevisit1?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"> <Text>Break time:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('officevisit2')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.officevisit2?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"></Box>
                  <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
                </Flex>

                <Text>Appointments can be booked:</Text>
                <Flex display="flex">
                  <Box w="25%"> <Text fontSize="12px">Up to days:</Text></Box>
                  <Box w="35%"><Input type="number" w="70%" ml="10px" h="6vh" placeholder='60' {...register('officevisit3')} />   </Box>
                  <Box w="40%"><Text fontSize="12px">before the day of appointment</Text></Box>

                </Flex>
                <Text color='tomato'>{errors?.officevisit3?.message}</Text>


                <Text>Appointments can be cancelled:</Text>
                <Flex display="flex">
                  <Box w="10%"> <Text fontSize="12px">Max:</Text></Box>
                  <Box w="40%"><Input type="number" w="70%" ml="10px" h="6vh" placeholder='60' {...register('officevisit4')} />   </Box>
                  <Box w="50%"><Text fontSize="12px">hours before the time of appointment</Text></Box>

                </Flex>
                <Text color='tomato'>{errors?.officevisit4?.message}</Text>

              </Stack>

            )}

            {consultancy && (
              <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
                <FormControl id="firstName">
                  <Text fontSize="md" fontWeight="600">Consultancy (Custom calendar)</Text>
                </FormControl>
                <Flex display="flex">
                  <Box w="50%"> <Text>Set time duration:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('consultancy1')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.consultancy1?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"> <Text>Break time:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('consultancy2')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.consultancy2?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"></Box>
                  <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
                </Flex>

                <Text>Appointments can be booked:</Text>
                <Flex display="flex">
                  <Box w="25%"> <Text fontSize="12px">Up to days:</Text></Box>
                  <Box w="35%"><Input type="number" w="70%" ml="10px" h="6vh" placeholder='60' {...register('consultancy3')} />   </Box>
                  <Box w="40%"><Text fontSize="12px">before the day of appointment</Text></Box>

                </Flex>
                <Text color='tomato'>{errors?.consultancy3?.message}</Text>

                <Text>Appointments can be cancelled:</Text>
                <Flex display="flex">
                  <Box w="10%"> <Text fontSize="12px">Max:</Text></Box>
                  <Box w="40%"><Input type="number" w="70%" ml="10px" h="6vh" placeholder='60' {...register('consultancy4')} />   </Box>
                  <Box w="50%"><Text fontSize="12px">hours before the time of appointment</Text></Box>

                </Flex>
                <Text color='tomato'>{errors?.consultancy4?.message}</Text>

              </Stack>
            )}

            {sickleave && (
              <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
                <FormControl id="firstName">
                  <Text fontSize="md" fontWeight="600">Sick leave certificate</Text>
                </FormControl>
                <Flex display="flex">
                  <Box w="50%"> <Text>Set time duration:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('sickleave1')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.sickleave1?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"> <Text>Break time:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('sickleave2')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.sickleave2?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"></Box>
                  <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>


                </Flex>
              </Stack>
            )}

            {homevisit && (
              <Stack spacing="6" direction={{ base: 'column' }} borderTop="1px" borderColor="gray.200" pt="25px">
                <FormControl id="firstName">
                  <Text fontSize="md" fontWeight="600">Home visit</Text>
                </FormControl>
                <Flex display="flex">
                  <Box w="50%"> <Text>Set time duration:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('homevisit1')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.homevisit1?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"> <Text>Break time:</Text></Box>
                  <Box w="50%"><Input type="number" w="100%" ml="10px" h="5vh" placeholder='60' {...register('homevisit2')} /></Box>

                </Flex>
                <Text color='tomato'>{errors?.homevisit2?.message}</Text>

                <Flex display="flex">
                  <Box w="50%"></Box>
                  <Box w="50%"><Input w="100%" ml="10px" h="5vh" placeholder='60' /></Box>
                </Flex>

                <Text>Appointments can be booked:</Text>
                <Flex display="flex">
                  <Box w="25%"> <Text fontSize="12px">Up to days:</Text></Box>
                  <Box w="35%"><Input type="number" w="70%" ml="10px" h="6vh" placeholder='60' {...register('homevisit3')} />   </Box>
                  <Box w="40%"><Text fontSize="12px">before the day of appointment</Text></Box>

                </Flex>
                <Text color='tomato'>{errors?.homevisit3?.message}</Text>


                <Text>Appointments can be cancelled:</Text>
                <Flex display="flex">
                  <Box w="10%"> <Text fontSize="12px">Max:</Text></Box>
                  <Box w="40%"><Input type="number" w="70%" ml="10px" h="6vh" placeholder='60' {...register('homevisit4')} />   </Box>
                  <Box w="50%"><Text fontSize="12px">hours before the time of appointment</Text></Box>

                </Flex>
                <Text color='tomato'>{errors?.homevisit4?.message}</Text>

              </Stack>
            )}

            {/* <Input type="submit" /> */}
            <SaveDiscardBar onDiscard={()=>{console.log('discard')}}  isDisabledSave ={!(_.isEmpty(errors))} isOpen={!(_.isEmpty(dirtyFields))} isSaving={isSubmitting} handleSubmit={()=>handleSubmit(onSubmit)}/>



          </FormLayout>

        </Stack>
      </PageLayout >
    </SettingsLayout >
  );
};

export default Office;
