import {createGlobalStyle} from "styled-components";

export const Globlestyle=createGlobalStyle`
    :root{
        --bgcolor:#0F1115;
        --color:#E4E5E5;
        --fadecolor:#58575C;
        --bgfade:#19181F;
        --white: #FFFFFF;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Rubik', sans-serif;
        margin: 0;
        padding: 0;
        color:#ccc;
    }
  
`;