import { useEffect, useState } from 'react';
import { sortResults } from './sortResults';

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log(process.env);
export interface Result {
  poster_path?: string;
  id?: number;
  vote_average?: number;
  first_air_date?: Date;
  overview?: string;
  original_name?: string;
  origin_country?: string[];
  backdrop_path?: string;
  vote_count?: number;
  genre_ids?: number[];
  name?: string;
  original_language?: string;
  popularity?: number;
  media_type?: string;
  title?: string;
}

export const fetchDetails = async (query: RequestInfo) => {
  const uri = `https://api.themoviedb.org/3/search/multi?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const URL = encodeURI(uri);

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log('error fetching show details', err);
  } finally {
    console.log('not loading');
  }
};

export const fetchProvidersAndRecs = async (
  type: RequestInfo,
  id: RequestInfo | number
) => {
  const uri = `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;

  const URL = encodeURI(uri);

  const providerURI = `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${REACT_APP_MOVIE_API_KEY}`;
  const providerURL = encodeURI(providerURI);

  try {
    const res = await Promise.all([fetch(URL), fetch(providerURL)]);
    const data = await Promise.all(res.map((result) => result.json()));
    return data;
  } catch {
    throw Error(
      'fetch failed while fetchinig providers and recommendation data'
    );
  } finally {
    console.log('Not loading');
  }
};

export const fetchContent = async (
  query: string,
  type: string,
  pages: number
) => {
  const URI = `https://api.themoviedb.org/3/search/${type}?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false`;

  const URL = encodeURI(URI);

  try {
    const results = await fetch(URL);
    const data = await results.json();
    const newResults = await data.results.filter(
      (result: { title: string; name: string; vote_count: number }) => {
        if (type === 'multi') {
          if (result.title && result.title.includes('%')) {
            result.title = result.title.replaceAll('%', ' ');
          } else if (result.name && result.name.includes('%')) {
            result.name = result.name.replaceAll('%', ' ');
          }
        }
        if (result.vote_count > 10) return result;
      }
    );
    const resultResults = sortResults(newResults);
    return resultResults;
  } catch {
    throw Error('fetch failed while fetching query results');
  } finally {
    console.log('is not loading');
  }
};

export const fetchTrending = async (type: string, pages: number) => {
  let URI: string;
  if (type === 'multi') {
    URI = `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`;
  } else {
    URI = `https://api.themoviedb.org/3/${type}/popular?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`;
  }
  const URL = encodeURI(URI);

  try {
    const res = await fetch(URL);
    const data = await res.json();
    const newResults = await data.results.filter((result: Result) => {
      if (result.media_type === 'movie' && result.title.includes('%')) {
        result.title = result.title.replaceAll('%', ' ');
      } else if (result.media_type === 'tv' && result.name.includes('%')) {
        result.name = result.name.replaceAll('%', ' ');
      } else if (result.vote_count > 10) return result;
    });
    const resultResults = sortResults(newResults);

    return resultResults;
  } catch {
    throw Error('fetch failed while fetching trending content results');
  } finally {
    console.log('not loading');
  }
};
