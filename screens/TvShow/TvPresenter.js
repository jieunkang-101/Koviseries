import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import PresenterContainer from "../../components/PresenterContainer";
import SlideTitle from "../../components/SlideTitle";
import BgSlide from "../../components/TvShow/BgSlide";
import BgSlideContainer from "../../components/BgSlideContainer";
import ScrollViewContainer from "../../components/ScrollViewContainer";
import CardSlide from "../../components/CardSlide";

const Container = styled.View``;

const TvPresenter = ({ loading, popular, today, thisWeek, topRated }) => {
  return (
    <PresenterContainer loading={loading}>  
      <>
        <SlideTitle title={"TV Shows Popular"} />
        <BgSlideContainer>
          <Swiper controlsEnabled={false} loop timeout={5}>
            {popular.map(show => (
              <BgSlide
                key={show.id}
                id={show.id}
                name={show.name}
                originalName={show.original_name}
                overview={show.overview}
                votes={show.vote_average}
                backgroundImage={show.backdrop_path}
                poster={show.poster_path}
              />
            ))}
          </Swiper>
        </BgSlideContainer>
        <Container>
          <SlideTitle title={"TV Shows Airing Today"} />
          <ScrollViewContainer>  
            {today.map(show => (
              <CardSlide
                key={show.id}
                id={show.id}
                poster={show.poster_path}
                name={show.name}
                votes={show.vote_average}
              />
            ))}
          </ScrollViewContainer>
          <SlideTitle title={"TV Shows On The Air"} />      
          <ScrollViewContainer>  
            {thisWeek.map(show => (
              <CardSlide
                key={show.id}
                id={show.id}
                poster={show.poster_path}
                name={show.name}
                votes={show.vote_average}
              />
            ))}
          </ScrollViewContainer>  
          <SlideTitle title={"TV Shows Top Rated"} />   
          <ScrollViewContainer>  
            {topRated.map(show => (
              <CardSlide
                key={show.id}
                id={show.id}
                poster={show.poster_path}
                name={show.name}
                votes={show.vote_average}
              />
            ))}
          </ScrollViewContainer>  
        </Container>      
      </>  
    </PresenterContainer>
  );
;}

export default TvPresenter;
