import { supabaseServer } from 'database/utils/supabase';
import { UserAuthorization } from 'database/utils/user-auth';
  
const supabase = supabaseServer

export default UserAuthorization(async function deleteUser(req, res) {

    const id = req.body

    if (!id) {
        return res.status(400).json({
        status: 400,
        message: "User Id is required.",
        });
    }

//   const { data , error } = await supabase.auth.admin.createUser({  
//       email: email,
//       password: password,
//       email_confirm: true
//     })
    const { data, error } = await supabase.auth.admin.deleteUser(id)

    console.log(data , 'data')
    
    if(!error){
        return res.status(200).json({
            status: 200,
            message: "User deleted successfully",
            data: data,
        });
    }else{
        return res.status(405).json({
            status: 405,
            message: "Failed to delete User. Try again.",
        });

    }
    
});  