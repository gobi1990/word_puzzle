import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CategorySelectionScreen from '../screens/CategorySelectionScreen';
import PuzzlePage from '../screens/PuzzleScreen';
import HomeScreen from '../screens/HomeScreen';
import NameInputScreen from '../screens/NameInputScreen';
import LearderboardScreen from '../screens/LeaderBoardScreen';
import ScoreScreen from '../screens/ScoreScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerTitleAlign: 'center',
        })}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NameInput"
          component={NameInputScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CategorySelection"
          component={CategorySelectionScreen}
        />
        <Stack.Screen
          name="Puzzle"
          component={PuzzlePage}
          options={{title: 'Word Puzzle'}}
        />
        <Stack.Screen
          name="Leaderboard"
          component={LearderboardScreen}
          options={{title: 'Leaderboard'}}
        />
        <Stack.Screen
          name="Score"
          component={ScoreScreen}
          options={{title: 'Score'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
