import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const FormLayout = ({ title, description, comesFrom, children, stackProps }) => {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: '5', lg: '8' }}
      justify="space-between"
    >
      <Box flexShrink={0}>
        <Text fontSize="lg" fontWeight="medium">
          {title}
        </Text>
        <Text color="muted" fontSize="sm" maxW="sm">
          {description}
        </Text>
      </Box>
      {comesFrom !== "Chatandvoice" ?
        <Box
          bg="bg-surface"
          boxShadow={useColorModeValue('sm', 'sm-dark')}
          borderRadius="lg"
          maxW={{ base: '100%', lg: 'lg' }}
          w="100%"
          p="0"
        >
          <Stack
            spacing="6"
            px={{ base: '4', md: '6' }}
            py={{ base: '5', md: '6' }}
            {...stackProps}
          >
            {children}
          </Stack>
        </Box> : <Stack
          spacing="6"
          px={{ base: '4', md: '6' }}
          py={{ base: '5', md: '6' }}
          {...stackProps}
        >
          {children}
        </Stack>}
    </Stack>
  );
};
