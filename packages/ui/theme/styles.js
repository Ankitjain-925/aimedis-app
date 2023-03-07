import { mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props) => ({
    body: { bg: mode('#fff', '#010F0F')(props)},
    '*::placeholder': {},
    '*, *::before, &::after': {},
  }),
};
