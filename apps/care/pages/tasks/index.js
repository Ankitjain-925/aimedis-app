import React, { useState }  from 'react';
import { PageLayout } from 'ui';
import {
    ButtonGroup,
    Button,
    ModalFooter,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Spacer,
    Box,
    Flex,
    Stack,
    TabPanels,
    TabPanel,
    TabList,
    Tabs,
    Tab,
    Select,
    StackDivider,
    FormLabel,
    Input,
    Text,
    Divider,
    FormControl,
    Checkbox,
    useDisclosure,
    RadioGroup,
    Radio,
    IconButton,
    Tooltip
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'

const Tasks = () => {
  const addition = useDisclosure()
  const [type, setType] = useState("task");
  const [next, setNext] = useState(false);
    return (
        <PageLayout
            title="Professional activities"
            description=""
            actions={<Tooltip label="Add new Task">
            <IconButton
              variant="primary"
              aria-label="Add new Task"
              icon={<AddIcon />}
              onClick={addition.onOpen}
            />
          </Tooltip>}
            hasDivider
        >
            <Stack spacing="8" divider={<StackDivider />} pt="2">
                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Done</Tab>
                        <Tab>Open</Tab>
                        <Tab>Archived</Tab>
                        <Tab>Past</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                        All
                        </TabPanel>
                        <TabPanel>
                        Done
                        </TabPanel>
                        <TabPanel>
                        Open
                        </TabPanel>
                        <TabPanel>
                        Archived
                        </TabPanel>
                        <TabPanel>
                        Past
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Stack>
            <Modal isOpen={addition.isOpen} onClose={()=>{setNext(false); setType('task'); addition.onClose()}}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              New Task
              <Text fontSize="13px">Add new task on patient</Text></ModalHeader>
            <ModalCloseButton />
            <Divider orientatioDCXn="horizontal" mb="10px" />
            {!next && <ModalBody>
            <FormControl>
       
              <FormLabel>Hospital</FormLabel>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>
            <RadioGroup mt="10px" name="type" value={type} onChange={(e)=>setType(e)}>
                <FormLabel>Task Type</FormLabel>
                <Stack spacing={'5px'}>
                  <Radio value='task' colorScheme='green'>Basic Task</Radio>
                  <Radio value='service' colorScheme='green'>Assigned services</Radio>
                  <Radio value='therapy' colorScheme='green'>Therapy</Radio>
                </Stack>
              </RadioGroup>
            </ModalBody>}
            {next && <ModalBody>
              {type==='task' && <Text>Basic Task</Text> }
              {type==='service' && <Text>Assigned service</Text> }
              {type==='task' && <Text>Therapy</Text> }
               </ModalBody>}
            <ModalFooter>
            {next ?<Button colorScheme='teal' mr={3}>
                Submit
              </Button> : <Button onClick={()=>{setNext(true)}} colorScheme='teal' mr={3}>
                Next
              </Button>}
            </ModalFooter>
          </ModalContent>
        </Modal>
        </PageLayout>
        // </SettingsLayout>
    );
};

export default Tasks;

