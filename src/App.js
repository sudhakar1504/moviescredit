import React, { useEffect, useState } from "react";
import Index from "./components/header/index";
import { Globlestyle } from "./components/global.style";
import Home from "./components/Home";
import Search from "./components/search/search";
import API from "./components/API";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};
function App() {
  const [search, setSearch] = useState("");
  const [searchMovies, setSearchMovies] = useState(initialState);
  const [searchError, setSearchError] = useState(false);

  console.log(searchMovies);
  const fetchsearch = async () => {
    try {
      setSearchError(false);
      const Movies = await API.fetchsearch(search);
      console.log(Movies);
      if (Movies) {
        setSearchMovies((prev) => ({
          ...Movies,
          results: Movies.results,
        }));
      }
    } catch (err) {
      setSearchError(true);
    }
  };
  useEffect(() => {
    fetchsearch();
  }, [search]);
  return (
    <div>
      <BrowserRouter>
        <Index search={search} setSearch={setSearch} />
        <Switch>
          <Route path="/" exact>
            <Home
              search={search}
              setsearch={setSearch}
              searchmovies={searchMovies}
              searchError={searchError}
            />
          </Route>
          <Route path="/search/:id" exact>
            <Search
              search={search}
              searchmovies={searchMovies}
              setsearch={setSearch}
              searchError={searchError}
            />
          </Route>
        </Switch>
        <Globlestyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
