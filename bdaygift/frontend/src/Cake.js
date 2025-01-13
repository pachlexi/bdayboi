import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import confetti from "canvas-confetti";
import "./style/cake.css";
import hbdsong from "./soundEffects/hbdSong.mp3";
import itsaparty from "./soundEffects/itsaparty.mp3";
import sussy from "./soundEffects/sussy.mp3";

function Cake() {
  // Create a ref for the audio object
  // const bdayAudio = useRef(new Audio(hbdsong));
  const bdayAudio = useRef(
    new Audio(
      // hbdsong
      "https://github.com/pachlexi/audios/blob/main/hbdSong.mp3?raw=true"
    )
  );

  const itsapartyAudio = useRef(new Audio(itsaparty));
  const sussyAudio = useRef(new Audio(sussy));

  const playAudio = (audioRef) => {
    const audio = audioRef.current;

    if (!audio.paused) {
      // If audio is already playing, do nothing
      // return;
    }

    // Play the audio
    audio.play();

    // Ensure the audio is stopped when it ends
    audio.onended = () => {
      console.log("Audio has finished playing.");
    };
  };

  const [showText4, setShowText4] = useState(false); // State to control visibility of text4
  const [showText6, setShowText6] = useState(false); // State to control visibility of text6

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 360,
      angle: 90,
      origin: { x: 0.5, y: 0 },
      colors: ["#6fa8dc", "#93c47dff", "#d48bb9ff", "#f9cb9c", "#b4a7d6ff"],
    });
  };

  const recordClasses = [
    "blueRecord",
    "greenRecord",
    "pinkRecord",
    "purpleRecord",
    "yellowRecord",
  ];

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const text = "h a p p y     2 1 s t     b i r t h d a y    l i n c o l n ! !";
  const text2 = "(click   the   record   cake)";
  const text3 = "tf   is   a   record   cake   woman";
  const text4 = [
    "Well, since the bday boi is 21,",
    "the cake has 21 records that",
    "each represent a song from",
    "our time together. Square Lil",
    "Lexi will take you to the album",
    "that holds these songs.",
    "Enjoy, xoxo <3",
  ];
  const text5 = "Kanye??";
  const text6 = [
    "it do be the kan to the ye,",
    "and he's throwing you a 21st",
    "bday tiktok rizz party omg!!",
    "go on and get over there with",
    "dancin Lil Lexi!",
  ];

  const colors = ["#6fa8dc", "#93c47dff", "#d48bb9ff", "#f9cb9c", "#b4a7d6ff"];

  // Colorful Text
  const StyledText = ({ text, colors }) => (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            color: colors[index % colors.length], // Cycle through colors
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );

  return (
    <div className="main">
      {/* Happy Birthday Text */}
      <h1 className="birthdayText">
        <StyledText text={text} colors={colors} />
      </h1>

      {/* Candles Image */}
      <button className="candles" alt="Candles"></button>

      {/* Buttons and Audio */}
      <button
        className="confettiButton"
        onClick={() => {
          handleConfetti();
          playAudio(bdayAudio);
        }}
      ></button>

      <button
        className="itsAParty"
        onClick={() => {
          playAudio(itsapartyAudio);
          setShowText6(true);
        }}
      ></button>

      <button
        className="susLink"
        onClick={() => {
          playAudio(sussyAudio);
          setShowText4(true); // Show text4 when clicking Sus button
        }}
      ></button>
      {/* Record Cake */}
      <div className="cake-grid">
        {[
          4, // Row 1
          5, // Row 2
          6, // Row 3
          6, // Row 4
        ].map((count, rowIndex) => {
          const shuffledClasses = shuffleArray(
            Array.from(
              { length: count },
              (_, i) => recordClasses[i % recordClasses.length]
            )
          );

          return (
            <div key={rowIndex} className="row">
              {shuffledClasses.map((className, columnIndex) => (
                <div
                  key={`${rowIndex}-${columnIndex}`}
                  className={`record ${className}`}
                  alt={`Record ${rowIndex}-${columnIndex}`}
                ></div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Click the Cake Text */}
      <div className="cakeText">
        <StyledText text={text2} colors={colors} />
      </div>

      {/* What is a Record Cake Text */}
      <div className="whatText">
        <StyledText text={text3} colors={colors} />
      </div>

      {/* Explanation Text with Fade-In Effect */}
      {showText4 && (
        <div className="explanationText fade-in">
          {text4.map((line, index) => (
            <p key={index}>
              <StyledText text={line} colors={colors} />
            </p>
          ))}
        </div>
      )}

      {/* Kanye Text */}
      <div className="kanyeText">
        <StyledText text={text5} colors={colors} />
      </div>

      {/* Tiktok rizz party Text with Fade-In Effect */}
      {showText6 && (
        <div className="tiktokText fade-in">
          {text6.map((line, index) => (
            <p key={index}>
              <StyledText text={line} colors={colors} />
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cake;
