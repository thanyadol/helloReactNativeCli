/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';


// components
import Bananas from './src/components/Banana';
import Greet from './src/components/Greet';
import Submit from './src/components/Submit';

const instructions = Platform.select({
  ios: 'Hello World with React-Native 16.5 at ' + new Date(),
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var title = 'Index';
let { width, height } = Dimensions.get('window')

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text> */}

        <Text style={styles.welcome}> { title } </Text> 
        <View style = {styles.line} />
        <Text style={styles.instructions}> { instructions } </Text>
        <Bananas  />
        <View style = {styles.line} />
        <Submit />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
    margin:10,
  },
  line:{
    borderWidth: 0.5,
    borderColor:'#6f6f6f',
    margin:10,
    width:  width - 20,
  },
});
