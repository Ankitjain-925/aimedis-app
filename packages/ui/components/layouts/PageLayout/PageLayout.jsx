import { Heading, SkeletonText, Stack, Text } from '@chakra-ui/react';

export const PageLayout = ({
  title,
  description,
  hasDivider,
  actions,
  isLoading,
  isError,
  children,
}) => {
  return (
    <Stack spacing={hasDivider ? 6 : 8} height="full" pb="24">
      <Stack
        spacing="4"
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', sm: 'center' }}
        pb={hasDivider ? '6' : '0'}
        borderBottomWidth={hasDivider ? '1px' : '0px'}
      >
        <Stack spacing="1">
          <Heading as="h1" size={{ base: 'xs', md: 'sm' }} fontWeight="medium">
            {title}
          </Heading>
          <Text color="muted">{description}</Text>
        </Stack>
        {actions && (
          <Stack direction="row" spacing="3">
            {actions}
          </Stack>
        )}
      </Stack>
      <Stack spacing="8">
        {isLoading ? (
          <SkeletonText noOfLines={10} spacing="4" skeletonHeight="2" />
        ) : isError ? (
          <>Error</>
        ) : (
          children
        )}
      </Stack>
    </Stack>
  );
};
