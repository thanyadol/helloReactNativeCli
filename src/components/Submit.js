import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default class Submit extends Component {
  render() {
    return (
      <View style={ styles.view }>       
        <Button
          onPress={onPressClick}
          title="Click"
          color="#841584"
          accessibilityLabel="Click"
        /> 
    </View>

    );
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin:10,
  },
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