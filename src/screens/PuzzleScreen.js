import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {default: TextBoxGrid} = require('../components/TextBoxGrid');

const PuzzlePage = ({route}) => {
  const selectedType = route.params;
  const selectedLetters = '';

  const getWordsForCategory = category => {
    if (category != null) {
      switch (category.id) {
        case 1:
          return ['Cat', 'Dog', 'Elephant'];
        case 2:
          return ['Singapore', 'New york', 'France'];
        case 3:
          return ['Pizza', 'Burger', 'Fries'];
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

  const textWord = words[0];
  return (
    <View style={styles.puzzleContainer}>
      <TextBoxGrid word={textWord} selectedLetters={selectedLetters} />
      <TouchableOpacity style={styles.nextButton} onPress={() => {}}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  puzzleContainer: {
    paddingTop: 20,
  },
  nextButton: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowRadius: 0.5,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
  },
  nextText: {
    fontSize: 18,
    color: 'black',
  },
});

export default PuzzlePage;
