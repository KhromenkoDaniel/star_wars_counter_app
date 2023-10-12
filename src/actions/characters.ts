import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {TFetchCharactersParams, TFetchCharactersResponse} from '../types';

export const fetchCharacters = createAsyncThunk<
  TFetchCharactersResponse,
  TFetchCharactersParams
>('characters/fetchCharacters', async ({page, searchTerm = ''}) => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}&search=${searchTerm}`,
    );
    const totalCount = response.data.count;
    return {
      results: response.data.results,
      totalCount,
    } as TFetchCharactersResponse;
  } catch (error) {
    throw error;
  }
});
