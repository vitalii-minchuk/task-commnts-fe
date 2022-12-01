import { memo, useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';

interface IAddPostModal {
  isOpen: boolean;
  onClose: () => void;
  createNewPostHandler: (post: string) => void;
}
function AddPostModal({
  isOpen,
  onClose,
  createNewPostHandler,
}: IAddPostModal) {
  const [value, setValue] = useState('');
  console.log('post');
  const confirmHandler = () => {
    createNewPostHandler(value);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="gray.700">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormControl>
              <FormLabel>Post</FormLabel>
              <Textarea
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
            </FormControl>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button onClick={confirmHandler} variant="ghost">
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddPostModal;