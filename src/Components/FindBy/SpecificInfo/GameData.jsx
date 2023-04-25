import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function GameData() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.state;
  const [videoGame, setVideoGame] = React.useState({});
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch(
      `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/getById/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setVideoGame(data);
      });
  }, []);

  const handleDelete = () => {
    fetch(
      `http://testwilldelete-env.eba-ahejzxsq.us-east-1.elasticbeanstalk.com/videogames/delete/${id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        alert("Game successfully deleted");
        setTimeout(() => {
          navigate("/videogames", { replace: true });
        });
      })
      .catch((error) => {
        console.error("Error deleting game:", error);
      });
  };

  return (
    <div>
      <h3>{videoGame.name}</h3>
      <p>Developers: {videoGame.developers}</p>
      <p>Platforms: {videoGame.platforms}</p>
      <p>Genre: {videoGame.genre}</p>
      <Link to={{ pathname: `/videogames/edit/${id}`, state: { videoGame } }}>
        <button>Update</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
      {isDeleted && (
        <div>
          <p>Game successfully deleted!</p>
        </div>
      )}
    </div>
  );
}
