/* eslint-disable react-hooks/rules-of-hooks */
import {
  useUser,
  useSupabaseClient,
  useSession,
} from '@supabase/auth-helpers-react';
import { useState, useEffect, createContext, useMemo } from 'react';
import { useProfile } from '../hooks/useProfile';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const user = useUser();
  const supabase = useSupabaseClient();

  const isUser = useMemo(() => user !== null, [user]);
  const userId = useMemo(() => user?.id, [user]);
  const profile = useProfile(userId, {
    queryConfig: {
      enabled: isUser,
    },
  });

  useEffect(() => {
    (async () => {
      if (supabase) {
        console.log('auth', supabase.auth);
        const { user, error } = await supabase.auth.updateUser({
          password: '123456',
        });
      }
    })();
  }, [supabase]);

  return (
    <UserContext.Provider value={{ user, profile }}>
      {children}
    </UserContext.Provider>
  );
};
