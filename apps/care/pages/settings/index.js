import React from 'react';
import _ from 'lodash';
import { PhoneNumberInput, SettingsLayout, PageLayout, FormLayout, AvatarUpload } from 'ui';
import { IoMdInformationCircle } from 'react-icons/io';
import { MdMedicalServices } from 'react-icons/md';
import { TbLicense } from 'react-icons/tb';
import {
  FormControl,
  FormLabel,
  Select,
  Button,
  Radio,
  Input,
  Stack,
  Text,
  StackDivider,
  FormErrorMessage
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { SaveDiscardBar } from 'ui';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup
  .object({
    pin: yup
      .string()
      .min(3, 'Must be more than 3 characters')
      .required('Required field'),
    profile: yup.string().required('Required field'),
    email: yup.string().email('Address is invalid').required('Required field'),
    phone: yup.string().required('Required field'),
    mobile: yup.string().required('Required field'),
    fax: yup.string().required('Required field'),
    country: yup.string().required('Required field'),
    Ccountry: yup.string().required('Required field'),
    title: yup.string().required('Required field'),
    radio: yup.string().required('Required field'),
    dob: yup.string().required('Required field'),
    MaritalStatus: yup.string().required('Required field'),
    Speciality: yup.string().required('Required field'),
    SubSpeciality: yup.string().required('Required field'),
    LanguageSpoken: yup.string().required('Required field'),

  })
  .required();

const onSubmit = (data) =>{
  console.log('data', data)
  console.log('Do Query')
}

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
            <FormControl >
              <FormLabel htmlFor="pin">Pin</FormLabel>
              <Input {...register('pin')} />
              <Text color='tomato'>{errors?.pin?.message}</Text>

            </FormControl>


            <FormControl  >
              <FormLabel htmlFor="id">Profile ID</FormLabel>
              <Input {...register('profile')} />
              <Text color='tomato'>{errors?.profile?.message}</Text>

            </FormControl>
          </FormLayout>
          <FormLayout
            title="Contact information"
            description="Manage your location information"
          >
            <FormControl>
              <FormLabel>Email Address</FormLabel>
                <Input type='email' {...register('email')} />
                <Text color='tomato'>{errors?.email?.message}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Home telephone number</FormLabel>
              <PhoneNumberInput
                placeholder=""
                height="40px"
                onChange={()=>console.log('')}
                {...register('phone')}
              />
              <Text color='tomato'>{errors?.phone?.message}</Text>

            </FormControl>
            <FormControl>
              <FormLabel>Mobile phone number</FormLabel>
              <PhoneNumberInput
                placeholder=""
                height="40px"
                onChange={(value) => setValue(value)}
                name="mobile"
                {...register('mobile')}

              />
              <Text color='tomato'>{errors?.mobile?.message}</Text>

            </FormControl>
            <FormControl>
              <FormLabel>Fax phone number</FormLabel>
              <PhoneNumberInput
                placeholder=""
                height="40px"
                onChange={(value) => setValue(value)}
                {...register('fax')}

              />
              <Text color='tomato'>{errors?.fax?.message}</Text>

            </FormControl>
            <FormControl id="street">
              <FormLabel>Country</FormLabel>
              <Select placeholder='Select option' {...register('country')} >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Text color='tomato'>{errors?.country?.message}</Text>

            </FormControl>
            <FormControl id="street">
              <FormLabel>Citizenship Country</FormLabel>
              <Select placeholder='Select option' {...register('Ccountry')}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Text color='tomato'>{errors?.Ccountry?.message}</Text>

            </FormControl>
          </FormLayout>
          <FormLayout
            title="Basic information"
            description="Manage your basic information"
          >

            <FormControl>
              <FormLabel>Title</FormLabel>
              <Select placeholder='Select option' {...register('title')}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Text color='tomato'>{errors?.title?.message}</Text>

            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Stack spacing={'40px'} direction='row'>
                <Radio value='male' colorScheme='green' {...register('radio')}>Male</Radio>
                <Radio value='female' colorScheme='green' {...register('radio')}>Female</Radio>
                <Radio value='other' colorScheme='green' {...register('radio')}>Other</Radio>
              </Stack>
              <Text color='tomato'>{errors?.radio?.message}</Text>

            </FormControl>
            <FormControl>
              <FormLabel>Date of Birth</FormLabel>
              <Input type='date' {...register('dob')} />
              <Text color='tomato'>{errors?.dob?.message}</Text>

            </FormControl>
            <FormControl>
              <FormLabel>Marital Status</FormLabel>
              <Select placeholder='Select option' {...register('MaritalStatus')}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Text color='tomato'>{errors?.MaritalStatus?.message}</Text>

            </FormControl>
            <FormControl>
              <FormLabel>Speciality</FormLabel>
              <Select placeholder='Select option' {...register('Speciality')}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Text color='tomato'>{errors?.Speciality?.message}</Text>

            </FormControl>
            <FormControl>
              <FormLabel>Sub-Speciality</FormLabel>
              <Select placeholder='Select option' {...register('SubSpeciality')}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Text color='tomato'>{errors?.SubSpeciality?.message}</Text>

            </FormControl>
            <FormControl>
              <FormLabel>Language Spoken</FormLabel>
              <Select placeholder='Select option' {...register('LanguageSpoken')}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Text color='tomato'>{errors?.LanguageSpoken?.message}</Text>

            </FormControl>
            <SaveDiscardBar onDiscard={()=>{console.log('discard')}}  isDisabledSave ={!(_.isEmpty(errors))} isOpen={!(_.isEmpty(dirtyFields))} isSaving={isSubmitting} handleSubmit={()=>handleSubmit(onSubmit)}/>
          </FormLayout>
        </Stack>
      </PageLayout>
    </SettingsLayout>
  );
};

export default Account;
