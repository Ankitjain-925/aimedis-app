import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export const HCaptchaModal = ({ isOpen, onClose, onVerify }) => {
  const captchaRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent w="300px" height="74px">
        <ModalBody p="0" w="300px" height="74px">
          {isLoading && <Skeleton w="300px" height="74px" rounded="md" />}
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            onLoad={() => setIsLoading(false)}
            onVerify={(token) => {
              onVerify({ token, captcha: captchaRef.current });
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
