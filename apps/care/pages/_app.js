import {
  ChakraProvider,
  DatabaseProvider,
  UserProvider,
  CrispChatProvider,
  ShellWithSidebar,
  SearchModal
} from 'ui';
import { MdDashboard } from 'react-icons/md';
import { FiCalendar } from 'react-icons/fi';
import { BiTask } from "react-icons/Bi";
import { HiOutlineUserGroup, HiOutlineDocumentText } from "react-icons/Hi";
import { AiFillSetting } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import "../styles/globals.css";
import { Box, Text, Flex } from '@chakra-ui/react';
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
                        icon:HiOutlineUserGroup ,
                      },
                      {
                        label: 'Inquiries',
                        href: '/inquiries',
                        icon: HiOutlineDocumentText,
                      },
                      {
                        label: 'Questionnaire',
                        href: '/questionnaire',
                        icon: BsQuestionSquare,
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
