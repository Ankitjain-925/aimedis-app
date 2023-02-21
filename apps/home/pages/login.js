import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Link as ChakraLink,
  Portal,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { BsGoogle, BsLinkedin, BsWalletFill } from 'react-icons/bs';
import { GiTechnoHeart } from 'react-icons/gi';
import React, { useCallback, useEffect, useState } from 'react';
import { Logo, LogoIcon, ColorSwitcher, HCaptchaModal, useCrispChat } from 'ui';
import { useRouter } from 'next/router';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const Login = () => {
  const router = useRouter();
  const crisp = useCrispChat();

  const supabase = useSupabaseClient();
  const session = useSession();

  const captchaModal = useDisclosure();

  const [isLoading, setIsLoading] = useState('');
  const [email, setIsEmail] = useState('');

  const handleLogin = useCallback(
    async ({ token, captcha }) => {
      switch (isLoading) {
        case 'email':
          const { data, error } = await supabase.auth.signInWithOtp({
            email,
            options: {
              data: {},
              captchaToken: token,
            },
          });
        case 'oauth':

        case 'wallet':
      }
      setIsLoading('');
    },
    [supabase, isLoading, email]
  );

  useEffect(() => {
    if (isLoading) {
      captchaModal.onOpen();
    }
  }, [isLoading, captchaModal]);

  return (
    <Flex
      minH={{ base: 'auto', lg: '100vh' }}
      bgGradient={{
        lg: `linear(to-r, ${useColorModeValue(
          'brand.600',
          'brand.900'
        )} 50%, ${useColorModeValue('white', 'gray.900')} 50%)`,
      }}
    >
      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        maxW="8xl"
        mx="auto"
        width="full"
      >
        <Box flex="1" bg={useColorModeValue('brand.600', 'brand.900')}>
          <Flex
            direction="column"
            px={{ base: '4', md: '8' }}
            height="100vh"
            color="on-accent"
          >
            <Flex align="center" h="24" display={{ base: 'none', lg: 'flex' }}>
              <Logo cursor="pointer" />
            </Flex>
            <Flex flex="1" align="center">
              <Stack spacing="8">
                <Stack spacing="6">
                  <Heading size={{ base: 'md', sm: 'xl' }} maxW="xl">
                    Heading
                  </Heading>
                  <Text fontSize="lg" maxW="lg" fontWeight="medium">
                    Content
                  </Text>
                </Stack>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing="4"
                  align={{ base: 'flex-start', sm: 'center' }}
                ></Stack>
              </Stack>
            </Flex>
            <Flex align="center" h="24">
              <Text
                color="on-accent-subtle"
                fontSize={{ base: '9px', sm: 'xs' }}
              >
                &copy; {new Date().getFullYear()} Aimedis, All rights reserved.
                Proudly made with{' '}
                <Icon
                  as={GiTechnoHeart}
                  mx="0.25"
                  mb="-0.5"
                  fontSize={{ base: '12px', sm: '16px' }}
                />{' '}
                for Healthcare.
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box flex="1">
          <Flex direction="column" px="8" minH="100vh">
            <Flex align="center" h="24" justifyContent="space-between">
              <LogoIcon
                fill="#319795"
                display={{ base: 'flex', lg: 'none' }}
                cursor="pointer"
              />
              <ColorSwitcher
                variant="ghost"
                color="accent"
                size="lg"
                fontSize="xl"
                ml="auto"
              />
            </Flex>
            <Flex flex="1" align="center">
              <VStack spacing="8" width="full">
                <Stack spacing="6">
                  <Stack spacing="3" textAlign="center">
                    <Heading size={{ base: 'xs', lg: 'sm' }}>
                      Log in to your account
                    </Heading>
                    <Text color="muted">
                      No sign up needed. Easy, fast and secure.
                    </Text>
                  </Stack>
                </Stack>
                <Stack spacing="6" maxW="xs" w="full">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      setIsLoading('email');
                    }}
                  >
                    <Stack spacing="4">
                      <FormControl isRequired>
                        <FormLabel hidden>Email address</FormLabel>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          isDisabled={isLoading}
                          onChange={(event) => setIsEmail(event.target.value)}
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        variant="primary"
                        isLoading={isLoading === 'email'}
                        isDisabled={isLoading}
                      >
                        Continue with email
                      </Button>
                    </Stack>
                  </form>
                  <HStack>
                    <Divider />
                    <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                      or sign in with
                    </Text>
                    <Divider />
                  </HStack>
                  <Stack spacing="3">
                    <Button
                      variant="primary-on-accent"
                      leftIcon={<Icon as={BsGoogle} boxSize="5" />}
                      iconSpacing="3"
                      isLoading={isLoading === 'google'}
                      isDisabled={isLoading}
                      onClick={() => {
                        setIsLoading('google');
                      }}
                    >
                      Google
                    </Button>
                    <Button
                      variant="primary-on-accent"
                      leftIcon={<Icon as={BsLinkedin} boxSize="5" />}
                      iconSpacing="3"
                      isLoading={isLoading === 'linkedin'}
                      isDisabled={isLoading}
                      onClick={() => {
                        setIsLoading('linkedin');
                      }}
                    >
                      Linkedin
                    </Button>
                    <Button
                      variant="primary-on-accent"
                      leftIcon={<Icon as={BsWalletFill} boxSize="5" />}
                      iconSpacing="3"
                      isLoading={isLoading === 'wallet'}
                      isDisabled={isLoading}
                      onClick={() => {
                        setIsLoading('wallet');
                      }}
                    >
                      Wallet
                    </Button>
                  </Stack>
                  <HCaptchaModal
                    isOpen={captchaModal.isOpen}
                    onClose={captchaModal.onClose}
                    onVerify={handleLogin}
                  />
                </Stack>
                <Stack spacing="2" align="center">
                  <Text fontSize="sm" color="muted">
                    Having trouble signing in?
                  </Text>
                  <Button
                    variant="link"
                    colorScheme="brand"
                    size="sm"
                    onClick={() => {
                      crisp.chat.show();
                      crisp.chat.open();
                    }}
                  >
                    Contact us via chat
                  </Button>
                </Stack>
              </VStack>
            </Flex>
            <Flex align="center" h="24">
              <Text
                color="subtle"
                fontSize={{ base: '8px', sm: 'xs' }}
                mr={{ base: 'auto', sm: 0 }}
                ml={'auto'}
              >
                By continuing, you acknowledge that you agree to our{' '}
                <ChakraLink
                  color="accent"
                  href="https://aimedis.com/terms"
                  target="_blank"
                  isExternal
                >
                  terms and conditions
                </ChakraLink>
                .
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
