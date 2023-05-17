import React from "react";
import { Play, Heart, Share, MusicIcon } from "../../assets";
import "./style.scss";

const Banner = ({ data }) => {
  return (
    <div className="banner">
      <div className="details">
        <div className="thumbnail">
          {data?.album?.images?.[0]?.url ? (
            <img src={data?.album?.images?.[0]?.url} alt={data?.uri} />
          ) : (
            <MusicIcon />
          )}
        </div>

        <div className="content">
          <h5>Song</h5>
          <h1>{data?.name}</h1>
          <p>
            {data?.artists?.map((obj, key) => {
              if (key === 0) {
                return <span key={key}>{obj?.name}</span>;
              } else {
                return <span key={key}>, {obj?.name}</span>;
              }
            })}
          </p>

          <ul>
            <li className="avatar">
              {data?.album?.images?.[0]?.url ? (
                <img
                  src={data?.album?.images?.[0]?.url}
                  alt={data?.artists?.[0]?.uri}
                />
              ) : (
                <MusicIcon />
              )}
              <span>{data?.artists?.[0]?.name}</span>
            </li>
            <li>
              <span>{data?.album?.release_date}</span>
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
          {/* active for grenn */}
          <Heart width={"20px"} height={"20px"} />
        </button>
        <button
          className="extra"
          onClick={() => {
            window.navigator.clipboard.writeText(window.location.href);
            alert(`Link Copied ${window.location.href}`);
          }}
        >
          <Share width={"20px"} height={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
