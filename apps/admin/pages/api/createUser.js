import { supabaseServer } from 'database/utils/supabase';
import { UserAuthorization } from 'database/utils/user-auth';

const supabase = supabaseServer

export default UserAuthorization(async function createUser(req, res) {

    const { email , password } = req.body

    if (!email && !password) {
        return res.status(400).json({
          status: 400,
          message: "Email and Password is required.",
        });
    }

    const { data , error } = await supabase.auth.admin.createUser({  
        email: email,
        password: password,
        email_confirm: true
      })
    
    if(!error){
        return res.status(200).json({
            status: 200,
            message: "User created successfully",
            data: data,
          });
    }else{
        return res.status(405).json({
            status: 405,
            message: "Failed to create User. Try again.",
          });

    }
   
});