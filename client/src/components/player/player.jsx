import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Navigate, Pause, Play } from "../../assets";
import song from "../../assets/song.mp3";
import "./style.scss";

const Player = () => {
  const audio = useRef();
  const volume = useRef();
  const audioSeekBar = useRef();

  const [time, setTime] = useState({
    current: `00 : 00`,
    duration: `00 : 00`,
  });

  const AudioSeekBarProgressColor = useCallback(() => {
    if (audioSeekBar?.current) {
      var value =
        ((audioSeekBar.current.value - audioSeekBar.current.min) /
          (audioSeekBar.current.max - audioSeekBar.current.min)) *
        100;
      audioSeekBar.current.style.background =
        "linear-gradient(to right, #09c478 0%, #09c478 " +
        value +
        "%, #d9d9db " +
        value +
        "%, #d9d9db 100%)";
    }
  }, []);

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

  useLayoutEffect(() => {
    volume.current.value = audio.current.volume;

    audio?.current?.addEventListener("timeupdate", () => {
      audioSeekBar.current.value = audio.current.currentTime;
      var sec = audio.current.currentTime;
      sec = sec % 3600;
      var min = Math.floor(sec / 60);

      min = min >= 10 ? min : "0" + min;

      sec = Math.floor(sec % 60);

      sec = sec >= 10 ? sec : "0" + sec;
      setTime((time) => ({ ...time, current: `${min} : ${sec}` }));

      AudioSeekBarProgressColor();
    });

    audio?.current?.addEventListener("durationchange", () => {
      audioSeekBar.current.value = 0;
      audioSeekBar.current.min = 0;
      audioSeekBar.current.max = audio.current.duration;

      var sec = audio.current.duration;
      sec = sec % 3600;
      var min = Math.floor(sec / 60);

      min = min >= 10 ? min : "0" + min;

      sec = Math.floor(sec % 60);

      sec = sec >= 10 ? sec : "0" + sec;
      setTime((time) => ({ ...time, duration: `${min} : ${sec}` }));

      AudioSeekBarProgressColor();
    });
  }, []);

  const changeVolume = (e) => {
    audio.current.volume = e.target.value;
  };

  const changeTime = (e) => {
    audio.current.currentTime = e.target.value;
  };

  return (
    <div className="player">
      <div className="inner">
        <div className="details">
          <div className="thumbnail">
            <img src={data?.thumbnail} alt="" />
          </div>

          <div className="content">
            <h4>{data?.title}</h4>
            <p>{data?.extract}</p>
          </div>
        </div>

        <div className="audio_player">
          <div className="actions">
            <button className="prev">
              <Navigate width={"16px"} height={"16px"} />
            </button>

            {audio?.current?.paused ? (
              <button
                className="play_pause"
                onClick={() => {
                  audio.current.play();
                }}
              >
                <Play width={"22px"} height={"22px"} />
              </button>
            ) : (
              <button
                className="play_pause"
                onClick={() => {
                  audio.current.pause();
                }}
              >
                <Pause width={"22px"} height={"22px"} />
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
              ref={audioSeekBar}
              onChange={changeTime}
            />
            <label className="duration">{time?.duration}</label>
          </div>
        </div>

        <div className="volume">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            onChange={changeVolume}
            ref={volume}
          />
        </div>

        <audio src={song} ref={audio} />
      </div>
    </div>
  );
};

export default Player;
