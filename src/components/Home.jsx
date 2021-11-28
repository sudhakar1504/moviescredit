import React from "react";
import Banner from "./banner/index";
import { useHomeFetch } from "../hooks/useHomeFetch";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "./../config";
import List from "../components/movieslist/index";
import SearchResults from "./SearchResults/SearchResults";
import NotFound from "./notFound/NotFound";
import BannerskeletonLoading from "./skeletonsLoading/bannerskeletons/bannerskeletons";

const Home = ({ search, searchmovies, searchError ,setsearch}) => {
  const { state, genre, value, error, bannerdata,toprated ,latest ,lovemovies,alpha,wo} = useHomeFetch();

  if (error) return <div><NotFound title="\__CONNECTION_LOST__/" setsearch={setsearch}/></div>;

  return (
    <div>
      {search ? (
        <SearchResults searchmovies={searchmovies} setsearch={setsearch} searchError={searchError} />
      ) : (
        <div>
          {bannerdata ? (
            <Banner
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${bannerdata.results[value].backdrop_path}`}
              title={state.results[value].title}
              overview={state.results[value].overview}
              vote={state.results[value].vote_average}
              genres={genre.genres}
            />
          ) : <BannerskeletonLoading />}

          <List movielist={state.results} title="Popular Movies" />
          <List movielist={toprated.results} title="Top Rated" />
          <List movielist={latest.results} title="Latest" />
          <List movielist={lovemovies.results} title="Romance" />
          <List movielist={alpha.results} title="Upcoming movies" />
          <List movielist={wo.results} title="Crime movies" />
        </div>
      )}
    </div>
  );
};

export default Home;
