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
  FormControl,
  FormLabel,
  Checkbox
} from '@chakra-ui/react';
import { PageLayout } from 'ui';
import Dropzone from "../dropzone/index"


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
      <>
        <Box bg="white" p="30px" w={["100%", "100%", "100%", "70%"]} borderRadius="8px">

          <Box mb="20px">
            <Text mb="5px" fontSize="lg" fontWeight="500" color="teal">Anamnesis</Text>
            <Text mb="5px" fontSize="xs" fontWeight="600" >Blood Pressure</Text>
            <Stack direction={['column', 'row']} spacing='24px'>
              <Box mb="10px" w="100%">
                <Text mb="5px" fontSize="xs" >RR Sysytolic</Text>
                <Input placeholder='mmHg' />
              </Box>
              <Box mb="10px" w="100%">
                <Text mb="5px" fontSize="xs" >RR Diastolic</Text>
                <Input placeholder='mmHg' />
              </Box>
            </Stack>
          </Box>

          <Box mb="20px">
            <Stack direction={['column', 'row']} spacing='24px'>
              <Box w="100%">
                <Text fontSize="xs" fontWeight="600">Diameter Leg</Text>
              </Box>
              <Button colorScheme='teal' size='sm'>
                Yes
              </Button>
              <Button colorScheme='teal' size='sm'>
                No
              </Button>
            </Stack>
          </Box>


          <Box mb="20px">
            <Stack direction={['column', 'row']} spacing='24px'>
              <Box w="100%">
                <Text fontSize="xs" fontWeight="600">Sick</Text>
              </Box>
              <Button colorScheme='teal' size='sm' mx="5px">
                Yes
              </Button>
              <Button colorScheme='teal' size='sm' mx="5px">
                No
              </Button>
            </Stack>
          </Box>

          <Box mb="20px">
            <Box mb="10px" w="80%">
              <Text mb="5px" fontSize="xs" fontWeight="600">o2 Saturation</Text>
            </Box>
            <Input placeholder='Basic usage' />
          </Box>

          <Box mb="20px">
            <Text mb="5px" fontSize="lg" fontWeight="500" color="teal">Decubitus Situation</Text>
            <Text mb="5px" fontSize="xs" fontWeight="600">Picture with Scale</Text>
            <Dropzone />
            <Text mb="5px" fontSize="sm" fontWeight="500" color="teal">Supported file types .jpg, .png, .pdf, .doc, .dcm etc</Text>
          </Box>

          <Box mb="20px">
            <Box mb="10px" w="80%">
              <Text mb="5px" fontSize="xs" fontWeight="600">Amount of wounds</Text>
            </Box>
            <Input placeholder='Basic usage' />
          </Box>

          <Box mb="20px">
            <Box w="100%">
              <Text mb="5px" fontSize="sm">Better / Worse</Text>
            </Box>
            <Stack direction={['column', 'row']} spacing='24px'>
              <RadioGroup name="form-name">
                <Radio mx="5px">Better</Radio>
                <Radio mx="5px">Worse</Radio>
              </RadioGroup>
            </Stack>
          </Box>

          <Box mb="20px">
            <Box mb="10px" w="80%">
              <Text mb="5px" fontSize="lg" fontWeight="500" color="teal">Falling Risk</Text>
              <Text mb="5px" fontSize="xs">ask for incidents</Text>
              <Checkbox size='md' colorScheme='teal' defaultChecked>
                Did you fall today
              </Checkbox>
              <Text mb="5px" fontSize="xs">Use of tools</Text>
              <Checkbox size='md' colorScheme='teal' defaultChecked>
                Can you use your tools
              </Checkbox>
            </Box>
          </Box>

          <Box mb="20px">
            <Box mb="10px" w="80%">
              <Text mb="5px" fontSize="xs" fontWeight="600">o2 Saturation</Text>
              <Text mb="5px" fontSize="xs">ask for incidents</Text>
            </Box>
            <Input placeholder='Basic usage' />
          </Box>

          <Box mb="10px">
            <Box>
              <Text mb="5px" fontSize="lg" fontWeight="500" color="teal">Thrombose Situation</Text>
              <Text mb="5px" fontSize="xs" fontWeight="600">Ask for Food</Text>
              <Text mb="5px" fontSize="sm" color="gray.700">Have you Eaten</Text>
              <RadioGroup onChange={setValue} value={value} mt="10px">
                <Stack direction='row'>
                  <Radio colorScheme="teal" value='1'>Yes</Radio>
                  <Radio colorScheme="teal" value='2'>No</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box mt="10px">
              <Text mb="5px" fontSize="xs" fontWeight="600">Water</Text>
              <Text mb="5px" fontSize="sm" color="gray.700">Have you been trinkung</Text>
              <RadioGroup onChange={setValue} value={value} mt="10px">
                <Stack direction='row'>
                  <Radio colorScheme="teal" value='1'>Yes</Radio>
                  <Radio colorScheme="teal" value='2'>No</Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box mt="10px">
              <Text mb="5px" fontSize="xs" fontWeight="600">Toilet Situation</Text>
              <Text mb="5px" fontSize="sm" color="gray.700">Could you go to the Toilet</Text>
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
              <RangeSliderThumb index={1} bg="teal" />
            </RangeSlider>
          </Box>

          <Box mb="10px">
            <Text mb="5px" fontSize="lg" fontWeight="500" color="teal">Thrombose Situation</Text>
            <Text mb="5px" fontSize="xs" fontWeight="600">Picture with Scale</Text>
            <Dropzone />
            <Text mb="5px" fontSize="sm" fontWeight="500" color="teal">Supported file types .jpg, .png, .pdf, .doc, .dcm etc</Text>
            <Text mb="5px" fontSize="xs" fontWeight="600">Amount of wounds</Text>
            <Input type="number" placeholder='Enter amount of wounds' />
            <Text mt="8px" mb="5px" fontSize="sm" color="gray.700">Better/ Worst</Text>
            <RadioGroup onChange={setValue} value={value} mt="10px">
              <Stack direction='row'>
                <Radio colorScheme="teal" value='1'>Yes</Radio>
                <Radio colorScheme="teal" value='2'>No</Radio>
              </Stack>
            </RadioGroup>
          </Box>


          <Box mb="20px">
            <FormLabel style={{ fontSize: "18px" }}>Feeding</FormLabel>
            <RadioGroup>
              <Radio w="100%" mb="5px" value="1" colorScheme="teal">
                Dependent in all aspects and needs to be fed.
              </Radio>

              <Radio w="100%" mb="5px" value="2" colorScheme="teal">
                Can manipulate an eating device, usually a spoon, but someone must
                provide active assistance during the meal.
              </Radio>

              <Radio w="100%" mb="5px" value="3" colorScheme="teal">
                Able to feed self with supervision. Assistance is required with
                associated tasks such as putting milk/sugar into tea, salt,
                pepper,spreading butter, turning a plate or other "set up"
                activities.
              </Radio>

              <Radio w="100%" mb="5px" value="4" colorScheme="teal">
                Independence in feeding with prepared tray, except may need meat
                cut, milk carton opened or jar lid etc. The presence of another
                person is not reauired.
              </Radio>

              <Radio w="100%" mb="5px" value="5" colorScheme="teal">
                The patient can feed self from a tray or table when someone puts the
                food within reach. The patient must put on an assistive device if
                needed, cut food, and if desired use salt and pepper, spread butter,
                etc..
              </Radio>
            </RadioGroup>
          </Box>

          <Box mb="20px">
            <FormLabel style={{ fontSize: "18px" }}>Chair/Bed Transfers</FormLabel>
            <RadioGroup>
              <Radio w="100%" mb="5px" value="1" colorScheme="teal">
                Unable to participate in a transfer. Two attendants are required to
                transfer the patient with or without a mechanical device.
              </Radio>

              <Radio w="100%" mb="5px" value="2" colorScheme="teal">
                Able to participate but maximum assistance of one other person is
                require in all aspects of the transfer.
              </Radio>

              <Radio w="100%" mb="5px" value="3" colorScheme="teal">
                The presence of another person is required either as a confidence
                measure, to provide supervision for safety.
              </Radio>

              <Radio w="100%" mb="5px" value="4" colorScheme="teal">
                The patient can safety approach the bed walking or in a wheelchair,
                look breaks, lift footrest, or position walking aid, move safely to
                bed, lie down, come to a sitting position on the side of the bed,
                chnage the position of the wheelchair, transfer back into it safely.
              </Radio>

              <Radio w="100%" mb="5px" value="5" colorScheme="teal">
                The patient must be independent in all phases of this activity.
              </Radio>
            </RadioGroup>
          </Box>

          <Box mb="20px">
            <FormLabel style={{ fontSize: "18px" }}>Ambulation</FormLabel>
            <RadioGroup>
              <Radio mb="5px" value="1" colorScheme="teal" w="100%">
                Dependent in ambulation.
              </Radio>

              <Radio w="100%" value="2" colorScheme="teal">
                Constant presence of one or more assistant is required during
                ambulation.
              </Radio>

              <Radio w="100%" mb="5px" value="3" colorScheme="teal">
                Assistance is required with reaching aids and/ or their
                manipulation. One person is required to offer assistance.
              </Radio>

              <Radio w="100%" mb="5px" value="4" colorScheme="teal">
                The patient is independent in ambulation but unable to walk 50
                metres yards without help, or supervision in needed for confidence
                or safety in hazardous situations.
              </Radio>

              <Radio w="100%" mb="5px" value="5" colorScheme="teal">
                The patient must be able to wear braces if required, lock and unlock
                these braces assume standinq position, sit down and place the
                necessary aids into position for use. The patient must be able to
                crutches, canes, or a walkarette, and walk 50 meters/yards without
                help or Supervision.
              </Radio>
            </RadioGroup>
          </Box>

          <Box mb="20px">
            <FormLabel style={{ fontSize: "18px" }}>
              Wheelchair Management (*Only use this item if the patient is rated "O"
              for ambulation, and then only if the patient has been trained in w/c
              management.)
            </FormLabel>
            <RadioGroup>
              <Radio w="100%" mb="5px" value="1" colorScheme="teal">
                Dependent in wheelchair ambulation.
              </Radio>

              <Radio w="100%" mb="5px" value="2" colorScheme="teal">
                Patient can propel self short distance on flat surface, but
                assistance is required for all other steps of wheelchair management.
              </Radio>

              <Radio w="100%" mb="5px" value="3" colorScheme="teal">
                Presence of one person is necessary and constant assistance is
                required to manipulate chair to table, bed, etc.
              </Radio>

              <Radio w="100%" mb="5px" value="4" colorScheme="teal">
                The patient can propel self for a resonable duration over regular
                encountered terrain. Minimal assistance may still be required in
                "right corners" or tp negotiation a Kerb 100mm high.
              </Radio>

              <Radio w="100%" mb="5px" value="5" colorScheme="teal">
                To propel wheelchair independently, the patient must be a able to go
                around corners, turn around manoeuvre the chair to a table, bed,
                toilet, etc. The patient must be able to push a chair at least 50
                meters and negotiate a Kerb.
              </Radio>
            </RadioGroup>
          </Box>

          <Box mb="20px">
            <FormLabel style={{ fontSize: "18px" }}>Stairs</FormLabel>
            <RadioGroup>
              <Radio w="100%" mb="5px" value="1" colorScheme="teal">
                The patient is unable to climb stairs.
              </Radio>

              <Radio w="100%" mb="5px" value="2" colorScheme="teal">
                Assistance is required in all aspects of stairclimbing, including
                assistance with walking aids.
              </Radio>

              <Radio w="100%" mb="5px" value="3" colorScheme="teal">
                The patient is able to ascend/desend but is unable to carry walking
                aids and needs supervision and assistance.
              </Radio>

              <Radio w="100%" mb="5px" value="4" colorScheme="teal">
                Generalyno assistanceis required. At times supervision is required
                for safety due to morning siftnes, shortness of breath.
              </Radio>

              <Radio w="100%" mb="5px" value="5" colorScheme="teal">
                The patient is able to go up and down a flight of stairs safely
                without help or supervision. The patient is able to use hand rails,
                cane or crutches when needed and is able to carry these devices as
                he/she ascends or descends.
              </Radio>
            </RadioGroup>
          </Box>

          <Box mb="20px">
            <FormLabel style={{ fontSize: "18px" }}>
              On and Off the Toilet
            </FormLabel>
            <RadioGroup>
              <Radio mb="5px" value="1" colorScheme="teal" w="100%">
                Fully dependent in toileting.
              </Radio>

              <Radio w="100%" mb="5px" value="2" colorScheme="teal">
                Assistance required in all aspects of toileting.
              </Radio>

              <Radio w="100%" mb="5px" value="3" colorScheme="teal">
                Assistance may be required with management of clothing,
                transferring, or washing hands.
              </Radio>

              <Radio w="100%" mb="5px" value="4" colorScheme="teal">
                Supervision may be required for safety with normal toilet. A
                commando mey be used at night but assistance is required for
                emptying and clearing.
              </Radio>

              <Radio w="100%" mb="5px" value="5" colorScheme="teal">
                The patient is able to get on/off the toilet, fasten clothing and
                use toilet paper without help. if necessary, the patient may use a
                bed pan or Commode or urinal at night, but must be able to empty it
                and clean it.
              </Radio>
            </RadioGroup>
          </Box>

          <Box mb="20px">
            <FormLabel style={{ fontSize: "18px" }}>Bowels</FormLabel>
            <RadioGroup>
              <Radio w="100%" mb="5px" value="1" colorScheme="teal">
                The patient is bowel incontient.
              </Radio>

              <Radio w="100%" mb="5px" value="2" colorScheme="teal">
                The patient needs help to assume appropriate position, and with
                bowel movement facilitatory techniques.
              </Radio>

              <Radio w="100%" mb="5px" value="3" colorScheme="teal">
                The patient can assume appropriate position, but can not use
                facilitatory techniques or clean self without assistance and has
                frequent accident. Assistance is reuired with incontinence aids such
                as pad, etc.
              </Radio>

              <Radio w="100%" mb="5px" value="4" colorScheme="teal">
                The patient may require supervision with the use of suppository or
                enema and has occasional accident.
              </Radio>

              <Radio w="100%" mb="5px" value="5" colorScheme="teal">
                The patient can control bowels and has no accidents, can use
                suppository, or take an enema when necessary.
              </Radio>
            </RadioGroup>
          </Box>

          <Box mb="20px">
            <FormLabel style={{ fontSize: "18px" }}>Bladder</FormLabel>
            <RadioGroup>
              <Radio w="100%" mb="5px" value="1" colorScheme="teal">
                The patient is dependent in bladder management, is incontinent, or
                has indwelling catheter.
              </Radio>

              <Radio w="100%" mb="5px" value="2" colorScheme="teal">
                The patient is incontinent but is able to assist with the
                application of an internal or external device.
              </Radio>

              <Radio w="100%" mb="5px" value="3" colorScheme="teal">
                The patient is generally dry by day, but not at night and needs some
                assistance with the devices.
              </Radio>

              <Radio w="100%" mb="5px" value="4" colorScheme="teal">
                The patient is generally dry by day and night, but may have an
                occasional accident or need minimal assistance with internal or
                external devices.
              </Radio>

              <Radio w="100%" value="5" colorScheme="teal">
                The patient is able to control bladder day and night, and/or is
                independent with internal or external devices.
              </Radio>
            </RadioGroup>
          </Box>




          <Box mt="25px">
            <Button w="50%" colorScheme='teal' size='md' onClick={() => setOpenForm(true)}>
              Submit
            </Button>
          </Box>
        </Box>

      </>}
  </PageLayout>;
};

export default Create;
