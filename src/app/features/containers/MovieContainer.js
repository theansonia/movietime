import React, { useCallback, useEffect, useRef } from 'react'
import Movie from '../components/Movie'
import SearchBar from '../components/SearchBar'
import BeatLoader from 'react-spinners/BeatLoader'
import { css } from '@emotion/core'
import { useSelector } from 'react-redux'

const override = css`
  display: flex;
  margin: 0 auto;
  position: fixed;
  z-index: 100000;
`

const MovieContainer = ({
  movieResults,
  searchStatus,
  updateSearchStatus,
  updateTitle,
  title,
  pages,
  updatePages,
  hasMore,
  isLoading,
}) => {
  const observer = useRef()
  // const [color, updateColor] = useState('#6c757d')
  const color = '#6c757d'
  const category = useSelector((state) => state.category)
  // const { lightTheme } = useContext(ThemeContext)
  // const theme = !lightTheme ? 'darkmode' : ''

  const lastMovie = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          updatePages(pages + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore, updatePages, pages]
  )

  let tempCategory
  if (category === 'a Movie or TV') {
    tempCategory = 'Movies and TV Shows'
  } else if (category === 'TV') {
    tempCategory = 'TV Shows'
  } else if (category === 'Movie') {
    tempCategory = 'Movies'
  }

  // useEffect(() => {
  //   if (theme === 'darkmode') updateColor('white')
  // })

  useEffect(() => {
    movieResults.sort((a, b) => (a.popularity > b.popularity ? 1 : -1))
  }, [movieResults, title])

  return (
    <>
      <SearchBar
        searchStatus={searchStatus}
        updateSearchStatus={updateSearchStatus}
        updateTitle={updateTitle}
        title={title}
        updatePages={updatePages}
      />

      {!title ? (
        <div id='trending'>Featured {tempCategory}</div>
      ) : (
        <div id='trending'>Results</div>
      )}

      <div className='moviecontainer'>
        {movieResults.length === 0
          ? null
          : movieResults.map((movie, index) => {
              if (movieResults.length === index + 1) {
                return (
                  <div key={`moviekey-${index}`} id='movies' ref={lastMovie}>
                    <Movie
                      key={`moviekeyinner-${movie.id}`}
                      id={movie.id}
                      title={movie.title || movie.name}
                      poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      overview={movie.overview}
                      release={
                        movie.release_date === undefined
                          ? null
                          : movie.release_date.split('-')[0]
                      }
                      aired={
                        movie.first_air_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      rating={Math.round(movie.vote_average / 2)}
                      reviews={movie.vote_count}
                      searchStatus={searchStatus}
                      updateSearchStatus={updateSearchStatus}
                      type={movie.media_type}
                    />
                  </div>
                )
              } else {
                return (
                  <div key={`moviekeyagain-${index}`} id='movies'>
                    <Movie
                      key={movie.id + 'moviekeyinnerbutouter'}
                      id={movie.id}
                      title={movie.title || movie.name}
                      poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      overview={movie.overview}
                      release={
                        movie.release_date === undefined
                          ? null
                          : movie.release_date.split('-')[0]
                      }
                      aired={
                        movie.first_air_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      rating={Math.round(movie.vote_average / 2)}
                      reviews={movie.vote_count}
                      searchStatus={searchStatus}
                      updateSearchStatus={updateSearchStatus}
                      type={movie.media_type}
                    />
                  </div>
                )
              }
            })}
        <div id='beat'>
          {isLoading ? (
            <BeatLoader
              id='beat'
              color={color}
              loading={isLoading}
              css={override}
              size={25}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default MovieContainer
