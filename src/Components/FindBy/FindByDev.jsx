import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FindByDevWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f1f1f1;
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

const FindByDevHeading = styled.h2`
  margin-bottom: 1rem;
`;

const FindByDevLabel = styled.label`
  margin-right: 1rem;
`;

const FindByDevSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 3px;
  margin-right: 1rem;
`;

const TableWrapper = styled.div`
  margin-top: 2rem;
  width: 30%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  background-color: #570b83;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
`;

export default function FindByDev() {
  const [developers, setDevelopers] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  const developersList = [
    "Rockstar",
    "Naughty Dog",
    "CD Projekt Red",
    "Rockstar Studios",
    "Santa Monica Studio",
    "FromSoftware",
    "Nintendo EPD",
    "Guerrilla Games",
    "Insomniac Games",
    "P-Studio",
    "Kojima Productions",
    "Ubisoft Quebec",
    "The Coalition",
    "Playground Games",
    "Bungie",
    "Blizzard Entertainment",
    "Epic Games",
    "Bioware",
    "Obsidian Entertainment",
    "Larian Studios",
    "Square Enix",
    "Respawn Entertainment",
    "EA DICE",
    "Treyarch",
    "id Software",
    "Capcom",
    "Arkane Studios",
    "Sucker Punch Productions",
    "Team Cherry",
    "Moon Studios",
    "Crytek",
    "Hello Games",
  ];

  useEffect(() => {
    fetch(
      `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/getByDevelopers/${developers}`
    )
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  }, [developers]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleDeveloperChange = (event) => {
    setDevelopers(event.target.value);
  };

  return (
    <FindByDevWrapper>
      <PrevButton onClick={handleGoBack}>Previous Page</PrevButton>
      <FindByDevHeading>Find Video Games by Developer</FindByDevHeading>
      <div>
        <FindByDevLabel htmlFor="developers">
          Select a Developer:
        </FindByDevLabel>
        <FindByDevSelect
          name="developers"
          id="developers"
          value={developers}
          onChange={handleDeveloperChange}
        >
          <option value="">Select a Developer</option>
          {developersList.map((dev) => (
            <option value={dev} key={dev}>
              {dev}
            </option>
          ))}
        </FindByDevSelect>
      </div>
      {videoGames.length > 0 ? (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Game Title</Th>
                <Th>Platforms</Th>
                <Th>Genre</Th>
              </tr>
            </thead>
            <tbody>
              {videoGames.map((game) => (
                <tr key={game.id}>
                  <Td>{game.name}</Td>
                  <Td>{game.platforms}</Td>
                  <Td>{game.genre}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      ) : (
        <p>No video games found for selected developer</p>
      )}
    </FindByDevWrapper>
  );
}
