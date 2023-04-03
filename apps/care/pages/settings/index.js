import React from 'react';
import { PhoneNumberInput, SettingsLayout, PageLayout, FormLayout, AvatarUpload } from 'ui';
import { IoMdInformationCircle } from 'react-icons/io';
import { MdMedicalServices } from 'react-icons/md';
import { TbLicense } from 'react-icons/tb';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Radio,
  Input,
  Stack,
  StackDivider,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const Account = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { dirtyFields, errors, isSubmitting, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        title="Profile information"
        description="This is your profile information"
        actions={<></>}
        hasDivider
      >
        <Stack spacing="8" divider={<StackDivider />} pt="2">
          <FormLayout
            title="Account Information"
            description="Manage your account information"
          >
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="pin">Pin</FormLabel>
              <Input />
            </FormControl>
            <FormControl isInvalid={errors.image}>
              <FormLabel htmlFor="id">Profile ID</FormLabel>
              <Input />
            </FormControl>
          </FormLayout>
          <FormLayout
            title="Contact information"
            description="Manage your location information"
          >

            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl>
              <FormLabel>Home telephone number</FormLabel>
              <PhoneNumberInput
                placeholder=""
                height="40px"
                onChange={(value) => setValue(value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile phone number</FormLabel>
              <PhoneNumberInput
                placeholder=""
                height="40px"
                onChange={(value) => setValue(value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Fax phone number</FormLabel>
              <PhoneNumberInput
                placeholder=""
                height="40px"
                onChange={(value) => setValue(value)}
              />
            </FormControl>
            <FormControl id="street">
              <FormLabel>Country</FormLabel>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl id="street">
              <FormLabel>Citizenship Country</FormLabel>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
          </FormLayout>
          <FormLayout
            title="Basic information"
            description="Manage your basic information"
          >

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Stack spacing={'40px'} direction='row'>
                  <Radio value='male' colorScheme='green'>Male</Radio>
                  <Radio value='female' colorScheme='green'>Female</Radio>
                  <Radio value='other' colorScheme='green'>Other</Radio>
                </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>Date of Birth</FormLabel>
              <Input type='date' />
            </FormControl>
            <FormControl>
              <FormLabel>Marital Status</FormLabel>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Speciality</FormLabel>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Sub-Speciality</FormLabel>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Language Spoken</FormLabel>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
          </FormLayout>
        </Stack>
      </PageLayout>
    </SettingsLayout>
  );
};

export default Account;
