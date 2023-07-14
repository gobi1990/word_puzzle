import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import getWordsForCategory from '../utils/GetWordsForCategory';

const {default: TextBoxGrid} = require('../components/TextBoxGrid');

const PuzzlePage = ({route}) => {
  const selectedType = route.params;
  const selectedLetters = '';
  const [wordIndex, setWordIndex] = useState(0);
  const [puzzleWord, setPuzzleWord] = useState('');

  const gameWords = getWordsForCategory(selectedType.category);

  useEffect(() => {
    setPuzzleWord(gameWords[wordIndex]);
  }, [gameWords, selectedType.category, wordIndex]);

  const nextWordHandler = () => {
    if (wordIndex < gameWords.length - 1) {
      setWordIndex(wordIndex + 1);
    } else {
      console.log('WordList End');
    }
  };

  return (
    <View style={styles.puzzleContainer}>
      <TextBoxGrid word={puzzleWord} selectedLetters={selectedLetters} />
      <TouchableOpacity style={styles.nextButton} onPress={nextWordHandler}>
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
