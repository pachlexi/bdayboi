import React, { useState, useEffect, useRef } from "react";
import Memes from "./Memes";
import Cake from "./Cake";
import Records from "./Records";
import "./style/navButtons.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  // Track the current view: 0 = Memes, 1 = Cake, 2 = Records
  // Default to Memes view
  const [currentView, setCurrentView] = useState(1);

  const audioRef = useRef(null); // Create a reference to the audio element

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio
    }
  };
  return (
    <div>
      {/* vv NAVIGATIONS BUTTONS vv */}
      {/* MEMES BUTTON */}
      <button
        className="button0"
        onClick={() => {
          playSong(); // Play the audio
          setCurrentView(0); // Switch to Memes view
        }}
      ></button>

      {/* CAKE BUTTON */}
      <button
        className="button1"
        onClick={() => {
          playSong();
          setCurrentView(1);
        }}
      ></button>

      {/* RECORDS BUTTON */}
      <button
        className="button2"
        onClick={() => {
          playSong();
          setCurrentView(2);
        }}
      ></button>

      {/* METAL PIPE SOUND EFFECT */}
      <audio
        ref={audioRef}
        src="/soundEffects/metalPipe.mp3" // Replace with your desired audio URL
        alt="METAL PIPE SOUND EFFECT"
      ></audio>

      {/* Conditional Rendering */}
      {currentView === 0 && <Memes />}
      {currentView === 1 && <Cake />}
      {currentView === 2 && <Records />}
    </div>
  );
};

export default App;
