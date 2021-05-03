import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import MyHeader from "../components/MyHeader";
import * as Speech from 'expo-speech';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }
  checkSpclChar = (word)=>{
    var hasSpcl = false;
    for(var i = 0;i<word.length;i++){
      
      var asciiCode = word.charCodeAt(i)
      if((asciiCode>=65 && asciiCode<=90)|| (asciiCode>=97 && asciiCode<=122)){
        
      }
      else{
        hasSpcl = true
      }
    }
    hasSpcl? alert("Special characters not allowed"):this.speech()

  }
  speech = () => {
    var thingtosay = this.state.text;
    this.state.text === ''
      ? Alert.alert('pls enter a word')
      : Speech.speak(thingtosay);
  };

  render() {
    return (
      
      <View style={styles.container}>
                   <MyHeader title="TEXT TO SPEECH" navigation={this.props.navigation} />

         <KeyboardAvoidingView
      style={styles.container1}
      behavior='padding'
      enabled
      >


        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://img.utdstc.com/icons/voice-to-text-text-to-speech-android.png:225',
          }}
        />
        <Text style={styles.displayText}> Enter The Word</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => this.setState({ text: text })}
          value={this.state.text}
        />

        <TouchableOpacity style={styles.goButton} onPress={()=>{this.checkSpclChar(this.state.text)}}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 25,
            }}>
            CLICK HERE TO HEAR SPEECH
          </Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom:190
  },
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
    height: 100,
    backgroundColor: 'lightblue',
    marginTop: 20,
    borderRadius: 30,
  },
  imageIcon: {
    width: 200,
    height: 200,
    marginLeft: 5,
    marginTop: 180,
    marginBottom:50

  },
  container1: { flex: 1, justifyContent: 'center', alignItems: 'center' ,marginBottom:300},

  displayText: { textAlign: "center", fontSize: 40, color: 'black' },
});
