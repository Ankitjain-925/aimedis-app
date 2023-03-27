import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Button, FormControl, FormLabel, Input, Stack, Box, Text } from '@chakra-ui/react';
import {ShellWithSidebar} from 'ui'
import { useState } from 'react';


export default function Admin() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      hu
    </div>
  );
}
