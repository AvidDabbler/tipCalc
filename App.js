import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, StyleSheet, View, Text, } from 'react-native';
import { Button } from 'react-native-paper';


import Hello from './Hello'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      inputValue: '',
      tip: 0.2
    }
  }


  updateCustomTip(customTip) {
    if (!customTip) {
      this.setState({
        tip: 0
      })
      return;
    }
    else {
      this.setState({
        tip: parseFloat(customTip) / 100
      })
    }

  }

  render() {
    let tip = 0.00;
    if (this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * this.state.tip;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
    }

    return (

      <View style={styles.container}>

        <View style={styles.customTipContainer}>
          <TextInput
            value={(this.state.tip * 100).toString() + '%'}
            style={styles.customTip}
            keyboardType='numeric'
            placeholder='0.00'
            onChangeText={customTip => this.updateCustomTip(customTip)}
            />
        </View>

        <Text>
          ${tip}
        </Text>

        <TextInput
          value={ this.state.inputValue }
          style={styles.textInput}
          keyboardType='numeric'
          placeholder='$0.00'
          placeholderTextColor= '#118AB2'
          onChangeText={(billTotal)=>this.setState({inputValue: billTotal})}
        />

        <View style={styles.tipList}>
          <View style={styles.buttonContainer}>
            <Button mode='contained'
              title='10%'
              style={styles.tipButton}
              onPress={()=>{
                this.setState({ tip: '0.1' });
              
              }}>
              10%
            </Button>
          </View>

          <View style={styles.buttonContainer}>
            <Button mode='contained'
              title='15%'
              style={styles.tipButton}
              onPress={() => { 
                this.setState({ tip: '0.15' });
              
              }}>
              15%
            </Button>
          </View>

          <View style={styles.buttonContainer}>
            <Button mode='contained'
              title='20%'
              style={styles.tipButton}
              onPress={()=>{
                this.setState({ tip: '0.2' });
                
              }}>
              20%
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // backgroundColor:'#EF476F'
    
  },
  textInput: {
    height: 60,
    fontSize:20,
    borderColor: '#333',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#06D6A0',
    color: '#073B4C',
    
  },
  customTipContainer: {
    padding: 20,
    alignItems: 'center',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    width: '50%',
    backgroundColor:'#FFD166'
  },
  customTip: {
    fontSize:40,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  tipList: {
    flexDirection: 'row',  
  },
  buttonContainer: {
    padding: 10
  },  
  tipButton: {
    padding: 10,
    backgroundColor:'#118AB2'
  },
  
});
