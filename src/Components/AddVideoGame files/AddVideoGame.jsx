import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AddFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AddStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 1rem;
`;

const AddStyledLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
  text-align: left;
  width: 30%;
`;

const AddStyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const AddStyledButton = styled(Link)`
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

const AddStyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 108%;
  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;
const developersList = [
  "Rockstar North",
  "Rockstar San Diego",
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
  "343 Industries",
  "Ubisoft Montreal",
  "PlatinumGames",
  "Sumo Digital",
  "Monolith Soft",
  "Riot Games",
  "NetherRealm Studios",
  "Turn 10 Studios",
  "Insomniac Games",
  "Remedy Entertainment",
  "Supermassive Games",
  "Guerilla Cambridge",
  "Game Freak",
  "The Creative Assembly",
  "Relic Entertainment",
  "Vicarious Visions",
  "Rare",
  "Valve Corporation",
  "Infinity Ward",
  "Raven Software",
  "Pandemic Studios",
  "Telltale Games",
];
export default function AddVideoGame() {
  const [name, setName] = React.useState("");
  const [developers, setDevelopers] = React.useState("");
  const [platforms, setPlatforms] = React.useState("");
  const [genre, setGenre] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || !developers || !platforms || !genre) {
      alert("Please fill out all fields.");
      return;
    }
    const videoGame = { name, developers, platforms, genre };
    fetch(
      "http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(videoGame),
      }
    )
      .then(() => {
        // Redirect the user to the "/videogames/added" page
        alert("Game added!");
      })
      .catch((error) => {
        console.error("Error adding video game: ", error);
      });
  };

  return (
    <AddFormWrapper>
      <h3>Add a Video Game</h3>
      <AddStyledForm>
        <AddStyledLabel>Name</AddStyledLabel>
        <AddStyledInput
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AddStyledLabel>Developer</AddStyledLabel>
        <AddStyledSelect
          value={developers}
          onChange={(e) => setDevelopers(e.target.value)}
        >
          <option value="">Select a developer</option>
          {developersList.map((developer, index) => (
            <option key={index} value={developer}>
              {developer}
            </option>
          ))}
        </AddStyledSelect>
        <AddStyledLabel>Platform</AddStyledLabel>
        <AddStyledInput
          value={platforms}
          onChange={(e) => setPlatforms(e.target.value)}
        />
        <AddStyledLabel>Genre</AddStyledLabel>
        <AddStyledSelect
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Select a genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Simulation">Simulation</option>
          <option value="Sports">Sports</option>
          <option value="Racing">Racing</option>
          {/* Add more genres as needed */}
        </AddStyledSelect>
      </AddStyledForm>
      <AddStyledButton to="/videogames/added" onClick={handleClick}>
        Submit
      </AddStyledButton>
    </AddFormWrapper>
  );
}
