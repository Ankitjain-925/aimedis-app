import { SupabaseProvider, ChakraProvider } from 'ui';

export default function App({ Component, pageProps }) {
  return (
    <SupabaseProvider pageProps={pageProps}>
      <ChakraProvider pageProps={pageProps}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SupabaseProvider>
  );
}
