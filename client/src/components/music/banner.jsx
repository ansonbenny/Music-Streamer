import React from "react";
import { Play, Heart, Share } from "../../assets";
import "./style.scss";

const Banner = ({ data }) => {
  return (
    <div className="banner">
      <div className="details">
        <div className="thumbnail">
          <img src={data.thumbnail} alt="" />
        </div>

        <div className="content">
          <h5>Song</h5>
          <h1>{data.title}</h1>
          <p>{data.extract}</p>

          <ul>
            <li className="avatar">
              <img src={data.thumbnail} alt="" />
              <span>Avatar</span>
            </li>
            <li>
              &#9679;
              <span>2021</span>
            </li>
            <li>
              &#9679;
              <span>4:33</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="actions">
        <button className="play">
          <Play width={"16px"} height={"16px"} color={"#fff"} />
          Play
        </button>
        <button className="extra">
          <Heart width={"20px"} height={"20px"} />
        </button>
        <button className="extra">
          <Share width={"20px"} height={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
