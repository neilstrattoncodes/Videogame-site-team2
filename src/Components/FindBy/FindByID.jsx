import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const FindByIDWrapper = styled.main`
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

const FindByIDHeading = styled.h2`
  margin-bottom: 1rem;
`;

const FindByIdLabel = styled.label`
  margin-right: 1rem;
`;

const FindByIDInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 3px;

  margin-right: 1rem;
`;

const FindByIDSearchButton = styled.button`
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

export default function FindByID() {
  const [id, setId] = React.useState("");
  const [videoGame, setVideoGame] = React.useState({});

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const handleSearchClick = () => {
    fetch(
      `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/getById/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideoGame(data);
      })
      .catch((error) => {
        console.error("Error fetching video game:", error);
      });
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <FindByIDWrapper>
      <PrevButton onClick={handleGoBack}>Previous Page</PrevButton>
      <FindByIDHeading>Search for a Video Game by ID</FindByIDHeading>
      <div>
        <FindByIdLabel>ID:</FindByIdLabel>
        <FindByIDInput
          type="text"
          id="id-input"
          value={id}
          onChange={handleInputChange}
        />
        <FindByIDSearchButton onClick={handleSearchClick}>
          Search
        </FindByIDSearchButton>
      </div>
      <TableWrapper>
        {videoGame.name && (
          <div>
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Developers</Th>
                  <Th>Platforms</Th>
                  <Th>Genre</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>{videoGame.id}</Td>
                  <Td>
                    <Link
                      to="/videogames/game"
                      state={{
                        id: videoGame.id,
                      }}
                    >
                      <h3>{videoGame.name}</h3>
                    </Link>
                  </Td>
                  <Td>{videoGame.developers}</Td>
                  <Td>{videoGame.platforms}</Td>
                  <Td>{videoGame.genre}</Td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </TableWrapper>
    </FindByIDWrapper>
  );
}
