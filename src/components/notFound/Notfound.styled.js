import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ccc;
  font-weight: 500;

  h2 {
    font-weight: 400;
    font-size: 27px;
    margin-top: 10px;
  }
  h3{
      font-size: 30px;
      font-weight :500;
  }
  button {
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 500;
    background-color: rgb(51, 158, 87);
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 30px;
  }
  @media (max-width: 650px) {
    h2 {
      font-weight: 400;
      font-size: 17px;
    }
    h3 {
        font-size :22px;
        font-weight: 500;

    }
    button {
      padding: 7px 15px;
      font-size: 15px;
      font-weight: 500;
      background-color: rgb(22 147 64);
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 5px;
      margin-top: 30px;
    }
  }
`;
