import { useState, useEffect } from "react";
// API
import API from "../API";
import { API_URL, API_KEY } from "./../config";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [bannerdata, setBannerdata] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [genre, setGenre] = useState([]);

  const fetchMovies = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(page);
      setState((prev) => ({
        ...movies,
        results: [...prev.results, ...movies.results],
      }));
      setBannerdata(movies);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  const fetchGenre = async (a) => {
    try{
        setError(false);
        const url = `${API_URL}movie/${bannerdata.results[value].id}?api_key=${API_KEY}&language=en-US`;
        const data = await (await fetch(url)).json();
       if(data){
         return a(data)
       }
    }catch(err){
      setError(true)
    }
  };
  useEffect(() => {
    fetchGenre(function (result) {
      if (result) {
        setGenre(result);
      }
    });
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var random = Math.floor(Math.random() * arr.length);
    setValue(arr[random]);
  }, [bannerdata]);
  
  useEffect(() => {
    fetchMovies(1);
  }, []);


  return {
    state,
    loading,
    error,
    value,
    genre,
    bannerdata,
  };
};
