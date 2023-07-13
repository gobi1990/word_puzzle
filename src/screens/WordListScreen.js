import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WordListScreen = ({route}) => {
  const selectedType = route.params;

  const getWordsForCategory = category => {
    console.log('Select - ', category);
    if (category != null) {
      switch (category.id) {
        case 1:
          return ['Cat', 'Dog', 'Elephant'];
        case 2:
          return ['Apple', 'Banana', 'Orange'];
        case 3:
          return ['Red', 'Blue', 'Green'];
        case 4:
          return ['Red', 'Blue', 'Green'];
        default:
          return [];
      }
    } else {
      return [];
    }
  };

  const words = getWordsForCategory(selectedType.category);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {route.params?.category?.name ?? 'SelectedWord'} Words
      </Text>
      <Text style={styles.title}> Words</Text>
      {words.map((word, index) => (
        <Text key={index} style={styles.word}>
          {word}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  word: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
});

export default WordListScreen;
