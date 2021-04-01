import React, { useState } from "react";
import "./App.scss";
import Search from "./components/Search";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import TvSearch from "./components/tvSearch";
import TrendingSearch from "./components/TrendingSearch";
import Details from "./components/Details";
import MovieDetails from "./components/MovieDetails";
import ThemeContextProvider from "./contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import SearchButton from "./components/SearchButton";
// import PageContextProvider from "./contexts/PageContext";

// export const LocationDisplay = () => {
//   const location = useLocation()

//   return <div data-testid="location-display">{location.pathname}</div>
// }

function App() {
  const [searchStatus, updateSearchStatus] = useState(false);
  const [category, updateCategory] = useState(null);
  const [title, updateTitle] = useState("");
  const [pages, updatePages] = useState(1)
  // const { resetPages, pages } = useContext(PageContext);


  return (
    <ThemeContextProvider>
      {/* <PageContextProvider > */}
      <div>
        <header></header>


        <div id="navbar">
          <Link
            to="/home"
            id="homebutton"
            onClick={() => {
              updateSearchStatus(false);
              updateTitle("");
              // updateCategory(null);
              updatePages(1);
            }}
          >
            <div
              data-testid="homebtn"
              onClick={() => {
                updateSearchStatus(false);
                updateCategory(null);
                updatePages(1);

              }}
            >
              <svg
                id="homebtn"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <rect width="24" height="24" fill="#212529" />
                  <path
                    id="homepath"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 11.414V24H2V11.414L0.707 12.707L0 12L12 0L24 12L23.293 12.707L22 11.414ZM16 23H21V10.414L12 1.414L3 10.414V23H8V14H16V23ZM15 15.111H9V22.889H15V15.111Z"
                    fill="#F8F9FA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <Link
            id="filmbutton"
            to={`/movies`}
            className="option"
            onClick={() => {
              updateSearchStatus(false);
              updateCategory("Movie");
              updateTitle("");
              updatePages(1);
            
            }}
          >
            <div>Movies</div>
          </Link>
          <Link
            id="tvbutton"
            to={`/shows`}
            className="option"
            onClick={() => {
              updateSearchStatus(false);
              updateCategory("TV");
              updateTitle("");
              updatePages(1);
            }}
          >
            <div>TV Shows</div>
          </Link>
          <ToggleTheme />
        </div>
        {/* <Link to={'/home'}>  */}
        {/* </Link>  */}
        {/* <Router> */}

        <Switch>
          <Route path="/movies">
            <Search
              category={category}
              updateCategory={updateCategory}
              searchStatus={searchStatus}
              title={title}
              updateTitle={updateTitle}
              updateSearchStatus={updateSearchStatus}
              updatePages={updatePages}
              pages={pages}
            />
          </Route>
          <Route path="/shows">
            <TvSearch
              category={category}
              updateCategory={updateCategory}
              searchStatus={searchStatus}
              title={title}
              updateTitle={updateTitle}
              updateSearchStatus={updateSearchStatus}
              updatePages={updatePages}
              pages={pages}
            />
          </Route>
          <Route path="/home">
            <TrendingSearch
              category={category}
              updateCategory={updateCategory}
              searchStatus={searchStatus}
              title={title}
              updateTitle={updateTitle}
              updateSearchStatus={updateSearchStatus}
              updatePages={updatePages}
              pages={pages}
            />
          </Route>
          <Route path={`/details/:name`} component={Details} />
          <Route path={`/moviedetails/:title`} component={MovieDetails} />
        </Switch>
        {/* <Route path="*"> 
            <Redirect to='/home'/>
        </Route> */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        {/* </Router> */}
        {/* <div data-testid="location-display">{location.pathname}</div>  */}
        
        <SearchButton
          category={category}
          searchStatus={searchStatus}
          updateSearchStatus={updateSearchStatus}
          updateCategory={updateCategory}
          updateTitle={updateTitle}
          updatePages={updatePages}
          pages={pages}
          
        />
        
      </div>
      {/* </PageContextProvider> */}
    </ThemeContextProvider>
  );
}

export default App;
