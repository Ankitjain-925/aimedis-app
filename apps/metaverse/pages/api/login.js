import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_SECRET
);

export default async function login(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 405, message: 'Method Not Allowed' });
  }

  let { username, password, email } = req.body;

  if (!password) {
    return res.status(400).json({ status: 400, message: 'Invalid Password' });
  }

  const profile = await supabaseServer
    .from('profiles')
    .select('*')
    .or(`email.eq.${email},username.eq.${username}`);
  if (profile.error) {
    return res
      .status(500)
      .json({ status: 500, message: profile.error.message });
  }
  if (!profile.data.length) {
    return res.status(404).json({ status: 404, message: 'User not found' });
  }
  email = profile.data[0].email;

  const signIn = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  if (signIn.error) {
    return res.status(400).json({ status: 400, message: signIn.error.message });
  }
  return res.status(200).json({ ...signIn.data, profile: profile.data[0] });
}
