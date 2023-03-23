import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavButton = (props) => {
  const { icon, label, href, ...buttonProps } = props;
  const router = useRouter();
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        justifyContent="start"
        w="full"
        //aria-current={router.asPath === href ? 'page' : undefined}
        {...buttonProps}
      >
        <HStack spacing="3">
          <Icon
            as={icon}
            boxSize="6"
            color={router.asPath === href ? 'accent' : 'subtle'}
          />
          <Text color={router.asPath === href ? 'muted' : 'subtle'}>
            {label}
          </Text>
        </HStack>
      </Button>
    </Link>
  );
};
