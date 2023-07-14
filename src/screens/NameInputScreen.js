import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import TextButton from '../components/TextButton';

const NameInputScreen = ({navigation}) => {
  const [name, setName] = useState('');

  const handleNameChange = text => {
    setName(text);
  };

  const handleStartPress = () => {
    navigation.replace('CategorySelection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="grey"
        onChangeText={handleNameChange}
        value={name}
      />
      <TextButton buttonText="Start" clickHandler={handleStartPress} />
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
    marginBottom: 30,
    color: 'black',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
});

export default NameInputScreen;
