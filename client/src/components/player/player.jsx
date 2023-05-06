import React, { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Heart,
  Navigate,
  Pause,
  Play,
  Speaker,
  SpeakerMute,
} from "../../assets";
import song from "../../assets/song.mp3";
import { setStatus, setTime, setVolume } from "../../redux/player";
import "./style.scss";

const Player = () => {
  const ref = useRef({});

  const dispatch = useDispatch();

  const { data, time, volume, status } = useSelector((state) => state.player);

  const progressColor = (to) => {
    if (ref?.current?.[to]) {
      var value =
        ((ref.current[to].value - ref.current[to].min) /
          (ref.current[to].max - ref.current[to].min)) *
        100;

      ref.current[
        to
      ].style.background = `linear-gradient(to right, #09c478 0%, #09c478 ${value}%, #d9d9db ${value}%, #d9d9db 100%)`;
    }
  };

  const changeVolume = (e) => {
    localStorage.setItem("volume", e.target.value);
    dispatch(setVolume(e.target.value));
    ref.current["audio"].volume = e.target.value;
    progressColor("volume");
  };

  const changeTime = (e) => {
    ref.current["audio"].currentTime = e.target.value;
  };

  // audio settings auto apply
  useLayoutEffect(() => {
    // first time load volume
    if (localStorage.getItem("volume") && localStorage.getItem("volume") <= 0) {
      ref.current["volume"].value = 0;

      changeVolume({ target: { value: 0 } });
    } else {
      ref.current["volume"].value =
        localStorage.getItem("volume") || ref.current["audio"].volume;

      changeVolume({ target: { value: ref.current["volume"].value } });
    }

    const handelTimeUpdate = () => {
      if (ref.current["audio"].paused) {
        dispatch(setStatus(false));
      }

      ref.current["seekBar"].value = ref.current["audio"].currentTime;

      var sec = ref.current["audio"].currentTime;

      sec = sec % 3600;

      var min = Math.floor(sec / 60);

      min = min >= 10 ? min : "0" + min;

      sec = Math.floor(sec % 60);

      sec = sec >= 10 ? sec : "0" + sec;

      dispatch(setTime({ current: `${min} : ${sec}` }));

      progressColor("seekBar");
    };

    const handleDurationChange = () => {
      ref.current["seekBar"].value = 0;

      ref.current["seekBar"].min = 0;

      ref.current["seekBar"].max = ref.current["audio"].duration;

      var sec = ref.current["audio"].duration;

      sec = sec % 3600;

      var min = Math.floor(sec / 60);

      min = min >= 10 ? min : "0" + min;

      sec = Math.floor(sec % 60);

      sec = sec >= 10 ? sec : "0" + sec;

      dispatch(setTime({ duration: `${min} : ${sec}` }));

      progressColor("seekBar");
    };

    // audio current playing time
    ref?.current?.["audio"]?.addEventListener("timeupdate", handelTimeUpdate);

    // audio duration
    ref?.current?.["audio"]?.addEventListener(
      "durationchange",
      handleDurationChange
    );

    return () => {
      //cleanup

      ref?.current?.["audio"]?.removeEventListener(
        "timeupdate",
        handelTimeUpdate
      );

      // audio duration
      ref?.current?.["audio"]?.removeEventListener(
        "durationchange",
        handleDurationChange
      );
    };
  }, []);

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
              onChange={changeTime}
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
            onChange={changeVolume}
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
