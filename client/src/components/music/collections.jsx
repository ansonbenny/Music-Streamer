import React, { useCallback, useEffect, useRef } from "react";
import { Dots, Pause, Play } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { setLibraryModal } from "../../redux/library";
import { setAuth } from "../../redux/auth";
import { MusicIcon } from "../../assets";
import { getTrack, setStatus } from "../../redux/player";
import "./style.scss";

const Collections = ({ data, collectionId, collectionType }) => {
  const ref = useRef({
    options: [],
    btn: [],
  });

  const dispatch = useDispatch();

  const getTime = useCallback(
    (ms) => {
      var minutes = Math.floor(ms / 60000);
      var seconds = ((ms % 60000) / 1000).toFixed(0);

      return `${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`;
    },
    [data]
  );

  const { user, player } = useSelector((state) => state);

  useEffect(() => {
    const handleClick = (e) => {
      let btn = ref?.current?.["btn"]?.find((elm) => {
        if (elm?.contains(e.target)) {
          return true;
        }
      });

      let menu_options = ref?.current?.["options"]?.find((elm) => {
        if (elm?.contains(e.target)) {
          return true;
        }
      });

      if (!btn && !menu_options) {
        ref?.current?.["options"]?.forEach((elm) => {
          if (elm?.style) {
            elm.style.display = "none";
          }
        });
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="collections">
      <table>
        <tbody>
          {data?.map((obj, key) => {
            return (
              <tr key={key}>
                <td>
                  <span className="count grey">{key + 1}</span>
                  {player?.data?.id === collectionId &&
                  player?.data?.track?.id === obj?.id &&
                  player?.status ? (
                    <button
                      className="Play"
                      onClick={() => {
                        dispatch(setStatus(false));
                      }}
                    >
                      <Pause width={"16px"} height={"16px"} />
                    </button>
                  ) : (
                    <button
                      className="Play"
                      onClick={() => {
                        if (user) {
                          if (
                            player?.data?.id === collectionId &&
                            player?.data?.track?.id === obj?.id
                          ) {
                            dispatch(setStatus(true));
                          } else {
                            dispatch(
                              getTrack({
                                type: collectionType,
                                id: collectionId,
                                offset: key,
                              })
                            );
                          }
                        } else {
                          dispatch(setAuth({ login: true }));
                        }
                      }}
                    >
                      <Play width={"16px"} height={"16px"} />
                    </button>
                  )}
                </td>
                {obj?.album?.images?.[0] ? (
                  <td>
                    <img src={obj?.album?.images?.[0]?.url} alt={obj?.uri} />
                  </td>
                ) : (
                  <td className="thumb">
                    <MusicIcon />
                  </td>
                )}
                <td>
                  <div className="flex-md">
                    <p className="medium">{obj?.name}</p>
                    <p className="grey medium-device">
                      {obj?.artists?.[0]?.name}
                    </p>
                  </div>
                </td>
                <td className="desktop">
                  <p className="grey">{obj?.artists?.[0]?.name}</p>
                </td>
                <td>{getTime(obj?.duration_ms || 0)}</td>
                <td>
                  <div className="more_btn">
                    <button
                      onClick={() => {
                        ref?.current?.["options"]?.forEach((elm, index) => {
                          if (index === key && elm?.style) {
                            elm.style.display = "block";
                          } else if (elm?.style) {
                            elm.style.display = "none";
                          }
                        });
                      }}
                      ref={(elm) => {
                        if (ref?.current)
                          return (ref.current["btn"][key] = elm);
                      }}
                    >
                      <Dots width={"16px"} height={"16px"} />
                    </button>
                  </div>

                  <div
                    className={`more_options_${key}`}
                    ref={(elm) => {
                      if (ref?.current)
                        return (ref.current["options"][key] = elm);
                    }}
                  >
                    <ul>
                      <li
                        onClick={() => {
                          if (user) {
                            dispatch(
                              setLibraryModal({ status: true, track: obj?.id })
                            );
                          } else {
                            dispatch(setAuth({ login: true }));
                          }
                        }}
                      >
                        Playlist
                      </li>
                      <li
                        onClick={() => {
                          window.navigator.clipboard.writeText(
                            `${window.location.protocol}//${window.location.host}/music/${obj?.id}`
                          );

                          alert(
                            `Link Copied ${window.location.protocol}//${window.location.host}/music/${obj?.id}`
                          );
                        }}
                      >
                        Share
                      </li>

                      {player?.data?.id === collectionId &&
                      player?.data?.track?.id === obj?.id &&
                      player?.status ? (
                        <li
                          onClick={() => {
                            dispatch(setStatus(false));
                          }}
                        >
                          Pause
                        </li>
                      ) : (
                        <li
                          onClick={() => {
                            if (user) {
                              if (
                                player?.data?.id === collectionId &&
                                player?.data?.track?.id === obj?.id
                              ) {
                                dispatch(setStatus(true));
                              } else {
                                dispatch(
                                  getTrack({
                                    type: collectionType,
                                    id: collectionId,
                                    offset: key,
                                  })
                                );
                              }
                            } else {
                              dispatch(setAuth({ login: true }));
                            }
                          }}
                        >
                          Play
                        </li>
                      )}
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Collections;
