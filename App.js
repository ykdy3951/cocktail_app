import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Orientation from 'react-native-orientation';
import MainScreen from './Components/MainScreen';

export default class App extends React.Component {

  render() {
    return (
      <MainScreen />
    );
  }
}
