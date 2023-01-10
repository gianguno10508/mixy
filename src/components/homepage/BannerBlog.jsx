import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


function BannerBlog(props) {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        responsive: [
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
        <div className='container'>
            <div className='home_blog_post_inner'>
                <div className='pos_title'>
                    <h2>Latest Blogs</h2>
                    <div className="desc_title">
                        Present posts in a best way to highlight interesting moments of your blog.
                    </div>
                </div>
                <div className='content-blog-list row'>
                    <div className='blog-content-items'>
                        <div className='blog_slider'>
                            <Slider {...settings}>
                                <div className='blog-item'>
                                    <article class="blog_post">
                                        <div class="blog_post_content_top">
                                            <div class="post_thumbnail">
                                                <a href="#" class="img_content">
                                                    <img class="xipblog_img" src="https://demo2.posthemes.com/pos_mixy/layout2/modules/xipblog/img/home_default-blog2.jpg" alt="This is Secound Post For XipBlog" /></a>
                                            </div>
                                        </div>
                                        <div class="post_content">
                                            <div class="content-inner">
                                                <div class="post_meta ">
                                                    <p class="meta_author">
                                                        Posted by
                                                        <span>Demo Posthemes</span>
                                                    </p>
                                                    <p class="meta_date">
                                                        Nov 21TH, 2021
                                                    </p>

                                                </div>
                                                <h4 class="post_title">
                                                    <a href="#">This is Secound Post For XipBlog</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className='blog-item'>
                                    <article class="blog_post">
                                        <div class="blog_post_content_top">
                                            <div class="post_thumbnail">
                                                <a href="#" class="img_content">
                                                    <img class="xipblog_img" src="https://demo2.posthemes.com/pos_mixy/layout2/modules/xipblog/img/home_default-blog2.jpg" alt="This is Secound Post For XipBlog" /></a>
                                            </div>
                                        </div>
                                        <div class="post_content">
                                            <div class="content-inner">
                                                <div class="post_meta ">
                                                    <p class="meta_author">
                                                        Posted by
                                                        <span>Demo Posthemes</span>
                                                    </p>
                                                    <p class="meta_date">
                                                        Nov 21TH, 2021
                                                    </p>

                                                </div>
                                                <h4 class="post_title">
                                                    <a href="#">This is Secound Post For XipBlog</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className='blog-item'>
                                    <article class="blog_post">
                                        <div class="blog_post_content_top">
                                            <div class="post_thumbnail">
                                                <a href="#" class="img_content">
                                                    <img class="xipblog_img" src="https://demo2.posthemes.com/pos_mixy/layout2/modules/xipblog/img/home_default-blog2.jpg" alt="This is Secound Post For XipBlog" /></a>
                                            </div>
                                        </div>
                                        <div class="post_content">
                                            <div class="content-inner">
                                                <div class="post_meta ">
                                                    <p class="meta_author">
                                                        Posted by
                                                        <span>Demo Posthemes</span>
                                                    </p>
                                                    <p class="meta_date">
                                                        Nov 21TH, 2021
                                                    </p>

                                                </div>
                                                <h4 class="post_title">
                                                    <a href="#">This is Secound Post For XipBlog</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className='blog-item'>
                                    <article class="blog_post">
                                        <div class="blog_post_content_top">
                                            <div class="post_thumbnail">
                                                <a href="#" class="img_content">
                                                    <img class="xipblog_img" src="https://demo2.posthemes.com/pos_mixy/layout2/modules/xipblog/img/home_default-blog2.jpg" alt="This is Secound Post For XipBlog" /></a>
                                            </div>
                                        </div>
                                        <div class="post_content">
                                            <div class="content-inner">
                                                <div class="post_meta ">
                                                    <p class="meta_author">
                                                        Posted by
                                                        <span>Demo Posthemes</span>
                                                    </p>
                                                    <p class="meta_date">
                                                        Nov 21TH, 2021
                                                    </p>

                                                </div>
                                                <h4 class="post_title">
                                                    <a href="#">This is Secound Post For XipBlog</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerBlog;