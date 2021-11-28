import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieFetch } from "../../hooks/useMovieFetch";
import Moviecast from "../widgets/movieCredits/movieCredits";
import SearchList from "../SearchResults/SearchResults";  
import NotFound from "../notFound/NotFound";

const Search = ({ search, searchError, setsearch, searchmovies }) => {
  const location = useParams();
  const { moviecredits, moviecrew, moviedirector, movierelated, iserror } =
    useMovieFetch(location.id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.id]);

  if (iserror) return <NotFound title="Something Went Wrong" setsearch={setsearch}/> ;
  return (
    <div>
      {search ? (
        <SearchList
          searchmovies={searchmovies}
          setsearch={setsearch}
          searchError={searchError}
        />
      ) : (
        <div>
          {movierelated && moviedirector && moviecrew && moviecredits[0] ? (
            <Moviecast
              credits={moviecredits}
              crew={moviecrew}
              dir={moviedirector}
              related={movierelated}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Search;
