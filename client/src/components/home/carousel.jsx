import { useCallback } from "react";
import { Play } from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const Carousel = ({ title, data }) => {
  const settings = {
    nonExpand: {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
      ],
    },
    expand: {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            dots: false,
          },
        },
      ],
    },
  };

  const RenderCard = useCallback(({ obj }) => {
    return (
      <div className="card" id="carousel">
        <img src={obj?.thumbnail} />
        <div className="hover-details">
          <button>
            <Play width={"16px"} height={"16px"} color={"#333"} />
          </button>
          <div className="details">
            <h5>{obj?.title}</h5>
            <p>{obj?.extract}</p>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <div className="carousel">
      <div className="title">
        <h5>{title}</h5>
      </div>

      <div className="inner">
        <div data-for="expand">
          <Slider {...settings?.["expand"]}>
            {data?.map((elm, key) => {
              return <RenderCard obj={elm} key={key} />;
            })}
          </Slider>
        </div>

        <div data-for="non_expand">
          <Slider {...settings?.["nonExpand"]}>
            {data?.map((elm, key) => {
              return <RenderCard obj={elm} key={key} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
