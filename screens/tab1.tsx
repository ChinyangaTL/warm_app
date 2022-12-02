import React from 'react';
import {
  Box,
  Button,
  Actionsheet,
  View,
  useDisclose,
  Text,
  Input,
  FlatList,
  HStack,
  Avatar,
  VStack,
  Spacer,
} from 'native-base';

const Tab1 = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Aafren@gmail.com',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Sujitha Mathur',
      timeStamp: '11:11 PM',
      recentText: 'Sujitha@gmauil.com',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Anci Barroco',
      timeStamp: '6:22 PM',
      recentText: 'Anci@gmail.com',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      recentText: 'Aniket@gmail.com',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
    },
  ];
  return (
    <View flex="1">
      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
        <Actionsheet.Content borderTopRadius="15">
          <Box w="100%" h={60} px={2} justifyContent="center">
            <Text
              fontSize="20"
              color="gray.500"
              _dark={{
                color: 'gray.100',
              }}>
              Nuevo Contacto
            </Text>
          </Box>

          <Input size="sm" my="2" mx={2} px={2} placeholder="Nombre" />
          <Input size="sm" my="2" mx={2} px={2} placeholder="Direccion" />
          <Input size="sm" my="2" mx={2} px={2} placeholder="Pais" />
          <Input size="sm" my="2" mx={2} px={2} placeholder="Movil" />
          <Input size="sm" my="2" mx={2} px={2} placeholder="Emrpesa" />

          <Box w="100%" h={60} px={2} justifyContent="center">
            <Button
              fontSize="20"
              color="gray.500"
              _dark={{
                color: 'gray.100',
              }}>
              Añadir Contacto
            </Button>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'muted.50',
            }}
            _light={{
              borderColor: 'blue.200',
            }}
            pl={['0', '4']}
            pr={['0', '5']}
            py="2">
            <HStack space={[2, 3]} justifyContent="space-between" px="4">
              <Avatar
                size="36px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600">{item.recentText}</Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
      <Button
        onPress={onOpen}
        fontSize="20"
        color="gray.500"
        _dark={{
          color: 'gray.100',
        }}>
        Añadir Contacto
      </Button>
    </View>
  );
};

export default Tab1;
