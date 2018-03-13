import { combineReducers } from 'redux';
import stickies from './stickies';
import nextId from './nextId';
import forFilter from './forFilter';

const rootReducer = combineReducers ({
  stickies,
  nextId,
  forFilter,
});

export default rootReducer;