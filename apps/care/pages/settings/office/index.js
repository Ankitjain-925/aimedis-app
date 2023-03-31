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

const Office = () => {
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
        title="Office information"
        description="This is what patients see when they are arranging an appointment"
        actions={<></>}
        hasDivider
      >
        <Stack spacing="8" divider={<StackDivider />} pt="2">
          <FormLayout
            title="Basic"
            description="Manage information about office"
          >
            <FormControl isInvalid={errors.offer}>
              <FormLabel htmlFor="we_offer">We offer</FormLabel>
              <Input />
              <FormErrorMessage>{errors.we_offer?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.information}>
              <FormLabel htmlFor="latest_information">Latest information</FormLabel>
              <Textarea
                _placeholder={{ color: 'subtle' }}
                resize="none"
              />
              <FormErrorMessage>{errors.latest_information?.message}</FormErrorMessage>
            </FormControl>
          </FormLayout>
        </Stack>
      </PageLayout>
    </SettingsLayout>
  );
};

export default Office;
