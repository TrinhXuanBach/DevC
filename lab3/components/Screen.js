import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


const ConversionTypeButton = (props) => {
    const fromFlag = props.from === "usd" ? 'usd' : 'vn'
    const toFlag   = props.to   === "usd" ? 'usd' : 'vn'

    const background = props.fromCurrency === props.from && props.toCurrency === props.to ? 'blue' : null;
    return(
    
      <TouchableOpacity
        style = {[styles.button, {backgroundColor:  background}]}
        onPress={() => props.setConversionCurrencies(props.from, props.to)}>
        <Text>
          {fromFlag} to {toFlag}
        </Text>
      </TouchableOpacity>
   
  
  )}
  
export class Screen extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentCurrencyValue: 0,
        convertedCurrencyValue: 0,
        fromCurrency: 'vnd',
        toCurrency: 'usd'
      }
    }
    
    setConversionCurrencies = (from, to) => {
      this.setState({
        fromCurrency: from,
        toCurrency: to
      })
    }

    onCurrencyChange = (currency) => {
      let value
      if (this.state.fromCurrency === 'vnd') {
        value = currency / 23000;
      } else {
        value = 23000 * currency;
      }
      this.setState({
        currentCurrencyValue: currency,
        convertedCurrencyValue: value
      })
    }


    render() {
        return(
            <View style={styles.container}>
                <Text>Please enter the value of the currency you want to convert</Text>
                    <TextInput style={styles.textinput} 
                        keyboardType='number-pad'
                        autoFocus={true}
                        textAlign="center"
                        placeholder="100, 000, 000 VND"
                        selectionColor="red"
                        onChangeText={(text) => this.onCurrencyChange(text)}/>
                <ConversionTypeButton to = "usd" from = "vnd"
                                      toCurrency={this.state.toCurrency}
                                      fromCurrency = {this.state.fromCurrency}
                                      setConversionCurrencies={this.setConversionCurrencies}/>
                <ConversionTypeButton to = "vnd" from = "usd"
                                      toCurrency={this.state.toCurrency}
                                      fromCurrency = {this.state.fromCurrency}
                                      setConversionCurrencies={this.setConversionCurrencies}/>
                <Text>Current currency: </Text>
                <Text style={styles.resulttext}>{this.state.currentCurrencyValue}</Text>
                <Text>Conversion currency: </Text>
                <Text style={styles.resulttext}>{this.state.convertedCurrencyValue}</Text>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  
    textinput: {
      width: 300,
      height: 60,
      fontSize: 35,
      borderWidth: 1,
      borderColor: 'lightblue'
    },
  
    button: {
      height: 35,
      width: 200,
      margin: 10,
      borderWidth: 2,
      borderRadius: 20,
      alignItems: 'center',
      borderColor: 'lightblue',
      justifyContent: 'center'
    },

    textview: {
      alignContent: "center"
    },

    resulttext: {
      text: "0.0",
      fontWeight: "bold",
      fontSize: 50,
      color: "red",
      textAlign: "center"
    }
  });
