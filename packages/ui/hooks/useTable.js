import { useMutation, useQuery } from 'react-query';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useQueryClient } from 'react-query';
import { createClient } from '@supabase/supabase-js';


const getTable = (supabase, table, id, fields) => {
  return id
    ? supabase
        .from(table)
        .select(fields || '*')
        .eq('id', id)
        .throwOnError()
        .single()
    : supabase
        .from(table)
        .select(fields || '*')
        .throwOnError();
};

const insertTable = (supabase, table, data, fields) => {
  console.log("tete",table, data,fields)
  if (!data) throw new Error('data is required');

  return supabase
    .from(table)
    .insert(data)
    .select(fields || '*')
    .throwOnError()
    .single();
};

const updateTable = (supabase, table, id, data, fields) => {
  if (!id) throw new Error('id is required');
  if (!data) throw new Error('data is required');

  return supabase
    .from(table)
    .update(data)
    .eq('id', id)
    .select(fields || '*')
    .throwOnError()
    .single();
};

const deleteTable = (supabase, table, id) => {
  if (!id) throw new Error('id is required');

  return supabase.from(table).delete().eq('id', id).throwOnError();
};

export const useTableQuery = (table, id, fields, options) => {
  const supabase = useSupabaseClient();

  return useQuery(
    [table, id],
    async () => {
      return getTable(supabase, table, id, fields).then(
        (result) => result.data
      );
    },
    {
      ...options,
    }
  );
};

export const useTableInsert = (table, fields, options) => {
  // const supabase = useSupabaseClient();
const supabase = createClient('https://jvogqxcgreynqmmenkqo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2b2dxeGNncmV5bnFtbWVua3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNDMyMDIsImV4cCI6MTk5MjYxOTIwMn0.z9HRHY0Zzqn_SgDTy8f1cLlV2Izvf3WzmeJqy8ZPS9E')

  const queryClient = useQueryClient();
  console.log("data3456",table, fields)

  return useMutation(
    async (data) => {
      return insertTable(supabase, table, data, fields).then(
        (result) => result.data
      );
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries([table]);
      },
      ...options,
    }
  );
};

export const useTableUpdate = (table, id, fields, options) => {
  const supabase = useSupabaseClient();
  const queryClient = useQueryClient();

  return useMutation(
    async (tableId, data) => {
      return updateTable(
        supabase,
        table,
        tableId ? tableId : id,
        data,
        fields
      ).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries([table, variables.id]);
      },
      ...options,
    }
  );
};

export const useTableDelete = (table, options) => {
  const supabase = useSupabaseClient();

  return useMutation(
    async (id) => {
      return deleteTable(supabase, table, id).then((result) => result.data);
    },
    {
      ...options,
    }
  );
};

export const useTable = ({
  table,
  id,
  fields,
  queryConfig,
  insertConfig,
  updateConfig,
  deleteConfig,
}) => {
  if (!table) throw new Error('table is required');

  return {
    query: useTableQuery(table, id, fields, queryConfig),
    insert: useTableInsert(table, fields, insertConfig),
    update: useTableUpdate(table, id, fields, updateConfig),
    delete: useTableDelete(table, deleteConfig),
  };
};
