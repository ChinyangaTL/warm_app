import React, {Component, FC} from 'react';
import codePush, {DownloadProgress} from 'react-native-code-push';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {ActivityIndicator, Text, View} from 'react-native';

class PreApp extends Component {
  state = {
    status: codePush.SyncStatus.UP_TO_DATE,
    progress: {receivedBytes: 0, totalBytes: 0},
  };

  codePushStatusDidChange(status: codePush.SyncStatus) {
    this.setState({status});
  }

  codePushDownloadDidProgress(progress: DownloadProgress) {
    this.setState({progress});
  }

  render() {
    const {status, progress} = this.state;
    console.log('status', status);
    return <App status={status} progress={progress} />;
  }
}

type AppProps = {
  status: codePush.SyncStatus;
  progress: DownloadProgress;
};

const App: FC<AppProps> = ({status, progress}) => {
  const isLoading =
    status === codePush.SyncStatus.DOWNLOADING_PACKAGE ||
    status === codePush.SyncStatus.INSTALLING_UPDATE;
  return (
    <NavigationContainer>
      <AppNavigator />
      {isLoading ? (
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#FFFFFF80',
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              borderRadius: 8,
              elevation: 3,
            }}>
            <Text>
              Updating App <ActivityIndicator />
            </Text>
            <Text>
              {Math.floor(
                (progress.receivedBytes /
                  (progress.totalBytes > 0 ? progress.totalBytes : 1)) *
                  100,
              )}
              %
            </Text>
          </View>
        </View>
      ) : null}
    </NavigationContainer>
  );
};

export default codePush({
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: false,
})(PreApp);
