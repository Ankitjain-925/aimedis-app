import {
  Box,
  Container,
  Flex,
  HStack,
  Slide,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export const Actionbar = ({
  isOpen,
  title,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Flex py="4" w="100%" borderTopWidth="1px" bg="bg-surface">
        <Container
          as={HStack}
          spacing="2"
          align="center"
          justify="space-between"
        >
          <Text fontWeight="semibold">{title}</Text>
          <HStack spacing="4">
            {secondaryAction}
            {primaryAction}
          </HStack>
        </Container>
      </Flex>
    </Slide>
  );
};
