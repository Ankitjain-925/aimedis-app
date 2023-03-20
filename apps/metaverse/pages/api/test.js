import { UserAuthorization } from 'database/utils/user-auth';

export default UserAuthorization(async function testAPI(req, res, user) {
    return res.status(200).json({ "msg":"Working" , 'user':user['user']});
  });