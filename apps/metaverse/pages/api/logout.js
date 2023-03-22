import { UserAuthorization } from 'database/utils/user-auth';
import { createClient } from '@supabase/supabase-js';

const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_SECRET
);

export default UserAuthorization(async function logout(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ status: 405, message: 'Method Not Allowed' });
      }
    const { error } = await req.supabase.auth.signOut(req.token);
    if (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
    // Insert the invalidated token into the "invalidated_tokens" table
    const { error: insertError } = await supabaseServer.from('invalidated_tokens').insert([{ token: req.token }]);

    if (insertError) {
    return res.status(500).json({ status: 500, message: insertError.message });
    }
    return res.status(200).json({ message: 'Logged out successfully' });
  });


  
  