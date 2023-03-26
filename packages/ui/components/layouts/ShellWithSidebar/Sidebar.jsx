import { Icon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import { Logo, LogoIcon } from '../../common/Logo';
import { NavButton } from './NavButton';

export const Sidebar = ({ links = [], actions, footer }) => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-surface"
      overflowY="auto"
      boxShadow="sm"
      maxW={{
        base: 'full',
        sm: 'xs',
      }}
      px={{ base: '3', lg: '4' }}
      py={{ base: '2', lg: '3' }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack
          spacing={{
            base: '5',
            sm: '6',
          }}
          shouldWrapChildren
        >
          <LogoIcon fill="#319795" height="40px" />
          <Stack spacing="1">
            {links.map((link, index) => {
              if (!link?.children?.length) {
                return (
                  <NavButton
                    key={index}
                    label={link.label}
                    href={link.href}
                    icon={link.icon}
                  />
                );
              }
              return (
                <Stack key={index} spacing="2" pt="6">
                  {link.label && (
                    <Text fontSize="sm" color="muted" fontWeight="medium">
                      {link.label}
                    </Text>
                  )}
                  {link.children.map((childLink, index) => (
                    <NavButton
                      key={index}
                      label={childLink.label}
                      href={childLink.href}
                      icon={childLink.icon}
                    />
                  ))}
                </Stack>
              );
            })}
          </Stack>
        </Stack>
        <Stack
          spacing={{
            base: '5',
            sm: '6',
          }}
        >
          {actions}
          {footer && (
            <>
              <Divider />
              <Box pb="4">{footer}</Box>
            </>
          )}
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);
