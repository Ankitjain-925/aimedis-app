import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  HStack,
  PinInputField,
  PinInput,
  Text,
  ModalFooter,
  Button,
  Stack,
  Flex,
  Box,
} from '@chakra-ui/react';

const WAIT_TIME_IN_SECONDS = 30;

export const VerifyModal = ({
  isOpen,
  onClose,
  email,
  onVerify,
  isVerifying,
  onResend,
  isResending,
}) => {
  const [pin, setPin] = useState('');

  const [secondsToWaitForResend, setSecondsToWaitForResend] =
    useState(WAIT_TIME_IN_SECONDS);

  useEffect(() => {
    if (isOpen && secondsToWaitForResend > 0) {
      const intervalId = setInterval(() => {
        setSecondsToWaitForResend((seconds) => seconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isOpen, secondsToWaitForResend]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent>
        <ModalHeader>Verification</ModalHeader>
        <ModalBody>
          <Stack spacing="6">
            <Text>
              Enter the code sent to <strong>{email}</strong>
            </Text>
            <HStack maxW="320px" alignSelf="center">
              <PinInput
                size="lg"
                focusBorderColor="brand.500"
                otp
                value={pin}
                onChange={(value) => setPin(value)}
                isDisabled={isVerifying}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button
            variant="secondary"
            mr={3}
            isLoading={isResending}
            isDisabled={isVerifying || secondsToWaitForResend > 0}
            onClick={async () => {
              onResend();
              setSecondsToWaitForResend(WAIT_TIME_IN_SECONDS);
            }}
          >
            Resend{' '}
            {secondsToWaitForResend > 0 ? `${secondsToWaitForResend}s` : ''}
          </Button>
          <Button
            colorScheme="brand"
            isLoading={isVerifying}
            onClick={() => onVerify(pin)}
          >
            Verify
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
