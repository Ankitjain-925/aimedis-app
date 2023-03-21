import { UserAuthorization } from 'database/utils/user-auth';

export default UserAuthorization(async function logout(req, res) {
    const { error } = await req.supabase.auth.api.signOut(req.token);
    if (error ) {
      return res.status(500).json({ status: 500, message: error.message });
    }
    return res.status(200).json({ message: 'Logged out successfully' });
  });
