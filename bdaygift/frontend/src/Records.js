import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/records.css";

function Records() {
  // State to keep track of the currently displayed text and its color
  const [activeTrack, setActiveTrack] = useState({ text: "", color: "" });
  // State to keep track of the currently displayed text and its color
  const [activeText, setActiveText] = useState({ text: "", color: "" });
  // State to keep track of the currently displayed image
  const [activeImage, setActiveImage] = useState("");

  // Array of texts corresponding to the buttons
  const tracks = [
    ["Cigarette Daydreams"],
    "Apple Cider",
    "APT.",
    "See You In My Nightmares",
    "This Velvet Glove",
    "Mia and Sebastian's Theme",
    "Dancing Through Life",
    "Stop Crying Your Heart  Out",
    "Last Night on Earth",
    "Self Control",
    "Aeroplane",
    "Baby By Me",
    "Add up My Love",
    "Juicy Wiggle",
    "On Melancholy Hill",
    "Greedy",
    "Santa Baby",
    "The Story Of Us",
    "Garbage Truck",
    "This Must Be the Place",
    "Tuesday",
  ];

  // Array of texts corresponding to the buttons
  const texts = [
    // record 1 text
    "When we went to the concert for Cage the Elephant, I remember the drive up there and me trying to memorize songs after the first listen. It was all worth it. I really loved this concert with you and I still tear up a bit hearing this song. Very glad we got matching shirts from this concert.",
    // record 2 text
    "This was the very first song I ever texted you. Reminds me of when we first started talking and our first date. Live laugh love beabadobee. (Pronunciation: BE-BA-DO-BEE)",
    // record 3 text
    "",
    // record 4 text
    "Kanye sucks. Except for this song. THAT I KNOWWWW. I also really like this picture. Finally have a use for it.",
    // record 5 text
    "My absolute favorite Chicago visit I've gotten. That weekend was one of my favorites. A truly wonderful way to spend our 2 months together and start winter break. ",
    // record 6 text
    "This was the first day you showed me the piano room and played Mia & Sebastian's Theme for me. And other songs ofc but I really do like this song. I love how musically talented you are.",
    // record 7 text
    "Here we are mere moments before seeing Jonathan Bailey on the big screen :D I love watching movies and tv shows with you. ",
    // record 8 text
    "The first song we ever slow danced to,",
    // record 9 text
    "and the second,",
    // record 10 text
    "and the third,",
    // record 11 text
    "and the latest! It melts my heart being able to hold you close even for a couple mintues of a song. Feels like it's me and you against the world.",
    // record 12 text
    "Bro owns the location of the best party ever known to mankind. How is he so nonchalant and chill about this??",
    // record 13 text
    "You first met my family at Provisions and this song was playing in the background while we were eating. I was very happy to see you getting along with them. I was also happy to have teased Allison with you and Luke about Justin during those JackBox games. ",
    // record 14 text
    "Here we see your first time getting juicy with me at a football game. W Lincoln.",
    // record 15 text
    "This was our first day officially together. I remember being so nervous about when you were going to ask me to be your gf, and this was a the sweetest way to ask. Not to mention we got a pretty perfect day at the pumpkin patch too. ",
    // record 16 text
    "Girlie is so happy when you wake up next to Lexi in the morning.",
    // record 17 text
    "My favorite Christmas gifts. Elphaba, Glinda, and Hello Kitty and so excited to be reunited again with you and Lexi.",
    // record 18 text
    "This was when we went out running and ran sprints on the track. This was the song I sprinted to lol. I love when I get to work out with you.",
    // record 19 text
    "To our first time in Iowa City together. An amazing weekend to spend my favorite holiday with you. ",
    // record 20 text
    "I like going through the posters at Mayhem with you. Behold, the very first purchase I made there. Quite a great one too.",
    // record 21 text
    "My life has been feeling like this song since the first day I met you. I am so so excited to see you again and ready to make many more memories with you next semester. Happy birthday official adult Lincoln, I love you.",
  ];

  // Array of images corresponding to the buttons
  const images = [
    "/images/records/record1.png",
    "/images/records/record2.svg",
    "/images/records/record3.svg",
    "/images/records/record4.svg",
    "/images/records/record5.svg",
    "/images/records/record6.svg",
    "/images/records/record7.svg",
    "/images/records/record8.svg",
    "/images/records/record9.svg",
    "/images/records/record10.svg",
    "/images/records/record11.svg",
    "/images/records/record12.svg",
    "/images/records/record13.svg",
    "/images/records/record14.svg",
    "/images/records/record15.svg",
    "/images/records/record16.svg",
    "/images/records/record17.svg",
    "/images/records/record18.svg",
    "/images/records/record19.svg",
    "/images/records/record20.svg",
    "/images/records/record21.svg",
  ];

  // Array of colors
  const colors = ["#6fa8dc", "#93c47dff", "#d48bb9ff", "#f9cb9c", "#b4a7d6ff"];

  // Function to handle button clicks
  const handleButtonClick = (index) => {
    // Set the text, its corresponding color, and the image
    setActiveText({ text: texts[index], color: colors[index % colors.length] });
    setActiveTrack({
      text: tracks[index],
      color: colors[index % colors.length],
    });

    setActiveImage(images[index]);
  };

  return (
    <div className="main">
      {/* Spotify Playlist Embed */}
      <iframe
        className="spotify"
        src="https://open.spotify.com/embed/playlist/7lq8zHtDsySDBnSBB43fy9?utm_source=generator"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      {/* Buttons and Text Display */}
      <div className="button-container">
        {/* Generate buttons for numbers 1 to 21 */}
        {texts.map((_, index) => (
          <button
            key={index}
            className="record-button"
            onClick={() => handleButtonClick(index)}
            style={{
              backgroundColor: colors[index % colors.length], // Cycle through colors array
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Display the active track with its corresponding color */}
      {activeTrack.text && (
        <div
          className="active-track"
          style={{
            color: activeTrack.color, // Set text color to match button color
          }}
        >
          {activeTrack.text}
        </div>
      )}

      {/* Display the active text with its corresponding color */}
      {activeText.text && (
        <div
          className="active-text"
          style={{
            color: activeText.color, // Set text color to match button color
          }}
        >
          {activeText.text}
        </div>
      )}

      {/* Display the active spinning image */}
      {activeImage && (
        <div className="active-image-container">
          <img src={activeImage} alt="Spinning" className="spinning-image" />
        </div>
      )}
    </div>
  );
}

export default Records;
