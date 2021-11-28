import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    min-height : 600px;
    display: flex;
    flex-direction :column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color:#CCC;
    font-size: 22px;
    font-weight: 500;

    h2{
        font-weight :400;
        font-size: 32px;
    }
    button{
        padding : 10px 20px;
        font-size: 15px;
        font-weight :500;
        background-color : green;
        color : #FFF;
        border :none;
        outline: none;
        cursor: pointer;
        border-radius : 5px;
        margin-top: 30px;
    }
`;