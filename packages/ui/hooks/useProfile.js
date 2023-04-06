import { useMutation, useQuery } from 'react-query';
import { useDatabase } from '../providers/Database';

const getProfile = (database, id) => {
  return database
    .from('profiles')
    .select('* , user_identities (id)')
    .eq('id', id)
    .throwOnError()
    .single();
};

const getAllProfiles = (database) => {
  return database
    .from('profiles')
    .select('*')
    .throwOnError()
};

const updateProfile = (database, id, data) => {
  return database
    .from('profiles')
    .update(data)
    .eq('id', id)
    .select('*')
    .throwOnError()
    .single();
};

export const useProfileQuery = (id, options) => {
  const { database } = useDatabase();
  const key = ['profile', id];

  return useQuery(
    key,
    async () => {
      return getProfile(database, id).then((result) => result.data);
    },
    options
  );
};
export const useAllProfileQuery = ( options) => {
  const { database } = useDatabase();
  const key = 'allprofile';

  return useQuery(
    key,
    async () => {
      return getAllProfiles(database).then((result) => result.data);
    },
    options
  );
};

export const useProfileMutation = (id, options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return updateProfile(database, id, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries(['profile', id]);
      },
      ...options,
    }
  );
};

export const useProfile = (id, { queryConfig, mutationConfig }) => {
  return {
    query: useProfileQuery(id, queryConfig),
    mutation: useProfileMutation(id, mutationConfig),
    fetchAll: useAllProfileQuery(queryConfig)
  };
};
