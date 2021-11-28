import React from "react";
import {
  Wrapper,
  Banner,
  Center,
  Genresbtn,
  Vote,
} from "./bannerskeletons.styled";

const BannerskeletonLoading = () => {
  return (
    <Wrapper>
      <Banner>
        <Center>
          <h1>  </h1>
          <p>  </p>

          <Genresbtn></Genresbtn>

          <Vote title="IMDB RATINGS"></Vote>
        </Center>
      </Banner>
    </Wrapper>
  );
};

export default BannerskeletonLoading;
