import { useRouter } from 'next/router';
import { SupabaseProvider, ChakraProvider, HomeLayout } from 'ui';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <SupabaseProvider pageProps={pageProps}>
      <ChakraProvider pageProps={pageProps}>
        {router.asPath === '/login' ? (
          <Component {...pageProps} />
        ) : (
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        )}
      </ChakraProvider>
    </SupabaseProvider>
  );
}
