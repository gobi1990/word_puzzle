import ActionTypes from './ActionTypes';

export const selectLetter = letter => {
  return {
    type: ActionTypes.SELECT_LETTER,
    payload: letter,
  };
};

export const resetLetters = () => {
  return {
    type: ActionTypes.RESET_LETTERS,
  };
};

export const updateGrid = letter => {
  return {
    type: ActionTypes.UPDATE_GRID,
    payload: letter,
  };
};

export const removeLetter = letter => {
  return {
    type: 'REMOVE_LETTER',
    payload: letter,
  };
};
