import {
  Button, HStack, Icon, Text, Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { Link } from 'next/link';

export const NavButton = (props) => {
  const { Value, icon, label, href, ...buttonProps } = props;
  return (
    <Button
      variant="ghost"
      justifyContent="start"
      {...buttonProps}
    >
      <HStack spacing="3">
        <Popover>
          <PopoverTrigger>

            <Icon as={icon} boxSize="6" color="subtle" />
          </PopoverTrigger>
          {!Value &&
            <PopoverContent width="auto"
              left="0"
              top="35px">
              <PopoverArrow />
              {/* <PopoverCloseButton /> */}
              {/* <PopoverHeader>  gfhdfhdhfg{label}</PopoverHeader> */}
              <PopoverBody w={"5%"}>
                <Text fontSize={"15px"}> {label}</Text>
              </PopoverBody>
            </PopoverContent>
          }
        </Popover>
        {Value &&
          <Text>{label}</Text>
        }
      </HStack>
    </Button>
  );
};
