import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, StyleSheet, View, Text, Button } from 'react-native';


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
        <Text>
          ${tip}
        </Text>
        <TextInput
          value={ this.state.inputValue }
          style={styles.textInput}
          keyboardType='numeric'
          placeholder='0.00'
          onChangeText={(text)=>this.setState({inputValue: text})}
        />

        <View style={styles.tipList}>
          <Button
            title='10%'
            onPress={()=>{this.setState({tip:'0.1'})}}
          />
          <Button
            title='15%'
            onPress={()=>{this.setState({tip:'0.15'})}}
          />
          <Button
            title='20%'
            onPress={()=>{this.setState({tip:'0.2'})}}
          />

        <TextInput
          value={(this.state.tip * 100).toString()}
          style={styles.customTip}
          keyboardType='numeric'
          placeholder='0.00'
          onChangeText={customTip => this.updateCustomTip(customTip)}
          />
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
    padding:20,
    
  },
  textInput: {
    height: 60,
    fontSize:20,
    borderColor: '#333',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    alignItems: center
  },
  tipList: {
    flexDirection: 'row',
    margin: 20,
  },
  tipButton: {
    color:'white',
    padding: 20,
  },
  customTip: {
    height: 50,
    width: 55,
    fontSize: 30,
    borderColor: '#333',
    borderWidth: 1,
    padding: 10,
  }
  
});
