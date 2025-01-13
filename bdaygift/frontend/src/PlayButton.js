import React from "react";

function PlayButton() {
  return (
    <div>
      {/* Spotify Player for the first song */}
      <iframe
        src="https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp"
        width="300"
        height="200"
        allowTransparency="true"
        allow="encrypted-media"
        title="Original Song Player"
      ></iframe>

      <br />

      {/* Spotify Player for Espresso */}
      <iframe
        src="https://open.spotify.com/embed/track/2HRqTpkrJO5ggZyyK6NPWz?utm_source=generator"
        width="300"
        height="200"
        allowTransparency="true"
        allow="encrypted-media"
        title="Espresso Player"
      ></iframe>
    </div>
  );
}

{
  /* <iframe
  style="border-radius:12px"
  src="https://open.spotify.com/embed/track/2HRqTpkrJO5ggZyyK6NPWz?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>; */
}

export default PlayButton;
