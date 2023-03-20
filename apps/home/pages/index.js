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
  Container,
  VStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useCallback, useEffect, useState } from 'react';
import { Apps } from 'common';
import { LeftArrow, RightArrow } from 'ui';
import Typewriter from 'typewriter-effect';
// import {App} from 'metaroom'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

export default function Home() {
  const toast = useToast();

  const session = useSession();
  const supabase = useSupabaseClient();

  const appsBg = useColorModeValue('#F7FAFC', '#031B1B');
  const appBg = useColorModeValue('#fff', '#052020');

  return (
    <>
      <Flex flex="1" justify="center" align="center">
        <Flex justify="center" align="center" flexDirection="column">
          <Text color="#00abaf" fontWeight="600">
            Aimedis - Your Personalised Healthcare Ecosystem
          </Text>
          <Text fontSize="3xl" fontWeight="700">
            Introducing an AI-Powered{' '}
          </Text>
          <Text fontSize="3xl" fontWeight="700">
            Medical Assistant
          </Text>
          <Box pb="6" px="6" fontWeight="normal" display="flex" align="center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Hey Sam, good morning! ')
                  .pauseFor(1000)
                  .typeString(
                    'Ask me anything medical-related - symptoms,<br/> conditions, treatments, medications, and more.'
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
          <Stack direction="row">
            <Input placeholder="Type your question here.." w="md" />
            <Button bg="#00abaf" color="#fff" _hover={{ bg: '#00abaf' }}>
              Ask
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={appsBg}
      >
        <Box width="70%">
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            options={{
              ratio: 0.9,
              rootMargin: '5px',
              threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
            }}
          >
            {Apps.map((app) => (
              <Stack
                key={app.value}
                spacing="2"
                align="center"
                justify="center"
                textAlign="center"
                bg={appBg}
                // _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.50') }}
                cursor="pointer"
                rounded="xl"
                px="8"
                py="8"
                mx="3"
                my="8"
                w="140px"
                shadow="sm"
              >
                <Icon
                  as={app.icon}
                  boxSize={{ base: '5', md: '7' }}
                  color="accent"
                  mb="6"
                />
                <Text
                  fontSize={{ base: 'md', md: 'md' }}
                  fontWeight="medium"
                  margin="0"
                >
                  {app.name}
                </Text>
              </Stack>
            ))}
          </ScrollMenu>
        </Box>
      </Box>
    </>
  );
}
