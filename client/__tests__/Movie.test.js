import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import Movie from '../features/components/Movie';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { changeCategory } from '../features/components/search/searchSlices/categorySlice';

/**
 * @jest-environment jsdom
 */
test('displays a thumbnail', async () => {
  const mockStore = configureStore({ reducer: changeCategory });
  const movie = render(
    <StaticRouter>
      <Provider store={mockStore}>
        <Movie />
      </Provider>
    </StaticRouter>
  );
  const movieThumbnail = await movie.findByTestId('thumbnail');

  expect(movieThumbnail.src).toContain('8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg');
});

test('displays non default correct thumbnail', async () => {
  const mockStore = configureStore({ reducer: changeCategory });
  const movie = render(
    <StaticRouter>
      <Provider store={mockStore}>
        <Movie poster={'1.jpg'} />
      </Provider>
    </StaticRouter>
  );

  const movieThumbnail = await movie.findByTestId('thumbnail');

  expect(movieThumbnail.src).toContain('1.jpg');
});
