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
  Checkbox,
  Divider,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {useTableInsert} from "../../../../../packages/ui/hooks/useTable"

export default function Documents() {
  const prescriptionModal = useDisclosure();
  const sickcertifiaceModal = useDisclosure();
  const secondopinionModal = useDisclosure();
  const [data, setdata] = useState([]);
  const insertData=useTableInsert("patient_inquiry_sickcertificate",data,"*")
  const [data1,setData1]=useState();

  const handleChange = input => e => {
    setdata({ ...data, [input]: e.target.value });
  }

  

  const handleSubmit = (data) => {
   setData1(insertData)
    console.log("ddd",data1)
    setdata(null)
  }

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
                <Text fontSize="17px" fontWeight="600" pl="10px">
                  Prescriptions
                </Text>
              </Flex>
              <Flex align="center">
                <Link fontSize="13px" onClick={prescriptionModal.onOpen}>
                  Add Prescription
                </Link>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              direction={["column", "row", "row"]}
              justifyContent="space-between">
              <Flex align="center">
                <Text fontSize="17px" fontWeight="600" pl="10px">
                  Sick Certificates
                </Text>
              </Flex>
              <Flex align="center">
                <Link fontSize="13px" onClick={sickcertifiaceModal.onOpen}>
                  Add Sick Certificate
                </Link>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              direction={["column", "row", "row"]}
              justifyContent="space-between">
              <Flex align="center">
                <Text fontSize="17px" fontWeight="600" pl="10px">
                  Second Opinion
                </Text>
              </Flex>
              <Flex align="center">
                <Link fontSize="13px" onClick={secondopinionModal.onOpen}>
                  Add Second Opinion
                </Link>
              </Flex>
            </Flex>
          </TabPanel>
        </TabPanels>
        <Modal
          isOpen={prescriptionModal.isOpen}
          onClose={prescriptionModal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text fontSize="13px">New Inquiry</Text>Prescription
            </ModalHeader>
            <ModalCloseButton />
            <Divider orientation="horizontal" mb="10px" />
            <ModalBody>
              <Text fontWeight="600">Share Health Status</Text>
              <FormControl mb="10px">
                <Checkbox mt="10px" mb="10px"  name="check" value={data?.check==""? false : data?.check=="true"? false : true }  onChange={handleChange("check")}>
                  Add this Doctor to my Private list
                </Checkbox>
                <Text fontSize="13px">
                  This will share your health status info from your journal, as
                  this is needed for the doctor to be able to approve your
                  prescription request.
                </Text>
                <Text fontSize="13px">See list of shared information</Text>
              </FormControl>
              <Text fontWeight="600" pt="15px" pb="5px">
                Doctor and Standard Questions
              </Text>
              <FormControl mb="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Doctor (AIS & Private)
                </FormLabel>
                <Select placeholder="Select option" name="s" onChange={handleChange("s")}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>Is this a follow-up prescription?</FormLabel>
                <RadioGroup defaultValue="2" >
                  <Stack spacing={5} direction="row">

                  {/* <Radio colorScheme="green" value="yes" name="r" onChange={handleChange("r")}> */}
                    <Radio colorScheme="green" value="yes" name="followup" onChange={handleChange("followup")}>
                      Yes
                    </Radio>
                    <Radio colorScheme="green"value="no" name="followup"  onChange={handleChange("followup")}>
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mb="10px" mt="10px">
                <FormLabel>
                  How would you like to receive the prescription?
                </FormLabel>
                <RadioGroup defaultValue="2" >
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="yes">
                      Online
                    </Radio>
                    <Radio colorScheme="green" value="no">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <Text fontWeight="600" pt="15px" pb="5px">
                Medicine Inquiry
              </Text>
              <FormControl mb="15px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Medicine / Substance
                </FormLabel>
                <Input type="text" height="40px" name="medication"  onChange={handleChange("medication")} />
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>Dose</FormLabel>
                <Input type="text" height="40px" name="dose"  onChange={handleChange("dose")}/>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>Trade name</FormLabel>
                <Input type="text" height="40px" name="trade_name" onChange={handleChange("trade_name")} />
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  ATC code if applicable
                </FormLabel>
                <Input type="text" height="40px" name="atc_code"  onChange={handleChange("atc_code")} />
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>Manufacturer</FormLabel>
                <Input type="text" height="40px" name="manufacturer" onChange={handleChange("manufacturer")}/>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>Pack size</FormLabel>
                <Input type="text" height="40px" name="pack_size"  onChange={handleChange("pack_size")}/>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Annotations / Details / Questions
                </FormLabel>
                <Textarea name="annotations" onChange={handleChange("annotations")} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={()=>handleSubmit(data)}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          isOpen={sickcertifiaceModal.isOpen}
          onClose={sickcertifiaceModal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text fontSize="13px">New Inquiry</Text>Sick Certificate
            </ModalHeader>
            <ModalCloseButton />
            <Divider orientation="horizontal" mb="10px" />
            <ModalBody>
              <Text fontWeight="600">Share Health Status</Text>
              <FormControl mb="10px">
                <Checkbox mt="10px" mb="10px" name="check" value={data?.check==""? false : data?.check=="true"? false : true } onChange={handleChange("check")}>
                  Add this Doctor to my Private list
                </Checkbox>
                <Text fontSize="13px">
                  This will share your health status info from your journal, as
                  this is needed for the doctor to be able to approve your
                  prescription request.
                </Text>
                <Text fontSize="13px">See list of shared information</Text>
              </FormControl>
              <Text fontWeight="600" pt="15px" pb="5px">
                Doctor and Standard Questions
              </Text>
              <FormControl mb="15px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Doctor (AIS & Private)
                </FormLabel>
                <Select placeholder="Select option" name="s" onChange={handleChange("selection")}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  How are you feeling?
                </FormLabel>
                <Input type="text" height="40px" name="how_are_you" onChange={handleChange("how_are_you")}/>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Is your temperature higher than 38 °C?
                </FormLabel>
                <RadioGroup defaultValue="2">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="yes"name="temperature" onChange={handleChange("temperature")} >
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="no" name="temperature" onChange={handleChange("temperature")}>
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Which symptoms do you have?
                </FormLabel>
                <Input type="text" height="40px" onChange={handleChange("known_diseases")} />
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel>Since when?</FormLabel>
                <RadioGroup defaultValue="2">
                  <Stack spacing={5}>
                    <Radio colorScheme="green" value="today" onChange={handleChange("send_to_timeline")}>
                      Today
                    </Radio>
                    <Radio colorScheme="green" value="yesterday" onChange={handleChange("send_to_timeline")}>
                      Yesterday
                    </Radio>
                    <Radio colorScheme="green" value="twodaysago" onChange={handleChange("send_to_timeline")}>
                      2 days ago
                    </Radio>
                    <Radio colorScheme="green" value="threetosixdaysago" onChange={handleChange("send_to_timeline")}>
                      3-6 days ago
                    </Radio>
                    <Radio colorScheme="green" value="weekorago" onChange={handleChange("send_to_timeline")}>
                      Week or more
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Have you already been sick at home for the same problem?
                </FormLabel>
                <Input type="text" height="40px" onChange={handleChange("same_problem_before")}/>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  How long do you think you will be unable to work?
                </FormLabel>
                <Input type="text" height="40px" onChange={handleChange("time_unable_work")} />
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Is it a known disease?
                </FormLabel>
                <Input type="text" height="40px" onChange={handleChange("known_diseases")} />
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Are you taking any medication?
                </FormLabel>
                <Input type="text" height="40px"  onChange={handleChange("allergies")}/>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Do you have any allergies?
                </FormLabel>
                <Input type="text" height="40px" onChange={handleChange("allergies")} />
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  What is your profession?
                </FormLabel>
                <Input type="text" height="40px" onChange={handleChange("professions")} />
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Annotations / Details / Questions
                </FormLabel>
                <Textarea onChange={handleChange("annotations")} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" mr={3}onClick={()=>handleSubmit()}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          isOpen={secondopinionModal.isOpen}
          onClose={secondopinionModal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text fontSize="13px">New Inquiry</Text>Second Opinion
            </ModalHeader>
            <ModalCloseButton />
            <Divider orientation="horizontal" mb="10px" />
            <ModalBody>
              <Text fontWeight="600">Share Health Status</Text>
              <FormControl mb="10px">
                <Checkbox mt="10px" mb="10px" name="check" value={data?.check==""? false : data?.check=="true"? false : true } onChange={handleChange("check")}>
                  Add this Doctor to my Private list
                </Checkbox>
                <Text fontSize="13px">
                  This will share your health status info from your journal, as
                  this is needed for the doctor to be able to approve your
                  prescription request.
                </Text>
                <Text fontSize="13px">See list of shared information</Text>
              </FormControl>
              <Text fontWeight="600" pt="15px" pb="5px">
                Doctor and Standard Questions
              </Text>
              <FormControl mb="15px">
                <FormLabel style={{ fontSize: "13px" }}>Specialist</FormLabel>
                <Select placeholder="Select option" name="selection" onChange={handleChange("selection")}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>

              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  How would you like to receive the second opinion?
                </FormLabel>
                <RadioGroup defaultValue="2">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="yes" name="online_offline" onChange={handleChange("online_offline")}>
                      Online
                    </Radio>
                    <Radio colorScheme="green" value="no" name="online_offline" onChange={handleChange("online_offline")}>
                      Home address mailbox
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <FormControl mb="15px" mt="10px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Annotations / Details / Questions
                </FormLabel>
                <Textarea onChange={handleChange("details")}/>
              </FormControl>
              <FormControl mt="15px">
                <FormLabel style={{ fontSize: "13px" }}>
                  Upload a photo of your ID Card
                </FormLabel>
                <Box                  minHeight="100px"
                  borderRadius={"8px"}
                  border={"1px dotted"}>
                  <Box
                    style={{
                      position: "absolute",
                      top: "50%",
                      bottom: "50%",
                      left: "30%",
                      // right:'30%'
                    }}>
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
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" mr={3}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Tabs>
    </>
  );
}
