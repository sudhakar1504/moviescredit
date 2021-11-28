import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bgcolor);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Banner = styled.div`
  background-color: black;
  height: 80vh;
  min-height: 500px;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 450px) {
    height: 400px;
    min-height: 400px;
  }
  @media only screen and (max-width: 350px) {
    height: 300px;
    min-height: 300px;
  }
`;

export const Center = styled.div`
  position: absolute;
  top: 30%;
  left: 6%;
  text-align: left;

  h1 {
    width: 300px;
    height: 20px;
    background-color: #141414;
  }
  p:nth-child(2) {
    height: 200px;
    background-color: #141414;
    width: 800px;
    margin: 10px 0;
  }

  @media only screen and (max-width: 1000px) {
    p:nth-child(2) {
      height: 200px;
      background-color: #141414;
      width: 600px;
      margin: 10px 0;
    }
  }
  @media only screen and (max-width: 850px) {
    p:nth-child(2) {
      height: 200px;
      background-color: #141414;
      width: 500px;
      margin: 10px 0;
    }
  }
  @media only screen and (max-width: 650px) {
    p:nth-child(2) {
      height: 200px;
      background-color: #141414;
      width: 400px;
      margin: 10px 0;
    }
    left: 10%;
  }
  @media only screen and (max-width: 650px) {
    p:nth-child(2) {
      height: 200px;
      background-color: #141414;
      width: 400px;
      margin: 10px 0;
    }
    bottom: 20%;
    left: 5%;
  }
  @media only screen and (max-width: 450px) {
    p:nth-child(2) {
      height: 200px;
      background-color: #141414;
      width: 300px;
      margin: 10px 0;
    }
    h1 {
      width: 100px;
      height: 30px;
      background-color: #141414;
    }
    bottom: 20%;
    left: 5%;
  }
  @media only screen and (max-width: 390px) {
    p:nth-child(2) {
      height: 100px;
      background-color: #141414;
      width: 200px;
      margin: 10px 0;
    }
    h1 {
      width: 100px;
      height: 30px;
      background-color: #141414;
    }
    bottom: 10%;
    left: 5%;
  }
`;

export const Genresbtn = styled.p`
  display: inline-block;
  width: 50px;
  height: 20px;
  background-color: #141414;
  margin: 10px 5px;
  border-radius: 33px;

  @media only screen and (max-width: 450px) {
    display: inline-block;
    width: 50px;
    height: 20px;
    background-color: #141414;
    margin: 10px 5px;
    border-radius: 33px;
  }

  @media only screen and (max-width: 350px) {
    display: inline-block;
    width: 30px;
    height: 10px;
    background-color: #141414;
    margin: 10px 5px;
    border-radius: 33px;
  }
`;
export const Vote = styled.p`
  border-radius: 50%;
  width: 40px;
  background-color: #141414;
  height: 40px;
  margin: 10px 0;
  @media only screen and (max-width: 450px) {
    width: 30px;
    height: 30px;
    margin: 10px 0;
    background-color: #141414;
  }
  @media only screen and (max-width: 350px) {
    width: 25px;
    height: 25px;
    background-color: #141414;
    color: var(--white);
    margin: 1px 0;
  }
`;
