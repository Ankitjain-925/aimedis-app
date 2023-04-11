import { useMutation, useQuery } from 'react-query';
import { useDatabase } from '../providers/Database';

const getRoom = (database, id) => {
  return database
    .from('rooms')
    .select('*, building:building_id(*)')
    .eq('id', id)
    .throwOnError()
    .single();
};
const deleteRoom = (database, id) => {
  return database
    .from('rooms')
    .delete()
    .eq('id', id)
    .throwOnError()
    .single();
};

const getAllRooms = (database) => {
  return database
    .from('rooms')
    .select('*, building:building_id(*)')
    .throwOnError()
};

const updateRoom = (database, id, data) => {
  return database
    .from('rooms')
    .update(data)
    .eq('id', id)
    .select('*')
    .throwOnError()
    .single();
};

const addRoom = (database,  data) => {
  return database
    .from('rooms')
    .insert(data)
    .throwOnError()
    .single();
};

export const useRoomQuery = (id, options) => {
  const { database } = useDatabase();
  const key = ['room', id];

  return useQuery(
    key,
    async () => {
      return getRoom(database, id).then((result) => result.data);
    },
    options
  );
};

export const useAllRoomQuery = ( options) => {
  const { database } = useDatabase();
  const key = 'allrooms';

  return useQuery(
    key,
    async () => {
      return getAllRooms(database).then((result) => result.data);
    },
    options
  );
};

export const useUpdateRoomMutation = (id, options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return updateRoom(database, id, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries(['room', id]);
      },
      ...options,
    }
  );
};
export const useDeleteRoomMutation = (id) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (id) => {
      return deleteRoom(database, id).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('allrooms');
      },
    }
  );
};
export const useAddRoomMutation = (options) => {
  const { database, queryClient } = useDatabase();

  return useMutation(
    async (data) => {
      return addRoom(database, data).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries('allrooms');
      },
      ...options,
    }
  );
};

export const useRoom = (id, { queryConfig, mutationConfig }) => {
  return {
    query: useRoomQuery(id, queryConfig),
    updateMutation: useUpdateRoomMutation(id, mutationConfig),
    addMutation: useAddRoomMutation(mutationConfig),
    fetchAll: useAllRoomQuery(queryConfig),
    deleteMutation: useDeleteRoomMutation(id)
  };
};
