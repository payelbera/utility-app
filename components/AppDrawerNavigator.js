import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/weather';
import NotificationScreen from '../screens/news';
import SettingScreen from '../screens/JokeScreen';
import MyReceivedBooksScreen from '../screens/textToSpeech';
import Dictionary from '../screens/Dictionary';
import calculator from '../calculator/index';
import currency from '../screens/currencyconvertor';
import metric from '../metric convertor/App';
import barcode from '../barcode/BookTransctionScreen';
import {  Image} from 'react-native';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon :<Image
      source={require('../assets/home.gif')}style={{width:35,height:35}}
      />,
    }
    },
  MyDonations : {
    screen : MyDonationScreen,
    navigationOptions:{
      drawerIcon :<Image
      source={require('../assets/weather.png')}style={{width:35,height:35}}
      />,
      drawerLabel : "WEATHER"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon :<Image
      source={require('../assets/newspaper.png')}style={{width:35,height:35}}
      />,
      drawerLabel : "NEWSLETTER"
    }
  },
  MyReceivedBooks :{
    screen: MyReceivedBooksScreen,
    navigationOptions:{
      drawerIcon : <Image
      source={require('../assets/speech.gif')}style={{width:35,height:35}}
      />,
      drawerLabel : "TEXT TO SPEECH"
    }
  },
  Dictionary :{
    screen: Dictionary ,
    navigationOptions:{
      drawerIcon : <Image
      source={require('../assets/dictonary.png')}style={{width:35,height:35}}
      />,
      drawerLabel : "DICTIONARY"
    }
  },
  index :{
    screen: calculator ,
    navigationOptions:{
      drawerIcon : <Image
      source={require('../assets/calculator.png')}style={{width:35,height:35}}
      />,
      drawerLabel : "CALCULATOR"
    }
  },
  currencyconvertor :{
    screen: currency ,
    navigationOptions:{
      drawerIcon : <Image
      source={require('../assets/money.png')}style={{width:35,height:35}}
      />,
      drawerLabel : "CURRENCY CONVERTOR"
    }
  },
  App :{
    screen: metric ,
    navigationOptions:{
      drawerIcon : <Image
      source={require('../assets/convert.png')}style={{width:35,height:35}}
      />,
      drawerLabel : "METRIC CONVERTOR"
    }
  },
  barcode :{
    screen: barcode ,
    navigationOptions:{
      drawerIcon : <Image
      source={require('../assets/barcode.png')}style={{width:35,height:35}}
      />,
      drawerLabel : "BARCODE SCANNER"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Image
      source={require('../assets/joke.gif')}style={{width:35,height:35}}
      />,
      drawerLabel : "JOKE"
    }
  }
},

  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
