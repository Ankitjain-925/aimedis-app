import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';

const prisma = new PrismaClient();
const supabase = createClient('SUPABASE_URL', 'SUPABASE_KEY');

export default async function loginApi(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password, email } = req.body;

  let user = null;


  if (username) {
    user = await prisma.users.findUnique({
      where: { username: username.toLowerCase() },
    });
  } else if (email) {
    user = await prisma.users.findUnique({
      where: { email: email.toLowerCase() },
    });
  }

  if (user) {
    const token = supabase.auth.signin({
      email: user.email,
      password: password,
    });

    if (!token) {
      return res.status(400).json({ message: 'Invalid credentials/Password mismatch' });
    }

    if (user.active) {
      try {
        const profile_data = await prisma.profiles.findUnique({
          where: { user_id: user.id },
        });

        return res.status(200).json({
          token: token,
          userid: user.id,
          unique_id: profile_data?._id ?? '',
          username: user.username,
          email: user.email,
          firstname: user.first_name || '',
          lastname: user.last_name || '',
          mobile: profile_data?.mobile ?? '',
          message: 'User succesfully logged in',
        });
      } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      return res.status(400).json({ message: 'User not active' });
    }
  } else {
    return res.status(404).json({ message: 'User not found' });
  }
}
