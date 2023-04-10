import React from 'react';
import { PageLayout } from 'ui';
import {
    Stack,
    TabPanels,
    TabPanel,
    TabList,
    Tabs,
    Tab,
    StackDivider,
} from '@chakra-ui/react';
import Prescriptions from './prescriptions'
import Opinions from './opinions';
import Certificates from './certificates';

const Inquiries = () => {

    return (
        <PageLayout
            title="Inquiries"
            description=""
            actions={<></>}
            hasDivider
        >
            <Stack spacing="8" divider={<StackDivider />} pt="2">
                <Tabs>
                    <TabList>
                        <Tab>Prescriptions</Tab>
                        <Tab>Sick certificate</Tab>
                        <Tab>Second opinion</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                          <Prescriptions />
                        </TabPanel>
                        <TabPanel>
                           <Certificates />
                        </TabPanel>
                        <TabPanel>
                           <Opinions />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Stack>
        </PageLayout>
        // </SettingsLayout>
    );
};

export default Inquiries;
