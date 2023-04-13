import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  UnorderedList,
  ListItem,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { COUNTRIES } from "./countries";
import { PhoneIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Flag from "react-world-flags";
import { AsYouType } from "libphonenumber-js";
import { getCountryTelCode } from "./countries";
import "./phoneNumber.css";

export const PhoneNumberInput = ({
  size,
  value,
  country,
  onChange,
  placeholder,
  style,
  zIndex=9999,
  ...rest
}) => {
  const countryOptions = COUNTRIES.map(({ name, iso }) => ({
    label: name,
    value: iso,
  }));
  let [number, setNumber] = useState(value || "");
  let [selectedCountry, setSelectedCountry] = useState(country || "");
  let [countryCode, setCountryCode] = useState(
    getCountryTelCode(country) || ""
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredData, setfilteredData] = useState(countryOptions);

  useEffect(() => {
    setSelectedCountry(country);
    setCountryCode(getCountryTelCode(country));
  }, [country]);

  const onCountryChange = (e) => {
    let value = e.value;
    let code = getCountryTelCode(value);
    let parsedNumber = new AsYouType().input(`${code}${number}`);
    setCountryCode(code);
    setSelectedCountry(value);
    onChange(parsedNumber)
    setShowDropdown(!showDropdown);
  };

  const onPhoneNumberChange = (e) => {
    let value = e.target.value;
    let parsedNumber = new AsYouType().input(`${countryCode}${value}`);
    if (value.length <= 10) {
      setNumber(value);
      onChange(parsedNumber);
    }
  };

  const toggleList = () => {
    setfilteredData(countryOptions);
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (e) => {
    e.stopPropagation();
    var compare = countryOptions.filter((element) => {
      return element.label.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setfilteredData(compare);
  };

  return (
    <>
      <InputGroup zIndex={zIndex} style={style} size={size} {...rest}>
        <InputLeftElement width="7rem">
          {showDropdown && (
            <UnorderedList
              boxShadow="xl"
              pl="3"
              overflow="auto"
              borderRadius="6"
              style={{
                overflowX: "scroll",
                width: "300px",
                maxHeight: "300px",
                position: "absolute",
                paddingLeft: "25px",
                background: "white",
                top: "42px",
                left: "-15px",
                listStyle: "none"
              }}
            >
              <ListItem>
                <Input
                  w="80%"
                  m="5px"
                  size="sm"
                  placeholder="Search Country"
                  onChange={(e) => handleSelect(e)}
                // bg={useColorModeValue("gray.100", "gray.700")}
                />
              </ListItem>
              {filteredData.map((option) => (
                <ListItem
                  onClick={() => onCountryChange(option)}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </ListItem>
              ))}
            </UnorderedList>
          )}
          <Flex
            pl={2}
            width="100%"
            alignItems="center"
            onClick={() => toggleList()}
          >
            {selectedCountry ? (
              <Box mr="4px" width="50%" flex={1}>
                <Flag height="1rem" code={selectedCountry || ""} />
              </Box>
            ) : (
              <PhoneIcon ml={"3"} />
            )}
            <ChevronDownIcon />
          </Flex>
          <Text>{countryCode}</Text>
        </InputLeftElement>
        <Input
          type="number"
          pl="7rem"
          value={number}
          pattern="[1-9]{1}[0-9]{9}"
          placeholder={placeholder}
          onChange={onPhoneNumberChange}
        // bg={useColorModeValue("gray.100", "gray.700")}
        />
      </InputGroup >
    </>
  );
}
