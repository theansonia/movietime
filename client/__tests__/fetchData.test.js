import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { fetchTrending } from '../utils/fetchData';
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

beforeEach(() => {
  fetch.resetMocks();
});

xtest('gives back trending movies and tv shows', async () => {
  const content = ['starwars', 'breaking bad', 'batman'];

  fetch.mockResponseOnce(
    JSON.stringify({
      title: 'starwars',
      content,
    })
  );

  const res = await fetchTrending('starwars', 1);

  console.log(res);
});
