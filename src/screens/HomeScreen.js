import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import TextButton from '../components/TextButton';
import AppStrings from '../constants/AppStrings';

const HomeScreen = ({navigation}) => {
  const handleStartGamePress = () => {
    navigation.navigate('NameInput');
  };

  const handleLeaderboardPress = () => {
    navigation.navigate('Leaderboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{AppStrings.AppName}</Text>
      <Image
        style={styles.image}
        source={{
          uri: AppStrings.AppIcon,
        }}
      />
      <View style={styles.wordContainer}>
        <TextButton
          buttonText="Start Game"
          clickHandler={handleStartGamePress}
        />
        <TextButton
          buttonText="Leaderboard"
          clickHandler={handleLeaderboardPress}
        />
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
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
