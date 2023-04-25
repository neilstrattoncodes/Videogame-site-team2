import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FindByPlatformWrapper = styled.main`
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

const FindByPlatformHeading = styled.h2`
  margin-bottom: 1rem;
`;

const FindByPlatformLabel = styled.label`
  margin-right: 1rem;
`;

const FindByPlatformSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 3px;
  margin-right: 1rem;
  width: 65%;
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

export default function FindByPlatform() {
  const [platform, setPlatform] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  const platforms = [
    "PlayStation 4, Xbox One, PlayStation 3, Xbox 360, PC",
    "PlayStation 4",
    "PlayStation 4, Xbox One, Nintendo Switch, PC",
    "PlayStation 4, Xbox One, PC, Google Stadia",
    "Nintendo Switch, Wii U",
    "PlayStation 4, PlayStation 3",
    "PlayStation 4, Xbox One, PC, Nintendo Switch",
    "Xbox One, PC",
    "PlayStation 4, Xbox One, PC, Nintendo Switch, iOS, Android",
    "PlayStation 4, PlayStation 5",
    "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC",
    "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC, Nintendo Switch, Google Stadia",
    "PC",
  ];

  useEffect(() => {
    if (platform) {
      fetch(
        `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/getByPlatforms/${platform}`
      )
        .then((res) => res.json())
        .then((result) => {
          setVideoGames(result);
        });
    }
  }, [platform]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <FindByPlatformWrapper>
      <PrevButton onClick={handleGoBack}>Previous Page</PrevButton>
      <FindByPlatformHeading>
        Find Video Games by Platform
      </FindByPlatformHeading>
      <div>
        <FindByPlatformLabel htmlFor="platform">
          Select a Platform:
        </FindByPlatformLabel>
        <FindByPlatformSelect
          name="platform"
          id="platform"
          value={platform}
          onChange={handlePlatformChange}
        >
          <option value="">Select a Platform</option>
          {platforms.map((plat) => (
            <option value={plat} key={plat}>
              {plat}
            </option>
          ))}
        </FindByPlatformSelect>
      </div>
      {videoGames.length > 0 ? (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Game Title</Th>
                <Th>Developers</Th>
                <Th>Genre</Th>
              </tr>
            </thead>
            <tbody>
              {videoGames.map((game) => (
                <tr key={game.id}>
                  <Td>{game.name}</Td>
                  <Td>{game.developers}</Td>
                  <Td>{game.genre}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      ) : (
        <p>No video games found for selected platform</p>
      )}
    </FindByPlatformWrapper>
  );
}
