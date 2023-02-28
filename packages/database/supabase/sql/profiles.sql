-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,

  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),

  username text unique,

  email text,
  phone_prefix text,
  phone_number text,

  mrmrs text,
  title text,
  firstname text,
  lastname text,

  avatar_photo_url text,
  avatar_rpm_photo_url text,
  avatar_rpm_half_body_url text,
  avatar_rpm_full_body_url text,

  bio text,

  constraint username_length check (char_length(username) >= 3)
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Users can view their own profile."
  on profiles for select
  using ( auth.uid() = id );

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (
    id, 
    username, 
    email,
    phone_prefix, 
    phone_number, 
    mrmrs, 
    title, 
    firstname, 
    lastname, 
    avatar_photo_url, 
    avatar_rpm_photo_url, 
    avatar_rpm_half_body_url,
    avatar_rpm_full_body_url
  )
  values (
    new.id, 
    new.raw_user_meta_data->>'username', 
    new.raw_user_meta_data->>'email', 
    new.raw_user_meta_data->>'phone_prefix',
    new.raw_user_meta_data->>'phone_number',
    new.raw_user_meta_data->>'mrmrs',
    new.raw_user_meta_data->>'title',
    new.raw_user_meta_data->>'firstname',
    new.raw_user_meta_data->>'lastname',
    new.raw_user_meta_data->>'avatar_photo_url',
    new.raw_user_meta_data->>'avatar_rpm_photo_url',
    new.raw_user_meta_data->>'avatar_rpm_half_body_url',
    new.raw_user_meta_data->>'avatar_rpm_full_body_url'
  );
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create extension if not exists moddatetime schema extensions;

create trigger handle_updated_at before update on profiles
  for each row execute procedure moddatetime (updated_at);

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');