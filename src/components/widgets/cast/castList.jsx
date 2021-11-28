import React from "react";
import { Wrapper } from "./castList.styled";
import { BACKPATH_URL, POSTER_URL_CAST } from "../../API";

const castList = ({ crew }) => {
  if (crew.profile_path && crew.profile_path && crew.original_name) {
    return (
      <Wrapper>
        <img
          src={`${BACKPATH_URL}${POSTER_URL_CAST}${crew.profile_path}`}
          alt={crew.original_name}
        />
        <div className="original__name">{crew.original_name}</div>
        <div className="character__name">{crew.character}</div>
      </Wrapper>
    );
  }
  return(
      <div></div>
  )
};

export default castList;
