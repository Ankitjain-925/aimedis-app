import React, { useState } from 'react';
import {
  Box,
  Input,
  Text,
  Select,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import { PageLayout } from 'ui';


const Create = () => {
  const [openForm, setOpenForm] = useState(false);
  const [value, setValue] = React.useState('1');
  // const [painStatus, setPainStatus] = useState[""]


  return <PageLayout
    title="Questionnaire"
    description="Questionnaire you've added to a list and marked as your favourites"
    actions={<></>}
    hasDivider
  >

    {!openForm ?
      <Box bg="white" p="30px" w="50%" borderRadius="8px">
        <Box mb="12px">
          <Text mb="8px" fontSize="sm">Select Hospital</Text>
          <Select fontSize="14px" placeholder='Select Hospital'>
            <option value='option1'>Vivantes Hospital Group</option>
            <option value='option2'>Helios Park Hospital</option>
            <option value='option3'>University Hospital</option>
          </Select>
        </Box>
        <Box mb="12px">
          <Text mb="8px" fontSize="sm">Select Patient</Text>
          <Select fontSize="14px" placeholder='Select Patient'>
            <option value='option1'>Emilia</option>
            <option value='option2'>Ella</option>
            <option value='option3'>Lea</option>
          </Select>
        </Box>
        <Box mt="25px">
          <Button w="50%" colorScheme='teal' size='md' onClick={() => setOpenForm(true)}>
            Submit
          </Button>
        </Box>
      </Box> :
      <Box bg="white" p="30px" w="70%" borderRadius="8px">
        <Box mb="10px">
          <Text mb="5px" fontSize="lg" fontWeight="500" color="teal">Anamnesis</Text>
          <Text mb="5px" fontSize="xs" fontWeight="600">Blood Pressure</Text>
          <Flex display="Flex" justifyContent="flex-end" w="100%">
            <Input placeholder='Basic usage' />
            <Input placeholder='Basic usage' />
          </Flex>
        </Box>
        <Box mb="10px">

          <Box>
            <Text mb="5px" fontSize="lg" fontWeight="500" color="teal">Thrombose Situation</Text>
            <Text mb="5px" fontSize="xs" fontWeight="600">Ask for Food</Text>
            <Text mb="5px" fontSize="md" color="gray.700">Have you Eaten</Text>
            <RadioGroup onChange={setValue} value={value} mt="10px">
              <Stack direction='row'>
                <Radio colorScheme="teal" value='1'>Yes</Radio>
                <Radio colorScheme="teal" value='2'>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box mt="10px">
            <Text mb="5px" fontSize="xs" fontWeight="600">Water</Text>
            <Text mb="5px" fontSize="md" color="gray.700">Have you been trinkung</Text>
            <RadioGroup onChange={setValue} value={value} mt="10px">
              <Stack direction='row'>
                <Radio colorScheme="teal" value='1'>Yes</Radio>
                <Radio colorScheme="teal" value='2'>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box mt="10px">
            <Text mb="5px" fontSize="xs" fontWeight="600">Toilet Situation</Text>
            <Text mb="5px" fontSize="md" color="gray.700">Could you go to the Toilet</Text>
            <RadioGroup onChange={setValue} value={value} mt="10px">
              <Stack direction='row'>
                <Radio colorScheme="teal" value='1'>Yes</Radio>
                <Radio colorScheme="teal" value='2'>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>

        </Box>

        <Box mb="10px">
          <Text mb="5px" fontSize="lg" fontWeight="500" color="teal">Pain Status</Text>
          <RangeSlider
            colorScheme='teal'
            aria-label={['min', 'max']}
            defaultValue={[0, 0]}
          // onChange={(e) => setPainStatus(e[1])}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            {/* <RangeSliderThumb index={0} /> */}
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box>

        <Box mt="25px">
          <Button w="50%" colorScheme='teal' size='md' onClick={() => setOpenForm(true)}>
            Submit
          </Button>
        </Box>
      </Box>}
  </PageLayout>;
};

export default Create;
