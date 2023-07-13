import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextBox = ({value, isLetterVisible}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{isLetterVisible ? value : value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 8,
    marginVertical: 8,
  },
  boxText: {
    fontSize: 25,
    color: 'black',
  },
});

export default TextBox;
