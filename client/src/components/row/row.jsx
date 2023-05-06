import React from "react";
import { useNavigate } from "react-router-dom";
import { Dots, MusicIcon, Play, Plus } from "../../assets";
import { useDispatch } from "react-redux";
import { setLibraryModal } from "../../redux/library";
import { useCarousel } from "../../custom-hooks";
import "./style.scss";

const Row = ({ title, data, isCarousel, isRound, isLibrary }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [ref, settings] = useCarousel({
    play: [],
    menu: [],
  });

  return (
    <div data-for="Row">
      {title && (
        <div className="title">
          <h5>{title}</h5>
        </div>
      )}

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
              dispatch(setLibraryModal({ status: true, isLibrary }));
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
                {elm?.thumbnail ? (
                  <img
                    className={isRound ? "rounded" : ""}
                    src={elm?.thumbnail}
                    alt=""
                  />
                ) : (
                  <MusicIcon />
                )}
              </div>

              <div className="details">
                <h5>{elm?.title}</h5>
                <p>{elm?.extract}</p>
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
                      navigate("/erer");
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
                            id: "1wqwqw",
                            isLibrary,
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
                  <button
                    data-for="play"
                    ref={(elm) => {
                      if (ref?.current) {
                        ref.current["play"][key] = elm;
                      }
                    }}
                  >
                    <Play width={"16px"} height={"16px"} color={"#333"} />
                  </button>
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
