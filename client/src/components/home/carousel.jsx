import { Play } from '../../assets'
import Slider from 'react-slick'
import demo from '../../assets/demo2.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'

const Carousel = ({ title }) => {

    const loop = [1, 2, 343, 4, 545, 56, 6, 6, 766]

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
                        loop?.map((elm, key) => {
                            return (
                                <div className='card' id='carousel' key={key}>
                                    <img className='scrollImg' src={demo} />
                                    <div className="play">
                                        <button>
                                            <Play
                                                width={'16px'}
                                                height={'16px'}
                                                color={'#333'}
                                            />
                                        </button>
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
