import React from 'react';
import { SettingsLayout, PageLayout, FormLayout, AvatarUpload } from 'ui';
import { IoMdInformationCircle } from 'react-icons/io';
import { MdMedicalServices } from 'react-icons/md';
import { TbLicense } from 'react-icons/tb';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  Checkbox,
  Box,
  Text
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    country: yup.string().required('Required field'),
    authority: yup.string().required('Required field'),
    registration: yup.string().required('Required field'),
    tc: yup.boolean().oneOf(
      [true],
      "Please accept terms and conditons"
    )
  })
  .required();

const License = () => {
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
        title="Doctor ID / KYC & license"
        description="Please enter your healthcare Pharma / Research / Insurance data and upload a copy of your ID and heathcare Pharma / Research / Insurance card into your account"
        actions={<></>}
        hasDivider
      >
        <Stack spacing="8" divider={<StackDivider />} pt="2">
          <FormLayout
            title="Insurance infomation"
            description="Manage information about insurance"
          >
            <FormControl id="country">
              <FormLabel>Country</FormLabel>
              <Input {...register('country')} />
              <Text color='tomato'>{errors?.country?.message}</Text>

            </FormControl>
            <FormControl id="authority">
              <FormLabel>Responsible authority</FormLabel>
              <Input  {...register('authority')}/>
              <Text color='tomato'>{errors?.authority?.message}</Text>

            </FormControl>
            <FormControl id="registration">
              <FormLabel>Registration / Doctor number</FormLabel>
              <Input {...register('registration')}/>
              <Text color='tomato'>{errors?.registration?.message}</Text>

            </FormControl>
          </FormLayout>
          <FormLayout
            title="Upload Insurance"
            description={`Upload a copy of your ID and heathcare pharma / Research / Insurance card`}
          >
            <FormControl>
              <FormLabel>Upload a photo of your ID Card</FormLabel>
              <Box
                minHeight="100px"
                borderRadius={"8px"}
                border={"1px dotted"}>
                <Box
                  position="absolute"
                  top="52%"
                  left="27%">
                  <Text fontSize="13px" fontWeight={"500"}>
                    Browse or drag here
                  </Text>
                </Box>
                <Input
                  opacity={"0"}
                  minHeight="100px"
                  type="File"
                  placeholder="extra small size"
                  height="40px"
                />
              </Box>
            </FormControl>
            <FormControl>
              <FormLabel>Upload a photo of your ID Card</FormLabel>
              <Box
                minHeight="100px"
                borderRadius={"8px"}
                border={"1px dotted"}>
                <Box
                  position="absolute"
                  top="52%"
                  left="27%">
                  <Text fontSize="13px" fontWeight={"500"}>
                    Browse or drag here
                  </Text>
                </Box>
                <Input
                  opacity={"0"}
                  minHeight="100px"
                  type="File"
                  placeholder="extra small size"
                  height="40px"
                />
              </Box>
            </FormControl>
            <FormControl>
              <FormLabel>Upload your License</FormLabel>
              <Box
                minHeight="100px"
                borderRadius={"8px"}
                border={"1px dotted"}>
                <Box
                  position="absolute"
                  top="52%"
                  left="27%">
                  <Text fontSize="13px" fontWeight={"500"}>
                    Browse or drag here
                  </Text>
                </Box>
                <Input
                  opacity={"0"}
                  minHeight="100px"
                  type="File"
                  placeholder="extra small size"
                  height="40px"
                />
              </Box>
            </FormControl>
          </FormLayout>
          <FormLayout
            title="AIS terms"
            description="AIS terms and its privacy policy"
          >
            <FormControl>
            <input colorScheme='teal' type="checkbox" {...register("tc")} />
            By clicking this you accept AIS terms and its privacy policy
            <Text color='tomato'>{errors?.tc?.message}</Text>

            </FormControl>
            <Input type="submit" onClick={handleSubmit()} />
          </FormLayout>
        </Stack>
      </PageLayout>
    </SettingsLayout>
  );
};

export default License;
