import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import PropTypes from 'prop-types'

class Submit extends Component {

  // lexical name distinguished from the variable-referenced invocation(s)
  /*onPressClick = function onPressClick() {
    // ...
    alert('onPressClick handle');
  };*/ 

  render() {
    return (
       
        <TouchableOpacity style={ styles.button }
          onPress={this.props.onPress}>
          <Text style={ styles.text }> { this.props.text } </Text> 
        </TouchableOpacity>
    );
  }
}

Submit.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

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

export { Submit };