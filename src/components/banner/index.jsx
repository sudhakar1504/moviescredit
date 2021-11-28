import React from "react";
import { Banner, Wrapper, Center,Genresbtn,Vote } from "./banner.styled";

const Index = ({ image, title, overview, vote, genres }) => {
 if(!image){
   return(
     <div>
       loading..
     </div>
   )
 }

 
  return (
    <Wrapper>
      <Banner image={image}>
        <Center>
          <h1>{title}</h1>
          <p>{overview}</p>
          {genres ? genres.map((item)=>{
            return(
              <Genresbtn key={item.id} >{item.name}</Genresbtn>
            )
          }) : <p>none</p>}
          <Vote title="IMDB RATINGS">{vote}</Vote>
         
        </Center>
      </Banner>
    </Wrapper>
  );
 
};

export default Index;
