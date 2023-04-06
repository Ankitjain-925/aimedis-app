import { useMutation, useQuery } from 'react-query';
import { useDatabase } from '../providers/Database';

const getServer = (database, id) => {
  return database
    .from('servers')
    .select('*')
    .eq('id', id)
    .throwOnError()
    .single();
};
const deleteServer = (database, id) => {
  return database
    .from('servers')
    .delete()
    .eq('id', id)
    .throwOnError()
    .single();
};

const getAllServers = (database) => {
  return database
    .from('servers')
    .select('*')
    .throwOnError()
};

const updateServer = (database, id, data) => {
  return database
    .from('servers')
    .update(data)
    .eq('id', id)
    .select('*')
    .throwOnError()
    .single();
};

const addServer = (database,  data) => {
  return database
    .from('servers')
    .insert(data)
    .throwOnError()
    .single();
};

export const useServerQuery = (id, options) => {
  const { database } = useDatabase();
  const key = ['world', id];

  return useQuery(
    key,
    async () => {
      return getServer(database, id).then((result) => result.data);
    },
    options
  );
};

export const useAllServerQuery = ( options) => {
  const { database } = useDatabase();
  const key = 'allservers';

  return useQuery(
    key,
    async () => {
      return getAllServers(database).then((result) => result.data);
    },
    options
  );
};

export const useUpdateServerMutation = (id, options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return updateServer(database, id, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries(['world', id]);
      },
      ...options,
    }
  );
};
export const useDeleteServerMutation = (id) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (id) => {
      return deleteServer(database, id).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('allservers');
      },
    }
  );
};
export const useAddServerMutation = (options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return addServer(database, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('allservers');
      },
      ...options,
    }
  );
};

export const useServer = (id, { queryConfig, mutationConfig }) => {
  return {
    query: useServerQuery(id, queryConfig),
    updateMutation: useUpdateServerMutation(id, mutationConfig),
    addMutation: useAddServerMutation(mutationConfig),
    fetchAll: useAllServerQuery(queryConfig),
    deleteMutation: useDeleteServerMutation(id)
  };
};
