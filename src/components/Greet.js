import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

export default class Greet extends Component {
  render() {
    return (
        <View style={ styles.view }>
          <Text>{this.props.name} !</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    view: {
      /*backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'*/

      margin:10,
    },
  
  });

/* export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>

    );
  }
} */

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);

