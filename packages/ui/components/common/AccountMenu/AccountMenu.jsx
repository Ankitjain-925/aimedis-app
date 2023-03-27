import { MoonIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Portal,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { RiShutDownLine } from 'react-icons/ri';

export const AccountMenu = () => {
  const router = useRouter();

  const supabase = useSupabaseClient();

  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleLogout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error.message);
      toast({
        title: 'Failed to logout',
        description: 'Please try again or contact us.',
        status: 'success',
        duration: 6000,
        isClosable: true,
      });
      return;
    }
    router.push('/login');
  }, [supabase, router]);

  return (
    <Menu isOpen={isOpen} placement="bottom-end">
      <MenuButton
        as={Button}
        variant="ghost"
        size="sm"
        rounded="full"
        bg={useColorModeValue('gray.100', 'gray.800')}
        pl="0"
        onClick={onToggle}
      >
        <HStack>
          <Avatar boxSize="30px" bg="accent" />
          <PopoverIcon isOpen={isOpen} />
        </HStack>
      </MenuButton>
      <Portal>
        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem
            icon={<Icon as={SettingsIcon} boxSize="5" mt="0.8" />}
            onClick={() => router.push('/account')}
          >
            Account Settings
          </MenuItem>
          <MenuDivider />
          <MenuItem
            icon={
              <Icon
                as={colorMode === 'light' ? MoonIcon : SunIcon}
                boxSize="5"
              />
            }
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </MenuItem>
          <MenuItem
            color="tomato"
            icon={<Icon as={RiShutDownLine} boxSize="5" mt="1.5" />}
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};

const PopoverIcon = (props) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  };
  return <Icon aria-hidden as={FiChevronDown} __css={iconStyles} />;
};
