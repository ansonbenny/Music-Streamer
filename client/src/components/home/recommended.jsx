import React from "react";
import { Play } from "../../assets";
import "./style.scss";

const Recommended = ({ data }) => {
  // add play options
  return (
    <div className="recommended">
      <div className="title">
        <h5>Recommended</h5>
      </div>
      <div className="grid">
        {data
          ?.slice(0, data?.length > 6 ? 6 : data?.length)
          ?.map((elm, key) => {
            return (
              <div className="card" key={key}>
                <div>
                  <img src={elm?.images?.[0]?.url} alt={elm?.uri} />
                </div>
                <div className="details">
                  <h5>{elm?.name}</h5>
                  <p>{elm?.artists?.[0]?.name}</p>
                </div>

                <div className="play">
                  <button>
                    <Play width={"16px"} height={"16px"} />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Recommended;
