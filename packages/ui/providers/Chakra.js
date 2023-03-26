import 'focus-visible/dist/focus-visible';
import { createContext, useContext, useEffect } from 'react';
import {
  ChakraProvider as ChakraThemeProvider,
  cookieStorageManagerSSR,
  createLocalStorageManager,
} from '@chakra-ui/react';
import { theme } from '../theme';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

export const ChakraProvider = ({ pageProps, children }) => {
  const { cookies } = pageProps;

  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : createLocalStorageManager('color-mode');

  return (
    <ChakraThemeProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraThemeProvider>
  );
};
