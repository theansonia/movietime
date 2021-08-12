export type MoviePrevResults = {
  adult?: boolean;
  backdrop_path?: null | string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  media_type?: string;
  origin_country?: string[];
  original_name?: string;
  name?: string;
  first_air_date?: string;
  US?: 'US';
}[];

export const sortResults = (
  incomingResultsArray: MoviePrevResults
): MoviePrevResults => {
  const outgoingSortedArray = incomingResultsArray.sort((a, b) =>
    a.popularity < b.popularity ? 1 : -1
  );
  return outgoingSortedArray;
};
