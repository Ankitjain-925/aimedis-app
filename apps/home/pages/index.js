/* eslint-disable react-hooks/rules-of-hooks */
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useCallback, useEffect, useState } from 'react';
import { Apps } from 'common';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const toast = useToast();

  const session = useSession();
  const supabase = useSupabaseClient();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLoginEmail = useCallback(async () => {
    setIsLoading('email');
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        data: {
          username: 'unsphere',
        },
      },
    });
    setIsLoading('');
    if (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: error.msg,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [supabase, email, toast]);

  const handleLogout = useCallback(async () => {
    setIsLoading('logout');
    const { error } = await supabase.auth.signOut();
    setIsLoading('');
  }, [supabase]);

  return (
    <>
      <Flex flex="1" justify="center" align="center" fontSize="22px!important">
        <Box pb="32" px="6">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Good Morning Dennis! 👋 How are you feeling today?'
                )
                .pauseFor(1000)
                .typeString(
                  '<br/>Should I measure your <strong>heart rate</strong> or <strong>body temperature</strong>?'
                )
                .pauseFor(1000)
                .typeString(
                  '<br/>Just type and I will try to help what you are looking for:<br/>'
                )
                .start();
            }}
            options={{
              autoStart: true,
              loop: false,
              delay: 50,
              skipAddStyles: true,
            }}
          />
        </Box>
      </Flex>
      <Flex h="125px">
        <IconButton icon={<ChevronLeftIcon />} h="100%" fontSize="2xl" />
        <SimpleGrid flex="1" columns={Apps.length} overflowY="auto" px="4">
          {Apps.map((app) => (
            <Stack
              key={app.value}
              spacing="2"
              align="center"
              justify="center"
              textAlign="center"
              _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.50') }}
              cursor="pointer"
              rounded="xl"
              py="4"
              px="4"
            >
              <Square
                size={{ base: '10', md: '12' }}
                bg="accent"
                color="inverted"
                borderRadius="lg"
              >
                <Icon as={app.icon} boxSize={{ base: '5', md: '6' }} />
              </Square>
              <Stack spacing={{ base: '1', md: '2' }}>
                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="medium">
                  {app.name}
                </Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <IconButton icon={<ChevronRightIcon />} h="100%" fontSize="2xl" />
      </Flex>
    </>
  );
}
