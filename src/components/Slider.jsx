import SingleProductCopy from "./single-product-copy";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const ConponentsSlider = ({ slidesToShow, countdown, slidesPerRow }) => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <i className="fa-solid fa-arrow-right slider_iconbanner_next"></i>
            </div>
        );
    };
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <i class="fa-solid fa-arrow-left slider_iconbanner_prev"></i>
            </div>
        );
    };
    var settings = {
        nav: false,
        dots: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        autoplay: false,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        slidesPerRow: slidesPerRow,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },

        ]

    };
    return (
        <div className='content-list row'>
            <div className='special-item'>
                <div className='owl-stage-outer'>
                    <Slider {...settings}>
                        {/* <div className="list">
                            <SingleProductCopy countdown={countdown} />
                            <SingleProductCopy countdown={countdown} />
                        </div> */}
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                        <SingleProductCopy countdown={countdown} />
                    </Slider>
                    {/* <SingleProductCopy /> */}

                </div>
            </div>
        </div>
    )
}
export default ConponentsSlider;