import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import getWordsForCategory from '../utils/GetWordsForCategory';
import TextButton from '../components/TextButton';

const {default: TextBoxGrid} = require('../components/TextBoxGrid');

const PuzzlePage = ({route, navigation}) => {
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
      navigation.replace('Score');
    }
  };

  return (
    <View style={styles.puzzleContainer}>
      <TextBoxGrid word={puzzleWord} selectedLetters={selectedLetters} />
      <View style={styles.buttonContainer}>
        <TextButton buttonText="Next" clickHandler={nextWordHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  puzzleContainer: {
    paddingTop: 20,
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    paddingTop: 40,
    paddingHorizontal: 40,
  },
});

export default PuzzlePage;
