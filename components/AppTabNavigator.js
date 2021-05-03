import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookRequestScreen from '../screens/BookRequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/home.gif")} style={{width:20, height:20}}/>,
      tabBarLabel : "HOME",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/settings.gif")} style={{width:20, height:20}}/>,
      tabBarLabel : "SETTINGS"
    }
  }
});
