import styled from "styled-components";

export const Wrapper = styled.div`
  color: #ffffff;
  text-align: center;
  width: 100px;
  margin: 10px;

  img {
    border-radius: 5px;
  }
  .name {
    font-size: 12px;
  }
  .job {
    font-size: 10px;
    opacity: 0.7;
  }
  @media (max-width: 650px) {
    color: #ffffff;
    text-align: center;
    width: 70px;
    margin: 10px;

    img {
      border-radius: 5px;
      width: 50px;
      height: auto;
    }
    .name {
      font-size: 9px;
    }
    .job {
      font-size: 8px;
      opacity: 0.7;
    }
  }
  @media (max-width: 400px) {
    color: #ffffff;
    text-align: center;
    width: 60px;
    margin: 5px;

    img {
      border-radius: 5px;
      width: 40px;
      height: auto;
    }
    .name {
      font-size: 9px;
    }
    .job {
      font-size: 8px;
      opacity: 0.7;
    }
  }
`;
