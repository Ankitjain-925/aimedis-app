/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import {
  SessionContextProvider,
  useSession,
} from '@supabase/auth-helpers-react';
import { useState, useEffect } from 'react';

export const SupabaseProvider = ({ pageProps, children }) => {
  const router = useRouter();

  const [supabase] = useState(() =>
    createBrowserSupabaseClient({
      cookieOptions: {
        domain:
          process.env.NODE_ENV === 'development' ? 'localhost' : 'aimedis.app',
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
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      {children}
    </SessionContextProvider>
  );
};
