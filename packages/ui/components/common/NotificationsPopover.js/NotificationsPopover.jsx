import {
  Box,
  Circle,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { IoMdNotifications } from 'react-icons/io';
import React from 'react';
import { StatusIndicator } from './StatusIndicator';
import { useState } from 'react';

export const NotificationsPopover = (props) => {
  const [notifications, setNotifications] = useState([]);

  return (
    <Popover>
      <PopoverTrigger>
        <Box pos="relative">
          <IconButton icon={<IoMdNotifications />} {...props}></IconButton>
          {/*<StatusIndicator
            pos="absolute"
            top="1"
            right="1.5"
            cursor="pointer"
  />*/}
        </Box>
      </PopoverTrigger>
      <PopoverContent minH="90vh">
        <PopoverHeader fontWeight="bold">Notifications</PopoverHeader>
        <PopoverBody></PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
