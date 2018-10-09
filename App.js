import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Tabs } from './Config/route';
import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <Tabs />; (
      <View style={styles.container}>
        <StatusBar backgroundColor="#EDEF53" barStyle="light-content" />
        <Text style={styles.welcome}></Text>
        <Text style={styles.instructions}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEF53',
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
