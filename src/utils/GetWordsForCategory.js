const getWordsForCategory = category => {
  if (category != null) {
    switch (category.id) {
      case 1:
        return ['Cat', 'Dog', 'Elephant'];
      case 2:
        return ['Singapore', 'NewYork', 'France'];
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

export default getWordsForCategory;
