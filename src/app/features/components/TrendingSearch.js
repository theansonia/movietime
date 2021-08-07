/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../../appSlices/querySlice'
import { ThemeContext } from '../../contexts/ThemeContext'
import MovieContainer from '../containers/MovieContainer'

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`

const TrendingSearch = ({ pages, updatePages }) => {
  const category = useSelector((state) => state.category.value)
  const [movieResults, updateMovieResults] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [hasMore, updateHasMore] = useState(false)
  const [isLoading, updateLoading] = useState(true)
  const { lightTheme } = useContext(ThemeContext)
  const theme = !lightTheme ? 'darkmode' : ''

  const query = useSelector((state) => state.query.value)
  const dispatch = useDispatch()

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
      query === '?' ||
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
    // const query = title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false&`
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateMovieResults((prevResults) => {
          // eslint-disable-next-line array-callback-return
          const newResults = data.results.filter((result) => {
            if (result.media_type === 'movie' && result.title.includes('%')) {
              result.title = result.title.replaceAll('%', ' ')
            } else if (
              result.media_type === 'tv' &&
              result.name.includes('%')
            ) {
              result.name = result.title.replaceAll('%', ' ')
            }
            return result
          })
          return [
            ...prevResults,
            ...newResults.filter((res) => {
              if (res.media_type === 'tv' || res.media_type === 'movie')
                return res
            }),
          ]
        })
        updateHasMore(data.results.length > 0)
        updateLoading(false)
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

    const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateMovieResults((prevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.media_type === 'movie' && result.title.includes('%')) {
              result.title = result.title.replaceAll('%', ' ')
            } else if (
              result.media_type === 'tv' &&
              result.name.includes('%')
            ) {
              result.name = result.title.replaceAll('%', ' ')
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
        updateLoading={updateLoading}
        updateHasMore={updateHasMore}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </div>
  )
}

export default TrendingSearch
