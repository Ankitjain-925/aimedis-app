import { useMutation, useQuery } from 'react-query';
import { useDatabase } from '../providers/Database';

const getBuilding = (database, id) => {
  return database
    .from('buildings')
    .select('*')
    .eq('id', id)
    .throwOnError()
    .single();
};
const deleteBuilding = (database, id) => {
  return database
    .from('buildings')
    .delete()
    .eq('id', id)
    .throwOnError()
    .single();
};

const getAllBuildings = (database) => {
  return database
    .from('buildings')
    .select('*')
    .throwOnError()
};

const updateBuilding = (database, id, data) => {
  return database
    .from('buildings')
    .update(data)
    .eq('id', id)
    .select('*')
    .throwOnError()
    .single();
};

const addBuilding = (database,  data) => {
  return database
    .from('buildings')
    .insert(data)
    .throwOnError()
    .single();
};

export const useBuildingQuery = (id, options) => {
  const { database } = useDatabase();
  const key = ['building', id];

  return useQuery(
    key,
    async () => {
      return getBuilding(database, id).then((result) => result.data);
    },
    options
  );
};

export const useAllBuildingQuery = ( options) => {
  const { database } = useDatabase();
  const key = 'allbuildings';

  return useQuery(
    key,
    async () => {
      return getAllBuildings(database).then((result) => result.data);
    },
    options
  );
};

export const useUpdateBuildingMutation = (id, options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return updateBuilding(database, id, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries(['building', id]);
      },
      ...options,
    }
  );
};
export const useDeleteBuildingMutation = (id) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (id) => {
      return deleteBuilding(database, id).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('allbuildings');
      },
    }
  );
};
export const useAddBuildingMutation = (options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return addBuilding(database, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('allbuildings');
      },
      ...options,
    }
  );
};

export const useBuilding = (id, { queryConfig, mutationConfig }) => {
  return {
    query: useBuildingQuery(id, queryConfig),
    updateMutation: useUpdateBuildingMutation(id, mutationConfig),
    addMutation: useAddBuildingMutation(mutationConfig),
    fetchAll: useAllBuildingQuery(queryConfig),
    deleteMutation: useDeleteBuildingMutation(id)
  };
};
