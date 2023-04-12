import { DateRangePicker } from "react-date-range";
import { AiFillFilter } from "react-icons/ai";
import { useBoolean } from "@chakra-ui/react";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box } from "@chakra-ui/react";

export const DateFilter = ({ rows, column }) => {
  const [flag, setFlag] = useBoolean();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);
  const inputHandler = (event) => {
    var ed = new Date(event.selection.endDate).getTime();
    var sd = new Date(event.selection.startDate).getTime();
    var fullData = rows.filter((data) => {
      var time = new Date(data.values.date_of_birth).getTime();
      return sd < time && time < ed;
    });
    setState([event.selection]);
    column.filteredRows = fullData;
    rows = fullData;
    // column.setFilter((old = []) => [event.selection.startDate, event.selection.endDate])
    // setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
  };
  return (
    <>
      <span>
        <AiFillFilter onClick={setFlag.toggle} />
      </span>
      {flag && (
        <Box position="absolute">
          <DateRangePicker
            onChange={(event) => {
              setState([event.selection]);
              inputHandler(event);
            }}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </Box>
      )}
    </>
  );
};