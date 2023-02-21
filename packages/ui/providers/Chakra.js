import 'focus-visible/dist/focus-visible';
import { createContext, useContext, useEffect } from 'react';
import {
  ChakraBaseProvider,
  cookieStorageManagerSSR,
  createLocalStorageManager,
} from '@chakra-ui/react';
import { theme } from '../theme';

export const ChakraProvider = ({ pageProps, children }) => {
  const { cookies } = pageProps;

  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : createLocalStorageManager('color-mode');

  return (
    <ChakraBaseProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraBaseProvider>
  );
};
