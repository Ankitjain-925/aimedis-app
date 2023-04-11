import React from 'react';
import Drop from "./dropzone"
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const supabase = createClient('https://jvogqxcgreynqmmenkqo.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2b2dxeGNncmV5bnFtbWVua3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNDMyMDIsImV4cCI6MTk5MjYxOTIwMn0.z9HRHY0Zzqn_SgDTy8f1cLlV2Izvf3WzmeJqy8ZPS9E');


export default function index() {
  
    return (
      
        <React.StrictMode>
        <SessionContextProvider supabaseClient={supabase}>
          <Drop />
        </SessionContextProvider>
      </React.StrictMode>
    );
  }

