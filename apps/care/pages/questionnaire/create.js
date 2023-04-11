import React, { useState } from 'react';
import {
  Box,
  Input,
  Text,
  Select,
  Button,
  Flex
} from '@chakra-ui/react';
import { PageLayout } from 'ui';


const Create = () => {
  const [openForm, setOpenForm] = useState(false);
  return <PageLayout
    title="Questionnaire"
    description="Questionnaire you've added to a list and marked as your favourites"
    actions={<></>}
    hasDivider
  >

    {!openForm ?
      <Box bg="white" p="30px" w="50%" borderRadius="8px">
        <Box mb="10px">
          <Text mb="5px" fontSize="sm">Select Hospital</Text>
          <Select fontSize="12px" placeholder='Select option'>
            <option value='option1'>Vivantes Hospital Group</option>
            <option value='option2'>Helios Park Hospital</option>
            <option value='option3'>University Hospital</option>
          </Select>
        </Box>
        <Box mb="10px">
          <Text mb="5px" fontSize="sm">Select Patient</Text>
          <Select fontSize="12px" placeholder='Select option'>
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
          <Text mb="5px" fontSize="sm">Select Patient</Text>
          <Select fontSize="12px" placeholder='Select option'>
            <option value='option1'>Emilia</option>
            <option value='option2'>Ella</option>
            <option value='option3'>Lea</option>
          </Select>
        </Box>
        <Box mt="25px">
          <Button w="50%" colorScheme='teal' size='md' onClick={() => setOpenForm(true)}>
            Submitgdfgfddfg
          </Button>
        </Box>
      </Box>}
  </PageLayout>;
};

export default Create;
