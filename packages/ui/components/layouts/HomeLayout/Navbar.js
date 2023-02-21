/* eslint-disable react/no-children-prop */
import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AppsMenu } from '../../common/AppsMenu/AppsMenu';
import { ColorSwitcher } from '../../common/ColorSwitcher';
import { Logo, LogoIcon } from '../../common/Logo';
import { NotificationsPopover } from '../../common/NotificationsPopover.js/index.js';
import { UserProfileDrawer } from '../../common/UserProfileDrawer';

export const Navbar = () => {
  return (
    <Box
      as="nav"
      role="navigation"
      px={{ base: '3', lg: '4' }}
      py={{ base: '2', lg: '3' }}
    >
      <Flex justify="space-between" align="center">
        <Box width="184px">
          <LogoIcon fill="#319795" height="40px" />
        </Box>
        <Box>
          <InputGroup w="600px">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input type="search" placeholder="Search" shadow="sm" />
          </InputGroup>
        </Box>
        <HStack spacing="4">
          <HStack spacing="1">
            <NotificationsPopover
              variant="ghost"
              rounded="full"
              color="subtle"
              fontSize="xl"
            />
            <AppsMenu
              variant="ghost"
              rounded="full"
              color="subtle"
              fontSize="xl"
            />
            <ColorSwitcher variant="ghost" rounded="full" color="subtle" />
          </HStack>
          <UserProfileDrawer variant="ghost" rounded="full" />
        </HStack>
      </Flex>
    </Box>
  );
};
