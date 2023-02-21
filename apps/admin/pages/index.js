import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';

export default function Admin() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      <h1>SESSION: {JSON.stringify(session)}</h1>
    </div>
  );
}
