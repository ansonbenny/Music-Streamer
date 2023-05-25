import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Pause,
  Play,
  Speaker,
  SpeakerMute,
  dummy,
} from "../../../assets";
import { getTrack, resetData, setStatus } from "../../../redux/player";
import useControl from "../hooks/useControl";
import "./style.scss";

const Player = () => {
  const ref = useControl();

  const dispatch = useDispatch();

  const { user, player } = useSelector((state) => state);

  const { data, time, volume, status } = player;

  useEffect(() => {
    if (user) {
      if (status) {
        ref?.current?.["audio"]?.play?.();
      } else {
        ref?.current?.["audio"]?.pause?.();
      }
    } else {
      dispatch(resetData());
    }
  }, [status, data, user]);

  return (
    <div className="player">
      <div className="inner" id="sample">
        <div className="details">
          <div className="thumbnail">
            <img
              src={
                data?.track.album?.images?.[0]?.url ||
                data?.album?.images?.[0]?.url
              }
              alt={data?.track?.uri}
            />
          </div>

          <div className="content">
            <h4>{data?.track?.name}</h4>
            <p>{data?.track?.album?.name || data?.album?.name}</p>
          </div>
        </div>

        <div className="audio_player">
          <div className="actions">
            <button
              className={`prev ${data?.offset <= 0 ? "disable" : ""}`}
              onClick={() => {
                if (data?.offset > 0) {
                  dispatch(
                    getTrack({
                      type: data?.type,
                      id: data?.id,
                      offset: data?.offset - 1,
                    })
                  );
                }
              }}
            >
              <Navigate width={"16px"} height={"16px"} />
            </button>

            {!status ? (
              <button
                className="play_pause"
                onClick={() => {
                  dispatch(setStatus(true));
                }}
              >
                <Play width={"25px"} height={"25px"} />
              </button>
            ) : (
              <button
                className="play_pause"
                onClick={() => {
                  dispatch(setStatus(false));
                }}
              >
                <Pause width={"25px"} height={"25px"} />
              </button>
            )}

            <button
              className={`next ${
                data?.offset + 1 >= data?.total ? "disable" : ""
              }`}
              onClick={() => {
                if (data?.offset + 1 < data?.total) {
                  dispatch(
                    getTrack({
                      type: data?.type,
                      id: data?.id,
                      offset: data?.offset + 1,
                    })
                  );
                }
              }}
            >
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
          src={data?.track?.preview_url || dummy}
          ref={(audio) => {
            if (ref?.current) return (ref.current["audio"] = audio);
          }}
        />
      </div>
    </div>
  );
};

export default Player;
