import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/records.css";

function Records() {
  const [activeTrack, setActiveTrack] = useState({ text: "", color: "" });
  const [activeText, setActiveText] = useState({ text: "", color: "" });
  const [activeImageClass, setActiveImageClass] = useState(""); // Store CSS class for image

  const tracks = [
    "Cigarette Daydreams",
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

  const colors = ["#6fa8dc", "#93c47d", "#d48bb9", "#f9cb9c", "#b4a7d6"];

  // CSS class names corresponding to images
  const imageClasses = [
    "record1", // CSS class for record 1
    "record2", // CSS class for record 2
    "record3", // CSS class for record 3
    "record4", // CSS class for record 4
    "record5", // CSS class for record 5
    "record6", // CSS class for record 6
    "record7", // CSS class for record 7
    "record8", // CSS class for record 8
    "record9", // CSS class for record 9
    "record10", // CSS class for record 10
    "record11", // CSS class for record 11
    "record12", // CSS class for record 12
    "record13", // CSS class for record 13
    "record14", // CSS class for record 14
    "record15", // CSS class for record 15
    "record16", // CSS class for record 16
    "record17", // CSS class for record 17
    "record18", // CSS class for record 18
    "record19", // CSS class for record 19
    "record20", // CSS class for record 20
    "record21", // CSS class for record 21
  ];

  const handleButtonClick = (index) => {
    setActiveText({ text: texts[index], color: colors[index % colors.length] });
    setActiveTrack({
      text: tracks[index],
      color: colors[index % colors.length],
    });
    setActiveImageClass(imageClasses[index]); // Set the CSS class for the active image
  };

  return (
    <div className="main">
      <iframe
        className="spotify"
        src="https://open.spotify.com/embed/playlist/7lq8zHtDsySDBnSBB43fy9?utm_source=generator"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <div className="button-container">
        {texts.map((_, index) => (
          <button
            key={index}
            className="record-button"
            onClick={() => handleButtonClick(index)}
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {activeTrack.text && (
        <div className="active-track" style={{ color: activeTrack.color }}>
          {activeTrack.text}
        </div>
      )}

      {activeText.text && (
        <div className="active-text" style={{ color: activeText.color }}>
          {activeText.text}
        </div>
      )}

      {activeImageClass && (
        <div className={`active-image ${activeImageClass}`}></div> // Add the dynamic class for the image
      )}
    </div>
  );
}

export default Records;
