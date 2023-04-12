import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { ColumnFilter, DateFilter, DataTable, StepIndicator, PhoneNumberInput } from "ui";
import Data from "./Data.json";
const columns = [
  {
    // sticky: 'left',
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
    Filter: ColumnFilter,
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Footer: "Date of Birth",
    Filter: DateFilter,
    filter: "between",
  },
  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
    Filter: ColumnFilter,
  },
];

const TableDemo =()=> {
  return (
    <>
          <Box>
          <Text>Data Tables</Text>
            <DataTable
              Data={Data}
              columns={columns}
              columnToggle={true}
              globalSearch={true}
              exportExcel={true}
            />
          </Box>
    </>
  );
}

export default TableDemo;