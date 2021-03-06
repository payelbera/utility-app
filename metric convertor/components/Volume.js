import React, { Component } from 'react';
import { View, Text, Picker, TextInput, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import s from './styles/Styles';


class Volume extends Component {

    constructor(props){
        super(props);
        this.state = { userInput: '', unitFrom: 'c', unitTo: 'tbsp', result: null,
                        volume:{'gal':3785.41,'c':240,'fl oz':29.5735,'tbsp':14.7868,
                                'tsp':4.92892,'l':1000,'ml':1
                    }
        }
        
    }
    
    formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    clearInput = () => {
        this.setState({userInput:''});
    }

    handleToChange = (unit2) => {
        this.setState({unitTo: unit2},()=> this.calculate());
    }

    handleFromChange = (unit1) => {
        this.setState({unitFrom:unit1},() => this.calculate());
    }

    calculate = () => {
        // Intermediary: Millimeter
        if (this.state.userInput !== '') {
            let intermediary, target;
            intermediary=this.state.userInput*this.state.volume[this.state.unitFrom]
            target = intermediary/this.state.volume[this.state.unitTo]
            if(isNaN(target))
                Alert.alert('Problem occurred','Unrecognized character found. Remove it to proceed');
            else    
                this.setState({ result: this.formatNumber(parseFloat(target).toFixed(1)) });
        }
        else {
            this.setState({ result: null })
        }
    }
    swap = () => {
        let temp1, temp2;
        temp1 = this.state.unitFrom;
        temp2 = this.state.unitTo;
        this.setState({ unitFrom: temp2, unitTo: temp1 }, () => {
            this.calculate()
        })
    }

    updateAndCalculate = (text) => {
        this.setState({userInput: text.replace(/,/g,'')},() => 
            this.calculate()
     )
    }

    render() {        
        return (
            
            <View>
                <View style={[s.headerContainer,{backgroundColor: '#0ca4ff'}]} >
                    <Text style={s.headerText}> Volume </Text>
                </View>

                <View style={s.contentsContainer} >

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitFrom}
                            onValueChange={this.handleFromChange}>
                            <Picker.Item label=" Gallon" value="gal" />
                            <Picker.Item label=" Cup" value="c" />
                            <Picker.Item label=" Tablespoon" value="tbsp" />
                            <Picker.Item label=" Teaspoon" value="tsp" />
                            <Picker.Item label=" Fluid Ounce " value="fl oz" />
                            <Picker.Item label=" Liter" value="l" />
                            <Picker.Item label="Millileter" value="ml" />
                        </Picker>
                        <View style ={s.textInputContainerIOS}>
                            <TextInput
                                placeholder="VALUE"
                                style={s.textStyle}
                                value= {this.formatNumber(this.state.userInput)}
                                onChangeText={this.updateAndCalculate}
                                maxLength={18}
                                keyboardType='numeric'
                                clearButtonMode='while-editing'
                            />
                        </View>
                    </View>
                    <View style={s.iconContainer} >
                        <TouchableOpacity onPress={this.swap}>
                            <Image source={require('../assets/images/swap-icon.png')} style={s.iconStyle}/>
                        </TouchableOpacity>

                        {Platform.OS === 'android' &&
                        <TouchableOpacity onPress={this.clearInput}>
                            <Image source={require('../assets/images/trash-icon.png')} style={s.iconStyle}/> 
                        </TouchableOpacity>
                        }
                    </View>

                    <View style={s.inputContainer}>
                        <Picker
                            itemStyle={s.pickerStyle}
                            selectedValue={this.state.unitTo}
                            onValueChange={this.handleToChange}>
                            <Picker.Item label=" Gallon" value="gal" />
                            <Picker.Item label=" Cup" value="c" />
                            <Picker.Item label=" Tablespoon" value="tbsp" />
                            <Picker.Item label=" Teaspoon" value="tsp" />
                            <Picker.Item label=" Fluid Ounce " value="fl oz" />
                            <Picker.Item label=" Liter" value="l" />
                            <Picker.Item label=" Millileter" value="ml" />
                        </Picker>
                        <View>
                            <Text style={[s.textStyle,s.resultText]}> {this.state.result} </Text>
                        </View>
                    </View>

                </View>



            </View>
        );
    }
}

export default Volume;