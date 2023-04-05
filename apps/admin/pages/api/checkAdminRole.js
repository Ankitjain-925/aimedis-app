import { supabaseClient } from 'database/utils/supabase';
import { UserAuthorization } from 'database/utils/user-auth';

const supabase = supabaseClient

export default UserAuthorization(async function checkAdminRole(req, res) {

    const userId  = req.body.userId

    if (!userId) {
        return res.status(400).json({
          status: 400,
          message: "User Id id required.",
        });
    }

  try {
    const { data: user_identities, error } = await supabase
      .from('user_identities')
      .select('identity_id')
      .eq('user_id', userId)
    if (error) {
      console.error(error)
      return res.status(405).json({
        status: 405,
        'error': error,
    });
    }

    console.log(user_identities , 'user_identities')

    const { data: identities, error: error2 } = await supabase
      .from('identities')
      .select('*')
      .eq('name', 'Avalon Admin')

    console.log(identities , 'identities')  

    if (error2) {
      console.error(error2)
      return res.status(405).json({
        status: 405,
        'error': error,
    });
    }

    let hasAdminRole = false

    if(user_identities && identities){
        const identityIds = identities.map((identity) => identity.id)
        console.log(identityIds , 'identityIdsidentityIds')

        hasAdminRole = user_identities.some((user_identity) =>
        identityIds.includes(user_identity.identity_id),
        )

        console.log(hasAdminRole , 'hasAdminRolehasAdminRolehasAdminRole')
    }

    return res.status(200).json({
        status: 200,
        'hasAdminRole': hasAdminRole,
    });
  } catch (error) {
    console.error(error)
    return res.status(405).json({
        status: 405,
        message: error.message,
    });
  }
   
});