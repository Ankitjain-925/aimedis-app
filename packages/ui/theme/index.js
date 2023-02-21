import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react';
import * as components from './components';
import * as foundations from './foundations';
import { styles } from './styles';
import { StepsTheme as Steps } from 'chakra-ui-steps';

const baseTheme = { ...proTheme };

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
    styles,
    ...foundations,
    components: { ...components, Steps },
  },
  baseTheme
);
