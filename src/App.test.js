/* eslint-disable no-unused-vars */
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ReactDOM from 'react-dom';
import Details from './components/Details';
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router, MemoryRouter, BrowserRouter } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'
import App, {LocationDisplay} from './App';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: BrowserRouter })
}

// Uncomment when in development 

xtest('rendering a component that uses useLocation', () => {
  const history = createMemoryHistory()
  const route = '/Movies'
  history.push(route)
  render(
    <Router history={history}>
      <LocationDisplay />
    </Router>
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)

})

xtest('rendering a Movies route', () => {
  const history = createMemoryHistory()
  const route = '/Details'
  history.push(route)
  render(
    <Router history={history}>
      <LocationDisplay />
    </Router>
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)

})

xtest('full app rendering/navigating', () => {
  renderWithRouter(<App />, { wrapper: MemoryRouter })

  expect(screen.getByText(/Film/i)).toBeInTheDocument()
  const click = { button: 0 }
  userEvent.click(screen.getByText(/shows/i), click)

  expect(screen.getByText(/Featured/i)).toBeInTheDocument()
})

// Uncomment when in development 

xtest('landing on a bad page', () => {
  renderWithRouter(<App />, { route: '/liveevents' })

  expect(screen.getByText(/No match/i)).toBeInTheDocument()
})

xtest('ensure Film button works', () => {
  renderWithRouter(<App />, { wrapper: MemoryRouter })

  const leftClick = { button: 0 }
  userEvent.click(screen.getByText(/movies/i), leftClick)

  expect(screen.getByText(/Featured Movies/i)).toBeInTheDocument()
})
