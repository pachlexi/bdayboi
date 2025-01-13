import React, { useState, useEffect, useRef } from "react";
import Memes from "./Memes";
import Cake from "./Cake";
import Records from "./Records";
import "./style/navButtons.css";
import "bootstrap/dist/css/bootstrap.css";
import metalPipe from "./soundEffects/metalPipe.mp3";

const App = () => {
  // Track the current view: 0 = Memes, 1 = Cake, 2 = Records
  // Default to Memes view
  const [currentView, setCurrentView] = useState(1);

  const metalPipeAudio = useRef(new Audio(metalPipe));

  const playAudio = (audioRef) => {
    const audio = audioRef.current;

    if (!audio.paused) {
      // If audio is already playing, do nothing
      return;
    }

    // Play the audio
    audio.play();

    // Ensure the audio is stopped when it ends
    audio.onended = () => {
      console.log("Audio has finished playing.");
    };
  };
  return (
    <div>
      {/* vv NAVIGATIONS BUTTONS vv */}
      {/* MEMES BUTTON */}
      <button
        className="button0"
        onClick={() => {
          playAudio(metalPipeAudio); // Play the audio
          setCurrentView(0); // Switch to Memes view
        }}
      ></button>

      {/* CAKE BUTTON */}
      <button
        className="button1"
        onClick={() => {
          playAudio(metalPipeAudio); // Play the audio
          setCurrentView(1);
        }}
      ></button>

      {/* RECORDS BUTTON */}
      <button
        className="button2"
        onClick={() => {
          playAudio(metalPipeAudio); // Play the audio
          setCurrentView(2);
        }}
      ></button>

      {/* Conditional Rendering */}
      {currentView === 0 && <Memes />}
      {currentView === 1 && <Cake />}
      {currentView === 2 && <Records />}
    </div>
  );
};

export default App;
