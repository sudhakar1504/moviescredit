import styled from "styled-components";

export const Wrapper = styled.div`
  color: #f2f2f2;
  padding: 16px 30px 10px;

  h2 {
    text-transform: capitalize;
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 400;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  min-height: 200px;
`;
export const Tra = styled.div`
  user-select: none;
  cursor: pointer;
  margin:5px;
  a {
    text-decoration: none;
    color: #ffffff;
    position: relative;
  }
  h3{
    font-size: 0.8rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    text-align: left;
    margin: 8px 0 10px;
    color: #ffffff;
  }
  @media(max-width:830px){
    h3{
    font-size: 0.7rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    text-align: left;
    color: #ffffff;
  }
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
`;
