import { EditIcon } from '@chakra-ui/icons';
import { Avatar, Box, useDisclosure } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export const AvatarUpload = ({ src, register, avatarProps, inputProps }) => {
  const { ref, ...fields } = register();
  const hiddenFileInput = useRef(null);
  const overlay = useDisclosure();
  return (
    <>
      <Avatar
        src={src}
        {...avatarProps}
        pos="relative"
        cursor="pointer"
        onMouseEnter={overlay.onOpen}
        onMouseLeave={overlay.onClose}
        onClick={() => hiddenFileInput.current.click()}
      >
        {overlay.isOpen && (
          <>
            <Box
              w="full"
              h="full"
              bg="accent"
              pos="absolute"
              rounded="full"
              opacity={0.5}
            />
            <EditIcon
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -55%)"
              color="bg-canvas"
            />
          </>
        )}
      </Avatar>
      <input
        type="file"
        accept=".jpg,.png,.jpeg"
        style={{
          display: 'none',
        }}
        {...fields}
        ref={(element) => {
          ref(element);
          hiddenFileInput.current = element;
        }}
        {...inputProps}
      />
    </>
  );
};
