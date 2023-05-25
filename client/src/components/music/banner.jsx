import React, { useCallback } from "react";
import { Play, Heart, Share, MusicIcon, Pause } from "../../assets";
import { getTrack, setStatus } from "../../redux/player";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

const Banner = ({ data, libraryAction, inLibrary }) => {
  const dispatch = useDispatch();

  const { player } = useSelector((state) => state);

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
            {data?.type?.[0]?.toUpperCase()}
            {data?.type?.slice(1, data?.type?.length)}
          </h5>
          <h1>{data?.name}</h1>
          <p>
            {data?.type === "playlist"
              ? data?.short
              : data?.artists
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
            {data?.type !== "artist" && (
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
                    : data?.type === "playlist" && "Own"}
                </span>
              </li>
            )}

            {data?.album?.release_date ? (
              <li>
                <span>{data?.album?.release_date}</span>
              </li>
            ) : data?.release_date ? (
              <li>
                <span>{data?.release_date}</span>
              </li>
            ) : (
              data?.followers?.total && (
                <li>
                  <span className="normal">
                    Follows : {data?.followers?.total}
                  </span>
                </li>
              )
            )}

            {data?.type === "track" && (
              <li>
                <span>{getTime(data?.duration_ms || 0)}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="actions">
        {player?.data?.type === data?.type &&
        player?.data?.id === data?.id &&
        player?.status ? (
          <button
            className="play"
            onClick={() => {
              dispatch(setStatus(false));
            }}
          >
            <Pause width={"16px"} height={"16px"} color={"#fff"} />
            Pause
          </button>
        ) : (
          <button
            className="play"
            onClick={() => {
              if (
                player?.data?.type === data?.type &&
                player?.data?.id === data?.id
              ) {
                dispatch(setStatus(true));
              } else {
                dispatch(getTrack({ type: data?.type, id: data?.id }));
              }
            }}
          >
            <Play width={"16px"} height={"16px"} color={"#fff"} />
            Play
          </button>
        )}

        <button
          className={`extra ${inLibrary ? "active" : ""}`}
          onClick={() => libraryAction?.()}
        >
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
