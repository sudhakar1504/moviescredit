import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bgcolor);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Banner = styled.div`
  background: linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 0%
    ),
    url(${(props) => props.image});
  height: 80vh;
  min-height: 500px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center top;
  color: var(--white);
  position: relative;

  @media only screen and (max-width:450px){
    height :400px;
    min-height :400px;
  }
  @media only screen and (max-width:350px){
    height :300px;
    min-height :300px;
  }
`;

export const Center = styled.div`
  position: absolute;
  top: 30%;
  left: 6%;
  text-align : left;

  h1 {
    font-size: 3rem;
    font-weight: 400;
    color: var(--white);
    opacity: 0.8;
  }
  p:nth-child(2) {
    font-size: 0.8rem;
    width: 800px;
    font-weight: 300;
    line-height :20px;
    margin: 10px 0;
  }

  @media only screen and (max-width: 1000px) {
    p:nth-child(2) {
      width: 700px;
    }
  }
  @media only screen and (max-width: 850px) {
    p:nth-child(2) {
      width: 500px;
    }
  }
  @media only screen and (max-width: 650px) {
    p:nth-child(2) {
      width: 90%;
    }
    left: 10%;
  }
  @media only screen and (max-width: 650px) {
    p:nth-child(2) {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      max-width: 550px;
    }
    bottom : 20%;
    left: 5%;
  }
  @media only screen and (max-width: 450px) {
    p:nth-child(2) {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      max-width: 450px;
      font-size: 12px;
    }
    h1 {
    font-size: 2rem;
    font-weight: 400;
    color: var(--white);
    opacity: 0.8;
  }
    bottom : 20%;
    left: 5%;
  }
  @media only screen and (max-width: 390px) {
    p:nth-child(2) {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      max-width: 350px;
      font-size: 12px;
    }
    h1 {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--white);
    opacity: 0.8;
  }
    bottom : 10%;
    left: 5%;
  }
`;

export const Genresbtn = styled.p`
  display: inline-block;
  margin: 10px 5px;
  border: 1px solid #ffffff;
  padding: 5px 10px;
  border-radius: 33px;
  font-size: 0.8rem;
  font-weight: 300;

  @media only screen and (max-width:450px){
    margin : 5px 3px;
    padding: 3px 8px;
    font-size : 0.7rem;
  }

  @media only screen and (max-width:350px){
    margin : 0 3px;
    padding: 2px 8px;
    font-size : 0.6rem;
  }
`;
export const Vote = styled.p`
  border-radius: 50%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 2px solid var(--white);
  text-align: center;
  color: var(--white);
  margin: 10px 0;
  @media only screen and (max-width:450px){
    width: 30px;
  height: 30px;
  border: 1px solid var(--white);
  text-align: center;
  color: var(--white);
  margin: 10px 0;
  font-size : 13px;
  padding : 2px;
  }
  @media only screen and (max-width:350px){
    width: 25px;
  height: 25px;
  border: 1px solid var(--white);
  text-align: center;
  color: var(--white);
  margin: 10px 0;
  font-size : 11px;
  padding : 2px;
  }
`;
