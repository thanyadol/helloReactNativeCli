import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export default class Submit extends Component {
  render() {
    return (
       
        <TouchableOpacity style={ styles.button }
          onPress={onPressClick}>
          <Text style={ styles.text }> Submit </Text> 
        </TouchableOpacity>


    );
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin:10,
    flexDirection: 'column'
  },
  button: {
    // alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6f6f6f',
    // marginLeft: 5,
    // marginRight: 5
    margin:10,
  },
  text:{
    alignSelf: 'center',
    color: '#6f6f6f',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

//to descript prop c
/*Button.propTypes = {
  onPress: PropTypes.func.isRequired
};*/

// lexical name distinguished from the variable-referenced invocation(s)
const onPressClick = function onPressClick() {
  // ...
  alert('onPressClick handle');
};