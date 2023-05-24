import { useNavigate } from "react-router-dom";
import { Pause, Play } from "../../assets";
import { useCarousel } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { getTrack, setStatus } from "../../redux/player";
import "./style.scss";

const Carousel = ({ title, data }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [ref, settings] = useCarousel({
    play: [],
  });

  const { player } = useSelector((state) => state);

  return (
    <div className="carousel">
      <div className="title">
        <h5>{title}</h5>
      </div>

      <div
        className="inner"
        id="carousel"
        ref={(elem) => {
          if (ref?.current) return (ref.current["slide"] = elem);
        }}
      >
        {data?.map((elm, key) => {
          return (
            <div
              className="card"
              key={key}
              ref={(elem) => {
                if (ref?.current) return (ref.current["card"] = elem);
              }}
            >
              <img src={elm?.images?.[0]?.url} alt={elm.uri} />

              {!settings?.isDragging && (
                <div
                  className="hover-details"
                  data-also-for="navigate"
                  onClick={(e) => {
                    if (!ref?.current?.["play"][key]?.contains(e.target)) {
                      navigate(`/album/${elm?.id}`);
                    }
                  }}
                >
                  {player?.data?.type === elm?.type &&
                  player?.data?.id === elm?.id &&
                  player?.status ? (
                    <button
                      ref={(elem) => {
                        if (ref?.current)
                          return (ref.current["play"][key] = elem);
                      }}
                      onClick={() => {
                        dispatch(setStatus(false));
                      }}
                    >
                      <Pause width={"16px"} height={"16px"} color={"#333"} />
                    </button>
                  ) : (
                    <>
                      {player?.data?.type === elm?.type &&
                      player?.data?.id === elm?.id ? (
                        <button
                          ref={(elem) => {
                            if (ref?.current)
                              return (ref.current["play"][key] = elem);
                          }}
                          onClick={() => {
                            dispatch(setStatus(true));
                          }}
                        >
                          <Play width={"16px"} height={"16px"} color={"#333"} />
                        </button>
                      ) : (
                        <button
                          ref={(elem) => {
                            if (ref?.current)
                              return (ref.current["play"][key] = elem);
                          }}
                          onClick={() => {
                            dispatch(
                              getTrack({ type: elm?.type, id: elm?.id })
                            );
                          }}
                        >
                          <Play width={"16px"} height={"16px"} color={"#333"} />
                        </button>
                      )}
                    </>
                  )}
                  <div className="details">
                    <h5>{elm?.name}</h5>
                    <p>{elm?.artists?.[0]?.name}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
