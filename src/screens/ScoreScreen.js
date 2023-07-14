import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppStrings from '../constants/AppStrings';

const ScoreScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{AppStrings.ScoreScreen_Title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
});

export default ScoreScreen;
