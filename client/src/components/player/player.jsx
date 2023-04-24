import React from "react";
import song from '../../assets/song.mp3'
import "./style.scss";

const Player = () => {
  return (
    <div className="player">
      <div className="inner">
        <div className="audio_player">
          <button>Play</button><input type="text" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default Player;
