// https://reactnative.dev/docs/native-modules-android
// https://reactnative.dev/docs/native-modules-ios

import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { NativeModules } from 'react-native';

class App extends React.Component {
  state = {
    data: []
  };
  render() {
    const { data } = this.state;
    return <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
        <Button
          title='Get Current Phone'
          onPress={() => {
            this.onButtonClick();
          }}
        />
      </View>
    </SafeAreaView>
  };

  onButtonClick = () => {
    const now = new Date();
    const { PhoneBatteryModule } = NativeModules;
    PhoneBatteryModule.getPhoneBattery(now.getTime().toString(), "", (result) => {
      const copied = [...this.state.data];
      copied.push(result);
      this.setState({
        data: copied
      });
    });
  }
};

export default App;
