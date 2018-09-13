import React, { Component } from 'react';
import {Platform, StyleSheet, Text, ScrollView, View, Dimensions} from 'react-native';

import { Submit, Head } from '../common';

//reuse of group components
//import { Head, Submit } from './src/common';

var title = 'Login';
let { width, height } = Dimensions.get('window')

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  constructor(props) {
    super(props);
    
  };

  render() {
    return (    
        <View  style={styles.container} >
            <Head text={ title } />

            <Input
              placeholder="john@gmail.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email: this.value })}
            />
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password: this.value })}
            />
            <Submit />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 50,
    backgroundColor: '#F5FCFF',
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
});


export { Login };