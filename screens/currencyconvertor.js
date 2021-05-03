import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TextInput,TouchableOpacity,Alert ,KeyboardAvoidingView} from 'react-native';


import MyHeader from "../components/MyHeader";


export default class App extends Component {
    constructor() {
        super();
        this.state = {
          torate: 0,
          fromrate:0,
          amount:0,
          convertedamount:0,
          tocurrency:'',
          fromcurrency:'',
          rates:[]
        };
      }
 
      componentDidMount(){
          this.getcurrency()
      }

      convertor(){
        var fromcurrency=this.state.fromcurrency.toUpperCase()
        var tocurrency=this.state.tocurrency.toUpperCase()
        this.setState({
            fromrate:this.state.rates[fromcurrency],
            torate:this.state.rates[tocurrency]
           });
           

           var usd=this.state.amount/this.state.rates[fromcurrency]
           var converted=usd*this.state.rates[tocurrency]

           this.setState({
            convertedamount:converted
            });
      }

getcurrency =async()=>{
    var url="https://api.currencyfreaks.com/latest?apikey=8323863217df434a87bd0edabfd34cf9"
return fetch(url)
.then(response => response.json())
.then(responseJson => {

  this.setState({
   rates:responseJson.rates,
  });
})
.catch(error => {console.log(error)});
}

  render() {
    return (
     
    <View style={styles.container}>
 <KeyboardAvoidingView
      style={styles.container1}
      behavior='padding'
      enabled
      >
                <MyHeader title="CURRENCY CONVERTOR" navigation={this.props.navigation} />
                <Image
              style={styles.cloudImage}
              source={require('../assets/dollar.gif')}
            />
   <TextInput
          style={styles.inputBox}
          placeholder='enter from currency'
          onChangeText={(text) => this.setState({ fromcurrency: text })}
          value={this.state.fromcurrency}
        />
   <TextInput
          style={styles.inputBox}
          placeholder='enter to currency'
          onChangeText={(text) => this.setState({ tocurrency: text })}
          value={this.state.tocurrency}
        />
   <TextInput
          style={styles.inputBox}
          placeholder='amount'
          onChangeText={(text) => this.setState({ amount: text })}
          value={this.state.amount}
        />

<TouchableOpacity style={styles.goButton} 
onPress={()=>{

    this.convertor()}}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            CONVERT
          </Text>
        </TouchableOpacity>
        
        <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 25,
            }}>
            {this.state.convertedamount}
          </Text>
          </KeyboardAvoidingView>

  </View>

    )}
}

const styles = StyleSheet.create({
  scontainer: {
   textAlign: 'center',
    fontSize: 80,
    marginTop:300,
    color: 'black',}, 
    inputBox: {
        marginTop: 20,
        width: 200,
        alignSelf: 'center',
        height: 40,
        textAlign: "center",
        borderWidth: 4,
      }, 
      goButton: {
        width: 200,
        alignSelf: 'center',
        height: 50,
        backgroundColor: 'lightblue',
        marginTop: 20,
        borderRadius: 15,
      },
      cloudImage :{ 
        width: 350, 
        height: 350, 
        marginTop: 10 ,
        marginRight:10
      },
      container1: { flex: 1, justifyContent: 'center', alignItems: 'center' },

    container: {
flex:1  ,marginBottom:150  }})
