import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import * as Speech from 'expo-speech';
import MyHeader from "../components/MyHeader";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      searchButton: [],
      word: '',
      examples: '',
      definition: '',
      lexicalCategory: '',
    };
  }

  getWord = (word) => {
    var searchKeyword = word.toLowerCase();
    var url =
      'https://rupinwhitehatjr.github.io/dictionary/' + searchKeyword + '.json';
    return fetch(url)
      .then((data) => {
        if (data.status === 200) {
          return data.json();
        } else {
          return null;
        }
      })
      .then((response) => {
        var responseObject = response;

        var word = responseObject.definitions[0];

        if (responseObject) {
          var lexicalCategory = word.wordtype;

          var definition = word.description;

          this.setState({
            word: this.state.text,
            definition: definition,
            lexicalCategory: lexicalCategory,
          });
        } else {
          this.setState({ word: this.state.text, definition: 'Not Found' });
        }
      });
  };
speech = () => {
    var thingtosay = this.state.definition;

  Speech.speak(thingtosay);
  };

  render() {
    return (
      <View style={styles.container}>
       <MyHeader title="DICTIONARY" navigation={this.props.navigation} />
             <Image
              style={styles.cloudImage}
              source={require('../assets/book.png')}
            />


        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              searchButton: false,
              word: '',
              lexicalCategory: '',
              examples: [],
              defination: '',
            });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ searchButton: true });
            this.getWord(this.state.text);
          }}>
          <Text
            style={{ textAlign: 'Center', fontSize: 22, fontWeight: 'bold',marginLeft:15,marginTop:10 }}>
            SEARCH
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 50, padding: 20 }}>
          <View style={styles.container}>
            <Text style={styles.displayText}>word:{''}</Text>
            <Text style={{ fontSize: 18, color: 'blue' }}>
              {this.state.word}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.displayText}>type:{''}</Text>
            <Text style={{ fontSize: 18, color: 'blue' }}>
              {this.state.lexicalCategory}
            </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.displayText}>defination:{''}</Text>
                    
                    <TouchableOpacity style={styles.container}
                    onPress={()=>this.speech()}
                    >

            <Text style={{ fontSize: 18, color: 'blue' }}>
              {this.state.definition}
            </Text> 
                    </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 20,
    width: 250,
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    borderWidth: 4,
  },
  searchButton: {
    width: 120,
    alignSelf: 'center',
    height: 45,
    margin: 30,
    backgroundColor: 'orange',
    borderRadius: 15,
  },
  displayText: {
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
  },cloudImage :{ 
    width: 350, 
    height: 350, 
    marginTop: 10 ,
    marginLeft:30
  },
});
