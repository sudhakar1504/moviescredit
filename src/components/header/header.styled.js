import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5px 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: ${(props) => (props.primary ? `#0F1115` : "transparent")};
  transition: all 0.2s ease-in-out;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
export const Logo = styled.img`
  width: 40px;
  height: 30px;
  @media only screen and (max-width: 400px) {
    width: 28px;
    height: 25px;
  }
`;
export const Form = styled.form`
  input {
    background-color: transparent;
    width: 400px;
    padding: 8px 20px;
    border: 1px solid transparent;
    border-bottom-color: #ccc;
    outline: none;
    color: #ffffff;
    font-size: 1rem;
  }
  @media only screen and (max-width: 600px) {
    input {
      width: 250px;
      padding: 10px 10px;
      font-size: 0.8rem;
    }
    @media only screen and (max-width: 500px) {
      input {
        width: 200px;
        border-radius: 0;
        border-bottom: 1px #ccc solid;
        padding: 7px 8px;
        font-size: 0.8rem;
      }
    }
  }
`;
export const Avator = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  padding: 5px;

  @media only screen and (max-width: 400px) {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #cccccc;
    padding: 2px;
  }
`;
