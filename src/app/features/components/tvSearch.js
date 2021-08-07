/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../appSlices/categorySlice'
import { setQuery } from '../../appSlices/querySlice'
import { ThemeContext } from '../../contexts/ThemeContext'
import TVContainer from '../containers/TVContainer'
const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`

const TvSearch = ({ pages, updatePages }) => {
  const [tvResults, updateTvResults] = useState([])
  const [hasMore, updateHasMore] = useState(false)
  const [isLoading, updateLoading] = useState(true)
  const { lightTheme } = useContext(ThemeContext)
  const theme = !lightTheme ? 'darkmode' : ''
  const category = useSelector((state) => state.category.value)
  const query = useSelector((state) => state.query.value)
  const dispatch = useDispatch()
  if (category === null) dispatch(changeCategory('TV'))

  useEffect(() => {
    updateTvResults([])
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

    if (query.length === 0) {
      updateTvResults([])
      return
    }
    updateLoading(true)

    // eslint-disable-next-line no-useless-escape
    // const query = title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')

    const URL = `https://api.themoviedb.org/3/search/tv?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false`

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateTvResults((prevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.name.includes('%')) {
              result.name = result.name.replaceAll('%', ' ')
            }
            return result
          })
          return [...prevResults, ...newResults]
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

    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateTvResults((prevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.name.includes('%')) {
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
    <div id='scrollablediv' className={'' + theme}>
      <TVContainer
        tvResults={tvResults}
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

export default TvSearch
