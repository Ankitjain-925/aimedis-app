import React from 'react';
import {
  SettingsLayout,
  PageLayout,
  FormLayout,
  CheckboxCardGroup,
  CheckboxCard,
} from 'ui';
import { IoMdNotifications } from 'react-icons/io';
import { SettingsIcon } from '@chakra-ui/icons';
import { Stack, StackDivider, Text } from '@chakra-ui/react';

const NotificationSettings = () => {
  return (
    <SettingsLayout
      links={[
        {
          label: 'General',
          href: '/account',
          icon: SettingsIcon,
        },
        {
          label: 'Notifications',
          href: '/account/notifications',
          icon: IoMdNotifications,
        },
      ]}
    >
      <PageLayout
        title="Notification Preference"
        description="Get notified on different topics"
        actions={<></>}
        hasDivider
      >
        <Stack spacing="8" divider={<StackDivider />} pt="2">
          <FormLayout title="Email Preference" description="Manage your inbox">
            <CheckboxCardGroup defaultValue={['one', 'two']} spacing="3">
              {['one', 'two', 'three', 'four', 'five', 'six'].map((option) => (
                <CheckboxCard key={option} value={option}>
                  <Text color="emphasized" fontWeight="medium" fontSize="sm">
                    Option {option}
                  </Text>
                  <Text color="muted" fontSize="sm">
                    Jelly biscuit muffin icing dessert powder macaroon.
                  </Text>
                </CheckboxCard>
              ))}
            </CheckboxCardGroup>
          </FormLayout>
        </Stack>
      </PageLayout>
    </SettingsLayout>
  );
};

export default NotificationSettings;
