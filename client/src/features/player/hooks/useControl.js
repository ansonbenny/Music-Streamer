import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTime,
  setVolume,
  setStatus,
  changeAudio,
  getTrack,
} from "../../../redux/player";

const useControl = () => {
  const ref = useRef({});

  const dispatch = useDispatch();

  const { player } = useSelector((state) => state);

  const playerUpdate = useCallback(() => {
    ref.current.player = {
      position: player?.data?.position,
      status: player?.status,
      tracks: player?.data?.tracks,
      type: player?.data?.type,
      offset: player?.data?.offset,
      total: player?.data?.total,
      id: player?.data?.id,
    };
  }, [player]);

  useEffect(() => {
    playerUpdate();

    // functions
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

    const handelTimeUpdate = () => {
      ref.current["seekBar"].value = ref.current["audio"].currentTime;

      var sec = ref.current["audio"].currentTime;

      sec = sec % 3600;

      var min = Math.floor(sec / 60);

      min = min >= 10 ? min : "0" + min;

      sec = Math.floor(sec % 60);

      sec = sec >= 10 ? sec : "0" + sec;

      dispatch(setTime({ current: `${min} : ${sec}` }));

      progressColor("seekBar");

      if (
        ref.current["audio"].currentTime === ref.current["audio"].duration &&
        ref?.current?.["player"]?.status
      ) {
        if (
          ref?.current?.["player"]?.tracks?.length - 1 >
          ref?.current?.["player"]?.position
        ) {
          dispatch(changeAudio(ref?.current?.["player"]?.position + 1));
        } else {
          if (
            (ref?.current?.["player"]?.type === "album" ||
              ref?.current?.["player"]?.type === "playlist") &&
            ref?.current?.["player"]?.offset <
              ref?.current?.["player"]?.tracks?.length &&
            ref?.current?.["player"]?.offset + 10 <=
              ref?.current?.["player"]?.total
          ) {
            dispatch(
              getTrack({
                type: ref?.current?.["player"]?.type,
                id: ref?.current?.["player"]?.id,
                offset: ref?.current?.["player"]?.offset + 10,
                position: ref?.current?.["player"]?.position + 1,
              })
            );
          } else {
            dispatch(setStatus(false));
          }
        }
      }
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

    // controller
    ref?.current?.["volume"]?.addEventListener("input", changeVolume);
    ref?.current?.["seekBar"]?.addEventListener("input", changeTime);

    // audio

    // first time load volume
    if (localStorage.getItem("volume") && localStorage.getItem("volume") <= 0) {
      ref.current["volume"].value = 0;

      changeVolume({ target: { value: 0 } });
    } else {
      ref.current["volume"].value =
        localStorage.getItem("volume") || ref.current["audio"].volume;

      changeVolume({ target: { value: ref.current["volume"].value } });
    }

    // audio current playing time
    ref?.current?.["audio"]?.addEventListener("timeupdate", handelTimeUpdate);

    // audio duration
    ref?.current?.["audio"]?.addEventListener(
      "durationchange",
      handleDurationChange
    );

    return () => {
      // cleanup

      ref?.current?.["volume"]?.removeEventListener("input", changeVolume);
      ref?.current?.["seekBar"]?.removeEventListener("input", changeTime);

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
  }, [playerUpdate]);

  return ref;
};

export default useControl;
