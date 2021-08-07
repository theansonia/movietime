/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Show from '../components/Show'
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

const TVContainer = ({ tvResults, pages, updatePages, hasMore, isLoading }) => {
  const observer = useRef()
  // eslint-disable-next-line no-unused-vars
  const [color, updateColor] = useState('#6c757d')
  const category = useSelector((state) => state.tempCategory)
  const query = useSelector((state) => state.query.value)
  const lastShow = useCallback(
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
    [isLoading, hasMore]
  )
  let tempCategory
  if (category === 'a Movie or TV') {
    tempCategory = 'Movies and TV Shows'
  } else if (category === 'TV') {
    tempCategory = 'TV Shows'
  } else if (category === 'Movie') {
    tempCategory = 'Movies'
  }
  useEffect(() => {
    tvResults.sort((a, b) => (a.popularity < b.popularity ? 1 : -1))
  }, [tvResults, query])
  return (
    <div>
      <SearchBar updatePages={updatePages} />

      {!query ? (
        <div id='trending'>Featured {tempCategory}</div>
      ) : (
        <div id='trending'>Results</div>
      )}

      <div className='moviecontainer'>
        {tvResults.length === 0
          ? null
          : tvResults.map((movie, index) => {
              if (tvResults.length === index + 1) {
                return (
                  <div key={`showkey-${index}`} id='movies' ref={lastShow}>
                    <Show
                      key={`showkeyinner-${movie.id}`}
                      id={movie.id}
                      name={movie.name}
                      poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      overview={movie.overview}
                      release={
                        movie.release_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      aired={
                        movie.first_air_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      rating={Math.round(movie.vote_average / 2)}
                      reviews={movie.vote_count}
                      type={movie.media_type}
                    />
                  </div>
                )
              } else {
                return (
                  <div key={`keyout--${index}`} id='movies'>
                    <Show
                      key={movie.id + 'moviekeyinnerbutouter'}
                      id={movie.id}
                      name={movie.name}
                      poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      overview={movie.overview}
                      release={
                        movie.first_air_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      aired={
                        movie.first_air_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      rating={Math.round(movie.vote_average / 2)}
                      reviews={movie.vote_count}
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
    </div>
  )
}

export default TVContainer
