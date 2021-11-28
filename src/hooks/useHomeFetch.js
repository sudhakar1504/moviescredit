import { useState, useEffect } from "react";
// API
import API from "../API";
import APIT from '../components/API'
import { API_URL, API_KEY } from "./../config";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [toprated, setToprated] = useState(initialState);
  const [latest, setLatest] = useState(initialState);
  const [lovemovies, setLovemovies] = useState(initialState);
  const [alpha, setAlpha] = useState(initialState);
  const [wo, setWO] = useState(initialState);
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
      setError(await true);
    }
    setLoading(false);
  };
  const fetchtoprated = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await APIT.fetchtoprated(page);
      setToprated((prev) => ({
        ...movies,
        results: [...prev.results, ...movies.results],
      }));
    } catch (error) {
      setError(await true);
    }
    setLoading(false);
  };
  const fetchlatest = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await APIT.fetchlatest(page);
      setLatest((prev) => ({
        ...movies,
        results: [...prev.results, ...movies.results],
      }));
    } catch (error) {
      setError(await true);
    }
    setLoading(false);
  };
  const fetchlove = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await APIT.fetchlove(page);
      setLovemovies((prev) => ({
        ...movies,
        results: [...prev.results, ...movies.results],
      }));
    } catch (error) {
      setError(await true);
    }
    setLoading(false);
  };
  const fetchalpha = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await APIT.fetchalpha(page);
      setAlpha((prev) => ({
        ...movies,
        results: [...prev.results, ...movies.results],
      }));
    } catch (error) {
      setError(await true);
    }
    setLoading(false);
  };
  const fetchwo = async (page) => {
    try {
      setError(false);
      setLoading(true);

      const movies = await APIT.fetchwo(page);
      setWO((prev) => ({
        ...movies,
        results: [...prev.results, ...movies.results],
      }));
    } catch (error) {
      setError(await true);
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
    fetchMovies(2);
    fetchtoprated(1);
    fetchlatest(1)
    fetchlove(1)
    fetchalpha(1)
    fetchwo(1)
  }, []);


  return {
    state,
    loading,
    error,
    value,
    genre,
    bannerdata,
    toprated,
    latest,
    lovemovies,
    alpha,
    wo
  };
};
