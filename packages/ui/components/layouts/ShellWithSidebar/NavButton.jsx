import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import { Link } from 'next/link';

export const NavButton = (props) => {
  const { icon, label, href, ...buttonProps } = props;
  return (
    <Button
      as={Link}
      href={href || '#'}
      variant="ghost"
      justifyContent="start"
      {...buttonProps}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="subtle" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};
