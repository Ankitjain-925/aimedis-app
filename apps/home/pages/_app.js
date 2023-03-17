import '../styles/globals.css';
import { useRouter } from 'next/router';
import {
  ChakraProvider,
  DatabaseProvider,
  UserProvider,
  CrispChatProvider,
  HomeLayout,
} from 'ui';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ChakraProvider pageProps={pageProps}>
      <DatabaseProvider pageProps={pageProps}>
        <UserProvider>
          <CrispChatProvider>
            {router.asPath === '/login' ? (
              <Component {...pageProps} />
            ) : (
              <HomeLayout>
                <Component {...pageProps} />
              </HomeLayout>
            )}
          </CrispChatProvider>
        </UserProvider>
      </DatabaseProvider>
    </ChakraProvider>
  );
}
