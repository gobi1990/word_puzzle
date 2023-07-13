import {legacy_createStore as createStore, combineReducers} from 'redux';
import CategoryReducer from '../reducers/CategoryReducer';
import puzzleReducer from '../reducers/PuzzleReducer';

const rootReducer = combineReducers({
  category: CategoryReducer,
  puzzle: puzzleReducer,
});

const store = createStore(rootReducer);

export default store;
