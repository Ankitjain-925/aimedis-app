import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Input } from "@chakra-ui/react";
export const ColumnFilter = ({ column, rows }) => {
  return (
    <span>
      <Input
        size="sm"
        mt="5px"
        type="text"
        value={column.filterValue || ""}
        onChange={(e) => {
          column.setFilter(e.target.value);
        }}
      />
    </span>
  );
};