import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


import MyHeader from "../components/MyHeader";


export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }

  getWeather = async () => {
    //change latitude and longitude
    var url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single';
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>

          <View style={styles.subContainer}>
          <MyHeader title=" Joke" navigation={this.props.navigation} />

            
            <Image
              style={styles.cloudImage}
              source={require('../assets/jokein.gif')}
            />
            <View style={styles.textContainer}>
            <Text style={{ fontSize: 18}}>
            </Text>
            
            <Text style={{ fontSize: 20, margin:10}}>
            </Text>
            <Text style={{fontSize: 20}}>
              {this.state.weather.joke}
            </Text>
          </View>
          </View>  
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  subContainer : { 
    flex: 1, 
    borderWidth: 1, 
    alignItems: 'center' 
    },
    title:{ 
      marginRight: 50, 
      fontSize: 30,
      fontWeight: '500' 
    },
    cloudImage :{ 
      width: 200, 
      height: 200, 
      marginTop: 30 
    },
    textContainer : { 
      flex: 1,
      alignItems: 'center', 
      flexDirection:'row', 
      marginTop:-150,
      marginRight:20
    }
});
