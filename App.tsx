import React from 'react';
import CodePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default CodePush({
  updateDialog: false,
  installMode: CodePush.InstallMode.IMMEDIATE,
})(App);
