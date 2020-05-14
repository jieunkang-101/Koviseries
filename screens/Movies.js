import React, { useEffect, useState } from "react";
import { movieApi } from "../api";
import { View, Text, Button } from "react-native";

export default ({navigation}) => {

  const [movies, setMovies] = useState({
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
    //const [movie, movieError] = await movieApi.movie(496243);
    setMovies({
      nowPlaying,
      nowPlyingError,
      popular,
      popularError,
      upcoming,
      upcomingError
    })
    console.log(nowPlaying)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // <View style={{ flex: 1, backgroundColor: "black"}}>
    <View style={{ flex: 1}}>
      <Text>{movies.nowPlaying?.length}</Text>
      <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};