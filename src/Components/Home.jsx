import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import "./styles.css";

export default function Home() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const images = [
    {
      src: "./images/1.png",
      alt: "Image 1",
      className: "carousel-image",
      style: { width: "75%", height: "100%" },
    },
    {
      src: "./images/2.png",
      alt: "Image 2",
      className: "carousel-image",
      style: { width: "75%", height: "100%" },
    },
    {
      src: "./images/3.jpg",
      alt: "Image 3",
      className: "carousel-image",
      style: { width: "75%", height: "100%" },
    },
    {
      src: "./images/4.png",
      alt: "Image 4",
      className: "carousel-image",
      style: { width: "75%", height: "100%" },
    },
    {
      src: "./images/5.png",
      alt: "Image 5",
      className: "carousel-image",
      style: { width: "75%", height: "100%" },
    },
    {
      src: "./images/6.png",
      alt: "Image 6",
      className: "carousel-image",
      style: { width: "75%", height: "100%" },
    },
  ];

  const handleClick = () => {
    // Your button click logic here
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      <div className="banner">
        <img src="./images/banner.jpg" alt="Banner" />
      </div>
      <h1 className="title">Latest News and Updates</h1>
      <div className="latest-news">
        <div className="article">
          <img src="./images/test1.png" alt="News 1" />
          <h3>New Game Release: Cyberpunk 2077</h3>
          <p>
            Get ready to dive into the futuristic world of Night City with
            Cyberpunk 2077, the latest game from CD Projekt Red. Explore the
            massive open world, customize your character, and make choices that
            will shape the story.
          </p>
          <button onClick={handleClick}>Read More</button>
        </div>
        <div className="article">
          <img src="./images/test2.png" alt="News 2" />
          <h3>Upcoming DLC: Assassin's Creed Valhalla</h3>
          <p>
            Fans of Assassin's Creed Valhalla have a lot to look forward to with
            the upcoming Wrath of the Druids DLC. Set in Ireland, this new
            expansion promises new characters, new quests, and plenty of
            challenges.
          </p>
          <button onClick={handleClick}>Read More</button>
        </div>
        <div className="article">
          <img src="./images/test3.png" alt="News 3" />
          <h3>Multiplayer Update: Red Dead Redemption 2</h3>
          <p>
            It's been a long time coming, but Red Dead Redemption 2 players can
            finally enjoy the game's multiplayer mode. With a variety of
            activities to choose from, including co-op missions and
            player-vs-player modes.
          </p>
          <button onClick={handleClick}>Read More</button>
        </div>
      </div>
      <div className="sellers">
        <h1 className="title">Top Sellers This Week</h1>
        <Carousel breakPoints={breakPoints}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={image.className}
              style={image.style}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
