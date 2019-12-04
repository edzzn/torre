import { combineReducers } from 'redux';
import { RootState } from './types';
import searchReducer from '../features/Search/state/reducer';

const rootReducer = combineReducers<RootState>({
  search: searchReducer
});

export default rootReducer;
