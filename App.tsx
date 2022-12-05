import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text testID="welcome">
        Hello World, this is a new feature. Updated by CodePush.
      </Text>
      <Text>Doing a new feature from a feature branch.</Text>
      <Text>Doing another task in the new feature</Text>
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

export default CodePush({
  updateDialog: false,
  installMode: CodePush.InstallMode.IMMEDIATE,
})(App);
