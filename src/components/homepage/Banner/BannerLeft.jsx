import React from 'react';
import { bannerdataHome } from '../../../assets/fakedata/HomeData';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function BannerLeft(props) {
    var settings = {
        nav: false,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 6000,
        speed: 2000,
        pauseOnHover: false
    }


    return (
        <div className='col col-md-8 col-xs-12'>
            <div className='banner-left-main'>
                <div className='progress-main'>
                    <div className="progress">
                        <div className="color"></div>
                    </div>
                </div>
                <div className='banner-left-list'>
                    <Slider {...settings}>
                        {bannerdataHome.map((item, index) => (
                            <div className='banner-item' key={index}>
                                <div className='banner-image'>
                                    <img src='https://demo2.posthemes.com/pos_mixy/layout2/modules/posslideshows/images/7e8bf5523a78c056f7ded0cb2fb0482a402f756d_s2_2.jpg'
                                        alt='banner' />
                                </div>
                                <div className='banner-content'>
                                    <div className='title'>
                                        <p>100% Organic Potato</p>
                                        <h2>Potato Chips Pepper With</h2>
                                    </div>
                                    <div className='price'>
                                        <p>Starting At</p>
                                        <h3>$12.78</h3>
                                    </div>
                                    <div className='button'>
                                        <a href='#'>Shop Now <i className="fa-solid fa-arrow-right icon"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default BannerLeft;