import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import BgImg from "../BgImg";
import Poster from "../Poster";
import Votes from "../Votes";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Name = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const OriginalName = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;


const BgSlide = ({ id, name, originalName, backgroundImage, votes, overview, poster }) => {
  const navigation = useNavigation();
  const goToDetail = () =>
  navigation.navigate("Detail", {
    id,
    name,
    originalName,
    backgroundImage,
    votes,
    overview,
    poster
  });

  return (
    <TouchableOpacity enabled="true" onPress={goToDetail}>
      <Container>
        <BgImg url={backgroundImage} />
        <Content>
          <Poster url={poster} />
          <Data>
            <Name>{name.length > 27 ? `${name.slice(0, 27)}...` : name}</Name>
            <OriginalName>| {originalName}</OriginalName>
            <Votes votes={votes} />
            {overview ? (<Overview>{overview.slice(0,80)}...</Overview>) : null}
          </Data>
        </Content>
      </Container>
    </ TouchableOpacity>
  )
}

BgSlide.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  originalName: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string
};

export default BgSlide
