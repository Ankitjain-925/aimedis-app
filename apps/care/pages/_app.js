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
import { Box, Text, Switch, Flex } from '@chakra-ui/react';
import { useState } from 'react';

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
                    <Switch size="md" colorScheme="teal"
                      onChange={(e) => setValue(e.target.checked)}
                    />
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
                        label: 'Page',
                        href: '/',
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
