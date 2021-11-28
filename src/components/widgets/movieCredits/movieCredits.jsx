import React from "react";
import {
  Directorwrapper,
  Wrapper,
  Wrapperrelated,
  ImageWrapper,
} from "./moviecredits.styled";
import {
  BACKPATH_URL,
  BANNER_URL,
  POSTER_URL_ONE
} from "../../API";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import GenreList from "../genre/genresList";
import CastList from "../cast/castList";
import Director from "../director/director";
import List from "../../movieslist/index";

const Moviecast = ({ crew, dir, credits, related }) => {
 
  const image = `${BACKPATH_URL}${BANNER_URL}${credits[0].backdrop_path}`;
  return (
    <div>
      <Wrapper image={credits[0] ? image : null}>
        <div className="content_container">
          <div className="back-arrow">
            <Link to="/">
              <FaArrowLeft className="left_arrow" />
            </Link>
          </div>

          <div className="article__content">
            <div className="poster__container">
              <img
                src={`${BACKPATH_URL}${POSTER_URL_ONE}${credits[0].poster_path}`}
                alt={credits[0].title}
              />
            </div>
            <div className="movie__info__container">
              <h1 className="movie__title">{credits[0].title}</h1>
              <div className="genre_list">
                {credits[0].genres.map((item, i) => {
                  return <GenreList key={i} genre={item} />;
                })}
              </div>
              <div className="vote__average">
                {credits[0].vote_average === "0" ? (
                  <div>
                    <FaStar className="star" />
                    8.5
                  </div>
                ) : (
                  <div>
                    <FaStar className="star" />
                    {credits[0].vote_average}
                  </div>
                )}
              </div>
              <div className="movie__overview">
                <p className="movie__overview">{credits[0].overview}</p>
              </div>
              <h6 className="cast__title">cast</h6>
              <div className="movie__cast">
                {crew.slice(0, 8).map((item, i) => {
                  return <CastList key={i} crew={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <Directorwrapper>
        <h2 className="director__title">Crew</h2>
        <div className="director__center">
          {dir.map((item, i) => {
            return <Director key={i} dire={item} />;
          })}
        </div>
      </Directorwrapper>
      <Wrapperrelated>
        <List title="recommand" movielist={related.results} />
      </Wrapperrelated>
      <div className="small__Screen">
        <ImageWrapper image={image}>
          <div className="movie__details__container">
            <div className="back-arrow">
              <Link to="/">
                <FaArrowLeft className="left_arrow" />
              </Link>
            </div>
            <div className="poster__container">
              <img
                src={`${BACKPATH_URL}w185${credits[0].poster_path}`}
                alt={credits[0].title}
              />
            </div>
            <div className="movie__info__container">
              <h1 className="movie__title">{credits[0].title}</h1>
              <div className="genre_list">
                {credits[0].genres.map((item, i) => {
                  return <GenreList key={i} genre={item} />;
                })}
              </div>
              <div className="vote__average">
                {credits[0].vote_average === "0" ? (
                  <div>
                    <FaStar className="star" />
                    8.5
                  </div>
                ) : (
                  <div>
                    <FaStar className="star" />
                    {credits[0].vote_average}
                  </div>
                )}
              </div>
              <div className="movie__overview">
                <p className="movie__overview">{credits[0].overview}</p>
              </div>
              <h6 className="cast__title">cast</h6>
              <div className="movie__cast">
                {crew.slice(0, 8).map((item, i) => {
                  return <CastList key={i} crew={item} />;
                })}
              </div>
              <div className="director__wrap">
                <h2 className="director__title">Crew</h2>
                <div className="director__center">
                  {dir.map((item, i) => {
                    return <Director key={i} dire={item} />;
                  })}
                </div>
              </div>
              <div className="related__movie__container">
                <List title="recommand" movielist={related.results} />
              </div>
            </div>
          </div>
        </ImageWrapper>
      </div>
    </div>
  );
};

export default Moviecast;
