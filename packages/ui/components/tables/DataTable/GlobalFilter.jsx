import React, { useState } from "react";
import "regenerator-runtime/runtime";
import { Input, Center } from "@chakra-ui/react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value1) => {
    setFilter(value1 || undefined);
  }, 1000);

  return (
    <>
      Search:{" "}
      <Input
        htmlSize={6}
        width="60%"
        ml={"15px"}
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </>
  );
};

export default GlobalFilter;