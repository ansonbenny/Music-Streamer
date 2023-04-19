import { Play } from '../../assets'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'

const Carousel = ({ title, data }) => {

    var settings = {
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
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };
    return (
        <div className='carousel'>
            <div className="title">
                <h5>{title}</h5>
            </div>

            <div className="inner">
                <Slider {...settings}>
                    {
                        data?.map((elm, key) => {
                            return (
                                <div className='card' id='carousel' key={key}>
                                    <img src={elm?.thumbnail} />
                                    <div className="hover-details">
                                        <button>
                                            <Play
                                                width={'16px'}
                                                height={'16px'}
                                                color={'#333'}
                                            />
                                        </button>
                                        <div className='details'>
                                            <h5>{elm?.title}</h5>
                                            <p>{elm?.extract}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Carousel
