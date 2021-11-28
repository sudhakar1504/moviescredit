import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
  justify-content: center;
  
  .movie__card__container {
    user-select: none;
    cursor: pointer;
    margin: 20px 0 20px 20px;

  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
  h3 {
    font-size: 0.8rem;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    text-align: left;
    margin: 10px 0;
    color: #ffffff;
  }
  .FaStar {
    color: goldenrod;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.8rem;
    margin-left: 5px;
    opacity: 0.5;
  }

  @media(max-width:550px){
    display: flex;
  flex-wrap: wrap;
  margin-top: 45px;
  justify-content: center;
  
  .movie__card__container {
    user-select: none;
    cursor: pointer;
    margin: 10px 0 10px 15px;

  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
  h3 {
    font-size: 0.7rem;
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    text-align: left;
    margin: 10px 0;
    color: #ffffff;
  }
  .FaStar {
    color: goldenrod;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.6rem;
    margin-left: 5px;
    opacity: 0.5;
  }
  }
  @media(max-width:405px){
    display: flex;
  flex-wrap: wrap;
  margin-top: 45px;
  justify-content: space-evenly;
  
  .movie__card__container {
    user-select: none;
    cursor: pointer;
    margin: 10px 0 10px 10px;

  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
  h3 {
    font-size: 0.7rem;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    text-align: left;
    margin: 10px 0;
    color: #ffffff;
  }
  .FaStar {
    color: goldenrod;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.6rem;
    margin-left: 5px;
    opacity: 0.5;
  }
  }
  @media(max-width:330px){
    display: flex;
  flex-wrap: wrap;
  margin-top: 45px;
  justify-content: space-evenly;
  
  .movie__card__container {
    user-select: none;
    cursor: pointer;
    margin: 10px 0 6px 3px;

  }

  a {
    text-decoration: none;
    color: #ffffff;
  }
  h3 {
    font-size: 0.7rem;
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    text-align: left;
    margin: 10px 0;
    color: #ffffff;
  }
  .FaStar {
    color: goldenrod;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.6rem;
    margin-left: 5px;
    opacity: 0.5;
  }
  }
`;
export const Image = styled.img`
  border-radius: 5px;
  min-height: 200px;
  max-height: 231px;
  width: 100%;


  @media(max-width:550px){
    border-radius: 1px;
  min-height: 180px;
  max-height: 200px;
  width: 120px;
  }
  @media(max-width:405px){
    border-radius: 1px;
  min-height: 160px;
  max-height: 180px;
  width: 100px;
  }
  @media(max-width:330px){
    border-radius: 1px;
  min-height: 130px;
  max-height: 150px;
  width: 80px;
  }
`;
