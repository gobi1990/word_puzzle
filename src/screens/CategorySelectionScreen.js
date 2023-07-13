import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const categories = [
  {id: 1, name: 'Animals'},
  {id: 2, name: 'Citites'},
  {id: 3, name: 'Food'},
  {id: 4, name: 'Colors'},
];

const CategorySelectionScreen = ({navigation}) => {
  let [selectedCategory, setSelectedCategory] = useState(null);

  const categorySelectHandler = category => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory) {
      navigation.navigate('Puzzle', {category: selectedCategory});
    }
  }, [selectedCategory, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Category</Text>
      {categories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={styles.categoryButton}
          onPress={() => categorySelectHandler(category)}>
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: 'black',
  },
  categoryButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    alignItems: 'center',
    width: '60%',
  },
  categoryText: {
    fontSize: 18,
    color: 'black',
  },
});

export default CategorySelectionScreen;
