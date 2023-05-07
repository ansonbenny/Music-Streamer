import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Heart,
  Navigate,
  Pause,
  Play,
  Speaker,
  SpeakerMute,
} from "../../../assets";
import song from "../../../assets/song.mp3";
import { setStatus } from "../../../redux/player";
import "./style.scss";
import useControl from "../hooks/useControl";

const Player = () => {
  const ref = useControl();

  const dispatch = useDispatch();

  const { data, time, volume, status } = useSelector((state) => state.player);

  return (
    <div className="player">
      <div className="inner" id="sample">
        <div className="details">
          <div className="thumbnail">
            <img src={data?.thumbnail} alt="" />
          </div>

          <div className="content">
            <h4>{data?.title}</h4>
            <p>{data?.extract}</p>
          </div>

          <div className="playlist">
            <button>
              {
                // if class active color change to green, active for in playlist
              }
              <Heart width={"16px"} height={"16px"} />
            </button>
          </div>
        </div>

        <div className="audio_player">
          <div className="actions">
            <button className="prev">
              <Navigate width={"16px"} height={"16px"} />
            </button>

            {!status ? (
              <button
                className="play_pause"
                onClick={() => {
                  ref.current["audio"].play();
                  dispatch(setStatus(true));
                }}
              >
                <Play width={"25px"} height={"25px"} />
              </button>
            ) : (
              <button
                className="play_pause"
                onClick={() => {
                  ref.current["audio"].pause();
                }}
              >
                <Pause width={"25px"} height={"25px"} />
              </button>
            )}

            <button className="next">
              <Navigate width={"16px"} height={"16px"} />
            </button>
          </div>

          <div className="seekBar">
            <label className="current">{time?.current}</label>
            <input
              type="range"
              step="any"
              ref={(seekBar) => {
                if (ref?.current) return (ref.current["seekBar"] = seekBar);
              }}
            />
            <label className="duration">{time?.duration}</label>
          </div>
        </div>

        <div className="volume">
          {
            volume > 0 ? (
              <Speaker width={"16px"} height={"16px"} />
            ) : (
              <SpeakerMute width={"16px"} height={"16px"} />
            ) /*speaker volume save on cookie or localStorage */
          }

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            ref={(volume) => {
              if (ref?.current) return (ref.current["volume"] = volume);
            }}
          />
        </div>

        <audio
          src={song}
          ref={(audio) => {
            if (ref?.current) return (ref.current["audio"] = audio);
          }}
        />
      </div>
    </div>
  );
};

export default Player;
