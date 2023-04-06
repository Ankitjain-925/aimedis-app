/* eslint-disable react-hooks/rules-of-hooks */
import {
  useUser,
  useSupabaseClient,
  useSession,
} from '@supabase/auth-helpers-react';
import { useState, useEffect, createContext,useContext, useMemo } from 'react';
import { useProfile } from '../hooks/useProfile';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const session = useSession();
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
        const { user, error } = await supabase.auth.updateUser({
          password: '123456',
        });
      }
    })();
  }, [supabase]);

  console.log('session', session);
  console.log('user', user);
  console.log('profile', profile.query.data);

  return (
    <UserContext.Provider
      value={{ session, user, profile: profile.query.data }}
    >
      {children}
    </UserContext.Provider>
  );
};


export const useUserData = () => {
  return useContext(UserContext);
};
