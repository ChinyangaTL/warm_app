import React, {useState} from 'react';
import {
  Box,
  Button,
  Text,
  Stack,
  Heading,
  Input,
  HStack,
  Modal,
  FormControl,
  Center,
} from 'native-base';

const data = [
  {
    name: 'Empresa Test',
    contact: '672401028',
    time: 'week ago',
    ref: '2302148D',
  },
  {
    name: 'Empresa Test2',
    contact: '672401028',
    time: '4 weeks ago',
    ref: '2302148D',
  },
  {
    name: 'Empresa Test4',
    contact: '672401028',
    time: ' 3 weeks ago',
    ref: '2302148D',
  },
  {
    name: 'Empresa Test3',
    contact: '672401028',
    time: '2 weeks ago',
    ref: '2302148D',
  },
];

const Tab2 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      flex={1}>
      <Box
        mx={4}
        flex={1}
        flexWrap={'wrap'}
        alignItems={'flex-start'}
        alignContent={'space-between'}>
        {data.map(doc => (
          <Box
            rounded="lg"
            overflow="hidden"
            my={2}
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {doc.name}
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: 'violet.500',
                  }}
                  _dark={{
                    color: 'violet.400',
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1">
                  {`Contact:${doc.contact}`}
                </Text>
              </Stack>
              <Text fontWeight="400">{`Ref:${doc.ref}`}</Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="400">
                  {doc.time}
                </Text>
              </HStack>
            </Stack>
          </Box>
        ))}
      </Box>
      <Box justifyContent={'flex-end'} flex={1}>
        <Button onPress={() => setShowModal(true)}>Add Document</Button>
      </Box>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}>
                Add
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default Tab2;
