/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Dimensions} from 'react-native';

// import { Provider } from 'react-redux';
import RouterConfig from './Router';

// components
// import Banana from './src/components/Banana';
// import Greet from './src/components/Greet';
// import Submit from './src/components/Submit';
//import List from './src/components/List';

//reuse of group components
//import { Banana, Submit } from './src/common';

const instructions = Platform.select({
  ios: 'Hello World with React-Native 0.56 at ' + new Date(),
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//var title = 'Index';
//let { width, height } = Dimensions.get('window')

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RouterConfig />
    );
  }
}

/* 
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // justifyContent: 'flex-start',
    flexDirection: 'column',
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
}); */
