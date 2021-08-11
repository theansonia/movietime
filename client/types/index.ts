export type Category = null | 'movie' | 'TV' | 'Movie' | 'Movies and TV Show';
export type Query = string;
export type SearchStatus = boolean;
export type HasMore = boolean;
export type Pages = number;
export type Theme = 'lightmode' | 'darkmode';
export interface InitialMovieDataState {
  readonly data: MovieData[];
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
  adult?: false | true;
  backdrop_path: string;
  title: string;
  popularity: number;
  media_type: string;
}
export interface MovieProps {
  title?: string;
  poster: string;
  overview: string;
  release: string;
  rating: number;
  reviews: number;
  type: string;
  aired: string;
  id: string | number;
}
export interface SingleTVResult {
  backdrop_path: null | string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  vote_average: number;
  vote_count: number;
}
export interface MovieData {
  genre_ids: number[];
  original_language: string;
  original_title?: string;
  poster_path: string;
  video?: boolean;
  vote_average: number;
  overview: string;
  release_date?: string;
  id: number;
  vote_count: number;
  adult?: boolean;
  backdrop_path: string;
  title?: string;
  popularity: number;
  media_type: string;
  name?: string;
  origin_country?: string[];
  original_name?: string;
  first_air_date?: string;
}
export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  Ja = 'ja',
}
export interface Details {
  length: number;
  genre_ids: number[];
  original_language: OriginalLanguage;
  original_title?: string;
  poster_path: string;
  video?: boolean;
  vote_average: number;
  overview: string;
  US: string;
  release_date?: string;
  id: number;
  vote_count: number;
  adult?: boolean;
  backdrop_path: string;
  title: string;
  popularity: number;
  media_type: MediaType;
  name: string;
  original_name?: string;
  origin_country?: string[];
  first_air_date?: string;
}
[];
export interface DataResults {
  poster_path: string;
  page: number;
  total_pages: number;
  total_results: number;
  original_language: string;
  US: string;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    US: 'US';
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
  }[];
  readonly data: MovieData[];
  genre_ids: number[];
  original_title: string;
  video: false;
  vote_average: number;
  overview: string;
  release_date: string;
  id: number;
  vote_count: number;
  adult?: false | true;
  backdrop_path: string;
  title: string;
  popularity: number;
  media_type: string;
}
