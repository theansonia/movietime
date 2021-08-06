/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import changeCategory from '../../../actionCreators/changeCategory'
import { ThemeContext } from '../../contexts/ThemeContext'
import TVContainer from '../containers/TVContainer'

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`

const TvSearch = ({
  searchStatus,
  updateSearchStatus,
  title,
  updateTitle,
  pages,
  updatePages,
}) => {
  const [tvResults, updateTvResults] = useState([])
  const [hasMore, updateHasMore] = useState(false)
  const [isLoading, updateLoading] = useState(true)
  const { lightTheme } = useContext(ThemeContext)
  const theme = !lightTheme ? 'darkmode' : ''
  const category = useSelector((state) => state.category)

  const dispatch = useDispatch()
  if (category === null) dispatch(changeCategory('a Movie or TV Show'))

  useEffect(() => {
    updateTvResults([])
  }, [title])

  useEffect(() => {
    if (
      title === ' ' ||
      title === '.' ||
      title === '/' ||
      title === '$' ||
      title === '%' ||
      title === '#' ||
      title === '&' ||
      title === '+' ||
      title === '#' ||
      title === '?' ||
      title === '+' ||
      title === '#'
    ) {
      updateTitle('')
      return
    }

    if (title === '`') {
      updateTitle("'")
      return
    }

    if (title.length === 0) {
      updateTvResults([])
      return
    }
    updateLoading(true)

    // eslint-disable-next-line no-useless-escape
    const query = title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')

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
  }, [category, title, pages])

  useEffect(() => {
    if (title === ' ') {
      updateTitle('')
      return
    }

    updateLoading(true)

    if (title.length > 0) return

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
  }, [title, pages])

  return (
    <div id='scrollablediv' className={'' + theme}>
      <TVContainer
        tvResults={tvResults}
        updateSearchStatus={updateSearchStatus}
        updateTitle={updateTitle}
        title={title}
        searchStatus={searchStatus}
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
