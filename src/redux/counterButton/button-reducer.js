import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { increment } from './button-action';

const value = createReducer(0, {
  [increment]: (state, _) => state + 1,
});

export default combineReducers({
  value,
});
