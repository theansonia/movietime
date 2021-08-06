import React, { useState } from 'react'
import './App.scss'
import Search from './features/components/Search'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import TvSearch from './features/components/tvSearch'
import Details from './features/components/Details'
import MovieDetails from './features/components/MovieDetails'
import ThemeContextProvider from './contexts/ThemeContext'
import SearchButton from './features/components/SearchButton'
import { useDispatch, useSelector } from 'react-redux'
import changeCategory from '../actionCreators/changeCategory'
import ToggleTheme from './features/components/toggleTheme/ToggleTheme'
import TrendingSearch from './features/components/TrendingSearch'

function App() {
  const [searchStatus, updateSearchStatus] = useState(false)
  const [title, updateTitle] = useState('')
  const [pages, updatePages] = useState(1)
  const category = useSelector((state) => state.category)
  const dispatch = useDispatch()

  return (
    <ThemeContextProvider>
      {/* <PageContextProvider > */}
      <>
        {/* <header></header> */}
        <div id='navbar'>
          <Link
            to='/home'
            id='homebutton'
            onClick={() => {
              updateSearchStatus(false)
              updateTitle('')
              updatePages(1)
            }}
          >
            <div
              data-testid='homebtn'
              onClick={() => {
                updateSearchStatus(false)
                // dispatch(changeCategory(null))
                updatePages(1)
              }}
            >
              <svg
                id='homebtn'
                width='48'
                height='48'
                viewBox='0 0 24 24'
                fill=''
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0)'>
                  <rect width='24' height='24' fill='#212529' />
                  <path
                    id='homepath'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M22 11.414V24H2V11.414L0.707 12.707L0 12L12 0L24 12L23.293 12.707L22 11.414ZM16 23H21V10.414L12 1.414L3 10.414V23H8V14H16V23ZM15 15.111H9V22.889H15V15.111Z'
                    fill='#F8F9FA'
                  />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <Link
            id='filmbutton'
            to={'/movies'}
            className='option'
            onClick={() => {
              updateSearchStatus(false)
              dispatch(changeCategory('Movie'))
              updateTitle('')
              updatePages(1)
            }}
          >
            <div>Movies</div>
          </Link>
          <Link
            id='tvbutton'
            to={'/shows'}
            className='option'
            onClick={() => {
              updateSearchStatus(false)
              dispatch(changeCategory('TV'))
              updateTitle('')
              updatePages(1)
            }}
          >
            <div>TV Shows</div>
          </Link>
          <ToggleTheme />
        </div>

        <Switch>
          <Route path='/movies'>
            <Search
              category={category}
              searchStatus={searchStatus}
              title={title}
              updateTitle={updateTitle}
              updateSearchStatus={updateSearchStatus}
              updatePages={updatePages}
              pages={pages}
            />
          </Route>
          <Route path='/shows'>
            <TvSearch
              searchStatus={searchStatus}
              title={title}
              updateTitle={updateTitle}
              updateSearchStatus={updateSearchStatus}
              updatePages={updatePages}
              pages={pages}
            />
          </Route>
          <Route path='/home'>
            <TrendingSearch
              searchStatus={searchStatus}
              title={title}
              updateTitle={updateTitle}
              updateSearchStatus={updateSearchStatus}
              updatePages={updatePages}
              pages={pages}
            />
          </Route>
          <Route path={'/details/:name'} component={Details} />
          <Route path={'/moviedetails/:title'} component={MovieDetails} />
        </Switch>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>

        <SearchButton
          searchStatus={searchStatus}
          updateSearchStatus={updateSearchStatus}
          updateTitle={updateTitle}
          updatePages={updatePages}
          pages={pages}
        />
      </>
      {/* </PageContextProvider> */}
    </ThemeContextProvider>
  )
}

export default App
