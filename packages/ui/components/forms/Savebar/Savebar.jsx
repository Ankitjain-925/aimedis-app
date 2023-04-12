import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Actionbar } from '../../common/Actionbar';

export const SaveDiscardBar = ({
  isOpen,
  isSaving,
  isDiscarding,
  isDisabledSave,
  isDisabledDiscard,
  onDiscard,
}) => {
  const cancelRef = useRef();
  const discardAlert = useDisclosure();

  return (
    <>
      <Actionbar
        isOpen={isOpen}
        title="Unsaved changes"
        primaryAction={
          <Button
            variant="primary"
            type="submit"
            w="full"
            maxW="100px"
            isLoading={isSaving}
            isDisabled={isDisabledSave}
          >
            Save
          </Button>
        }
        secondaryAction={
          <Button
            variant="secondary"
            w="full"
            maxW="100px"
            onClick={discardAlert.onOpen}
          >
            Discard
          </Button>
        }
      />
      <AlertDialog
        isCentered
        isOpen={discardAlert.isOpen}
        leastDestructiveRef={cancelRef}
        onClose={discardAlert.onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Discard all unsaved changes
            </AlertDialogHeader>

            <AlertDialogBody>
              If you discard changes, you’ll delete any edits you made since you
              last saved.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                variant="secondary"
                ref={cancelRef}
                onClick={discardAlert.onClose}
              >
                Continue editing
              </Button>
              <Button
                colorScheme="red"
                ml={4}
                onClick={async () => {
                  await onDiscard();
                  discardAlert.onClose();
                }}
                isLoading={isDiscarding}
                isDisabled={isDisabledDiscard}
              >
                Discard changes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
