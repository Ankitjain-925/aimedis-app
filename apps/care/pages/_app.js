import {
  ChakraProvider,
  DatabaseProvider,
  UserProvider,
  CrispChatProvider,
  ShellWithSidebar,
} from 'ui';
import { MdDashboard } from 'react-icons/md';
import { HiDocument } from 'react-icons/hi';
import { Box, Text } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider pageProps={pageProps}>
      <DatabaseProvider pageProps={pageProps}>
        <UserProvider>
          <CrispChatProvider>
            <ShellWithSidebar
              navbar={{
                leftContent: (
                  <Box>
                    <Text>Actions</Text>
                  </Box>
                ),
                middleContent: (
                  <Box>
                    <Text>Search</Text>
                  </Box>
                ),
                rightContent: (
                  <Box>
                    <Text>Actions</Text>
                  </Box>
                ),
              }}
              sidebar={{
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
