import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Image,ScrollView } from 'react-native';
import MyHeader from "../components/MyHeader";
import { RFValue,RFPercentage } from "react-native-responsive-fontsize";

export default class WeatherScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      city: '',
      min_temp: '',
      max_temp: '',
      temp: '',
      enteredCity: '',
      lat: '',
      long: ''
    }
  }

  getLatLong = async(city) => {
  var url = "https://api.opencagedata.com/geocode/v1/json?q="+city+"&key=d5a3b8111af24d7e93135c9d24ce7c2e"
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      var lat = responseJson.results[0].geometry.lat
      var long = responseJson.results[0].geometry.lng
      this.setState({
        lat: lat,
        long: long
        
      });
      this.getWeather();
    })
  .catch(error => {console.log(error)});
}
getWeather = async() => {
  var url2 = "https://fcc-weather-api.glitch.me/api/current?lat="+this.state.lat+"&lon="+this.state.long;
  return fetch(url2)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        temp: responseJson.main.temp,
       min_temp: responseJson.main.temp_min,
       max_temp: responseJson.main.temp_max,
       enteredCity:this.state.city,
       city:''
      });
    })
  .catch(error => {console.log(error)});
  
}

  render(){
    return(
      <ScrollView style={{backgroundColor:'white'}}>

      <View style={styles.container}>
               <MyHeader title="WEATHER" navigation={this.props.navigation} />
            <Image
              style={styles.cloudImage}
              source={require('../assets/weather.gif')}
            />
       <View style={styles.subContainer}>

        <TextInput style={styles.inputBox} placeholder="Input name of your city" onChangeText={(text) => {
          this.setState({
            city: text
          });
        }} value={this.state.city}/>
        <TouchableOpacity style={styles.goButton} onPress={() => {
          this.getLatLong(this.state.city);
          
        }}>
          <Text style={{textAlign:"center",fontSize:40}}>ENTER</Text>
        </TouchableOpacity>
       </View>
       <View style={styles.subContainer}>
       {this.state.temp?(<Text style={styles.title}>Current temp of {this.state.enteredCity} is {this.state.temp}&deg; C</Text>):(null)}
        
       </View> 
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,

  },
  subContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    alignSelf:"center",
    marginTop: 50,
    marginLeft: 0,


  },
  cloudImage: {
    width: 300,
    height: 300,
   
    alignSelf:'center'

  },
  inputBox: {
    marginTop: 20,
    width: 300,
    alignSelf: 'center',
    height: 60,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 20,

  },
  goButton: {
    width: 200,
    alignSelf: 'center',
    height: 50,
    backgroundColor: 'lightblue',
    marginTop: 20,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
