import { Box } from '@chakra-ui/react';

export const Sidebar = ({ children }) => {
  return (
    <Box
      as="aside"
      role="complementary"
      width={{ base: 'full', lg: 'xs' }}
      alignSelf="start"
      position={{ base: 'unset', lg: 'sticky' }}
      top="8"
    >
      {children}
    </Box>
  );
};
