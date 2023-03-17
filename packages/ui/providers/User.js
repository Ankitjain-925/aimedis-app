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

  console.log(user);
  const isUser = useMemo(() => user !== null, [user]);
  const userId = useMemo(() => user?.id, [user]);

  const profile = useProfile(userId, {
    queryConfig: {
      enabled: isUser,
    },
  });

  return (
    <UserContext.Provider value={{ user, profile }}>
      {children}
    </UserContext.Provider>
  );
};
