import { createClient } from '@supabase/supabase-js';
import { supabaseClient } from 'database/utils/supabase';

const supabaseServer = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_SECRET
  );

export function UserAuthorization(handler) {
    return async (req, res) => {
      const token = req.headers.authorization?.split('Bearer ')[1];
      if (!token) {
        return res.status(401).json({ status: 401, message: 'Unauthorized' });
      }

    const { data: invalidatedToken, err } = await supabaseServer
    .from('invalidated_tokens')
    .select('*')
    .eq('token', token)
    .single();

    if (err) {
        return res.status(500).json({ status: 500, message: err.message });
    }

    if (invalidatedToken) {
        return res.status(401).json({ status: 401, message: 'Invalid Token' });
    }
    
    const supabase = supabaseClient(token)
    
    const { data: user, error } = await supabase.auth.getUser();
    if (error) {
        return res.status(401).json({ status: 401, message: 'Unauthorized' });
    }

    req.user = user
    req.token = token
    req.supabase = supabase

      return handler(req, res);
    };
  }
