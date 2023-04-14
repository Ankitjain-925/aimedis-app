import { createClient } from '@supabase/supabase-js';

export const supabaseClientWithToken = (token) =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    }
  );


export const supabaseClient = createClient(
  "https://zrbmskhkuydumylscqyu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyYm1za2hrdXlkdW15bHNjcXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwNDQ3ODYsImV4cCI6MTk5MTYyMDc4Nn0.Q0Oo0yHd0VsV4HptfQlrawJcDFm-nS2gHgUDs7d5W60"
);

export const supabaseServer = createClient(
  "https://zrbmskhkuydumylscqyu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyYm1za2hrdXlkdW15bHNjcXl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwNDQ3ODYsImV4cCI6MTk5MTYyMDc4Nn0.Q0Oo0yHd0VsV4HptfQlrawJcDFm-nS2gHgUDs7d5W60"
);  
