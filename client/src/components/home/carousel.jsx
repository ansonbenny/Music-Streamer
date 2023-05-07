import { useNavigate } from "react-router-dom";
import { Play } from "../../assets";
import { useCarousel } from "../../hooks";
import "./style.scss";

const Carousel = ({ title, data }) => {
  const navigate = useNavigate();

  const [ref, settings] = useCarousel({
    play: [],
  });

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
        {data.map((obj, key) => {
          return (
            <div
              className="card"
              key={key}
              ref={(elem) => {
                if (ref?.current) return (ref.current["card"] = elem);
              }}
            >
              <img src={obj?.thumbnail} />

              {!settings?.isDragging && (
                <div
                  className="hover-details"
                  data-also-for="navigate"
                  onClick={(e) => {
                    if (!ref?.current?.["play"][key]?.contains(e.target)) {
                      navigate("/ee");
                    }
                  }}
                >
                  <button
                    ref={(elem) => {
                      if (ref?.current)
                        return (ref.current["play"][key] = elem);
                    }}
                  >
                    <Play width={"16px"} height={"16px"} color={"#333"} />
                  </button>
                  <div className="details">
                    <h5>{obj?.title}</h5>
                    <p>{obj?.extract}</p>
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
