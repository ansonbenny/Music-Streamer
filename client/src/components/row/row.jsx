import React from "react";
import { Dots, MusicIcon, Play } from "../../assets";
import "./style.scss";

const Row = ({ title, data, isSingle, isRound, setModal }) => {
  return (
    <div data-for="Row">
      {title && (
        <div className="title">
          <h5>{title}</h5>
        </div>
      )}

      <div className={`grid ${isSingle && "single-row"}`}>
        {data?.map((elm, key) => {
          return (
            <div className="card" key={key}>
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

              <div className="on_hover">
                {setModal && (
                  <button
                    data-for="libray_options"
                    onClick={() => {
                      setModal({ status: true, id: "1wqwqw" });
                    }}
                  >
                    <Dots width={"16px"} height={"16px"} color={"#FFF"} />
                  </button>
                )}
                <button data-for="play">
                  <Play width={"16px"} height={"16px"} color={"#333"} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
