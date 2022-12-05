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
  installMode: CodePush.InstallMode.IMMEDIATE,
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: {
    title: 'HOLA',
    optionalIgnoreButtonLabel: 'Later',
    optionalInstallButtonLabel: 'Install',
    optionalUpdateMessage: 'New version available. Install now?',
    mandatoryContinueButtonLabel: 'Continue',
    mandatoryUpdateMessage: 'An update is available. Please restart the app.',
  },
})(App);
