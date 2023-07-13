import ActionTypes from '../actions/ActionTypes';

const initialState = {
  selectedCategory: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case ActionTypes.GET_CATEGORY:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
