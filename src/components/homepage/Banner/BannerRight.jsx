import { Markup } from 'interweave';
import React from 'react';
import { Link } from 'react-router-dom';
// import { bannerRightdataHome } from '../../../assets/fakedata/HomeData';

function BannerRight({ bannerRight }) {
    return (
        <div className='col col-md-4 col-xs-12'>
            {
                bannerRight.map((item, index) => (
                    <div className='banner-box' key={index}>
                        <img src={item.image.sourceUrl} alt='banner' />
                        <div className='text-banner'>
                            <Markup content={item.title} />
                            <p>{item.description}</p>
                            <Link to='/shop-list'>Shop Now <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}

export default BannerRight;