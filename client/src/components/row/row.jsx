import React from "react";
import { useNavigate } from "react-router-dom";
import { Dots, MusicIcon, Pause, Play, Plus } from "../../assets";
import { useCarousel } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setLibraryModal } from "../../redux/library";
import { getTrack, setStatus } from "../../redux/player";
import { setAuth } from "../../redux/auth";
import "./style.scss";

const Row = ({ title, data, isCarousel, isRound, isLibrary }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { player, user } = useSelector((state) => state);

  const [ref, settings] = useCarousel({
    play: [],
    menu: [],
  });

  return (
    <div data-for="Row">
      <div className="title">
        <h5>{title}</h5>
      </div>

      <div
        className="grid"
        // for row to carousel
        id={isCarousel ? "carousel" : ""}
        ref={(elem) => {
          if (isCarousel && ref?.current) return (ref.current["slide"] = elem);
        }}
      >
        {isLibrary && (
          <div
            className="card"
            onClick={() => {
              dispatch(setLibraryModal({ status: true }));
            }}
          >
            <div className="thumbnail">
              <Plus />
            </div>

            <div className="details">
              <h5>New playlist</h5>
              <p>Create new playlist by click.</p>
            </div>

            <div className="on_hover" />
          </div>
        )}

        {data?.map((elm, key) => {
          return (
            <div
              className="card"
              key={key}
              ref={(elem) => {
                if (isCarousel && ref?.current)
                  return (ref.current["card"] = elem);
              }}
            >
              <div className="thumbnail">
                {elm?.album?.images?.[0] ? (
                  <img
                    className={isRound ? "rounded" : ""}
                    src={elm?.album?.images?.[0]?.url}
                    alt={elm?.uri}
                  />
                ) : (
                  <>
                    {elm?.images?.[0] ? (
                      <img
                        className={isRound ? "rounded" : ""}
                        src={elm?.images?.[0]?.url}
                        alt={elm?.uri}
                      />
                    ) : (
                      <MusicIcon />
                    )}
                  </>
                )}
              </div>

              <div className="details">
                <h5>{elm?.name}</h5>
                <p>
                  {isLibrary
                    ? elm?.short
                    : elm?.album?.name ||
                      elm?.genres?.[0] ||
                      elm?.artists?.[0]?.name}
                </p>
              </div>

              {!settings.isDragging && (
                <div
                  className="on_hover"
                  data-also-for="navigate"
                  onClick={(e) => {
                    if (
                      !ref?.current?.["menu"][key]?.contains(e.target) &&
                      !ref?.current?.["play"][key]?.contains(e.target)
                    ) {
                      if (elm?.type === "track") {
                        navigate(`/music/${elm?.id}`);
                      } else if (elm?.type === "album") {
                        navigate(`/album/${elm?.id}`);
                      } else if (elm?.type === "artist") {
                        navigate(`/artist/${elm?.id}`);
                      } else if (elm?.type === "playlist") {
                        navigate(`/playlist/${elm?.id}`);
                      }
                    }
                  }}
                >
                  {isLibrary && (
                    <button
                      data-for="libray_options"
                      onClick={() => {
                        dispatch(
                          setLibraryModal({
                            status: true,
                            id: elm?.playlistId,
                          })
                        );
                      }}
                      ref={(elm) => {
                        if (ref?.current) {
                          ref.current["menu"][key] = elm;
                        }
                      }}
                    >
                      <Dots width={"16px"} height={"16px"} color={"#FFF"} />
                    </button>
                  )}
                  {player?.data?.type === elm?.type &&
                  player?.data?.id === elm?.id &&
                  player?.status ? (
                    <button
                      data-for="play"
                      ref={(elm) => {
                        if (ref?.current) {
                          ref.current["play"][key] = elm;
                        }
                      }}
                      onClick={() => {
                        dispatch(setStatus(false));
                      }}
                    >
                      <Pause width={"16px"} height={"16px"} color={"#333"} />
                    </button>
                  ) : (
                    <button
                      data-for="play"
                      ref={(elm) => {
                        if (ref?.current) {
                          ref.current["play"][key] = elm;
                        }
                      }}
                      onClick={() => {
                        if (user) {
                          if (
                            player?.data?.type === elm?.type &&
                            player?.data?.id === elm?.id
                          ) {
                            dispatch(setStatus(true));
                          } else {
                            dispatch(
                              getTrack({ type: elm?.type, id: elm?.id })
                            );
                          }
                        } else {
                          dispatch(setAuth({ login: true }));
                        }
                      }}
                    >
                      <Play width={"16px"} height={"16px"} color={"#333"} />
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
