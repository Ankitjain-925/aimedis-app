import {
  ChakraProvider,
  DatabaseProvider,
  UserProvider,
  CrispChatProvider,
  ShellWithSidebar,
  SearchModal
} from 'ui';
import { MdDashboard } from 'react-icons/md';
import { FiCalendar} from 'react-icons/fi';
import { GrGroup} from "react-icons/Gr";
import { FcQuestions} from "react-icons/fc";
import { BiTask} from "react-icons/Bi";
import { HiDocumentText} from "react-icons/Hi";
import { AiFillSetting } from "react-icons/ai";
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
                        icon: FiCalendar,
                      },
                      {
                        label: 'Patients',
                        href: '/patients',
                        icon:GrGroup ,
                      },
                      {
                        label: 'Inquiries',
                        href: '/inquiries',
                        icon: HiDocumentText,
                      },
                      {
                        label: 'Questionnaire',
                        href: '/questionnaire',
                        icon: FcQuestions,
                      },
                      {
                        label: 'Tasks',
                        href: '/tasks',
                        icon: BiTask,
                      },
                      {
                        label: 'Settings',
                        href: '/settings',
                        icon: AiFillSetting,
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
