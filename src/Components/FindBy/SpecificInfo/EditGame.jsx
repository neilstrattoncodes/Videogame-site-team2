import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const EditFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3f8c43;
  }
`;

export default function EditGame() {
  const { id } = useParams("");
  const navigate = useNavigate("");
  const [videoGame, setVideoGame] = useState([]);

  useEffect(() => {
    fetch(
      `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/getById/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideoGame(data);
      });
  }, [id]);

  const handleChange = (event) => {
    setVideoGame({ ...videoGame, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoGame),
      }
    )
      .then(() => {
        navigate(`/videogames/game`, { state: { id } });
      })
      .catch((error) => {
        console.error("Error updating game:", error);
      });
  };

  return (
    <EditFormWrapper>
      <h3>Edit {videoGame.name}</h3>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">Name:</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          name="name"
          value={videoGame.name}
          onChange={handleChange}
        />
        <StyledLabel htmlFor="developers">Developers:</StyledLabel>
        <StyledInput
          type="text"
          id="developers"
          name="developers"
          value={videoGame.developers}
          onChange={handleChange}
        />
        <StyledLabel htmlFor="platforms">Platforms:</StyledLabel>
        <StyledInput
          type="text"
          id="platforms"
          name="platforms"
          value={videoGame.platforms}
          onChange={handleChange}
        />
        <StyledLabel htmlFor="genre">Genre:</StyledLabel>
        <StyledInput
          type="text"
          id="genre"
          name="genre"
          value={videoGame.genre}
          onChange={handleChange}
        />
        <StyledButton type="submit">Save Changes</StyledButton>
      </StyledForm>
      <Link
        to="/videogames/game"
        state={{
          id: videoGame.id,
        }}
      >
        <button>Cancel</button>
      </Link>
    </EditFormWrapper>
  );
}
