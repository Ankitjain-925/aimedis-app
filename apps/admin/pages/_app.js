import { Text ,Box} from '@chakra-ui/react';
import {
  ChakraProvider,
  DatabaseProvider,
  UserProvider,
  CrispChatProvider,
  ShellWithSidebar,
} from 'ui';
import { IoIosAnalytics } from 'react-icons/io';
import { AiOutlineTeam } from 'react-icons/ai';
import { BiWorld, BiServer } from 'react-icons/bi';


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider pageProps={pageProps}>
      <DatabaseProvider pageProps={pageProps}>
        <UserProvider>
          <CrispChatProvider><ShellWithSidebar
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
                    label: 'Users Overview',
                    href: '/',
                    icon: IoIosAnalytics,
                  },
                  {
                    label: 'Section',
                    children: [
                      {
                        label: 'Worlds',
                        href: '/worlds',
                        icon: BiWorld,
                      },
                      {
                        label: 'Servers',
                        href: '/servers',
                        icon: BiServer,
                      },
                      {
                        label: 'Tenants',
                        href: '/tenants',
                        icon: AiOutlineTeam,
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
