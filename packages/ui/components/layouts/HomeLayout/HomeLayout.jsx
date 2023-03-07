import { Flex } from '@chakra-ui/react';
import { Main } from './Main';
import { Navbar } from './Navbar';

export const HomeLayout = ({ children }) => {
  return (
    <Flex direction="column" flex="1">
      <Navbar />
      <Main>{children}</Main>
    </Flex>
  );
};
