import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FindByGenreWrapper = styled.main`
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

const FindByGenreHeading = styled.h2`
  margin-bottom: 1rem;
`;

const FindByGenreLabel = styled.label`
  margin-right: 1rem;
`;

const FindByGenreSelect = styled.select`
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

export default function FindByGenre() {
  const [genre, setGenre] = useState("");
  const [videoGames, setVideoGames] = useState([]);
  const genres = [
    "Action-adventure",
    "Action role-playing",
    "Role-playing",
    "Action",
    "Third-person shooter",
    "Racing",
    "First-person shooter",
    "Battle royale",
    "Survival horror",
    "Metroidvania",
    "Adventure",
  ];

  useEffect(() => {
    if (genre) {
      fetch(
        `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/getByGenre/${genre}`
      )
        .then((res) => res.json())
        .then((result) => {
          setVideoGames(result);
        });
    } else {
      setVideoGames([]);
    }
  }, [genre]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <FindByGenreWrapper>
      <PrevButton onClick={handleGoBack}>Previous Page</PrevButton>
      <FindByGenreHeading>Find Video Games by Genre</FindByGenreHeading>
      <div>
        <FindByGenreLabel>Select a Genre:</FindByGenreLabel>
        <FindByGenreSelect
          id="genre-select"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Select a genre</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </FindByGenreSelect>
      </div>
      {videoGames.length > 0 && (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Platform</Th>
                <Th>Developers</Th>
              </tr>
            </thead>
            <tbody>
              {videoGames.map((videoGame, index) => (
                <tr key={index}>
                  <Td>{videoGame.name}</Td>
                  <Td>{videoGame.platforms}</Td>
                  <Td>{videoGame.developers}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </FindByGenreWrapper>
  );
}
