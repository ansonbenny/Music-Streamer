import React, { useCallback } from "react";
import { Play, Heart, Share, MusicIcon } from "../../assets";
import "./style.scss";

const Banner = ({ data }) => {
  const getTime = useCallback(
    (ms) => {
      var minutes = Math.floor(ms / 60000);
      var seconds = ((ms % 60000) / 1000).toFixed(0);

      return `${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`;
    },
    [data]
  );
  return (
    <div className="banner">
      <div className="details">
        <div className="thumbnail">
          {data?.album?.images?.[0]?.url ? (
            <img src={data?.album?.images?.[0]?.url} alt={data?.uri} />
          ) : (
            <>
              {data?.images?.[0]?.url ? (
                <img
                  src={data?.images?.[0]?.url}
                  alt={data?.artists?.[0]?.uri}
                />
              ) : (
                <MusicIcon />
              )}
            </>
          )}
        </div>

        <div className="content">
          <h5>
            {data?.type === "track" && "Track"}
            {data?.type === "album" && "Album"}
            {data?.type === "artist" && "Artist"}
          </h5>
          <h1>{data?.name}</h1>
          <p>
            {data?.artists
              ? data?.artists?.map((obj, key) => {
                  if (key === 0) {
                    return <span key={key}>{obj?.name}</span>;
                  } else {
                    return <span key={key}>, {obj?.name}</span>;
                  }
                })
              : data?.genres?.map((obj, key) => {
                  if (key === 0) {
                    return <span key={key}>{obj}</span>;
                  } else {
                    return <span key={key}>, {obj}</span>;
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
                <>
                  {data?.images?.[0]?.url ? (
                    <img
                      src={data?.images?.[0]?.url}
                      alt={data?.artists?.[0]?.uri}
                    />
                  ) : (
                    <MusicIcon />
                  )}
                </>
              )}
              <span>
                {data?.artists
                  ? data?.artists?.[0]?.name
                  : data?.type === "artist" && data?.name}
              </span>
            </li>
            <li>
              <span>
                {data?.album?.release_date ||
                  data?.release_date ||
                  `Followers : ${data?.followers?.total}`}
              </span>
            </li>
            {data?.type === "track" && (
              <li>
                <span>{getTime(data?.duration_ms || 0)}</span>
              </li>
            )}
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
