/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../appSlices/categorySlice'
import { setQuery } from '../../appSlices/querySlice'
import { ThemeContext } from '../../contexts/ThemeContext'
import MovieContainer from '../containers/MovieContainer'

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`

const Search = ({ pages, updatePages }) => {
  const [movieResults, updateMovieResults] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [hasMore, updateHasMore] = useState(false)
  const [isLoading, updateLoading] = useState(true)
  const { lightTheme } = useContext(ThemeContext)
  const theme = !lightTheme ? 'darkmode' : ''

  const category = useSelector((state) => state.category.value)
  const query = useSelector((state) => state.query.value)

  const dispatch = useDispatch()
  if (category === null) dispatch(changeCategory('movie'))

  useEffect(() => {
    updateMovieResults([])
  }, [query])

  useEffect(() => {
    if (
      query === ' ' ||
      query === '.' ||
      query === '/' ||
      query === '$' ||
      query === '%' ||
      query === '#' ||
      query === '&' ||
      query === '+' ||
      query === '#' ||
      query === '+' ||
      query === '#'
    ) {
      dispatch(setQuery(''))
      return
    }

    if (query === '`') {
      dispatch(setQuery("'"))
      return
    }

    if (query.length === 0 || category === 'TV') {
      updateMovieResults([])
      return
    }
    updateLoading(true)

    // eslint-disable-next-line no-useless-escape
    // query = query.replaceAll(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')
    // const query = testTitle

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false`
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateMovieResults((prevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.title.includes('%')) {
              result.title = result.title.replaceAll('%', ' ')
            }
            return result
          })
          return [...prevResults, ...newResults]
        })
        updateHasMore(data.results.length > 0)
        updateLoading(false)
        // storeMovieData(data)
      })
      .catch((error) => console.log(error))
  }, [category, query, pages])

  useEffect(() => {
    if (query === ' ') {
      dispatch(setQuery(''))
      return
    }
    updateLoading(true)

    if (query.length > 0) return
    // if (title === undefined || title.length === 0) updateMovieResults([]);

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateMovieResults((prevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.title.includes('%')) {
              result.title = result.title.replaceAll('%', ' ')
            }
            return result
          })
          return [...prevResults, ...newResults]
        })
        updateHasMore(data.results.length > 0)
        updateLoading(false)
      })
      .catch((error) => console.log(error))
  }, [query, pages])

  return (
    <div className={'' + theme}>
      <MovieContainer
        movieResults={movieResults}
        updatePages={updatePages}
        pages={pages}
        hasMore={hasMore}
        isLoading={isLoading}
        updateLoading={updateLoading}
        updateHasMore={updateHasMore}
      />
    </div>
  )
}

export default Search
