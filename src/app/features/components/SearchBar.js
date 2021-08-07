import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../appSlices/categorySlice'
import { setQuery } from '../../appSlices/querySlice'

const SearchBar = ({ updatePages }) => {
  const category = useSelector((state) => state.category.value)
  const searchStatus = useSelector((state) => state.searchStatus.value)
  const query = useSelector((state) => state.query.value)

  const dispatch = useDispatch()

  useEffect(() => {
    if (category === null) dispatch(changeCategory('a Movie or TV Show'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])
  return (
    <>
      {searchStatus && (
        <div id='searchbar'>
          <div
            id='x'
            onClick={() => {
              setQuery('')

              dispatch(setQuery(''))
              updatePages(1)
            }}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                id='xpath'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 0C18.623 0 24 5.377 24 12C24 18.623 18.623 24 12 24C5.377 24 0 18.623 0 12C0 5.377 5.377 0 12 0ZM12 1C18.071 1 23 5.929 23 12C23 18.071 18.071 23 12 23C5.929 23 1 18.071 1 12C1 5.929 5.929 1 12 1ZM12 11.293L17.293 6L18 6.707L12.707 12L18 17.293L17.293 18L12 12.707L6.707 18L6 17.293L11.293 12L6 6.707L6.707 6L12 11.293Z'
                fill='#F8F9FA'
              />
            </svg>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              id='search'
              list='movie'
              placeholder={`Search for ${category}`}
              autoFocus
              onChange={(e) => {
                setQuery(e.target.value)
                dispatch(setQuery(e.target.value))
              }}
              value={query}
            />
          </form>
        </div>
      )}
    </>
  )
}

export default SearchBar
