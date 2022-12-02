import React from 'react';

import {
  VStack,
  Skeleton,
  Center,
  Alert,
  Slide,
  Button,
  Text,
  Box,
} from 'native-base';

const Tab3 = () => {
  const [isOpenTop, setIsOpenTop] = React.useState(false);
  return (
    <Center w="100%" py={4}>
      <VStack
        w="75%"
        maxW="400"
        borderWidth="1"
        space={8}
        overflow="hidden"
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}>
        <Skeleton h="40" />
        <Skeleton.Text px="4" />
        <Skeleton px="4" my="4" rounded="md" />
      </VStack>
      <Box my={4}>
        <Slide in={isOpenTop} placement="top" my={16}>
          <Alert justifyContent="center" status="error" safeAreaTop={2}>
            <Alert.Icon />
            <Text color="error.600" fontWeight="medium">
              No Internet Connection
            </Text>
          </Alert>
        </Slide>
        <Button
          onPress={() => setIsOpenTop(!isOpenTop)}
          variant="unstyled"
          bg="coolGray.700:alpha.30">
          {'Add photo'}
        </Button>
      </Box>
    </Center>
  );
};

export default Tab3;
