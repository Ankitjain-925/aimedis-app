import React from 'react';
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
            title="Medical Account Information"
            description="Manage your account information"
          >
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
            </Stack>

            <FormControl isInvalid={errors.bio}>
              <FormLabel htmlFor="bio">Bio</FormLabel>
              <Textarea
                _placeholder={{ color: 'subtle' }}
                resize="none"
                {...register('bio')}
              />
              <FormErrorMessage>{errors.bio?.message}</FormErrorMessage>
            </FormControl>
          </FormLayout>
          <FormLayout
            title="Address"
            description="Manage your location information"
          >
            <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
              <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input />
              </FormControl>
            </Stack>
            <FormControl id="street">
              <FormLabel>Street</FormLabel>
              <Input />
            </FormControl>
            <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
              <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input />
              </FormControl>
              <FormControl id="state">
                <FormLabel>State </FormLabel>
                <Input />
              </FormControl>
              <FormControl id="zip">
                <FormLabel>Postal Code</FormLabel>
                <Input />
              </FormControl>
            </Stack>
          </FormLayout>
        </Stack>
      </PageLayout>
    </SettingsLayout>
  );
};

export default Account;
