import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  Heart,
  Navigate,
  Pause,
  Play,
  Speaker,
  SpeakerMute,
} from "../../assets";
import song from "../../assets/song.mp3";
import "./style.scss";

const Player = () => {
  const data = {
    title: "The Grudge",
    year: 2020,
    cast: [
      "Andrea Riseborough",
      "Demián Bichir",
      "John Cho",
      "Betty Gilpin",
      "Lin Shaye",
      "Jacki Weaver",
    ],
    genres: ["Horror", "Supernatural"],
    href: "The_Grudge_(2020_film)",
    extract:
      "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
    thumbnail_width: 220,
    thumbnail_height: 326,
  };

  const ref = useRef({});

  const [time, setTime] = useState({
    current: `00 : 00`,
    duration: `00 : 00`,
  }); // set on redux

  const progressColor = useCallback((to) => {
    if (ref?.current?.[to]) {
      var value =
        ((ref.current[to].value - ref.current[to].min) /
          (ref.current[to].max - ref.current[to].min)) *
        100;

      ref.current[to].style.background =
        "linear-gradient(to right, #09c478 0%, #09c478 " +
        value +
        "%, #d9d9db " +
        value +
        "%, #d9d9db 100%)";
    }
  }, []);

  useLayoutEffect(() => {
    ref.current["volume"].value = ref.current["audio"].volume;
    progressColor("volume");

    ref?.current?.["audio"]?.addEventListener("timeupdate", () => {
      ref.current["seekBar"].value = ref.current["audio"].currentTime;

      var sec = ref.current["audio"].currentTime;

      sec = sec % 3600;

      var min = Math.floor(sec / 60);

      min = min >= 10 ? min : "0" + min;

      sec = Math.floor(sec % 60);

      sec = sec >= 10 ? sec : "0" + sec;

      setTime((time) => ({ ...time, current: `${min} : ${sec}` }));

      progressColor("seekBar");
    });

    ref?.current?.["audio"]?.addEventListener("durationchange", () => {
      ref.current["seekBar"].value = 0;

      ref.current["seekBar"].min = 0;

      ref.current["seekBar"].max = ref.current["audio"].duration;

      var sec = ref.current["audio"].duration;

      sec = sec % 3600;

      var min = Math.floor(sec / 60);

      min = min >= 10 ? min : "0" + min;

      sec = Math.floor(sec % 60);

      sec = sec >= 10 ? sec : "0" + sec;

      setTime((time) => ({ ...time, duration: `${min} : ${sec}` }));

      progressColor("seekBar");
    });
  }, []);

  const changeVolume = (e) => {
    ref.current["audio"].volume = e.target.value;
    progressColor("volume");
  };

  const changeTime = (e) => {
    ref.current["audio"].currentTime = e.target.value;
  };

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

            {ref?.current?.["audio"]?.paused ? (
              <button
                className="play_pause"
                onClick={() => {
                  ref.current["audio"].play();
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
            ref?.current?.["audio"]?.volume > 0 ? (
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
