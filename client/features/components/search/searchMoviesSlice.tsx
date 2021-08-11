import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataResults, MovieData } from '../../../types';

export interface InitialMovieDataState extends DataResults {
  data: MovieData[];
  genre_ids: number[];
  original_language: string;
  original_title: string;
  poster_path: string;
  video: false;
  vote_average: number;
  overview: string;
  release_date: string;
  id: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  title: string;
  popularity: number;
  media_type: string;
}

const initialState = {
  data: [
    {
      genre_ids: [0, 1, 2, 3],
      original_language: 'en',
      original_title: 'Movie title',
      poster_path: 'posterpath.com',
      video: false,
      vote_average: 0,
      overview: 'overview',
      release_date: 'date as string',
      id: 1234,
      vote_count: 386976,
      adult: false,
      backdrop_path: '/pathtojpg',
      title: 'Movie title',
      popularity: 69,
      media_type: 'movie',
    },
  ],
};

export const searchMoviesSlice = createSlice({
  name: 'movieData',
  initialState,
  reducers: {
    updateMovieData: (
      state,
      action: PayloadAction<InitialMovieDataState[]>
    ) => {
      state.data = action.payload;
    },
  },
});

export const { updateMovieData } = searchMoviesSlice.actions;
export default searchMoviesSlice.reducer;
