import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddVideoGame from "./AddVideoGame files/AddVideoGame";
import styled from "styled-components";

const VideoGamesWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const VideoGamesHeading = styled.h1`
  margin-bottom: 1rem;
`;

const VideoGamesNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const VideoGamesLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #570b83;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8d24aa;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const PrevButton = styled.button`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #570b83;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #8d24aa;
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default function VideoGames() {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <VideoGamesWrapper>
      <PrevButton onClick={handleGoBack}>Previous Page</PrevButton>
      <VideoGamesHeading>Select which function.</VideoGamesHeading>
      <VideoGamesNav>
        <VideoGamesLink to="/videogames/getAll">Get Full List</VideoGamesLink>
        <VideoGamesLink to="/videogames/getById/">Search By ID</VideoGamesLink>
        <VideoGamesLink to={"/videogames/getByName/"}>
          Search By Name
        </VideoGamesLink>
        <VideoGamesLink to={"/videogames/getByDevelopers/"}>
          Search By Developer
        </VideoGamesLink>
        <VideoGamesLink to={"/videogames/getByPlatforms/"}>
          Search By Platform
        </VideoGamesLink>
        <VideoGamesLink to={"/videogames/getByGenre/"}>
          Search By Genre
        </VideoGamesLink>
      </VideoGamesNav>

      <AddVideoGame />
    </VideoGamesWrapper>
  );
}
