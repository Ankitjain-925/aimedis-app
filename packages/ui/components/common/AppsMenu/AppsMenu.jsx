import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { RiAppsFill } from 'react-icons/ri';
import React from 'react';
import { Apps } from '../../../../common';

export const AppsMenu = (props) => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<RiAppsFill />} {...props} />
      <MenuList>
        {Apps.map((app) => (
          <MenuItem
            key={app.value}
            icon={<Icon as={app.icon} color="accent" />}
          >
            {app.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
