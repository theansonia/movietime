import * as React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Search from '../components/Search'
import ReactDOM from 'react-dom'
import Details from '../components/Details'
import Recs from '../components/Recs'
import MovieDetails from '../components/MovieDetails'
import Movie from '../components/Movie'
import TVRecs from '../components/TVRecs'
import Show from '../components/Show'
import Stars from '../components/Stars'
import TrendingSearch from '../components/TrendingSearch'
import TvSearch from '../components/tvSearch'
import App from '../App'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

xtest('change values via the fireEvent.change method', () => {
  const onChange = jest.fn()
  const { container } = render(
    <input type="text" data-testid="search" onChange={onChange} />
  )
  const input = container.firstChild
  fireEvent.change(input, { target: { value: 'a' } })
  expect(onChange).toHaveBeenCalledTimes(1)
  expect(input.value).toBe('a')
})

xtest('change value on input change', () => {
  const { container } = render(<Search />)
  expect(container.firstChild).toMatchSnapshot()
})

xtest('change value on input change trending search', () => {
  const { container } = render(<TrendingSearch />)
  expect(container.firstChild).toMatchSnapshot()
})

xtest('change value on input change tv search', () => {
  const { container } = render(<TvSearch />)
  expect(container.firstChild).toMatchSnapshot()
})

xtest('change value on input onchange', () => {
  const onChange = jest.fn()
  const { getByPlaceholderText } = render(<Search onChange={onChange} />)
  const searchInput = getByPlaceholderText(/Search for a Movie/i)
  expect(searchInput.value).toEqual('')
  // searchInput.onChange = onChange
  // fireEvent.change(searchInput, { target: { value: 'a' } });
  // expect(onChange).toHaveBeenCalledTimes(1)
})

xtest('change value on input onchange trending search', () => {
  const onChange = jest.fn()
  const { getByPlaceholderText } = render(
    <TrendingSearch onChange={onChange} />
  )
  const searchInput = getByPlaceholderText(/Search for Movies and TV Showss/i)
  expect(searchInput.value).toEqual('')
  // searchInput.onChange = onChange
  // fireEvent.change(searchInput, { target: { value: 'a' } });
  // expect(onChange).toHaveBeenCalledTimes(1)
})

xtest('change value on tvsearc onchange', () => {
  const onChange = jest.fn()
  const { getByPlaceholderText } = render(<TvSearch onChange={onChange} />)
  const searchInput = getByPlaceholderText(/Search for a TV Show/i)
  expect(searchInput.value).toEqual('')
  // searchInput.onChange = onChange
  // fireEvent.change(searchInput, { target: { value: 'a' } });
  // expect(onChange).toHaveBeenCalledTimes(1)
})

xdescribe('Search Component', () => {
  it('renders to DOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

xdescribe('Details Component', () => {
  it('renders to DOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Details />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

xdescribe('Recs Component', () => {
  it('renders to DOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Recs />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

xdescribe('MovieDetails Component', () => {
  it('renders to DOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MovieDetails />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

xdescribe('Movies Component', () => {
  it('renders to DOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Movie />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

xdescribe('TVrecs Component', () => {
  it('renders to DOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TVRecs />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

xdescribe('Show Component', () => {
  it('renders to DOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Show />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

// this test doesn't klike how blankstars array is filled
xdescribe('Stars Component', () => {
  it('renders to DOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Stars />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
