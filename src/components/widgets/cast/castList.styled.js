import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 90px;
  margin: 6px;
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    object-position: 2px -10px;
  }
  .original__name {
    font-size: 12px;
  }
  .character__name {
    font-size: 10px;
    opacity: 0.7;
  }
  @media (max-width: 1100px) {
    width: 80px;
    margin: 5px;
    img {
      border-radius: 50%;
      width: 70px;
      height: 70px;
      object-fit: cover;
      object-position: 2px -10px;
    }
    .original__name {
      font-size: 10px;
    }
    .character__name {
      font-size: 9px;
      opacity: 0.7;
    }
  }
  @media (max-width: 600px) {
    width: 75px;
    margin: 6px;
    img {
      border-radius: 50%;
      width: 65px;
      height: 65px;
      object-fit: cover;
      object-position: 2px -10px;
    }
    .original__name {
      font-size: 9px;
    }
    .character__name {
      font-size: 8px;
      opacity: 0.7;
    }
  }
  @media (max-width: 400px) {
    width: 80px;
    margin: 8px;
    img {
      border-radius: 50%;
      width: 70px;
      height: 70px;
      object-fit: cover;
      object-position: 2px -10px;
    }
    .original__name {
      font-size: 11px;
    }
    .character__name {
      font-size: 10px;
      opacity: 0.7;
    }
  }
`;
