import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TextButton = ({buttonIndex, buttonText, clickHandler}) => {
  return (
    <TouchableOpacity
      key={buttonIndex}
      style={styles.button}
      onPress={clickHandler}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    margin: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default TextButton;
