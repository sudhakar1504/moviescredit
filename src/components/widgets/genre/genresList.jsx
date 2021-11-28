import React from "react";
import { Wrapper } from "./genreList.styled";

const GenreList = ({ genre }) => {
  return (
    <div>
     
        <Wrapper>
          <h4>{genre.name}</h4>
        </Wrapper>
    
    </div>
  );
};

export default GenreList;
