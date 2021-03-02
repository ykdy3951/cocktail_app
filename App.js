import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './Components/MainScreen';

export default class App extends Component {
  render() {
    return (
      <MainScreen />
    );
  }
}
