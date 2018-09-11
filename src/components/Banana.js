import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={ styles.image }/>
    );
  }
}



const styles = StyleSheet.create({

    image: {
      margin:10,
      width: '50%', 
      height: '50%'
    },
  
  });
  