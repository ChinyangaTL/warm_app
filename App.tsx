import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello from feature branch.</Text>
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
