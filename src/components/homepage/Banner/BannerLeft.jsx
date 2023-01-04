import React from 'react';

function BannerLeft(props) {
    return (
        <div className='col col-md-8 col-xs-12'>
            <div className='banner-left-main'>
                <div className='banner-left-list'>
                    <div className='banner-item'>
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
                </div>
            </div>
        </div>
    );
}

export default BannerLeft;