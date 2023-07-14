import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const LearderboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      {/* {cards.length > 0 ? (
      <FlatList
        data={cards}
        renderItem={({item}) => <Text item={item} navigation={navigation} />}
      />
      ) */}
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

export default LearderboardScreen;
