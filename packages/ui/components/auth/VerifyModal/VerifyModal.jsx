import React, { useRef, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';

export const VerifyModal = ({ isOpen, onClose, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent>
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};
