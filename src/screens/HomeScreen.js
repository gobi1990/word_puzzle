import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  const handleStartGamePress = () => {
    navigation.navigate('NameInput');
  };

  const handleLeaderboardPress = () => {
    console.log('Leaderboard button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Word Puzzle</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.emojiterra.com/google/android-12l/512px/1f4dd.png',
        }}
      />
      <View style={styles.wordContainer}>
        <TouchableOpacity style={styles.button} onPress={handleStartGamePress}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLeaderboardPress}>
          <Text style={styles.buttonText}>Leaderboard</Text>
        </TouchableOpacity>
      </View>
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
    fontFamily: 'Grunell',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain',
  },
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

export default HomeScreen;
