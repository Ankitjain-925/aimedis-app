import { Container, Flex } from '@chakra-ui/react';

export const Main = ({ children, ...rest }) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" pt="4" {...rest}>
      {children}
    </Flex>
  );
};
