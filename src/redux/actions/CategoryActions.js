import ActionTypes from './ActionTypes';

export const selectCategory = category => {
  return {
    type: ActionTypes.SELECT_CATEGORY,
    payload: category,
  };
};

export const getCategory = () => {
  return {
    type: ActionTypes.GET_CATEGORY,
  };
};
