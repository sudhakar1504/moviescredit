import { useState, useEffect } from "react";
import { API_KEY } from ".././components/API";

export const useMovieFetch = (id) => {
  const [moviecredits, setMoviecredits] = useState([]);
  const [moviedirector, setMoviedirector] = useState([]);
  const [moviecrew, setMoviecrew] = useState();
  const [movierelated, setMovierelated] = useState();
  const [iserror, setIserror] = useState(false);
  const fetchmovie = async (idd) => {
  if(idd){
    await fetch(
      `https://api.themoviedb.org/3/movie/${idd}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.text())
      .then((jsons) => {
        const obj = JSON.parse(jsons);
        setMoviecredits([obj]);
        setIserror(false);
      })
      .catch((err) => {
        console.log(err);
        setIserror(true);
      });
  }
  };
  const fetchcredits = async (idd) => {
   if(idd){
    await fetch(
      `https://api.themoviedb.org/3/movie/${idd}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.text())
      .then((jsons) => {
        const data = JSON.parse(jsons);

        if (data.crew) {
          const director = data.crew.filter((item) => {
            return item.job === "Director";
          });
          const screenplay = data.crew.filter((item) => {
            return item.job === "Screenplay";
          });
          const Producer = data.crew.filter((item) => {
            return item.job === "Producer";
          });
          const music = data.crew.filter((item) => {
            return item.job === "Original Music Composer";
          });
          setMoviedirector(() => [
            ...director,
            ...music,
            ...Producer,
            ...screenplay,
          ]);
          setMoviecrew(() => [...data.cast]);
        }
        setIserror(false);
      })
      .catch(() => {
        setIserror(true);
      });
   }
  };
  const fetchsimilar = async (idd) => {
 if(idd){
  await fetch(
    `https://api.themoviedb.org/3/movie/${idd}/recommendations?api_key=${API_KEY}&language=en-US`
  )
    .then((response) => response.text())
    .then((json) => {
      const obj = JSON.parse(json);
      setMovierelated(obj);
      setIserror(false);
    })
    .catch((err) => {
      setIserror(true);
    });
 }
  };
  useEffect(() => {
    if (id) {
      fetchmovie(id);
      fetchcredits(id);
      fetchsimilar(id);
    }
  }, [id]);
  return { moviecredits, movierelated, moviedirector, moviecrew, iserror };
};
