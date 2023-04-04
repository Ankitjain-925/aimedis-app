import { useMutation, useQuery } from 'react-query';
import { useDatabase } from '../providers/Database';

const getWorld = (database, id) => {
  return database
    .from('worlds')
    .select('*')
    .eq('id', id)
    .throwOnError()
    .single();
};
const deleteWorld = (database, id) => {
  return database
    .from('worlds')
    .delete()
    .eq('id', id)
    .throwOnError()
    .single();
};

const getAllWorlds = (database) => {
  return database
    .from('worlds')
    .select('*')
    .throwOnError()
};

const updateWorld = (database, id, data) => {
  return database
    .from('worlds')
    .update(data)
    .eq('id', id)
    .select('*')
    .throwOnError()
    .single();
};

const addWorld = (database,  data) => {
  return database
    .from('worlds')
    .insert(data)
    .throwOnError()
    .single();
};

export const useWorldQuery = (id, options) => {
  const { database } = useDatabase();
  const key = ['world', id];

  return useQuery(
    key,
    async () => {
      return getWorld(database, id).then((result) => result.data);
    },
    options
  );
};

export const useAllWorldQuery = ( options) => {
  const { database } = useDatabase();
  const key = 'allworlds';

  return useQuery(
    key,
    async () => {
      return getAllWorlds(database).then((result) => result.data);
    },
    options
  );
};

export const useUpdateWorldMutation = (id, options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return updateWorld(database, id, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries(['world', id]);
      },
      ...options,
    }
  );
};
export const useDeleteWorldMutation = (id) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (id) => {
      return deleteWorld(database, id).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('allworlds');
      },
    }
  );
};
export const useAddWorldMutation = (options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return addWorld(database, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('allworlds');
      },
      ...options,
    }
  );
};

export const useWorld = (id, { queryConfig, mutationConfig }) => {
  return {
    query: useWorldQuery(id, queryConfig),
    updateMutation: useUpdateWorldMutation(id, mutationConfig),
    addMutation: useAddWorldMutation(mutationConfig),
    fetchAll: useAllWorldQuery(queryConfig),
    deleteMutation: useDeleteWorldMutation(id)
  };
};
