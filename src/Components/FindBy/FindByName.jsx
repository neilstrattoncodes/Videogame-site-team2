import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FindByNameWrapper = styled.main`
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

const FindByNameHeading = styled.h2`
  margin-bottom: 1rem;
`;

const FindByNameLabel = styled.label`
  margin-right: 1rem;
`;

const FindByNameInput = styled.input`
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

export default function FindByName() {
  const [name, setName] = useState("");
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    fetch(
      `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/getByName/${name}`
    )
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  }, [name]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <FindByNameWrapper>
      <PrevButton onClick={handleGoBack}>Previous Page</PrevButton>
      <FindByNameHeading>Search for Video Games by Name</FindByNameHeading>
      <div>
        <FindByNameLabel>Name:</FindByNameLabel>
        <FindByNameInput
          type="text"
          id="name-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      {videoGames.length > 0 && (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <Th>Name</Th>
                <Th>Platform</Th>
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
      )}
    </FindByNameWrapper>
  );
}
