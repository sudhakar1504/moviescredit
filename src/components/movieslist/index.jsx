import React from "react";
import { Image, Tra, Wrapper } from "./movieslist.styled";
import { BACKPATH_URL, POSTER_URL} from "../API";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import Carousel from "react-multi-carousel";
import { useMovieFetch } from "../../hooks/useMovieFetch";
import Notfound from "../notFound/NotFound";

const Index = ({ movielist, title }) => {
  
  const { iserror } = useMovieFetch();
  if (iserror && !movielist) return <Notfound />;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  function CustomRightArrow({ onClick }) {
    function handleClick() {
      onClick();
    }

    return (
      <button
        onClick={handleClick}
        aria-label="Go to next slide"
        className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
      />
    );
  }
  return (
    <Wrapper className="wrapper">
      <h2>{title}</h2>
      <Carousel
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        slidesToSlide={5}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {movielist.map((item) => {
           if (item.poster_path) {
            return (
              <Tra key={item.id} className="movie__credits__container">
                <Link to={`/search/${item.id}`}>
                  <Image
                    src={`${BACKPATH_URL}${POSTER_URL}${item.poster_path}`}
                    alt="poster image"
                    className="image__Poster"
                  />
                  <div className="movie__info">
                  <h3 className="movie__title__card">{item.title}</h3>
                  <div style={{ display: "flex" }}>
                    <FaStar className="FaStar" />
                    <p className="vote__rate">{item.vote_average}</p>
                  </div>
                  </div>
                </Link>
              </Tra>
            );
          }
        })}
      </Carousel>
    </Wrapper>
  );
};

export default Index;
