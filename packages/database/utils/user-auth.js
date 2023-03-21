import { supabaseClient } from 'database/utils/supabase';

export function UserAuthorization(handler) {
    return async (req, res) => {
      const token = req.headers.authorization?.split('Bearer ')[1];
      if (!token) {
        return res.status(401).json({ status: 401, message: 'Unauthorized' });
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
