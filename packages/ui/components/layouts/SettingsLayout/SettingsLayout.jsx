import { SettingsIcon } from '@chakra-ui/icons';
import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { NavButton } from './NavButton';
import { Sidebar } from './Sidebar';

export const SettingsLayout = ({ links = [], children }) => {
  return (
    <Container py={{ base: '4', md: '8' }}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '12', lg: '16' }}
        flex="1"
      >
        <Sidebar>
          <Stack spacing="4">
            <Stack spacing="1">
              {links.map((link, index) => (
                <NavButton
                  key={index}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </Stack>
          </Stack>
        </Sidebar>
        <Box width="full">{children}</Box>
      </Stack>
    </Container>
  );
};
