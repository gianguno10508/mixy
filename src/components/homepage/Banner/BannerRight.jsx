import React from 'react';
import { bannerRightdataHome } from '../../../assets/fakedata/HomeData';

function BannerRight(props) {
    return (
        <div className='col col-md-4 col-xs-12'>
            {
                bannerRightdataHome.map((item, index) => (
                    <div className='banner-box' key={index}>
                        <img src={item.image} alt='banner' />
                        <div className='text-banner'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href='#'>Shop Now <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default BannerRight;