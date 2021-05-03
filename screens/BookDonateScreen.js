import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


import MyHeader from "../components/MyHeader";


export default class App extends Component {
 
 

  render() {
    return (
    <View style={styles.container}>
                <MyHeader title="HOME" navigation={this.props.navigation} />

    <Text style={styles.scontainer}>WELCOME</Text>
  </View>
    )}
}

const styles = StyleSheet.create({
  scontainer: {
   textAlign: 'center',
    fontSize: 80,
    marginTop:300,
    color: 'black',},
    container: {
flex:1    }})
