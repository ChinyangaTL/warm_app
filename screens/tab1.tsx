import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import codePush from 'react-native-code-push';

const Tab1 = () => {
  const onCheckUpdates = () => {
    codePush.sync(
      {
        updateDialog: {
          title: 'Update available',
          optionalIgnoreButtonLabel: 'Later',
          optionalInstallButtonLabel: 'Install',
          optionalUpdateMessage: 'New version available. Install now?',
          mandatoryContinueButtonLabel: 'Continue',
          mandatoryUpdateMessage:
            'An update is available. Please restart the app.',
        },
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      status => {
        console.log('status', status);
      },
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hey there!</Text>
      <TouchableOpacity onPress={onCheckUpdates}>
        <Text>Check updates</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'lightblue',
  },
});

export default Tab1;
