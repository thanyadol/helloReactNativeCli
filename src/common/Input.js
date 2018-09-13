//import React, { PropTypes } from 'react';
import { TextInput, View, Text } from 'react-native';
 
import PropTypes from 'prop-types'

//implicit props
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
   
  //declare style var
  //const { input, label, container } = styles;
 
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};
 
Input.PropTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool.isRequired
};
 
const styles = {
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};
 
export { Input };