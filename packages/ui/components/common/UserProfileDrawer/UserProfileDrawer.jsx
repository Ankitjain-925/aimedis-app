import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { TbLogout } from 'react-icons/tb';

export const UserProfileDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const supabase = useSupabaseClient();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleLogout = useCallback(async () => {
    setIsSigningOut(true);
    const { error } = await supabase.auth.signOut();
    setIsSigningOut(false);
  }, [supabase]);

  return (
    <>
      <Avatar boxSize="10" cursor="pointer" onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader>My Account</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              ml="left"
              rightIcon={<TbLogout />}
              onClick={handleLogout}
            >
              Sign out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
