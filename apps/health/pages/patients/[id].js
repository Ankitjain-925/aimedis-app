import {
    Box,
    Center,
    Divider,
    Grid, Tabs, TabList, TabPanels, Tab, TabPanel,
    MenuButton, MenuList, MenuItem, Menu, Button
} from '@chakra-ui/react'
import SplitPane, { DragHandle } from "../components/SplitWindows/SplitPane";
import React, { useState } from "react";
import { useWindowSize } from "../components/SplitWindows/WindowSize";
import { Documents, Emergency, Graphs, Insurances, Contacts, Rights, Donor, KYC, Journals, Archived, Journey, Trusted } from "../components/PatientsTabComponents";
import {
    ColorSwitcher,
  } from 'ui';
// import { Insurances,} from "../components/DraggableComponents";
function TabsPanel1({ height }) {
    return (
        <Tabs>
            <TabList>
                <Tab>Insurances</Tab>
                <Tab>Contacts</Tab>
                <Tab>Trusted Doctors</Tab>
                <Tab>Rights</Tab>
                <Tab>Donor</Tab>
                <Tab>KYC</Tab>
            </TabList>

            <TabPanels overflow={"auto"} height={height}>
                <TabPanel>
                    <Insurances />
                </TabPanel>
                <TabPanel>
                    <Contacts />
                </TabPanel>
                <TabPanel>
                    <Trusted />
                </TabPanel>
                <TabPanel>
                    <Rights />
                </TabPanel>
                <TabPanel>
                    <Donor />
                </TabPanel>
                <TabPanel>
                    <KYC />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

function TabsPanel2({ height }) {
    return (
        <Tabs>
            <TabList>
                <Tab>Emergency Data</Tab>
                <Tab>Documents</Tab>
                <Tab>Journal</Tab>
                <Tab>Archived Journal</Tab>
                <Tab>Patient Journey</Tab>
            </TabList>

            <TabPanels overflow={"auto"} height={height}>
                <TabPanel>
                    <Emergency />
                </TabPanel>
                <TabPanel>
                    <Documents />
                </TabPanel>
                <TabPanel>
                    <Journals />
                </TabPanel>
                <TabPanel>
                    <Archived />
                </TabPanel>
                <TabPanel>
                    <Journey />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default function PatientInformation() {
    var sizeWin;
    sizeWin = useWindowSize();
    const [pane1Height, setPane1Height] = useState(0);
    const [pane2Height, setPane2Height] = useState(0);

    const setheight = (pane1, pane2) => {
        setPane1Height(pane1);
        setPane2Height(pane2)
    }

    return (
        <Box>
            <ColorSwitcher />
            <Grid templateRows="auto 9fr" h="100vh" w="100vw">
                <SplitPane orientation="horizontal" splittype="1" >
                    <Box>
                        <SplitPane orientation="vertical" splittype="2" setheight={(h1, h2) => setheight(h1, h2)}>
                            <Box>
                                <TabsPanel1 height={pane1Height} />
                            </Box>
                            <DragHandle>
                                <Center h="10px">
                                    <Divider borderWidth="3px" orientation='horizontal' />
                                </Center>
                            </DragHandle>
                            <Box>
                                <TabsPanel2 height={pane2Height} />
                            </Box>
                        </SplitPane>
                    </Box>
                    <DragHandle>
                        <Center w="10px" h="100%">
                            <Divider borderWidth="3px" orientation="vertical" />
                        </Center>
                    </DragHandle>
                    <Box h="100vh" >
                    
                        {/* <Grid m={'10px'}> */}
                        <Menu>
                            <MenuButton as={Button} m={'10px'}>
                                Menu
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Menu Option 1</MenuItem>
                                <MenuItem>Menu Option 2</MenuItem>
                                <MenuItem>Menu Option 3</MenuItem>
                                <MenuItem>Menu Option 4</MenuItem>
                                <MenuItem>Menu Option 5</MenuItem>
                            </MenuList>
                        </Menu>
                        <Graphs />
                        {/* </Grid> */}
                    </Box>
                </SplitPane>
            </Grid>
        </Box>
    );
}