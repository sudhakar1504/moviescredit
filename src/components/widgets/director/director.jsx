import React from 'react';
import {Wrapper} from './director.styled';
import {POSTER_URL_CAST,BACKPATH_URL} from '../../API'

const Director = ({dire}) => {

  if(dire.profile_path){
      return(
          <Wrapper>
              <img src={`${BACKPATH_URL}${POSTER_URL_CAST}${dire.profile_path}`} alt="poster" />
              <p className="name">{dire.original_name}</p>
              <p className="job">{dire.job === 'Original Music Composer' ? 'music' : `${dire.job}`}</p>
          </Wrapper>
      )
  }

  return(
      <div></div>
  )
}

export default Director
