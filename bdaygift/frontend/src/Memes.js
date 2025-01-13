import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/memes.css"; // Import custom CSS

function Memes() {
  const nflAudioRef = useRef(null);
  const [showImage, setShowImage] = useState(false); // State to control the image visibility

  const playAudio = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleButtonClick = () => {
    playAudio(nflAudioRef); // Play audio
    setShowImage(true); // Show image
  };

  return (
    <div className="fullscreen-image">
      {/* Buttons and Audio */}
      {/* <button className="nflButton" onClick={handleButtonClick}></button> */}
      <button className="nflButton" onClick={handleButtonClick}></button>
      {showImage && (
        <img
          className="party-people fade-in"
          src="/images/memes/memesBackground.svg"
          alt="the party is here"
        />
      )}
      <audio
        ref={nflAudioRef}
        src="/soundEffects/nfl.mp3"
        alt="NFL THEME SONG"
      ></audio>
      <img className="lexi" src="/images/nav/dancinLexi.png" alt="Example" />
    </div>
  );
}

export default Memes;
