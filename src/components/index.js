/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Home from './Home/Home';
import ListPlayers from './ListPlayers';
const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false
      },
    },
    ListPlayers: {
      screen: ListPlayers,
      navigationOptions: {
        headerShown: false
      },
    },


  },

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
