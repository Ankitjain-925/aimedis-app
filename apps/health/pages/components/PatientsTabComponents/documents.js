import {
  Text,
  TabPanels,
  TabList,
  TabPanel,
  Tabs,
  Tab,
  Flex,
  RadioGroup,
  Textarea,
  Radio,
  Stack,
  Link,
  Modal,
  ModalOverlay,
  Select,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  ModalFooter,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Checkbox
} from '@chakra-ui/react'
import React from 'react'

export default function Documents() {
  const prescriptionModal = useDisclosure()
  const sickcertifiaceModal = useDisclosure()
  const secondopinionModal = useDisclosure()
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Prescriptions</Tab>
          <Tab>Sick Certificates</Tab>
          <Tab>Second Opinion</Tab>
        </TabList>

        <TabPanels overflow={"auto"}>
          <TabPanel>
            <Flex
              direction={["column", "row", "row"]}
              justifyContent="space-between">
              <Flex align="center">
                <Text fontSize='17px' fontWeight='600' pl="10px">
                  Prescriptions
                </Text>
              </Flex>
              <Flex align="center">
                <Link fontSize="13px" onClick={prescriptionModal.onOpen}>Add Prescription</Link>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              direction={["column", "row", "row"]}
              justifyContent="space-between">
              <Flex align="center">
                <Text fontSize='17px' fontWeight='600' pl="10px">
                  Sick Certificates
                </Text>
              </Flex>
              <Flex align="center">
                <Link fontSize="13px" onClick={sickcertifiaceModal.onOpen}>Add Sick Certificate</Link>
              </Flex>

            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              direction={["column", "row", "row"]}
              justifyContent="space-between">
              <Flex align="center">
                <Text fontSize='17px' fontWeight='600' pl="10px">
                  Second Opinion
                </Text>
              </Flex>
              <Flex align="center">
                <Link fontSize="13px" onClick={secondopinionModal.onOpen}>Add Second Opinion</Link>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
        <Modal isOpen={prescriptionModal.isOpen} onClose={prescriptionModal.onClose}>
          <ModalOverlay />
          <ModalContent>

            <ModalHeader><Text fontSize="13px">New Inquiry</Text>Prescription</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="600">Share Health Status</Text>
              <FormControl mb="10px">
                <Checkbox mt="10px" mb="10px">Add this Doctor to my Private list</Checkbox>
                <Text fontSize="13px">This will share your health status info from your journal, as this is needed for the doctor to be able to approve your prescription request.</Text>
                <Text fontSize="13px">See list of shared information</Text>
              </FormControl>
              <Text fontWeight="600" pt="15px" pb="5px">Doctor and Standard Questions</Text>
              <FormControl mb="10px" >
                <FormLabel>Doctor (AIS & Private)</FormLabel>
                <Select placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Is this a follow-up prescription?</FormLabel>
                <RadioGroup defaultValue='2'>
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='green' value='yes'>
                      Yes
                    </Radio>
                    <Radio colorScheme='green' value='no'>
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>How would you like to receive the prescription?</FormLabel>
                <RadioGroup defaultValue='2'>
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='green' value='yes'>
                      Online
                    </Radio>
                    <Radio colorScheme='green' value='no'>
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>


              <Text fontWeight="600" pt="15px" pb="5px">Medicine Inquiry</Text>
              <FormControl mb="10px" >
                <FormLabel>Medicine / Substance</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Dose</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Trade name</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>ATC code if applicable</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Manufacturer</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Pack size</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Annotations / Details / Questions</FormLabel>
                <Textarea />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='teal' mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={sickcertifiaceModal.isOpen} onClose={sickcertifiaceModal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><Text fontSize="13px">New Inquiry</Text>Sick Certificate</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="600">Share Health Status</Text>
              <FormControl mb="10px">
                <Checkbox mt="10px" mb="10px">Add this Doctor to my Private list</Checkbox>
                <Text fontSize="13px">This will share your health status info from your journal, as this is needed for the doctor to be able to approve your prescription request.</Text>
                <Text fontSize="13px">See list of shared information</Text>
              </FormControl>
              <Text fontWeight="600" pt="15px" pb="5px">Doctor and Standard Questions</Text>
              <FormControl mb="10px" >
                <FormLabel>Doctor (AIS & Private)</FormLabel>
                <Select placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>How are you feeling?</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Is your temperature higher than 38 °C?</FormLabel>
                <RadioGroup defaultValue='2'>
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='green' value='yes'>
                      Yes
                    </Radio>
                    <Radio colorScheme='green' value='no'>
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Which symptoms do you have?</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Since when?</FormLabel>
                <RadioGroup defaultValue='2'>
                  <Stack spacing={5}>
                    <Radio colorScheme='green' value='today'>
                      Today
                    </Radio>
                    <Radio colorScheme='green' value='yesterday'>
                      Yesterday
                    </Radio>
                    <Radio colorScheme='green' value='twodaysago'>
                      2 days ago
                    </Radio>
                    <Radio colorScheme='green' value='threetosixdaysago'>
                      3-6 days ago
                    </Radio>
                    <Radio colorScheme='green' value='weekorago'>
                      Week or more
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Have you already been sick at home for the same problem?</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>How long do you think you will be unable to work?</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Is it a known disease?</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Are you taking any medication?</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Do you have any allergies?</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>What is your profession?</FormLabel>
                <Input type='text' height="40px" />
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Annotations / Details / Questions</FormLabel>
                <Textarea />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='teal' mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={secondopinionModal.isOpen} onClose={secondopinionModal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><Text fontSize="13px">New Inquiry</Text>Second Opinion</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="600">Share Health Status</Text>
              <FormControl mb="10px">
                <Checkbox mt="10px" mb="10px">Add this Doctor to my Private list</Checkbox>
                <Text fontSize="13px">This will share your health status info from your journal, as this is needed for the doctor to be able to approve your prescription request.</Text>
                <Text fontSize="13px">See list of shared information</Text>
              </FormControl>
              <Text fontWeight="600" pt="15px" pb="5px">Doctor and Standard Questions</Text>
              <FormControl mb="10px" >
                <FormLabel>Specialist</FormLabel>
                <Select placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </FormControl>

              <FormControl mb="10px" mt="10px">
                <FormLabel>How would you like to receive the second opinion?</FormLabel>
                <RadioGroup defaultValue='2'>
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='green' value='yes'>
                      Online
                    </Radio>
                    <Radio colorScheme='green' value='no'>
                      Home address mailbox
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Annotations / Details / Questions</FormLabel>
                <Textarea />
              </FormControl>
              <FormControl mt="15px">
                <FormLabel>Upload a photo of your ID Card</FormLabel>
                <Input type="File" placeholder='extra small size' height="40px" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='teal' mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Tabs>
    </>
  );
}