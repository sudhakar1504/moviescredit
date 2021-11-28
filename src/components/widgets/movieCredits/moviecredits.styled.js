import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 650px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 30%,
      rgba(0, 0, 0, 0.9) 80%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center top;
  position: relative;
  color: #ccc;
  box-shadow: inset 10px -90px 100px #0a0a0a;

  .content_container {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    display: inline-block;
  }
  .left_arrow {
    font-size: 29px;
    margin-right: 5px;
    display: block;
  }

  .article__content {
    display: flex;
    width: 80%;
    margin: 25px auto 0;
    overflow: hidden;
  }
  .poster__container img {
    border-radius: 20px;
  }
  .movie__info__container {
    width: 100%;
    margin-left: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    padding: 10px;
  }
  .movie__title {
    margin-top: 10px;
    font-weight: 500;
  }
  .genre_list {
    display: flex;
    margin: 10px 0;
  }
  .star {
    color: gold;
    margin-right: 5px;
  }
  .vote__average {
    font-size: 13px;
    padding: 10px;
  }
  .movie__overview {
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    width: 100%;
  }
  .cast__title {
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 10px;
  }
  .movie__cast {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
  }

  @media (max-width: 1100px) {
    .content_container {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      margin: 0 auto;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      display: flex;
      align-items: center;
      display: inline-block;
    }
    .left_arrow {
      font-size: 29px;
      margin-right: 5px;
      display: block;
    }

    .article__content {
      display: flex;
      width: 100%;
      margin: 10px auto 0;
      overflow: hidden;
    }
    .poster__container {
      width: 400px;
      height: 450px;
    }
    .poster__container img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
    .movie__info__container {
      width: 100%;
      margin-left: 20px;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      padding: 10px;
    }
    .movie__title {
      margin-top: 10px;
      font-weight: 500;
      font-size: 1.8rem;
    }
    .genre_list {
      display: flex;
      margin: 7px 0;
    }
    .star {
      color: gold;
      margin-right: 5px;
    }
    .vote__average {
      font-size: 12px;
      padding: 10px;
    }
    .movie__overview {
      font-size: 12px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      width: 100%;
    }
    .cast__title {
      font-size: 17px;
      font-weight: 600;
      text-transform: capitalize;
      margin-top: 8px;
    }
    .movie__cast {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
    }
  }
 @media(max-width:650px){
   display: none;
 }
`;

export const Directorwrapper = styled.div`
  color: #ffffff;
  padding: 50px 40px 0;
  box-shadow: 0px -20px 50px #0a0a0a;
  position: relative;

  .director__title {
    font-weight: 400;
    font-size: 20px;
    margin-left: 20px;
  }

  .director__center {
    display: flex;
    padding: 10px 10px 30px;
    flex-wrap: wrap;
  }
  @media(max-width:650px){
   display: none;
 }
`;

export const Wrapperrelated = styled.div`
@media(max-width:650px){
  display: none;
}`;
// 600px

export const ImageWrapper =styled.div`
  width: 100%;
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 30%,
      rgba(0, 0, 0, 0.9) 80%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center top;
  color: #ccc;
  box-shadow: inset 10px -90px 100px #0a0a0a;
  @media(min-width:651px){
    display: none;
  }

  .movie__details__container{
    position: relative;
    top: 15%;
    left: 0;
    height: 100%;
  }
    a {
    text-decoration: none;
    color: #ffffff;
    display: flex;
    align-items: center;
    display: inline-block;
  }
  .left_arrow {
    font-size: 29px;
    margin-left: 10px;
    display: block;
  }
  .poster__container{
  position: absolute;
  top: 50%;
  left: 5%;
  width: 185px;
  height:100%;
  }
  .poster__container img {
    border-radius: 20px;
  }
  .movie__info__container{
    position: absolute;
    top:120%;
    left: 0;
  }
  .movie__title {
      margin-top: 10px;
      font-weight: 500;
      font-size: 1.7rem;
      margin-left: 20px;
    }
    .genre_list {
      display: flex;
      margin: 10px 0 0 20px;
    }
    .star {
      color: gold;
      margin-right: 5px;
    }
    .vote__average {
      font-size: 12px;
      padding: 10px;
      margin-left :20px;
    }
    .movie__overview {
      font-size: 12px;
      width: 90%;
      margin-left : 15px;
    }
    .cast__title {
      font-size: 17px;
      font-weight: 600;
      text-transform: capitalize;
      margin: 20px;
    }
    .movie__cast {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
      padding : 0 10px;
    }
    .director__title {
    font-weight: 400;
    font-size: 20px;
    margin: 20px 20px 5px;
  }

  .director__center {
    display: flex;
    padding: 10px 10px 30px;
    flex-wrap: wrap;
  }
  .related__movie__container{
    position: absolute;
    width: 100%;
  }
  


  @media(max-width:400px){
    width: 100%;
  height: 30vh;
  min-height: 200px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 30%,
      rgba(0, 0, 0, 0.9) 80%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center top;
  color: #ccc;
  box-shadow: inset 10px -90px 100px #0a0a0a;


  .movie__details__container{
    position: relative;
    top: 25%;
    left: 0;
    height: 100%;
  }
  .left_arrow {
    font-size: 23px;
    margin-left: 10px;
    display: block;
    border-radius :50%;
    border: 1px #ccc solid;
    padding: 2px;
  }
  .poster__container{
  position: absolute;
  top: 25%;
  left: 5%;
  width: 140px;
  height: 170px;
  box-shadow : 2px 2px 10px black;
  }
  .poster__container img {
    border-radius: 2px;
    width : 100%;
    height: 100%;
  }
  .movie__title {
      margin-top: 5px;
      font-weight: 600;
      font-size: 1.4rem;
      margin-left: 20px;
    }
  }


  @media(max-width:300px){
    width: 100%;
  height: 30vh;
  min-height: 200px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 30%,
      rgba(0, 0, 0, 0.9) 80%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center top;
  color: #ccc;
  box-shadow: inset 10px -90px 100px #0a0a0a;


  .movie__details__container{
    position: relative;
    top: 25%;
    left: 0;
    height: 100%;
  }
  .left_arrow {
    font-size: 23px;
    margin-left: 10px;
    display: block;
    border-radius :50%;
    border: 1px #ccc solid;
    padding: 2px;
  }
  .poster__container{
  position: absolute;
  top: 35%;
  left: 5%;
  width: 120px;
  height: 150px;
  box-shadow : 2px 2px 10px black;
  }
  .poster__container img {
    border-radius: 2px;
    width : 100%;
    height: 100%;
  }
  .movie__title {
      margin-top: 5px;
      font-weight: 600;
      font-size: 1.3rem;
      margin-left: 20px;
    }
  }
`;