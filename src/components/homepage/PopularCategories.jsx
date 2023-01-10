import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function PopularCategories({ popularCategories, slidesToShow }) {
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
        slidesPerRow: 2,
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


        ]

    };
    return (
        <div className='container'>
            <div className='popular-categories-main'>
                <div className='pos_title'>
                    <h2>Popular Categories</h2>
                    <div className="desc_title">
                        Some of our popular categories include grocery
                    </div>
                </div>
                <div className='content-list row'>
                    {
                        popularCategories.map((item, index) => (
                            <div className='item-categories col-lg-3' key={index}>
                                <div class="thumb-category">
                                    <a href="#">
                                        <img src={item.image} alt="" /></a>
                                </div>
                                <div class="desc-listcategoreis">
                                    <div class="name_categories">
                                        <a href="#"> {item.title}</a>
                                        <span>{item.length} Products</span>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>

    );
}

export default PopularCategories;