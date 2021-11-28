import React from "react";
import { Image, Wrapper } from "./searchResults.styled";
import { Link, useHistory } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BACKPATH_URL, POSTER_URL } from "../API";
import Notfound from '../notFound/NotFound'

const SearchResults = ({ searchmovies, searchError, setsearch }) => {
  const history = useHistory();
  console.log(history);
  if (!searchmovies.results.length) return <Notfound title="No Result.." setsearch={setsearch}/>;
  if (searchError) return <Notfound title="\___Page Not Found__/" setsearch={setsearch}/>;
  const HandleClearMovies = () => {
    setsearch("");
  };
  return (
    <Wrapper>
      {searchmovies.results.map((item, key) => {
        if (item && item.poster_path) {
          return (
            <div
              className="movie__card__container"
              onClick={HandleClearMovies}
              key={key}
            >
              <Link
                to={
                  history.location.pathname === `/search/search/${item.id}`
                    ? `/search/${item.id}`
                    : `/search/${item.id}`
                }
              >
                <Image
                  src={`${BACKPATH_URL}${POSTER_URL}${item.poster_path}`}
                  alt="poster image"
                />
                <h3>{item.title}</h3>
                <div style={{ display: "flex" }}>
                  <FaStar className="FaStar" />
                  <p>{item.vote_average}</p>
                </div>
              </Link>
            </div>
          );
        }
      })}
    </Wrapper>
  );
};

export default SearchResults;
