import { Flex } from '@chakra-ui/react';
import { Main } from './Main';
import { Navbar } from './Navbar';

export const HomeLayout = ({ children }) => {
  return (
    <Flex direction="column" flex="1" bg="bg-surface">
      <Navbar />
      <Main>{children}</Main>
    </Flex>
  );
};
