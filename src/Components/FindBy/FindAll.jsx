import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background-color: #570b83;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  text-align: left;
`;

const EvenRow = styled.tr`
  background-color: #f9f9f9;
  &:hover,
  &:focus {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const OddRow = styled.tr`
  &:hover,
  &:focus {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const TitleCell = styled.td`
  font-size: 24px;
  font-weight: bold;
`;

const PlatformsCell = styled.td`
  font-size: 16px;
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

export default function FindAll() {
  const [videoGames, setVideoGames] = React.useState([]);
  React.useEffect(() => {
    fetch(
      "http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/getAll"
    )
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Container>
      <PrevButton onClick={handleGoBack}>Previous Page</PrevButton>
      <Title>List of All Video Games</Title>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Developer</Th>
            <Th>Platform</Th>
            <Th>Genre</Th>
          </tr>
        </thead>
        <tbody>
          {videoGames.map((videoGame, index) =>
            index % 2 === 0 ? (
              <EvenRow key={index}>
                <TitleCell>
                  <Link
                    to="/videogames/game"
                    state={{
                      id: videoGame.id,
                    }}
                  >
                    {videoGame.name}
                  </Link>
                </TitleCell>
                <Td>{videoGame.developers}</Td>
                <PlatformsCell>{videoGame.platforms}</PlatformsCell>
                <Td>{videoGame.genre}</Td>
              </EvenRow>
            ) : (
              <OddRow key={index}>
                <TitleCell>
                  <Link
                    to="/videogames/game"
                    state={{
                      id: videoGame.id,
                    }}
                  >
                    {videoGame.name}
                  </Link>
                </TitleCell>
                <Td>{videoGame.developers}</Td>
                <PlatformsCell>{videoGame.platforms}</PlatformsCell>
                <Td>{videoGame.genre}</Td>
              </OddRow>
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
}
