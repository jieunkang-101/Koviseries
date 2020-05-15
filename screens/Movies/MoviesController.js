import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import MoviesPresenter from "./MoviesPresenter";

const MoviesController = () => {

  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    nowPlyingError: null,
    popular: [],
    popularError: null,
    upcoming: [], 
    upcomingError: null
  });

  const getData = async () => {
    const [nowPlaying, nowPlyingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      nowPlyingError,
      popular,
      popularError,
      upcoming,
      upcomingError
    })
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(movies)
  console.log(movies.popular)

  return (
    <MoviesPresenter {...movies} />
  );
};

export default MoviesController;