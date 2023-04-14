import React from 'react';
import { SettingsLayout, PageLayout, FormLayout, AvatarUpload } from 'ui';
import { IoMdInformationCircle } from 'react-icons/io';
import { MdMedicalServices } from 'react-icons/md';
import { TbLicense } from 'react-icons/tb';
import { SaveDiscardBar, RichTextBlock } from 'ui';
import _ from 'lodash';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  StackDivider,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { RichTextBlock } from "./components/RichTeaxtBlock";

const schema = yup
  .object({

    offer: yup.string().required('Required field'),
    Latestinformation: yup.string().required('Required field'),
  })
  .required();

const onSubmit = (data) => {
  console.log('data', data)
  console.log('Do Query')
}
const Office = () => {
  const {
    handleSubmit,
    register,
    setValue,
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
              <Input {...register('offer')} />
              <Text color='tomato'>{errors?.offer?.message}</Text>

            </FormControl>
            <FormControl isInvalid={errors.information}>
              <FormLabel htmlFor="latest_information">Latest information</FormLabel>
              {/* <Textarea
                _placeholder={{ color: 'subtle' }}
                resize="none"
                {...register('Latestinformation')}
              /> */}

              <RichTextBlock onChange={(e) => { setValue('Latestinformation', e, { shouldValidate: true, shouldDirty: true }) }} />


              <Text color='tomato'>{errors?.Latestinformation?.message}</Text>

            </FormControl>
            {/* <Input type="submit" onClick={handleSubmit()} /> */}
            <SaveDiscardBar onDiscard={() => { console.log('discard') }} isDisabledSave={!(_.isEmpty(errors))} isOpen={!(_.isEmpty(dirtyFields))} isSaving={isSubmitting} handleSubmit={() => handleSubmit(onSubmit)} />
          </FormLayout>
        </Stack>
      </PageLayout>
    </SettingsLayout>
  );
};

export default Office;
