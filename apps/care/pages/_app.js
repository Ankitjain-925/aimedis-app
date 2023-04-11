import {
  ChakraProvider,
  DatabaseProvider,
  UserProvider,
  CrispChatProvider,
  ShellWithSidebar,
  SearchModal
} from 'ui';
import { MdDashboard } from 'react-icons/md';
import { HiDocument } from 'react-icons/hi';
import "../styles/globals.css";
import { Box, Text, Switch, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function App({ Component, pageProps }) {
  const [Value, setValue] = useState(false);
  const posts = [
    {
      title: "How to create a react search bar",
    },
    {
      title: "How to mock api data in Node",
    },
  ];
  return (
    <ChakraProvider pageProps={pageProps}>
      <DatabaseProvider pageProps={pageProps}>
        <UserProvider>
          <CrispChatProvider>
            <ShellWithSidebar
              navbar={{
                leftContent: (
                  <Flex alignItems="center">
                    {Value ? <ArrowLeftIcon cursor="pointer" color="gray.500" onClick={() => setValue(false)} /> :
                      <ArrowRightIcon cursor="pointer" color="gray.500" onClick={() => setValue(true)} />}
                  </Flex>
                ),
                middleContent: (
                  <Box>
                    <SearchModal posts={posts} />
                  </Box>
                ),
                rightContent: (
                  <Box>
                    <Text>Actions</Text>
                  </Box>
                ),
              }}
              sidebar={{
                Value: Value,
                links: [
                  {
                    label: 'Dashboard',
                    href: '/',
                    icon: MdDashboard,
                  },
                  {
                    label: 'Section',
                    children: [
                      {
                        label: 'Appointments',
                        href: '/appointments',
                        icon: HiDocument,
                      },
                      {
                        label: 'Patients',
                        href: '/patients',
                        icon: HiDocument,
                      },
                      {
                        label: 'Inquiries',
                        href: '/inquiries',
                        icon: HiDocument,
                      },
                      {
                        label: 'Questionnaire',
                        href: '/questionnaire',
                        icon: HiDocument,
                      },
                      {
                        label: 'Tasks',
                        href: '/tasks',
                        icon: HiDocument,
                      },
                      {
                        label: 'Settings',
                        href: '/settings',
                        icon: HiDocument,
                      },
                    ],
                  },
                ],
                actions: (
                  <Box>
                    <Text>Actions</Text>
                  </Box>
                ),
                footer: (
                  <Box>
                    <Text>Footer</Text>
                  </Box>
                ),
              }}
            >
              <Component {...pageProps} />
            </ShellWithSidebar>
          </CrispChatProvider>
        </UserProvider>
      </DatabaseProvider>
    </ChakraProvider>
  );
}
