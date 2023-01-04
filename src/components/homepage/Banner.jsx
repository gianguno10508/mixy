import React from 'react';
import BannerLeft from './Banner/BannerLeft';
import BannerRight from './Banner/BannerRight';
import '../../assets/css/banner.css';
function Banner() {
    return (
        <div className='pos_bannerslide'>
            <div className="container">
                <div className='row'>
                    <BannerLeft />
                    <BannerRight />
                </div>

            </div>
        </div>
    );
}

export default Banner;