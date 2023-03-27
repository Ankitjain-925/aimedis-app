import {   DatabaseProvider,
  UserProvider, ChakraProvider } from 'ui';

export default function App({ Component, pageProps }) {
  return (
    <DatabaseProvider pageProps={pageProps}>
      <UserProvider>
        <ChakraProvider pageProps={pageProps}>
          <Component {...pageProps} />
        </ChakraProvider>
      </UserProvider>
    </DatabaseProvider>
  );
}
