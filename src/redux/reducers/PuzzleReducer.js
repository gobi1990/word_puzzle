import ActionTypes from '../actions/ActionTypes';

const initialState = {
  words: ['Cat', 'Dog', 'Elephant'],
  selectedLetters: '',
  gridState: Array(9).fill(''),
};

const puzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_LETTER:
      console.log('letter - - ', action.payload);
      return {
        ...state,
        selectedLetters: state.selectedLetters + action.payload,
      };
    case ActionTypes.RESET_LETTERS:
      return {
        ...state,
        selectedLetters: '',
      };
    case ActionTypes.UPDATE_GRID:
      const gridState = [...state.gridState];
      const index = gridState.findIndex(letter => letter === '');
      if (index !== -1) {
        gridState[index] = action.payload;
      }
      return {
        ...state,
        gridState,
      };
    case 'REMOVE_LETTER':
      const filteredLetters = state.selectedLetters
        .split('')
        .filter(letter => letter !== action.payload);
      return {
        ...state,
        selectedLetters: filteredLetters.join(''),
      };
    default:
      return state;
  }
};

export default puzzleReducer;
