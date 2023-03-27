import { useMutation, useQuery } from 'react-query';
import { useDatabase } from '../providers/Database';

const getWorld = (database, id) => {
  return database
    .from('profiles')
    .select('*')
    .eq('id', id)
    .throwOnError()
    .single();
};

const updateWorld = (database, id, data) => {
  return database
    .from('profiles')
    .update(data)
    .eq('id', id)
    .select('*')
    .throwOnError()
    .single();
};

export const useWorldQuery = (id, options) => {
  const { database } = useDatabase();
  const key = ['profile', id];

  return useQuery(
    key,
    async () => {
      return getWorld(database, id).then((result) => result.data);
    },
    options
  );
};

export const useWorldMutation = (id, options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return updateWorld(database, id, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries(['profile', id]);
      },
      ...options,
    }
  );
};

export const useWorld = (id, { queryConfig, mutationConfig }) => {
  return {
    query: useWorldQuery(id, queryConfig),
    mutation: useWorldMutation(id, mutationConfig),
  };
};
