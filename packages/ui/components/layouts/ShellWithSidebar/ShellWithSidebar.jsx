import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiDownloadCloud } from 'react-icons/fi';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const ShellWithSidebar = ({ sidebar, navbar, children }) => {
  const { links, actions, footer } = sidebar;
  const { leftContent, middleContent, rightContent } = navbar;

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="section"
      direction={{
        base: 'column',
        lg: 'row',
      }}
      height="100vh"
      bg="bg-canvas"
      overflowY="auto"
    >
      {isDesktop ? (
        <Sidebar links={links} actions={actions} footer={footer} />
      ) : (
        <Navbar
          leftContent={leftContent}
          middleContent={middleContent}
          rightContent={rightContent}
        />
      )}

      <Flex direction="column" w="full">
        <Box
          width="full"
          py="4"
          px={{
            base: '4',
            md: '8',
          }}
          bg="bg-surface"
          boxShadow="0 2px 4px -2px rgba(45, 55, 72, 0.1)"
        >
          <Flex justify="space-between">
            {leftContent}
            {middleContent}
            {rightContent}
          </Flex>
        </Box>
        <Flex
          as="main"
          role="main"
          direction="column"
          flex="1"
          pt={{ base: '8', lg: '12' }}
          pb={{ base: '12', lg: '24' }}
          h={{ base: 'full', lg: 'calc(100vh-64px)' }}
          overflowY="auto"
        >
          <Container flex="1" maxW="8xl">
            {children}
          </Container>
        </Flex>
      </Flex>
    </Flex>
  );
};
