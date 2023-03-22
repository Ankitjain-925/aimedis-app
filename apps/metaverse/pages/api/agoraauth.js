import { UserAuthorization } from 'database/utils/user-auth';

export default UserAuthorization(async function agoraauth(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ status: 405, message: 'Method Not Allowed' });
    }
    return res.status(200).json({ message: 'Authentication Successfull' });
  });
