import {combineReducers} from '@reduxjs/toolkit';
import charactersSlice from './slices/charactersSlice';
import paginationSlice from './slices/paginationSlice';

export const rootReducer = combineReducers({
  characters: charactersSlice,
  pagination: paginationSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
