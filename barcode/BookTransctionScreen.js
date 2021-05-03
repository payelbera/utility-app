import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import MyHeader from "../components/MyHeader";

export default class ScanScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal',
    };
  }

  getCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted', buttonState: 'click', scanned: false });
  };

  handleBarCodeScanner = async ({ type, data }) => {
    this.setState({ scanned: true, scannedData: data, buttonState: 'normal' });
  };

  render() {
      
    const hasCameraPermission = this.state.hasCameraPermission;
    const scanned = this.state.scanned;
    const buttonState = this.state.buttonState;
    if (buttonState === 'click' && hasCameraPermission) {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanner}
          style={StyleSheet.absoluteFillObject}
        />
      );
    } else if (buttonState === 'normal') {
      return (
        <View
        
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <Image
      source={require('../assets/barcode.gif')}
      style={{width:200,height:200}}
      />
      
          <Text style={{ fontSize:20 }}>Bar Code Scanner</Text>
          <Text style={styles.displayText}>
            {hasCameraPermission === true
              ? this.state.scannedData
              : 'Request Camera Permission'}
          </Text>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={this.getCameraPermissions}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  displayText: {
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  scanButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10,
  },
  buttonText: { fontSize: 15, color: 'black' },
});
