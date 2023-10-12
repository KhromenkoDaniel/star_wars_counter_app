import {createSlice} from '@reduxjs/toolkit';
import {TCharactersState} from '../../types';
import {fetchCharacters} from '../../actions/characters';

const initialState: TCharactersState = {
  characters: [],
  status: 'idle',
  error: null,
  maleFavorites: [],
  femaleFavorites: [],
  otherFavorites: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addFavoriteByGender: (state, action) => {
      const character = action.payload;
      if (character.gender === 'male') {
        state.maleFavorites.push(character);
      } else if (character.gender === 'female') {
        state.femaleFavorites.push(character);
      } else {
        state.otherFavorites.push(character);
      }
    },
    removeFavoriteByGender: (state, action) => {
      const character = action.payload;
      if (character.gender === 'male') {
        state.maleFavorites = state.maleFavorites.filter(
          favCharacter => favCharacter.url !== character.url,
        );
      } else if (character.gender === 'female') {
        state.femaleFavorites = state.femaleFavorites.filter(
          favCharacter => favCharacter.url !== character.url,
        );
      } else {
        state.otherFavorites = state.otherFavorites.filter(
          favCharacter => favCharacter.url !== character.url,
        );
      }
    },
    removeAllFavorite: state => {
      state.maleFavorites = [];
      state.femaleFavorites = [];
      state.otherFavorites = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload.results;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {addFavoriteByGender, removeFavoriteByGender, removeAllFavorite} =
  charactersSlice.actions;

export default charactersSlice.reducer;
