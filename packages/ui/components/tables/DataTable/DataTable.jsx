import { useSticky } from "react-table-sticky";
import { Styles } from "./TableStyle";
import {
  Table,
  Thead,
  Stack,
  Tbody,
  MenuButton,
  Menu,
  MenuList,
  MenuGroup,
  MenuItem,
  useColorModeValue,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  Box,
  Center,
  Input,
  Select,
  Button,
  Flex,
  Text,
  Grid,
} from "@chakra-ui/react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { DownloadTableExcel } from "react-export-table-to-excel";
import React, { useMemo, useRef } from "react";
import {
  useSortBy,
  useBlockLayout,
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  Column,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter  from "./column";


export const DataTable = (props) => {
  const tableRef = useRef(null);
  const columns = useMemo(() => props.columns, [props.columns]);
  //full table data comes form pages
  const data = useMemo(() => props.Data, [props.Data]);
  //it is column fields setting
  const defaultColumn = useMemo(
    () => ({
      width: 170,
      maxWidth: 2000,
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state: { globalFilter, pageIndex, pageSize },
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useBlockLayout,
    useSticky
  );

  return ( <Center>
  <Box width="100%">
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={"3px"}
      mt="2px"
      width="100%"
      mb="10px"
    >
      {props.globalSearch && (
        <Box width="100%">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Box>
      )}
      {props.exportExcel && (
        <Box>
          <DownloadTableExcel
            filename="users table"
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <Button size="md" width="100%" colorScheme="teal">
              Download(Export to Excel)
            </Button>
          </DownloadTableExcel>
        </Box>
      )}
      {props.columnToggle && (
        <Box>
          <Menu>
            <MenuButton
              width="100%"
              background="#319796"
              color="#fff"
              as={Button}
              rightIcon={<GoTasklist />}
            >
              Open
            </MenuButton>
            <MenuList>
              <MenuGroup title="Show Fields">
                <MenuItem>
                  <Checkbox
                    defaultChecked
                    isChecked={getToggleHideAllColumnsProps().checked}
                    {...getToggleHideAllColumnsProps()}
                  >
                    All Columns
                  </Checkbox>
                </MenuItem>
                {allColumns.map((column) => (
                  <MenuItem key={column.id}>
                    <Stack
                      key={column.id}
                      pl={6}
                      mt={1}
                      spacing={1}
                      direction="row"
                    >
                      <Checkbox
                        isChecked={column.getToggleHiddenProps().checked}
                        {...column.getToggleHiddenProps()}
                      >
                        {column.Header}
                      </Checkbox>
                    </Stack>
                  </MenuItem>
                ))}
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Grid>
    {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
    <Styles>
      <TableContainer className="container">
        <Table
          ref={tableRef}
          className="table sticky"
          variant="simple"
          {...getTableProps()}
        >
          <Thead
            className="header"
            bg={useColorModeValue("gray.100", "gray.900")}
          >
            {headerGroups.map((headerGroup) => (
              <Tr
                key={headerGroup.id}
                className="setHead"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <Th
                    key={column.id}
                    className="th"
                    {...column.getHeaderProps(
                      column.getSortByToggleProps()
                    )}
                  >
                    {column.render("Header")}
                    <span className="updownArrow">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <AiOutlineCaretDown />
                        ) : (
                          <AiOutlineCaretUp />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody className="body" {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <Tr key={row.id} className="tr" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td
                        key={cell.id}
                        className="td"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Styles>
    <Center>
      <Flex width="100%">
        <Text margin="auto" width="100%">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Text>
        <Flex width="100%" margin="auto">
          <Text width="25%" margin="auto">
            Go to Page:
          </Text>
          <Input
            m="10px"
            htmlSize={4}
            width="75%"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </Flex>
        <Select
          m="10px"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show: {pageSize}
            </option>
          ))}
        </Select>
        <Flex>
          <Button
            mt="10px"
            ml="10px"
            p="10px"
            disabled={!canNextPage}
            colorScheme="teal"
            variant="outline"
            onClick={() => gotoPage(0)}
          >
            {"<<"}
          </Button>

          <Button
            mt="10px"
            ml="10px"
            p="10px"
            disabled={!canPreviousPage}
            colorScheme="teal"
            variant="outline"
            onClick={() => previousPage()}
          >
            {"<"}
          </Button>
          <Button
            mt="10px"
            ml="10px"
            p="10px"
            disabled={!canNextPage}
            colorScheme="teal"
            variant="outline"
            onClick={() => nextPage()}
          >
            {">"}
          </Button>
          <Button
            mt="10px"
            ml="10px"
            p="10px"
            disabled={!canNextPage}
            colorScheme="teal"
            variant="outline"
            onClick={() => gotoPage(pageCount - 1)}
          >
            {">>"}
          </Button>
        </Flex>
      </Flex>
    </Center>
  </Box>
</Center>);
};
