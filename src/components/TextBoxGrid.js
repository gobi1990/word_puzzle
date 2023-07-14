import React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import TextBox from './TextBox';
import {
  removeLetter,
  selectLetter,
  updateGrid,
} from '../redux/actions/PuzzleActions';

const TextBoxGrid = ({word, selectedLetters}) => {
  const shuffledWord = shuffleWord(word);

  const gridSize = Math.ceil(Math.sqrt(word.length));

  const handleLetterSelect = (letter, index) => {
    selectLetter(letter);
    updateGrid(letter);
    removeLetter(letter);
  };

  const rows = [];
  for (let i = 0; i < word.length; i += gridSize) {
    rows.push(shuffledWord.slice(i, i + gridSize));
  }

  const remainingLetters = shuffledWord
    .split('')
    .filter(letter => !selectedLetters.includes(letter));

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.split('').map((letter, colIndex) => (
              <TextBox key={colIndex} value={letter} />
            ))}
          </View>
        ))}
      </View>
      {/* <ScrollView horizontal={true} style={styles.shuffledWordContainer}>
        {shuffledWord.split('').map((letter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleLetterSelect(letter, index)}>
            <TextBox key={index} value={letter} />
          </TouchableOpacity>
        ))}
      </ScrollView> */}
      <FlatList
        data={remainingLetters}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleLetterSelect(item)}>
            <TextBox value={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const shuffleWord = word => {
  const toLowerChars = word.toLowerCase();
  const wordArray = toLowerChars.split('');
  for (let i = wordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  return wordArray.join('');
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  gridContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 16,
  },
  shuffledWordContainer: {
    flexDirection: 'row',
  },
});

export default TextBoxGrid;
