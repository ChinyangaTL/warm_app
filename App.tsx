import React from 'react';
import CodePush from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {NativeBaseProvider} from 'native-base';
import {theme} from './theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default CodePush({
  updateDialog: false,
  installMode: CodePush.InstallMode.IMMEDIATE,
})(App);
