import { useMutation, useQuery } from 'react-query';
import { useDatabase } from '../providers/Database';

const getTenant = (database, id) => {
  return database
    .from('tenants')
    .select('*')
    .eq('id', id)
    .throwOnError()
    .single();
};
const deleteTenant = (database, id) => {
  return database
    .from('tenants')
    .delete()
    .eq('id', id)
    .throwOnError()
    .single();
};

const getAllTenants = (database) => {
  return database
    .from('tenants')
    .select('*')
    .throwOnError()
};

const updateTenant = (database, id, data) => {
  return database
    .from('tenants')
    .update(data)
    .eq('id', id)
    .select('*')
    .throwOnError()
    .single();
};

const addTenant = (database,  data) => {
  return database
    .from('tenants')
    .insert(data)
    .throwOnError()
    .single();
};

export const useTenantQuery = (id, options) => {
  const { database } = useDatabase();
  const key = ['world', id];

  return useQuery(
    key,
    async () => {
      return getTenant(database, id).then((result) => result.data);
    },
    options
  );
};

export const useAllTenantQuery = ( options) => {
  const { database } = useDatabase();
  const key = 'alltenants';

  return useQuery(
    key,
    async () => {
      return getAllTenants(database).then((result) => result.data);
    },
    options
  );
};

export const useUpdateTenantMutation = (id, options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return updateTenant(database, id, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries(['world', id]);
      },
      ...options,
    }
  );
};
export const useDeleteTenantMutation = (id) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (id) => {
      return deleteTenant(database, id).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('alltenants');
      },
    }
  );
};
export const useAddTenantMutation = (options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return addTenant(database, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('alltenants');
      },
      ...options,
    }
  );
};

export const useTenant = (id, { queryConfig, mutationConfig }) => {
  return {
    query: useTenantQuery(id, queryConfig),
    updateMutation: useUpdateTenantMutation(id, mutationConfig),
    addMutation: useAddTenantMutation(mutationConfig),
    fetchAll: useAllTenantQuery(queryConfig),
    deleteMutation: useDeleteTenantMutation(id)
  };
};
