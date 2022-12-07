import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Tab1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text testID="welcome">
        Hello World, this is a new feature. Updated by CodePush.
      </Text>


      

      <Text>WELCOME</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Tab1;
