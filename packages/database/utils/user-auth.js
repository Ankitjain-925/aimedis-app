import { supabaseClientWithToken } from 'database/utils/supabase';
import { supabaseServer } from 'database/utils/supabase';

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
    
    const supabase = supabaseClientWithToken(token)
    
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
