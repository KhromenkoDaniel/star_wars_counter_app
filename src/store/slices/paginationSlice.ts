import {createSlice} from '@reduxjs/toolkit';
import {TPaginationState} from '../../types';
import {fetchCharacters} from '../../actions/characters';

const initialState: TPaginationState = {
  currentPage: 1,
  totalCount: 1,
  status: 'idle',
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.totalCount = action.payload.totalCount;
    });
  },
});

export const {setCurrentPage} = paginationSlice.actions;

export default paginationSlice.reducer;
