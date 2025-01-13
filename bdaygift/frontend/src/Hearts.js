import React, { useState } from "react";
import "./Hearts.css";

function Hearts() {
  // const [position, setPosition] = useState(-1000); // Initial left position

  // const moveToRight = () => {
  //   setPosition(400); // Move the image to 300px from the left
  // };

  // const moveToLeft = () => {
  //   setPosition(-1000); // Move the image to 300px from the left
  // };

  return (
    <div>
      {/* RECORD */}
      <img src="/images/record.png" alt="Record" className="record" />
      {/* RECORD PLAYER */}
      <img
        src="/images/record player.svg"
        alt="Record"
        className="recordplayer"
      />
      {/* RECORD HANDLE */}
      <img
        src="/images/record_handle.svg"
        alt="Record"
        className="recordHandle"
      />
      {/* <button className="button1" onClick={moveToRight}>
        Insert Record
      </button>
      <button className="button2" onClick={moveToLeft}>
        Remove Record
      </button> */}
    </div>
  );
}

export default Hearts;
