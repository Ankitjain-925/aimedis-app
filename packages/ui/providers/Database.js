/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState, useEffect, createContext, useContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();

export const DatabaseContext = createContext(null);

export const DatabaseProvider = ({ pageProps, children }) => {
  const router = useRouter();

  const [supabase] = useState(() =>
    createBrowserSupabaseClient({
      cookieOptions: {
        domain:
          process.env.NODE_ENV === 'development'
            ? 'app.localhost'
            : 'aimedis.app',
        maxAge: '31536000',
        path: '/',
        sameSite: 'Lax',
        secure: 'secure',
      },
    })
  );

  /*
  useEffect(() => {
   const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT' && router.asPath !== '/login')
        router.replace('/login');
    });

    return () => subscription.unsubscribe();
  }, [supabaseClient.auth, router.asPath]); // eslint-disable-line react-hooks/exhaustive-deps
  */

  return (
    <DatabaseContext.Provider value={{ database: supabase, queryClient }}>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionContextProvider>
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  return useContext(DatabaseContext);
};
